import React, { Component } from "react";
import TodoList from "./TodoList/TodoList";
import Search from "./TodoList/Search";
import InputForm from "./InputForm";

class App extends Component {
  key = 0;
  state = {
    todoInfo: [],
    showRegistForm: false,
    filter: "",
    keyword: ""
  };

  handleChange = (name, value) => {
    this.setState({ [name]: value });
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

  handleRemove = key => {
    const { todoInfo } = this.state;
    this.setState({ todoInfo: todoInfo.filter(info => info.key !== key) });
  };

  handleComplete = key => {
    console.log("handleComplete");
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

  render() {
    console.log("Rander App");
    const { todoInfo, filter, keyword } = this.state;
    const list = todoInfo.filter(info =>
      filter !== "complete"
        ? !info.isComplete &&
          info.importance.indexOf(filter) !== -1 &&
          info.content.indexOf(keyword) !== -1
        : info.isComplete && info.content.indexOf(keyword) !== -1
    );
    return (
      <React.Fragment>
        {this.state.showRegistForm && (
          <InputForm
            inputType="TodoList"
            onRegist={this.handleRegist}
            onClick={this.handleShowRegist}
          />
        )}
        <div className="box">
          <Search onChange={this.handleChange} />
          <TodoList
            todoInfo={list}
            onRemove={this.handleRemove}
            onComplete={this.handleComplete}
          />
          <button
            className={
              "showRegistForm " +
              (this.state.showRegistForm && "HideRegistForm")
            }
            onClick={this.handleShowRegist}
          >
            +
          </button>
        </div>
      </React.Fragment>
    );
  }
}
export default App;
