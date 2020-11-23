import React, { useState, useEffect,useContext } from 'react';
import moment from 'moment';
import { fb } from '../firebase';
import { CollegesProviderValue } from "../Context";
import { UserContext, UserProvider } from "../Providers/UserProvider";
import { generatePushId } from '../Helpers';

export const AddTask = selectedCollege => {
  const user = useContext(UserContext);
  const [showTask, setShowTask] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [menueItem, setMenueItem] = useState("");
  const { colleges } = CollegesProviderValue();
  const [college, setCollege] = useState("");

  const collegeId = selectedCollege.value;
  // const collegeN = selectedCollege.college;

  const taskID = generatePushId();

  const addTask = () => {
    let collatedDate;
    if (menueItem === "TODAY") {
      collatedDate = moment().format("DD/MM/YYYY");
    } else if (menueItem === "NEXT_7") {
      collatedDate = moment()
        .add(7, "days")
        .format("DD/MM/YYYY");
    }

    taskName &&
      fb
        .firestore()
        .collection("tasks")
        .add({
          taskID,
          archived: false,
          task: taskName,
          collegeID: college || collegeId,
          userID: user.uid,
          date: collatedDate || "",
          // collegeNa: collegeN,
        })
        .then(() => {
          setShowTask(false);
          setTaskName("");
          document.getElementById("select-1").selectedIndex = 0;
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
          <span className="title">Add Task</span>
        </div>

        <div className={`task-box ${showTask ? "show-task" : ""}`}>
          <div className="task-popup">
            <div className="task-input">
              {/* <div className="subhead">Task name</div> */}
              <input
                id="task-input"
                type="text"
                placeholder="Task Name"
                onChange={e => setTaskName(e.target.value)}
              />
            </div>
            <div className="select-boxes">
              <select
                id="select-1"
                className="select-date"
                onChange={e => setMenueItem(e.target.value)}
              >
                <option value="" disabled hidden>
                  Choose date
                </option>
                <option value="TODAY">Today</option>
                <option value="NEXT_7">Next 7 days</option>
              </select>
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
              <button
                className="cancel"
                onClick={() => {
                  setShowTask(false);
                  document.getElementById("select-1").selectedIndex = 0;
                  document.getElementById("select-2").selectedIndex = 0;
                  document.getElementById("task-input").value = "";
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};