import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./components/TodoList/TodoList";

import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(<TodoList />, rootElement);
