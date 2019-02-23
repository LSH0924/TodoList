import React, { Component } from "react";
import InputForm from "../InputForm";
import TodoInfo from "./TodoInfo";
import "./todoList.css";

class TodoList extends Component {
  key = 1;
  state = {
    todoInfo: [
      {
        key: 0,
        importance: "skyblue",
        isComplete: false,
        content:
          "R e a c t R e a c t R e a c t R e a c t R e a c t R e a c t R e a c t R e a c t R e a c t"
      },
      {
        key: 1,
        importance: "orange",
        isComplete: true,
        content: "Lorem"
      }
    ],
    showRegistForm: false
  };

  handleShowRegist = () => {
    this.setState({
      showRegistForm: !this.state.showRegistForm
    });
  };

  handleRegist = data => {
    this.setState({
      todoInfo: this.state.todoInfo.concat({
        key: ++this.key,
        ...data
      })
    });
  };

  handleComplete = key => {
    const { todoInfo } = this.state;
    const index = todoInfo.findIndex(item => item.key === key);
    this.setState({
      todoInfo: [
        ...todoInfo.slice(0, index),
        { ...todoInfo[index], isComplete: !todoInfo[index].isComplete },
        ...todoInfo.slice(index + 1, todoInfo.length)
      ]
    });
  };

  render() {
    const list = this.state.todoInfo.map(info => (
      <TodoInfo
        key={info.key}
        todoInfo={info}
        onComplete={this.handleComplete}
      />
    ));
    return (
      <React.Fragment>
        <div className="TodoList">
          <select className="TodoListFilter">
            <option>보통</option>
            <option>중요</option>
            <option>매우중요</option>
          </select>
          <input type="search" value="" placeholder="Search" />
          <br />
          <button className="showRegistForm" onClick={this.handleShowRegist}>
            +
          </button>
          {list}
        </div>
        {this.state.showRegistForm && (
          <InputForm inputType="TodoList" onRegist={this.handleRegist} />
        )}
      </React.Fragment>
    );
  }
}
export default TodoList;
