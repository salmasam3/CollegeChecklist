import React, { useState,useEffect,useContext } from 'react';
import { fb } from '../firebase';
import { generatePushId } from '../Helpers';
import { CollegesProviderValue } from "../Context";
import { UserContext} from "../Providers/UserProvider";


export const AddCollege = props => {
    const user = useContext(UserContext);
    const { colleges, setColleges } = CollegesProviderValue();
    const [show, setShow] = useState(false);
    const [collegeName, setCollegeName] = useState("");
    
  
    const collegeID = generatePushId();
    const input = document.getElementById("input");
  
    const addCollege = () =>
      collegeName &&
      fb
        .firestore()
        .collection('colleges')
        .add({
          collegeID,
          name: collegeName,
          userID: user.uid,
        })
        .then(() => {
          setColleges([]);
          setCollegeName('');
          setShow(!show);
          input.value = "";
        });

        useEffect(() => {
          setShow(props.showState);
        }, [props.showState]);
  
    return (
      <div className="addCollegeWrapper">
      <div
        className="add-college-inner"
        onClick={() => {
          setShow(!show);
        }}
      >
        <span className="font-awsome">
          <i className="fas fa-plus"></i>
        </span>
        <span className="title">1. Add Colleges</span>
      </div>

      <div className={`add-college-show ${show ? "show" : ""}`}>
        <div className="input-outline">
          <input
            id="input"
            type="text"
            placeholder="College Name"
            onChange={e => setCollegeName(e.target.value)}
          />
          <div className="buttons">
            <button
              className="add"
              onClick={() => {
                addCollege();
                props.value(false);
              }}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
    );
  };
  