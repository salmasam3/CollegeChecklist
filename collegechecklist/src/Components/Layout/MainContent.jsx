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

          <div className="adds">

          <div className="add-project">
              <AddCollege value={quickShow} showState={show} />
            </div>
          
          <div className="tasks">
            <AddTask />
          </div>

          </div>

          <div className="collegesList" onClick={() => {setHideColleges(!hideColleges);}}>
            <div className="todolisttitle"><strong>Colleges</strong></div>
            <p>Click on each college to view tasks</p>

          <div className={`hide-list-wrapper  ${hideColleges ? "hide" : ""} ${show ? "show" : ""}`}>
            <div><Colleges/></div>
            </div>
          </div>

          <div className="todolist">
              <div className="todolisttitle"><strong>To Do List</strong></div>
              <div>
                {colleges.map(college => (
                  <ul key={colleges.collegeID}>{college.name}
                    {tasks.map(function (task) {
                      if (task.collegeID === college.collegeID) {
                        return (<li className="bulletlist" key={task.taskID}>
                          <CheckBox id={task.id} />
                          {task.task}
                        </li>)
                      }
                    })}
                  </ul>))}
              </div>
          </div>
        
          <div className="archivedTasks">
            <div className="todolisttitle"><strong>Completed Tasks</strong></div>
              <div className="archived-list">
                {archivedTasks.map(item => (
                  <li key={item.taskID}> {item.task}</li>
                ))}
              </div>
          </div>
      </div>
    );
  };
  return <div className="main-content">{importedTasks()}</div>;
};