import React, { useEffect } from 'react';
import { Checkbox } from './Checkbox';
import { AddTask } from './AddTask';
import { useTasks } from '../hooks';
import { constTasks } from '../StoredVar';
import { getTitle, getConstTitle, constTasksExist } from '../helpers';
import { SelectedCollegeProviderValue, CollegesProviderValue } from '../context';

export const Tasks = () => {
  const { selectedProject } = SelectedCollegeProviderValue();
  const { projects } = CollegesProviderValue();
  const { tasks } = useTasks(selectedProject);

  let collegeName = '';

  if (constTasksExist(selectedProject) && selectedProject) {
    collegeName = getConstTitle(constTasks, selectedProject).name;
  }

  if (
    projects &&
    projects.length > 0 &&
    selectedProject &&
    !constTasksExist(selectedProject)
  ) {
    collegeName = getTitle(projects, selectedProject).name;
  }

  useEffect(() => {
    document.title = `${collegeName}: Todoist`;
  });

  return (
    <div className="tasks" data-testid="tasks">
      <h2 data-testid="project-name">{collegeName}</h2>

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