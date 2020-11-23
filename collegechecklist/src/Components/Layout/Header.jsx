import React from 'react';
import {auth} from '../../firebase';

export const Header = () => {

  return (

    <div className="header">
    

      <header>
          <a className="icon" href="https://bestcollegeaid.com"><img src="bcalogo.png" alt= "best-college-aid-logo"></img></a>
          <h1 className="mainTitle">College Checklist</h1>
          <div className = "topnav">
          <button onClick = {() => {auth.signOut()}}>Sign out</button>
          </div>
        </header>

    </div>
  );
};