import { useState } from 'react';
// import '../App.css'
import { VideoRoom } from '../Components/Video/VideoRoom';
import AppStore from './Download/AppStore';
import PlayStore from './Download/PlayStore';

function Appi() {
    const [joined, setJoined] = useState(false);
  
    return (
      <div>
      <div className=' justify-center items-center mb-[25px]'>
      <h3 className="text-[50px] p-11 flex justify-start text-white  ">
          Available On both Plateformes 
        </h3>
        <div className='flex justify-center gap-[150px]'>
        <AppStore/>
        <PlayStore/>
        </div>
      </div>
      <div className="App container mx-auto text-center p-5 min-h-screen flex flex-col justify-center items-center bg-transparent rounded-xl">
        <h2 className="text-4xl font-bold mb-5 text-gray-800">Your Patient will be coming soon </h2>
  
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
      </div>
    );
  }
  

export default Appi;
