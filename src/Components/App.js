import { useState } from 'react';
import { useDispatch } from 'react-redux';

import {addList} from "../store/todoSlice"

import Header from "./Header";
import Form from "./Form";
import List from "./List";
import '../CSS/main.css'
import { mainTD, name } from "../CSS/Styled";

const App = () => {
  const [Task, setTask] = useState('');
  const dispatch = useDispatch();

  const addTask = () => {
    if (Task.trim().length) {
    dispatch(addList({Task}))
    setTask('');
  }}
  
  return (
    <div className="name" style={name}>
      <Header title="React To Do List" name="" />
      <main className="mainTD" style={mainTD}>
        <List />
        <Form onAdd={addTask} Task={setTask} text={Task} />
      </main>
    </div>
  );
};

export default App