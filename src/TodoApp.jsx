import "./todo.scss";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./context";
export default function TodoApp({ tasks, setTasks }) {
  const [addTask, setAddTask] = useState("");
  const [text, setText] = useState("");
  const [completed, setCompleted] = useState();
  const theme = useContext(ThemeContext);
  function delateAll() {
    setTasks([]);
  }
  function delateActive(id) {
    if (tasks.completed == "true") {
      setTasks([]);
    }
  }
  // useEffect(() => {
  //   const a = tasks.filter((item) => item.completed === "true");
  //   setCompleted(a);
  // }, []);
  function handleClick() {
    theme.dispatch({ type: "TOGGLE" });
  }
  function AddTask() {
    let a = addTask;
    let b = [...tasks];
    b.push({ id: tasks.length + 1, name: a, completed: "false" });
    setTasks(b);
    setAddTask("");
  }

  function editTask(item) {
    setAddTask(item.name);
  }
  function delateTask(id) {
    let a = [...tasks];
    let b = a.filter((item) => item.id !== id);
    setTasks(b);
  }
  return (
    <div className="todo">
      <div className="todoHeader">
        <h3 className="todoTitle">TODO ADD</h3>
        <div className="icon">
          <i
            onClick={handleClick}
            style={{
              display: theme.state.darkMode ? "none" : "",
              color: theme.state.darkMode ? "#0e6069" : "",
            }}
            className="fa-solid fa-moon"
          ></i>
          <i
            onClick={handleClick}
            style={{
              display: theme.state.darkMode ? "" : "none",
              color: theme.state.darkMode ? "#239ba8" : "",
            }}
            className="fa-solid fa-sun"
          ></i>
        </div>
      </div>
      <div
        className="TodoAdd"
        style={{ backgroundColor: theme.state.darkMode ? "#5dddee" : "" }}
      >
        <div
          className="TodoAddHeader"
          style={{ backgroundColor: theme.state.darkMode ? "#b6ebf1" : "" }}
        >
          <input
            defaultChecked={text}
            value={addTask}
            onChange={(e) => setAddTask(e.target.value)}
            style={{
              color: theme.state.darkMode ? "#239ba8" : "",
            }}
            type="text"
            placeholder="Enter the Task..."
            className="todoInput"
          />
          <button
            onClick={AddTask}
            className="todoBtn"
            style={{
              color: theme.state.darkMode ? "#239ba8" : "",
            }}
          >
            <i
              style={{
                color: theme.state.darkMode ? "#000016" : "",
              }}
              class="fa-solid fa-plus"
            ></i>
          </button>
        </div>
        <div className="todoBody">
          <div className="tasks">
            {tasks.map((item) => (
              <div className="TaskHeader" key={item.id}>
                <div className="taskInfo">
                  <span
                    className="taskName"
                    style={{ color: theme.state.darkMode ? "#000016" : "" }}
                  >
                    {item.id}. {item.name}
                  </span>
                  <input type="checkbox" defaultChecked={item.completed} />
                </div>
                <div className="tasksIcon">
                  <i
                    onClick={() => editTask(item)}
                    className="fa-solid fa-pen-to-square"
                  ></i>
                  <i
                    onClick={() => delateTask(item.id)}
                    className="fa-solid fa-trash-can"
                  ></i>
                </div>
              </div>
            ))}
          </div>
          <div className="tasksInfo">
            <div className="infoLeft">
              <span style={{ color: theme.state.darkMode ? "#000016" : "" }}>
                All Tasks: {tasks.length}
              </span>
              <span style={{ color: theme.state.darkMode ? "#000016" : "" }}>
                Active Tasks: {tasks.completed ? tasks.completed.length : "1"}
              </span>
              <span style={{ color: theme.state.darkMode ? "#000016" : "" }}>
                Completed Tasks:
              </span>
            </div>
            <div className="infoRight">
              <div className="delate">
                <span style={{ color: theme.state.darkMode ? "#000016" : "" }}>
                  DELATE :
                </span>
                <button onClick={delateAll}>ALL</button>
                <button onClick={() => delateActive(tasks.id)}>ACTIVE</button>
                <button>COMPLETED</button>
              </div>
              <div className="view">
                <span style={{ color: theme.state.darkMode ? "#000016" : "" }}>
                  VIEW :
                </span>
                <button>ALL</button>
                <button>ACTIVE</button>
                <button>COMPLETED</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// function handleClick(){
//   theme.dispatch({type:'TOGGLE'})
// }
// return (
//     <div className="t">
//            <i className=" t-icon fa-solid fa-sun"></i>
//            <i className=" t-icon fa-solid fa-moon"></i>
//            <div className="t-button"
//            onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 27,
//             backgroundColor: theme.state.darkMode ? "yellow": "#999"}}></div>
//     </div>
// )
