import './App.css';
import Button from './components/Button';
import Countdown from './components/Countdown';
import PlayPegaNoBreu from './components/PlayPegaNoBreu';

function App() {
  
  return (
    <>
      <main>
        <div>
          <div className='countdown-container'>
            <Countdown />
            <PlayPegaNoBreu />
            <Button />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
