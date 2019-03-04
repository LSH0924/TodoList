import React, { Component } from "react";
import TodoInfo from "./TodoInfo";

class TodoList extends Component {
  static defaultProps = {
    todoInfo: [],
    onComplete: () => console.log("Error: OnCompleteを見つかりません。"),
    onRemove: () => console.log("Error: OnRemoveを見つかりません。")
  };

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.todoInfo !== this.props.todoInfo;
  }

  render() {
    console.log("Rander TodoList");
    const { todoInfo, onRemove, onComplete } = this.props;
    const list = todoInfo.map(info => (
      <TodoInfo
        key={info.key}
        todoInfo={info}
        onComplete={onComplete}
        onRemove={onRemove}
      />
    ));
    return <div className="TodoList">{list}</div>;
  }
}

export default TodoList;
