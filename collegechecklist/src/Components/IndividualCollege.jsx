import React, { useState } from 'react';
import { CollegesProviderValue } from '../Context';
import { fb } from '../firebase';

export const IndividualCollege = ({ college }) => {
  const [confirm, setConfirm] = useState(false);
  const { colleges, setColleges } = CollegesProviderValue();

  const deleteCollege = (docId) => {
    fb
      .firestore()
      .collection('colleges')
      .doc(docId)
      .delete()
      .then(() => {
        setColleges([...colleges]);
      });
  };

  return (
    <>
    <span className="project-fontawsome">
      <i className="fas fa-dot-circle fa-sm"></i>
    </span>
    <span className="project-item">{college.name}</span>
    <span className="delete" onClick={() => deleteCollege(college.docId)}>
      <i className="fas fa-trash-alt"></i>
    </span>

    <div
      className={`delete-project-model ${confirm ? " delete-overlay" : ""}`}
    >
    </div>
  </>
);
};