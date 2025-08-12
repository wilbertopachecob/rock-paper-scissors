import Game from '@/components/Game';
import '@/styles/App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rock Paper Scissors Game</h1>
        <Game />
      </header>
    </div>
  );
};

export default App;
