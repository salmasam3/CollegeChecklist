import React from 'react';
import PropTypes from 'prop-types';
import { useCollegesValue } from '../Context';

export const CollegeOverlay = ({
  setCollege,
  showCollegeOverlay,
  setShowCollegeOverlay,
}) => {
  const { colleges } = useCollegesValue();

  return (
    colleges &&
    showCollegeOverlay && (
      <div className="college-overlay" data-testid="college-overlay">
        <ul className="college-overlay__list">
          {colleges.map((college) => (
            <li key={college.collegeID}>
              <div
                data-testid="college-overlay-action"
                onClick={() => {
                  setCollege(college.collegeID);
                  setShowCollegeOverlay(false);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setCollege(college.collegeID);
                    setShowCollegeOverlay(false);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label="Select the task college"
              >
                {college.name}
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

CollegeOverlay.propTypes = {
  colleges: PropTypes.array,
};