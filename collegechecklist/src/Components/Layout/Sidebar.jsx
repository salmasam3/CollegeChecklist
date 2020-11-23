import React, { useState } from 'react';
import { Colleges } from '../Colleges';
import { SelectedCollegeProviderValue } from '../../Context';
import { AddCollege } from '../AddCollege';

export const Sidebar = () => {
  const { selectedCollege, setSelectedCollege,setSelectedCollegeName } = SelectedCollegeProviderValue();
  const [hideColleges, setHideColleges] = useState(false);

  const [show, setShow] = useState(false);

  const quickShow = data => {
    setShow(data);
  };

  return (
    <div className="sidebar">
    <div className="list-holder">
      <div className="top-section">
        <h1 className="sidebartitle">Navigation</h1>
        <div
          className="inbox"
          onClick={() => {
            setSelectedCollege("INBOX");
            setSelectedCollegeName("Inbox");
          }}
        >
          <div className="first-item">
            <span className="inboxtitle">Inbox</span>
          </div>
        </div>
        <div
          className="today"
          onClick={() => {
            setSelectedCollege("TODAY");
            setSelectedCollege("Today");
          }}
        >
          <div className="second-item">
            <span className = "addTask">Today</span>
          </div>
        </div>
        <div
          className="next-7"
          onClick={() => {
            setSelectedCollege("NEXT_7");
            setSelectedCollege("Next 7 days");
          }}
        >
          <div className="third-item">
            <span className = "addTask">Next 7 days</span>
          </div>
        </div>
      </div>

      <div className="middle-section">
        <div className="projects">
          <div className="project-head">
            <div
              className="projects-title"
              onClick={() => {
                setHideColleges(!hideColleges);
              }}
            >
              <span className="title">Colleges</span>
            </div>
            <span
              className="quick-show"
              onClick={() => {
                setShow(!show);
              }}
            >
              <i className="fas fa-plus"></i>
            </span>
          </div>

          <div
            className={`hide-list-wrapper  ${hideColleges ? "hide" : ""} ${
              show ? "show" : ""
            }`}
          >
            <div className="outer-projects">
              <Colleges />
            </div>
            <div className="add-project">
              <AddCollege value={quickShow} showState={show} />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="bottom-section">
        <div className="bottom-options">
          <br></br>
          <div className = "addTask">Labels</div>
          <div className = "addTask">Filter</div>
        </div>
      </div>  */}
    </div>
  </div>
);
};

