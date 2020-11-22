import React, { useState, useEffect,useContext } from 'react';
import Moment from 'react-moment';
import { fb } from '../firebase';
import { CollegesProviderValue } from "../Context";
import { TaskHeaderStateValue } from "../Context";
import { UserContext, UserProvider } from "../Providers/UserProvider";

export const AddTask = selectedCollege => {
  const user = useContext(UserContext);
  const { quickState, setQuickState } = TaskHeaderStateValue();
  const [showTask, setShowTask] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [menueItem, setMenueItem] = useState("");
  const { colleges } = CollegesProviderValue();
  const [college, setCollege] = useState("");

  const collegeId = selectedCollege.value;

  useEffect(() => {
    if (quickState) {
      setShowTask(true);
    }
  }, [quickState]);

  const addTask = () => {
    let collatedDate;
    if (menueItem === "TODAY") {
      collatedDate = Moment().format("DD/MM/YYYY");
    } else if (menueItem === "NEXT_7") {
      collatedDate = Moment()
        .add(7, "days")
        .format("DD/MM/YYYY");
    }

    taskName &&
      fb
        .firestore()
        .collection("tasks")
        .add({
          archived: false,
          task: taskName,
          collegeID: college || collegeId,
          userID: user.uid,
          date: collatedDate || ""
        })
        .then(() => {
          setShowTask(false);
          setTaskName("");
          setQuickState(false);
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
          <span className="add-task-title">Add task</span>
        </div>

        <div className={`task-box ${showTask ? "show-task" : ""}`}>
          <div className="task-popup">
            <div className="task-input">
              <div className="add-task-title">Add Task</div>
              <div className="task-name">Task name</div>
              <input
                id="task-input"
                type="text"
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
                  setQuickState(false);
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