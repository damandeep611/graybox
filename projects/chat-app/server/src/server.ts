// server.ts
import * as http from 'http';
import * as WebSocket from 'ws';
import * as url from 'url';
import * as fs from 'fs';
import * as path from 'path';
import dotenv from 'dotenv';
dotenv.config();

// Define types for our application
interface ChatRoom {
  id: string;
  clients: Map<string, WebSocket>;
}

interface Message {
  type: 'join' | 'message' | 'create' | 'userJoined' | 'userLeft';
  roomId?: string;
  userId?: string;
  username?: string;
  content?: string;
  timestamp?: number;
}

// In-memory storage for our chat rooms
const chatRooms = new Map<string, ChatRoom>();

// Generate a unique ID for rooms
function generateRoomId(length: number = 6): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

// Generate a unique ID for users
function generateUserId(): string {
  return 'user-' + Math.random().toString(36).substring(2, 10);
}

// Create HTTP server
const server = http.createServer((req, res) => {
  // Simple HTTP server to serve static files
  const parsedUrl = url.parse(req.url || '');
  let pathname = parsedUrl.pathname || '';
  
  // Default to index.html
  if (pathname === '/') {
    pathname = '/index.html';
  }

  // Map the pathname to our public directory
  const filePath = path.join(__dirname, 'public', pathname);
  
  // Read the file and serve it
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    
    // Set the content type based on file extension
    const ext = path.extname(filePath).toLowerCase();
    let contentType = 'text/html';
    
    if (ext === '.js' || ext === '.ts') contentType = 'text/javascript';
    else if (ext === '.css') contentType = 'text/css';
    else if (ext === '.json') contentType = 'application/json';
    
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

// Create WebSocket server
const wss = new WebSocket.Server({ server });

// Handle WebSocket connections
wss.on('connection', (ws: WebSocket, req: http.IncomingMessage) => {
  // Generate a unique ID for this client
  const userId = generateUserId();
  let currentRoom: string | null = null;
  let username: string | null = null;
  
  console.log(`New client connected: ${userId}`);

  // Handle messages from clients
  ws.on('message', (message: string) => {
    try {
      const data: Message = JSON.parse(message);
      
      // Handle different message types
      switch (data.type) {
        case 'create':
          // Create a new chat room
          const roomId = generateRoomId();
          chatRooms.set(roomId, {
            id: roomId,
            clients: new Map([[userId, ws]])
          });
          
          // Save current room and username
          currentRoom = roomId;
          username = data.username || 'Anonymous';
          
          // Send confirmation to the client
          ws.send(JSON.stringify({
            type: 'create',
            roomId,
            userId,
            username,
            timestamp: Date.now()
          }));
          
          console.log(`Room created: ${roomId} by ${username} (${userId})`);
          break;
          
        case 'join':
          // Join an existing room
          const roomToJoin = chatRooms.get(data.roomId || '');
          
          if (roomToJoin) {
            // Add client to the room
            roomToJoin.clients.set(userId, ws);
            
            // Save current room and username
            currentRoom = data.roomId || '';
            username = data.username || 'Anonymous';
            
            // Send confirmation to the client
            ws.send(JSON.stringify({
              type: 'join',
              roomId: currentRoom,
              userId,
              username,
              timestamp: Date.now()
            }));
            
            // Broadcast to other clients in the room that a new user joined
            roomToJoin.clients.forEach((client, clientId) => {
              if (clientId !== userId) {
                client.send(JSON.stringify({
                  type: 'userJoined',
                  roomId: currentRoom,
                  userId,
                  username,
                  timestamp: Date.now()
                }));
              }
            });
            
            console.log(`User ${username} (${userId}) joined room: ${currentRoom}`);
          } else {
            // Room not found
            ws.send(JSON.stringify({
              type: 'error',
              content: 'Room not found',
              timestamp: Date.now()
            }));
          }
          break;
          
        case 'message':
          // Send a message to the room
          if (currentRoom) {
            const room = chatRooms.get(currentRoom);
            
            if (room) {
              // Broadcast message to all clients in the room
              room.clients.forEach((client) => {
                client.send(JSON.stringify({
                  type: 'message',
                  roomId: currentRoom,
                  userId,
                  username,
                  content: data.content,
                  timestamp: Date.now()
                }));
              });
              
              console.log(`Message in room ${currentRoom} from ${username}: ${data.content}`);
            }
          }
          break;
      }
    } catch (error) {
      console.error('Error parsing message:', error);
    }
  });

  // Handle client disconnection
  ws.on('close', () => {
    console.log(`Client disconnected: ${userId}`);
    
    // Remove client from their current room
    if (currentRoom) {
      const room = chatRooms.get(currentRoom);
      
      if (room) {
        // Remove client from the room
        room.clients.delete(userId);
        
        // Notify other clients that this user left
        room.clients.forEach((client) => {
          client.send(JSON.stringify({
            type: 'userLeft',
            roomId: currentRoom,
            userId,
            username,
            timestamp: Date.now()
          }));
        });
        
        // If room is empty, delete it
        if (room.clients.size === 0) {
          chatRooms.delete(currentRoom);
          console.log(`Room ${currentRoom} deleted (empty)`);
        }
      }
    }
  });
});

// Start the server
const PORT = process.env.BACKEND_PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});