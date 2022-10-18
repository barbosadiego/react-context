import React from 'react';
import Userbar from './components/Userbar';
import { useState } from 'react';

const App = () => {

  const [usuario, setUsuario] = useState('diego');

  return (
    <>
      <h1>React Prop-Drilling</h1>
      <Userbar usuario={usuario} login={setUsuario}/>
    </>
  );
};

export default App;
