import Chatapp from "./components/chat/Chatapp"
import Navbar from "./components/layout/Navbar"


function App() {

  return (
    <>
    <Navbar/>
     <div className=' relative py-4'>
      <h2 className='text-3xl text-center'>Websockets setup</h2>
     </div>

     <div>
      <Chatapp/>
     </div>
    </>
  )
}

export default App
