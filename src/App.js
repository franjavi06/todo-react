import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import InputContainer from './components/InputContainer';
import ThingsContainer from './components/ThingsContainer';

function App() {

  const [toDoList, setToDoList] = useState([]);

  const onAddThingsHandler = (texto) => {
    if(texto.length>0){
      setToDoList([...toDoList, texto])
    }    
  }

  return (
    <div>
      <div className="container">
        <Title title="To do List App"/>
        <InputContainer onAddThing={onAddThingsHandler}/>
        <ThingsContainer lista={toDoList}/>       
      </div>
    </div>
  );
}

export default App;
