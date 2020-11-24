import React, { useState, useEffect } from "react";
import { useTasks } from "../../Hooks";
import { SelectedCollegeProviderValue } from "../../Context";
import { AddTask } from "../AddTask";
import { CollegesProviderValue } from "../../Context";
import { CheckBox } from "../Checkbox";

export const MainContent = () => {
  const { colleges } = CollegesProviderValue();
  const {
    selectedCollege,
    selectedCollegeName
    
  } = SelectedCollegeProviderValue();
  const { tasks, archivedTasks } = useTasks(selectedCollege);
  const [showArchived, setShowArchived] = useState(false);

  const importedTasks = () => {
    let collegeName = selectedCollegeName;

  
    return (
      <div className="allTasks">
        <div className="tasks">
          <div className="addTask">{collegeName}</div>
          <ul className="tasks-list">
            {tasks.map(task => (
              <li key={task.taskID}>
                <span>{collegeName}</span>
                <CheckBox id={task.taskID} />
                <span> {task.task} </span>
              </li>
            ))}
          </ul>
          <AddTask value={selectedCollege} />
          <hr />
        </div>
        {/* <div>
          <div>To Do List</div>
          <div>
            {colleges.map(college => (
            <ul key={colleges.collegeID}>{college.name}
            {tasks.map(function(task) {
              if (task.collegeID === college.collegeID) {
                return(<li key={task.taskID}>{task.task}</li>)
              }
            })}
            </ul> ))}
        </div>
        </div> */}
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