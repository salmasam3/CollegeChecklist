import React from 'react';
import { TaskHeaderStateValue } from "../../context/index";
import {auth} from '../../firebase'

export const Header = () => {
  const { quickState, setQuickState } = TaskHeaderStateValue();

  const out = () => {
    auth.signOut();
    setUser(null);
  };

  return (
    <div className="header">
      <div className="inner-container">
        <div className="logo">
        </div>
        <div className="title">
          <div className="title-inner">Todoist Clone</div>
        </div>
        <div className="add-quick-task">
          <div
            className="add-quick-task-inner"
            onClick={() => {
              setQuickState(true);
            }}
          >
            <span>
              <i className="fas fa-plus"></i>
            </span>
            <span>Add Quick Task</span>
          </div>
        </div>
        <div className="signout">
          <button
            onClick={() => {
              out();
            }}
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
};