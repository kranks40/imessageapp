import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Imessage from './components/Imessage';
import Login from './components/Login';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './utils/firebase';




function App() {
const user = useSelector(selectUser);
const dispatch = useDispatch();

useEffect(() => {
  auth.onAuthStateChanged((authUser) => {
    if (authUser) {
      //user is logged in
      dispatch(login({
        uid: authUser.uid,
        photo: authUser.photoURL,
        email: authUser.email,
        displayName: authUser.displayName,
      })
      );

    } else {
      //user is logged out
      dispatch(logout());
    }
  });
}, [dispatch])

  return (
    <div className="app">
     {user ? <Imessage/> : <Login/> }
    </div>
  );
}

export default App;
