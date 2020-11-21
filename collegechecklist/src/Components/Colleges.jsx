import React, { useState } from 'react';
import { SelectedCollegeProviderValue, CollegesProviderValue } from '../Context';
import { IndividualCollege } from './IndividualCollege';


export const Colleges = () => {
  const { colleges } = CollegesProviderValue();
  const {
    setSelectedCollege,
    setSelectedCollegeName
  } = SelectedCollegeProviderValue();
  const [active, setActive] = useState(false);

  return (
    <div className="colleges-inner">
      {colleges.map(college => (
        <li
          key={college.collegeID}
          className={active ? "active-sideMenue-college" : "sideMenue-college"}
          onClick={() => {
            setSelectedCollege(college.collegeID);
            setSelectedCollegeName(college.name);
            setActive(true);
          }}
        >
          <IndividualCollege college={college} />
        </li>
      ))}
    </div>
  );
};