import { useState, createContext } from 'react';
import PadBunk from './components/PadBunk';
import SetupButtons from './components/SetupButtons';

export const UserContext = createContext()

function App() {

  const [ played, setPlayed] = useState(null)
  const [ volume, setVolume] = useState(50)

  return (
    <UserContext.Provider value={{setPlayed: setPlayed, volume: volume }}>
      <div>
        <h1 className="header">Drum-Machine</h1>
        <div id="drum-machine">
          <PadBunk />
          <SetupButtons setVolume={setVolume} played={played} volume={volume}/>
        </div>
      </div>
    </UserContext.Provider>
     );
}

export default App;
