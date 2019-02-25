import React, { Component } from "react";
import "./todoInfo.css";

class TodoInfo extends Component {
  static defaultProps = {
    todoInfo: {
      key: 0,
      importance: "skyblue",
      isComplete: false,
      content: "NoContent"
    },
    onComplete: () =>
      console.log("Error: this.props에서 onComplete함수를 찾을 수 없습니다."),
    onRemove: () =>
      console.log("Error: this.props에서 onRemove함수를 찾을 수 없습니다.")
  };

  handleComplete = () => this.props.onComplete(this.props.todoInfo.key);

  handleRemove = () => this.props.onRemove(this.props.todoInfo.key);

  render() {
    const { content, importance, isComplete } = this.props.todoInfo;
    return (
      <div className="TodoInfo">
        <div className={importance} />
        <p className={isComplete ? "LineThrow" : ""}>{content}</p>
        {isComplete ? (
          <button onClick={this.handleComplete}>Revert</button>
        ) : (
          <button onClick={this.handleComplete}>Complete</button>
        )}
        <button className="Remove" onClick={this.handleRemove}>
          Remove
        </button>
      </div>
    );
  }
}

export default TodoInfo;
