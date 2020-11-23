import React from 'react';
import {auth} from '../../firebase';

export const Header = () => {

  return (

    <div className="header">

      <header>
          <a className="icon" href="https://bestcollegeaid.com"><img src="bcalogo.png" alt= "best-college-aid-logo"></img></a>
          <div className = "topnav">
          <button href="#ProfilePage">Checklist</button>
          <button href="#ProfilePage">Profile</button>
          <button onClick = {() => {auth.signOut()}}>Sign out</button>
          </div>
        </header>
        
        <div className="title"> College Checklist</div>
    </div>
  );
};