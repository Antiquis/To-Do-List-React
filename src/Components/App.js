import React from "react";
import { useState } from 'react';
import Header from "./Header";
import Form from "./Form";
import List from "./List";
import '../CSS/main.css'
import { mainTD, name } from "../CSS/Styled";

const App = () => {
  const [TasksList, setTasksList] = useState([]);
  const [Task, setTask] = useState('');

  const deleteTask = (todoId) => {
    setTasksList(TasksList.filter(todo => todo.id !== todoId));
  };

  const toggleTodoComplete = (todoId) => {
    setTasksList(
      TasksList.map(
        todo =>
          todo.id !== todoId ? (
            todo
          ) : (
            {
              ...todo,
              completed: !todo.completed,
            })
      )
    );
  }

  const addList = () => {
    const id = TasksList.length + 1;
    if (Task.trim().length) {
      setTasksList([
        ...TasksList,
        {
          id,
          Task,
          completed: false
        }
      ])
      setTask('');
    }
  }
  return (
    <div className="name" style={name}>
      <Header title="React To Do List" name="" />
      <main className="mainTD" style={mainTD}>
        <List TasksList={TasksList} onDelete={deleteTask} toggleTodoComplete={toggleTodoComplete} />
        <Form onAdd={addList} TasksList={setTasksList} Task={setTask} text={Task} />
      </main>
    </div>
  );
};

export default App