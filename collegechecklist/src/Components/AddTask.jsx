import React, { useState, useContext } from 'react';
import { fb } from '../firebase';
import { CollegesProviderValue } from "../Context";
import { UserContext} from "../Providers/UserProvider";
import { generatePushId } from '../Helpers';

export const AddTask = () => {
  const user = useContext(UserContext);
  const [showTask, setShowTask] = useState(false);
  const [taskName, setTaskName] = useState("");
  const { colleges } = CollegesProviderValue();
  const [college, setCollege] = useState("");
  

  const taskID = generatePushId();

  const addTask = () => {

    taskName &&
      fb
        .firestore()
        .collection("tasks")
        .add({
          taskID,
          archived: false,
          task: taskName,
          collegeID: college,
          userID: user.uid,
        })
        .then(() => {
          setShowTask(false);
          setTaskName("");
          document.getElementById("select-2").selectedIndex = 0;
          document.getElementById("task-input").value = "";
        });
  };

  return (
    <div className="add-task">
      <div className="add-task-inner">
        <div
          onClick={() => {
            setShowTask(true);
          }}
          className="add-task-item"
        >
          <span className="add-task-icon">
            <i className="fas fa-plus"></i>
          </span>
          <span className="title">2. Add Tasks</span>
        </div>

        <div className={`task-box ${showTask ? "show-task" : ""}`}>
          <div className="task-popup">
            <div className="input-outline">
              <input
                id="task-input"
                type="text"
                placeholder="Task Name"
                onChange={e => setTaskName(e.target.value)}
              />
            </div>
            <div className = "input-outline">
            <div className="select-boxes">
              <select
                id="select-2"
                className="select-College"
                onChange={e => setCollege(e.target.value)}
              >
                <option value="" disabled hidden>
                  Choose College
                </option>
                {colleges.map(college => (
                  <option value={college.collegeID}>{college.name}</option>
                ))}
              </select>
            </div>
            <div className="buttons">
              <button className="add" onClick={() => addTask()}>
                Add
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};