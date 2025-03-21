// src/App.tsx
import React, { useState, useEffect, useRef } from 'react';

// Define types for our application
interface Message {
  type: string;
  roomId?: string;
  userId?: string;
  username?: string;
  content?: string;
  timestamp?: number;
}

const Chatapp: React.FC = () => {
  // State variables
  const [connected, setConnected] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');
  const [roomId, setRoomId] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentView, setCurrentView] = useState<'join' | 'chat'>('join');
  const [userId, setUserId] = useState<string>('');

  // WebSocket reference
  const wsRef = useRef<WebSocket | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Connect to WebSocket server
  useEffect(() => {
    // Create WebSocket connection
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const backendPort = import.meta.env.BACKEND_PORT || 8080;
    const ws = new WebSocket(`${protocol}//${window.location.hostname}:${backendPort}`)    
    ws.onopen = () => {
      console.log('Connected to WebSocket server');
      setConnected(true);
    };
    
    ws.onclose = () => {
      console.log('Disconnected from WebSocket server');
      setConnected(false);
    };
    
    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
    
    ws.onmessage = (event) => {
      try {
        const data: Message = JSON.parse(event.data);
        
        // Handle different message types
        switch (data.type) {
          case 'create':
          case 'join':
            // Save room info and switch to chat view
            setRoomId(data.roomId || '');
            setUserId(data.userId || '');
            setCurrentView('chat');
            
            // Add system message
            setMessages((prev) => [
              ...prev,
              {
                type: 'system',
                content: data.type === 'create' 
                  ? `Room created with ID: ${data.roomId}` 
                  : `Joined room: ${data.roomId}`,
                timestamp: Date.now()
              }
            ]);
            break;
            
          case 'message':
            // Add chat message
            setMessages((prev) => [...prev, data]);
            break;
            
          case 'userJoined':
            // Add system message for new user
            setMessages((prev) => [
              ...prev,
              {
                type: 'system',
                content: `${data.username} joined the room`,
                timestamp: Date.now()
              }
            ]);
            break;
            
          case 'userLeft':
            // Add system message for user left
            setMessages((prev) => [
              ...prev,
              {
                type: 'system',
                content: `${data.username} left the room`,
                timestamp: Date.now()
              }
            ]);
            break;
            
          case 'error':
            // Show error message
            alert(data.content);
            break;
        }
      } catch (error) {
        console.error('Error parsing message:', error);
      }
    };
    
    // Save WebSocket connection
    wsRef.current = ws;
    
    // Clean up on unmount
    return () => {
      ws.close();
    };
  }, []);

  // Auto scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Create a new room
  const createRoom = () => {
    if (!username.trim()) {
      alert('Please enter a username');
      return;
    }
    
    if (wsRef.current && connected) {
      wsRef.current.send(JSON.stringify({
        type: 'create',
        username
      }));
    }
  };

  // Join an existing room
  const joinRoom = () => {
    if (!username.trim() || !roomId.trim()) {
      alert('Please enter both username and room ID');
      return;
    }
    
    if (wsRef.current && connected) {
      wsRef.current.send(JSON.stringify({
        type: 'join',
        roomId,
        username
      }));
    }
  };

  // Send a chat message
  const sendMessage = () => {
    if (!message.trim()) return;
    
    if (wsRef.current && connected) {
      wsRef.current.send(JSON.stringify({
        type: 'message',
        roomId,
        content: message
      }));
      
      // Clear message input
      setMessage('');
    }
  };

  // Format timestamp
  const formatTime = (timestamp?: number) => {
    if (!timestamp) return '';
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="flex flex-col min-h-screen ">
      {currentView === 'join' ? (
        <div className="flex items-center justify-center flex-grow">
          <div className=" p-8 rounded-lg shadow-md w-full max-w-md">
            <h1 className="text-2xl font-bold text-center mb-6">Chat App</h1>
            
            <div className="mb-4">
              <label className="block  mb-2" htmlFor="username">
                Username
              </label>
              <input
                id="username"
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
              />
            </div>
            
            <div className="flex gap-4 mb-4">
              <button
                onClick={createRoom}
                disabled={!connected}
                className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:bg-gray-400"
              >
                Create Room
              </button>
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="roomId">
                Room ID
              </label>
              <input
                id="roomId"
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
                placeholder="Enter room ID to join"
              />
            </div>
            
            <button
              onClick={joinRoom}
              disabled={!connected}
              className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 disabled:bg-gray-400"
            >
              Join Room
            </button>
            
            <div className="mt-4 text-center text-sm text-gray-500">
              Status: {connected ? 'Connected' : 'Disconnected'}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col h-screen">
          <div className="bg-blue-600 p-4">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold">Room: {roomId}</h1>
              <button
                onClick={() => {
                  setCurrentView('join');
                  setMessages([]);
                }}
                className=" text-blue-600 px-3 py-1 rounded-md text-sm"
              >
                Leave Room
              </button>
            </div>
            <div className="text-sm">Logged in as: {username}</div>
          </div>
          
          <div className="flex-grow overflow-y-auto p-4 ">
            <div className="max-w-4xl mx-auto space-y-4">
              {messages.map((msg, index) => {
                const isCurrentUser = msg.userId === userId;
                const isSystem = msg.type === 'system';
                
                return (
                  <div
                    key={index}
                    className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'} ${
                      isSystem ? 'justify-center' : ''
                    }`}
                  >
                    {isSystem ? (
                      <div className=" text-gray-700 px-4 py-2 rounded-md text-sm">
                        {msg.content}
                      </div>
                    ) : (
                      <div
                        className={`max-w-xs md:max-w-md ${
                          isCurrentUser
                            ? 'bg-blue-500  rounded-tl-lg rounded-tr-lg rounded-bl-lg'
                            : ' rounded-tl-lg rounded-tr-lg rounded-br-lg'
                        } px-4 py-2 shadow-sm`}
                      >
                        {!isCurrentUser && (
                          <div className="font-medium text-sm ">
                            {msg.username}
                          </div>
                        )}
                        <div>{msg.content}</div>
                        <div className="text-xs text-right mt-1 opacity-75">
                          {formatTime(msg.timestamp)}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
              <div ref={messagesEndRef} />
            </div>
          </div>
          
          <div className=" border-t p-4">
            <div className="max-w-4xl mx-auto flex gap-2">
              <input
                type="text"
                className="flex-grow px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Type a message..."
              />
              <button
                onClick={sendMessage}
                className="bg-blue-500 px-6 py-2 rounded-md hover:bg-blue-600"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatapp;