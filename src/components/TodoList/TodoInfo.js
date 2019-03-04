import React, { Component } from "react";
import "../../css/todoInfo.css";

class TodoInfo extends Component {
  static defaultProps = {
    todoInfo: {
      key: 0,
      importance: "skyblue",
      isComplete: false,
      content: "NoContent"
    }
  };

  handleComplete = () => {
    const { onComplete, todoInfo } = this.props;
    onComplete(todoInfo.key);
  };

  handleRemove = () => {
    const { onRemove, todoInfo } = this.props;
    onRemove(todoInfo.key);
  };

  render() {
    console.log("Rander TodoInfo");
    const { content, importance, isComplete } = this.props.todoInfo;
    return (
      <div className="TodoInfo">
        <div className={importance} />
        <p className={isComplete ? "LineThrow" : ""}>{content}</p>
        <button onClick={this.handleComplete}>
          {isComplete ? "取り消し" : "完了"}
        </button>
        <button className="Remove" onClick={this.handleRemove}>
          削除
        </button>
      </div>
    );
  }
}
export default TodoInfo;
