import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import { Keyboard } from './containers/Keyboard/Keyboard';
import { Header } from './components/Header/Header';
import { Hangman } from './containers/Hangman/Hangman';

const App: React.FC = () => {
  return (
    <div className="App">
      <Hangman/>
    </div>
  );
}

export default App;
