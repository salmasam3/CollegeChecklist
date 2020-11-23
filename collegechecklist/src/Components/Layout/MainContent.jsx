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
      <div className="allTasks">
        <div className="tasks">
          <div className="addTask">{collegeName}</div>
          <ul className="tasks-list">
            {tasks.map(task => (
              <li key={task.taskID}>
                <CheckBox id={task.taskID} />
                <span> {task.task} </span>
              </li>
            ))}
          </ul>
          <AddTask value={selectedCollege} />
          <hr />
        </div>
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

            <span className = "title">Completed Tasks</span>

          </div>

          <div className={`archived ${showArchived ? "show-archived" : ""}`}>
            <div className="archived-list">
              {archivedTasks.map(item => (
                <li key={item.task.id}> {item.task}</li>
              ))}
            </div>
          </div>
        </div>
        </div>
    );
  };
  return <div className="main-content">{importedTasks()}</div>;
};