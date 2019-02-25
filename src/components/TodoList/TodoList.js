import React, { Component } from "react";
import InputForm from "../InputForm";
import TodoInfo from "./TodoInfo";
import "./todoList.css";

class TodoList extends Component {
  key = 0;
  state = {
    todoInfo: [],
    showRegistForm: false,
    filtering: "",
    keyword: ""
  };

  handleShowRegist = () => {
    this.setState({
      showRegistForm: !this.state.showRegistForm
    });
  };

  handleRegist = data => {
    this.setState({
      todoInfo: this.state.todoInfo.concat({
        key: this.key++,
        isComplete: false,
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
        {
          ...todoInfo[index],
          isComplete: !todoInfo[index].isComplete
        },
        ...todoInfo.slice(index + 1, todoInfo.length)
      ]
    });
  };

  handleRemove = key => {
    const { todoInfo } = this.state;
    this.setState({ todoInfo: todoInfo.filter(info => info.key !== key) });
  };

  handleChange = e => {
    const { name, value } = e.target;
    console.log(name, value);
    this.setState({ [name]: value });
  };

  render() {
    const { filtering, keyword } = this.state;
    const list = this.state.todoInfo.map(info => {
      const jsx = (
        <TodoInfo
          key={info.key}
          todoInfo={info}
          onComplete={this.handleComplete}
          onRemove={this.handleRemove}
        />
      );
      return filtering !== "complete"
        ? !info.isComplete &&
            info.importance.indexOf(filtering) !== -1 &&
            info.content.indexOf(keyword) !== -1 &&
            jsx
        : info.isComplete && info.content.indexOf(keyword) !== -1 && jsx;
    });
    return (
      <React.Fragment>
        {this.state.showRegistForm && (
          <InputForm inputType="TodoList" onRegist={this.handleRegist} />
        )}
        <div className="TodoList">
          <h1>Todo List</h1>
          <select
            name="filtering"
            className="TodoListFilter"
            onChange={this.handleChange}
          >
            <option value="" />
            <option value="skyblue">보통</option>
            <option value="orange">중요</option>
            <option value="red">매우중요</option>
            <option value="complete">완료목록</option>
          </select>
          <input
            type="search"
            name="keyword"
            value={keyword}
            onChange={this.handleChange}
            placeholder="Search"
          />
          {list}
        </div>
        <button className="showRegistForm" onClick={this.handleShowRegist}>
          +
        </button>
      </React.Fragment>
    );
  }
}
export default TodoList;
