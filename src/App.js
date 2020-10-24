import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Imessage from './components/Imessage';
import Login from './components/Login';
import { selectUser } from './features/userSlice';




function App() {
const user = useSelector(selectUser);

  return (
    <div className="app">
     {user ? <Imessage/> : <Login/> }
    </div>
  );
}

export default App;
