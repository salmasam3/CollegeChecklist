import React, { useState, useEffect } from "react";
import { useTasks } from "../../Hooks";
import { CheckBox } from "../Checkbox";
import { SelectedCollegeProviderValue } from "../../Context";
import { AddTask } from "../AddTask";

export const MainContent = () => {
  const {
    selectedCollege,
    selectedCollegeName
    
  } = SelectedCollegeProviderValue();
  const { tasks, archivedTasks } = useTasks(selectedCollege);
  const [showArchived, setShowArchived] = useState(false);

  const importedTasks = () => {
    let collegeName = selectedCollegeName;

    return (
      <>
        <div className="tasks">
          <h2>{collegeName}</h2>
          <ul className="tasks-list">
            {tasks.map(task => (
              <li key={collegeName.id}>
                <CheckBox id={task.id} />
                <span> {task.task} </span>
              </li>
            ))}
          </ul>
          <AddTask value={selectedCollege} />
        </div>
        <hr />
        <div className="archivedTasks">
          <div 
            className="title"
            onClick={() => {
              setShowArchived(!showArchived);
            }}
          >
            <span className={`arrow  ${showArchived ? "rotate" : ""}`}>
              <i className="fas fa-chevron-down fa-sm "></i>
            </span>
            <span>Completed Tasks</span>
          </div>

          <div className={`archived ${showArchived ? "show-archived" : ""}`}>
            <div className="archived-list">
              {archivedTasks.map(item => (
                <li key={item.task}> {item.task}</li>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  };
  return <div className="main-content">{importedTasks()}</div>;
};