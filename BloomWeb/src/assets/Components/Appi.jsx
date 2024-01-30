import { useState } from 'react';
// import '../App.css'
import { VideoRoom } from '../Components/Video/VideoRoom';

function Appi() {
    const [joined, setJoined] = useState(false);
  
    return (
      <div className="App container mx-auto text-center p-5 min-h-screen flex flex-col justify-center items-center bg-gray-100">
        <h1 className="text-4xl font-bold mb-5 text-gray-800">WDJ Virtual Call</h1>
  
        {!joined && (
          <button onClick={() => setJoined(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition duration-300 ease-in-out">
            Join Room
          </button>
        )}
  
        {joined && (
          <>
            <button onClick={() => setJoined(false)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded mb-3 transition duration-300 ease-in-out">
              To Lobby
            </button>
            <VideoRoom />
          </>
        )}
      </div>
    );
  }
  

export default Appi;
