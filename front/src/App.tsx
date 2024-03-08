import React, { ChangeEvent, useState } from 'react';
import './App.css';
import InputBox from 'components/InputBox';

function App() {

  const [id, setId] = useState<string>('');

  const onIdChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setId(value);
  }

  const onIdButtonClickhandler = () => {

  }

  return (
    <>
      
    </>
  );
}

export default App;
