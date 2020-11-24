import React, { useState } from 'react';
import { Colleges } from '../Colleges';
import { SelectedCollegeProviderValue } from '../../Context';
import { AddCollege } from '../AddCollege';
import { CollegesProviderValue } from "../../Context";
import { useTasks } from "../../Hooks";
import { CheckBox } from "../Checkbox";

export const Sidebar = () => {
  const { selectedCollege, setSelectedCollege,setSelectedCollegeName, selectedCollegeName } = SelectedCollegeProviderValue();
  const [hideColleges, setHideColleges] = useState(false);
  const { colleges } = CollegesProviderValue();
  const [show, setShow] = useState(false);


  const { tasks } = useTasks(selectedCollege);

  const quickShow = data => {
    setShow(data);
  };

  return (
    <div className="sidebar">
    <div className="list-holder">
      <div className="top-section">
        
      </div>

      <div className="middle-section">
      
      <div className="fullchecklist">
          <div className="todolisttitle"><strong>To Do List</strong></div>
          <div>
            {colleges.map(college => (
            <ul key={colleges.collegeID}>{college.name}
            {tasks.map(function(task) {
              if (task.collegeID === college.collegeID) {
                return(<li className="bulletlist" key={task.taskID}>
                  <CheckBox id={task.taskID} />
                  {task.task}
                  </li>)
              }
            })}
            </ul> ))}
            
        </div>
        </div>
        <div className="projects">
          <div className="project-head">
            <div
              className="projects-title"
              onClick={() => {
                setHideColleges(!hideColleges);
              }}
            >
              <span className="title">Colleges</span>
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
    <br></br>
  </div>
  
);
};

