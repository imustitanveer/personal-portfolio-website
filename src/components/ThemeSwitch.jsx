import { useEffect, useRef } from 'react';
import './ThemeSwitch.css';

export default function ThemeSwitch() {
  const checkboxRef = useRef(null);

  const setDarkClass = (on) => {
    document.documentElement.classList.toggle('dark', on);
  };

  const syncCheckbox = (on) => {
    if (checkboxRef.current) checkboxRef.current.checked = on;
  };


  useEffect(() => {
    // 1)  Was a theme stored?
    const stored = localStorage.getItem('theme'); //  'dark' | 'light' | null
    // 2)  Otherwise fall back to system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const initialDark =
      stored === 'dark' ? true : stored === 'light' ? false : prefersDark;

    setDarkClass(initialDark); // add/remove <html class="dark">
    syncCheckbox(initialDark); // move knob to moon / sun
  }, []);


  const handleToggle = () => {
    const darkNow = checkboxRef.current.checked;
    setDarkClass(darkNow);                       // update the site
    localStorage.setItem('theme', darkNow ? 'dark' : 'light'); // remember choice
  };


  return (
    <div className="lg:flex lg:flex-row items-center justify-end mt-2 me-2 hidden">
      <label className="theme-switch">
        <input
          type="checkbox"
          className="theme-switch__checkbox"
          ref={checkboxRef}
          onChange={handleToggle}
        />

        <div className="theme-switch__container">
          <div className="theme-switch__clouds" />

          <div className="theme-switch__stars-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 55" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                /* full path from your file ↓ */
                d="M135.831 3.00688C135.055..."
                fill="currentColor"
              />
            </svg>
          </div>

          <div className="theme-switch__circle-container">
            <div className="theme-switch__sun-moon-container">
              <div className="theme-switch__moon">
                <div className="theme-switch__spot" />
                <div className="theme-switch__spot" />
                <div className="theme-switch__spot" />
              </div>
            </div>
          </div>
        </div>
      </label>
    </div>
  );
}