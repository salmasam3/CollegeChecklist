import React, { useEffect } from 'react';
import { Checkbox } from './Checkbox';
import { AddTask } from './AddTask';
import { useTasks } from '../Hooks';
import { constTasks } from '../StoredVar';
import { getTitle, getCollatedTitle, constTasksExist } from '../Helpers';
import { useSelectedCollegeValue, useCollegesValue } from '../Context';

export const Tasks = () => {
  const { selectedCollege } = useSelectedCollegeValue();
  const { colleges } = useCollegesValue();
  const { tasks } = useTasks(selectedCollege);

  let collegeName = '';

  if (constTasksExist(selectedCollege) && selectedCollege) {
    collegeName = getCollatedTitle(constTasks, selectedCollege).name;
  }

  if (
    colleges &&
    colleges.length > 0 &&
    selectedCollege &&
    !constTasksExist(selectedCollege)
  ) {
    collegeName = getTitle(colleges, selectedCollege).name;
  }

  useEffect(() => {
    document.title = `${collegeName}: CollegeChecklist`;
  });

  return (
    <div className="tasks" data-testid="tasks">
      <h2 data-testid="college-name">{collegeName}</h2>

      <ul className="tasks__list">
        {tasks.map((task) => (
          <li key={`${task.id}`}>
            <Checkbox id={task.id} taskDesc={task.task} />
            <span>{task.task}</span>
          </li>
        ))}
      </ul>

      <AddTask />
    </div>
  );
};