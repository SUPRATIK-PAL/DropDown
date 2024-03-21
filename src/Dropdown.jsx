import React, { useState, useEffect, useRef } from 'react';
import { FaAngleDoubleUp } from "react-icons/fa";
import { FaAngleDoubleDown } from "react-icons/fa";


function Dropdown({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const options = ['React.js', 'Angular.js', 'Vue.js'];
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Function to handle click events outside the dropdown
    const handleClickOutside = (event) => {
      // Close the dropdown if the click is outside the dropdown element
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsActive(false);
      }
    };

    // Attach event listener on component mount to handle outside click
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className='dropdown'>
      
      {/* Dropdown button */}
      <div className="dropdown-btn" onClick={e => setIsActive(!isActive)}>
        {selected}
        {/* Dropdown caret icon */}
        {
          isActive ? <FaAngleDoubleUp/> : <FaAngleDoubleDown/>
        }
      </div>
      {/* Dropdown content */}
      {isActive && (
        <div className="dropdown-content">
          {/* Dropdown options */}
          {options.map(option => (
            <div
              key={option}
              onClick={e => {
                // Update the selected option and close the dropdown on option click
                setSelected(option);
                setIsActive(false);
              }}
              className={selected === option ? 'dropdown-item active' : 'dropdown-item'}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
