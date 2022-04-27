import React, { useState, useCallback } from 'react';
import './style.css';
import { Title } from './Title';
import { Button } from './Button';
import { Count } from './Count';
export default function App() {
  const [age, setAge] = useState(10);
  const [salary, setSalary] = useState(5000);

  const increaseAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const increaseAgeSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);
  return (
    <div>
      <Title />
      <Count count={age} />
      <Button handleClick={increaseAge}>Increase Age</Button>
      <Count count={salary} />
      <Button handleClick={increaseAgeSalary}>Increase salary</Button>
    </div>
  );
}
