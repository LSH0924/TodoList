import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./components/TodoList/TodoList";

import "./styles.css";

function App() {
  return <TodoList />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
