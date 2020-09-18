import React from 'react';
import './App.css';
import { hot } from "react-hot-loader";
import ToDoList from './ToDoList'

function App() {
  return (
    <div className="App">
      Hello World
      <ToDoList/>
    </div>
  );
}

export default hot(module)(App);
