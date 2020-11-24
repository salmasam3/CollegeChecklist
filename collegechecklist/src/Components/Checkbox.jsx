import React from 'react';
import { fb } from '../firebase';

export const CheckBox = ({ id }) => {
  const archiveTask = () => {
    fb
      .firestore()
      .collection("tasks")
      .doc(id)
      .update({
        archived: true
      });
  };

  return (
    <input type = "checkbox" className="checkbox" onClick={archiveTask}></input>
  );
};