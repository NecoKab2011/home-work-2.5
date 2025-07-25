import React from 'react';
import Greeting from './components/Greeting';
import Message from './components/Message';
import Button from './components/Button';

const App = () => {
  const handleClick = () => {
    console.log('BUTTON було натиснуто.');
  };

  return (
    <div>
      <Greeting name="Користувач" />
      <Message text="Повідомлення від компонента Message." />
      <Button onClick={handleClick} />
    </div>
  );
};

export default App;
