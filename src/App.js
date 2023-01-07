import './App.css';
import Countdown from './components/Countdown';
import PlayPegaNoBreu from './components/PlayPegaNoBreu';

function App() {
  
  return (
    <>
      <main>
        <div>
          <div className='countdown-container'>
            <PlayPegaNoBreu />

            <Countdown />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
