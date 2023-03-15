import React from 'react';
import './App.css';
import  users from "./users.json";
import Navbar from './component/Navbar';
import UserProfile from './component/UserProfile';

function App() {
  return (
    <div className="App">
      <Navbar />
        <div className='content'>
          {users.map((user) => {
            return UserProfile(user)
          })}
      </div>
    </div>
  );
}

export default App;
