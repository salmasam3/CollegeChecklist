import React, { useState, useEffect } from "react";
import { useTasks } from "../../Hooks";
import { SelectedCollegeProviderValue } from "../../Context";
import { AddTask } from "../AddTask";
import { CollegesProviderValue } from "../../Context";
import { CheckBox } from "../Checkbox";
import { Colleges } from '../Colleges';
import { AddCollege } from '../AddCollege';



export const MainContent = () => {
  const { selectedCollege, setSelectedCollege,setSelectedCollegeName, selectedCollegeName } = SelectedCollegeProviderValue();
  const [hideColleges, setHideColleges] = useState(false);
  const { colleges } = CollegesProviderValue();
  const [show, setShow] = useState(false);

  const { tasks, archivedTasks } = useTasks(selectedCollege);

  const quickShow = data => {
    setShow(data);
  };
  
  const [showArchived, setShowArchived] = useState(false);

  const importedTasks = () => {
    let collegeName = selectedCollegeName;

  
    return (
      <div className="allTasks">

          <div className="todolist">
              <div className="todolisttitle"><strong>To Do List</strong></div>
              <div>
                {colleges.map(college => (
                  <ul key={colleges.collegeID}>{college.name}
                    {tasks.map(function (task) {
                      if (task.collegeID === college.collegeID) {
                        return (<li className="bulletlist" key={task.taskID}>
                          <CheckBox id={task.taskID} />
                          {task.task}
                        </li>)
                      }
                    })}
                  </ul>))}
              </div>
          </div>

          <div className="projects-title" onClick={() => {setHideColleges(!hideColleges);}}>
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

            <div
              className={`hide-list-wrapper  ${hideColleges ? "hide" : ""} ${show ? "show" : ""
                }`}
            >
              <div className="outer-projects">
                <Colleges />
              </div>
              <div className="add-project">
                <AddCollege value={quickShow} showState={show} />
              </div>
            </div>
          <div className="tasks">
          <AddTask value={selectedCollege} />
         </div>
        <div className="archivedTasks">
          <div 
            className="title"
            onClick={() => {
              setShowArchived(!showArchived);
            }}
          >

            <span className = "title">Completed Tasks</span>

          </div>

          <div className={`archived ${showArchived ? "show-archived" : ""}`}>
            <div className="archived-list">
              {archivedTasks.map(item => (
                <li key={item.taskID}> {item.task}</li>
              ))}
            </div>
          </div>
        </div>
        </div>
    );
  };
  return <div className="main-content">{importedTasks()}</div>;
};