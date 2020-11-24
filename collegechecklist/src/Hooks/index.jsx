import { useState,useEffect } from "react";
import { fb } from '../firebase';
import {auth} from '../firebase';

export const useTasks = selectedCollege => {
    
    const [tasks, setTasks] = useState([]);
    const [archivedTasks, setArchivedTasks] = useState([]);
  
    useEffect(() => {
      const user = auth.currentUser;
      let unsubscribe = fb
        .firestore()
        .collection('tasks')
        .where('userID', '==', user.uid);
  
        unsubscribe = unsubscribe.onSnapshot(snapshot => {
          let newTasks = snapshot.docs.map(task => ({
            id: task.id,
            ...task.data()
          }));
    
          let filteredTasks = [];
    
          selectedCollege !== "INBOX" 
            ? (filteredTasks = newTasks.filter(
                task => task.collegeID === selectedCollege && task.archived !== true
              ))
            : selectedCollege === "INBOX"
            ? (filteredTasks = newTasks.filter(
                task => task.date === "" && task.archived !== true
              ))
            : (filteredTasks = newTasks);
    
          setTasks(filteredTasks);
    
          setArchivedTasks(newTasks.filter(task => task.archived !== false));
        });
      }, [selectedCollege]);
      
  
    return { tasks, archivedTasks };
  };


  
  export const useColleges = () => {
    const [colleges, setColleges] = useState([]);
  
    useEffect(() => {
      const user = auth.currentUser;
      fb
        .firestore()
        .collection('colleges')
        .where('userID', '==', user.uid)
        .orderBy('collegeID')
        .get()
        .then(snapshot => {
          const allColleges = snapshot.docs.map(college => ({
            ...college.data(),
            docId: college.id,
          }));
  
          if (JSON.stringify(allColleges) !== JSON.stringify(colleges)) {
            setColleges(allColleges);
          }
        });
    }, [colleges]);
  
    return { colleges, setColleges };
  };