import React from "react";
import useLocalStorage from './useLocalStorage.js'

const useDarkMode = (key) => {
    
    const [value, setValue] = useLocalStorage(key)

    return [value, setValue];
      
};

export default useLocalStorage;
