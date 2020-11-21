import React, { useState } from 'react';
import { CollegesProviderValue, SelectedCollegeProviderValue } from '../Context';
import { fb } from '../firebase';

export const IndividualCollege = ({ college }) => {
  const [confirm, setConfirm] = useState(false);
  const { colleges, setColleges } = CollegesProviderValue();
  const { setSelectedCollege } = SelectedCollegeProviderValue();

  const deleteCollege = (docId) => {
    fb
      .firestore()
      .collection('colleges')
      .doc(docId)
      .delete()
      .then(() => {
        setColleges([...colleges]);
        setSelectedCollege('INBOX');
      });
  };

  return (
    <>
    <span className="project-fontawsome">
      <i class="fas fa-dot-circle fa-sm"></i>
    </span>
    <span className="project-item">{college.name}</span>
    <span className="delete" onClick={() => setConfirm(true)}>
      <i class="fas fa-trash-alt"></i>
    </span>

    <div
      className={`delete-project-model ${confirm ? " delete-overlay" : ""}`}
    >
      <div className="delete-box">
        <p>Do you want to delete project ("{college.name}") ?</p>
        <button className="yes" onClick={() => deleteCollege(college.docId)}>
          Yes
        </button>
        <button className="no" onClick={() => setConfirm(false)}>
          No
        </button>
      </div>
    </div>
  </>
);
};