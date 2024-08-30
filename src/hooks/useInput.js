import { useState } from "react";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    let correct = true;
    const value = e.target.value;
    if (typeof validator === "function") {
      correct = validator(value);
    }
    if (correct) {
      setValue(value);
    }
  };
  return { value, onChange };
};
export default useInput;
