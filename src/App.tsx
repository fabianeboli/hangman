import * as React from 'react';
import './App.css';
import { Hangman } from './containers/Hangman/Hangman';

const App: React.FC = () => {
  return (
    <div className="App">
      <Hangman/>
    </div>
  );
}

export default App;
