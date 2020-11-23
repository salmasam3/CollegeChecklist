import React from 'react';
import { TaskHeaderStateValue } from "../../Context";
import {auth} from '../../firebase'


export const Header = () => {
  const { quickState, setQuickState } = TaskHeaderStateValue();

  const out = () => {
    auth.signOut();
  };

  return (

    <div className="header">
    

      <header>
          <a className="icon" href="https://bestcollegeaid.com"><img src="bcalogo.png" alt= "best-college-aid-logo"></img></a>
          <h1 className="mainTitle">College Checklist</h1>
          <div className = "topnav">
          <button href="#ProfilePage">Checklist</button>
          <button href="#ProfilePage">Profile</button>
          <button onClick = {() => {auth.signOut()}}>Sign out</button>
          </div>
        </header>

      <div className="inner-container">
        <div className="logo">
        </div>
        {/* <div className="mainTitle">Checklist</div> */}
        {/* <div className="add-quick-task">
          <div
            className="add-quick-task-inner"
            onClick={() => {
              setQuickState(true);
            }}
          >
            <span>
              <i className="fas fa-plus"></i>
            </span>
            <span className = "addTask">Add Quick Task</span>
          </div>
        </div> */}
        {/* <div className="signout">
          <button
            onClick={() => {
              out();
            }}
          >
            Sign out
          </button>
        </div> */}
      </div>
    </div>
  );
};