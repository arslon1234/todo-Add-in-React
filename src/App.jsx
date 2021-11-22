import React from "react";
import "./app.scss";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./context";
import { Switch, Route, Link } from "react-router-dom";
import "aos/dist/aos.css";
import "aos/dist/aos";
import AOS from "aos";
import TodoApp from "./TodoApp";
export default function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "task1",
      completed: "false",
    },
    {
      id: 2,
      name: "task2",
      completed: "true",
    },
    {
      id: 3,
      name: "task3",
      completed: "false",
    },
  ]);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const theme = useContext(ThemeContext);
  return (
    <div className="app">
      <TodoApp tasks={tasks} setTasks={setTasks} />
    </div>
  );
}
