import { useState, useEffect } from 'react';

function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDarkModeEnabled = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(isDarkModeEnabled);
  }, []);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return [isDarkMode, toggleDarkMode];
}

export default useDarkMode;
