// import styles from './Lightswitch.module.scss';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-regular-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

const Lightswitch = () => {
  // React.useEffect(() => {
  // const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  //   if (prefersDarkScheme.matches) {
  //     document.body.classList.add('dark-mode');
  //     document.querySelector('.light-switch').classList.remove('off');
  //     document.querySelector('.light-switch').classList.add('active');
  //   } else {
  //     document.body.classList.add('light-mode');
  //   }
  // }, []);  
  const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme);
  const inactiveTheme = activeTheme === 'light-mode' ? 'dark-mode' : 'light-mode';

  // const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  // if(window.localStorage.getItem('theme'))
  // if (prefersDarkScheme.matches) {
  //   document.body.dataset.theme = 'dark';
  //   document.body.classList.add('dark-mode');
  //   document.querySelector('.light-switch').classList.remove('off');
  //   document.querySelector('.light-switch').classList.add('active');
  // } else {
  //   document.body.classList.add('light-mode');
  //   document.body.dataset.theme = 'light';
  // }

  useEffect(() => {
    
    document.body.dataset.theme = activeTheme;
    window.localStorage.setItem('theme', activeTheme);
  }, [activeTheme]);
    
  function onClickHandler(e) {
    e.preventDefault;
    const lightswitch = document.querySelector('.light-switch');
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    lightswitch.classList.toggle('active');
    lightswitch.classList.toggle('off');
    setActiveTheme(inactiveTheme);
  }
  return (
    <li className="nav-item active d-flex align-items-center mt-auto light-switch-wrap">
      <button className="light-switch off" onClick={onClickHandler}>
        <span className="status-icon">
          {/* <i className="fa-regular fa-sun"></i>
					<i className="fa-solid fa-moon"></i> */}
          <FontAwesomeIcon icon={faSun} />
          <FontAwesomeIcon icon={faMoon} />
        </span>
      </button>
    </li>
  );
};

export default Lightswitch;
