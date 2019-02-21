import React, { Component } from "react";
import InputForm from "../InputForm";
import TodoInfo from "./TodoInfo";
import "./TodoList.css";

class TodoList extends Component {
  key = 0;
  state = {
    todoInfo: [
      {
        key: 0,
        isComplete: false,
        registDate: "2019/1/20",
        deadLine: "2019/2/20",
        content:
          "No Content No Content No Content No Content No Content No Content No Content No Content No Content NoContent"
      },
      {
        key: 1,
        isComplete: true,
        registDate: "2019/1/20",
        deadLine: "2019/2/20",
        content:
          "No Content No Content No Content No Content No Content No Content No Content No Content No Content NoContent"
      }
    ],
    showInputForm: false
  };

  handleRegist = data => {
    const { todoInfo } = this.state;
    this.setState({
      todoInfo: todoInfo.concat({
        key: ++this.key,
        ...data
      })
    });
  };

  handleComplete = key => {
    const { todoInfo } = this.state;
    const index = todoInfo.findIndex(item => item.key === key);
    const data = todoInfo[index];
    const newTodo = [...todoInfo];
    newTodo[index] = {
      ...data,
      isComplete: !data.isComplete
    };
    this.setState({
      todoInfo: newTodo
    });
  };

  handleRemove = key => {
    const { todoInfo } = this.state;
    this.setState({
      todoInfo: todoInfo.filter(todo => todo.key !== key)
    });
  };

  render() {
    const { todoInfo } = this.state;
    const list = todoInfo.map(info => (
      <TodoInfo key={info.key} todoInfo={info} />
    ));
    return (
      <div>
        <select className="TodoListFilter">
          <option>InputDate</option>
          <option>Deadline</option>
          <option>Content</option>
        </select>
        <input type="search" value="" placeholder="Search" />
        <br />
        <InputForm inputType="TodoList" onRegist={this.handleRegist} />
        {list}
      </div>
    );
  }
}
export default TodoList;
