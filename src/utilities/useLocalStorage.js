import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
      try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item).map(url => ({ ...url, copied: false })) : initialValue;
      } catch (error) {
        console.error('Error reading from localStorage', error);
        return initialValue;
      }
    });
  
    useEffect(() => {
      try {
        localStorage.setItem(key, JSON.stringify(storedValue));
      } catch (error) {
        console.error('Error saving to localStorage', error);
      }
    }, [key, storedValue]);
  
    return [storedValue, setStoredValue];
  }

export default useLocalStorage;