import React, { Component } from "react";
import "./todoInfo.css";

class TodoInfo extends Component {
  static defaultProps = {
    key: 0,
    registDate: "",
    deadLine: "",
    content: "NoContent"
  };

  render() {
    const { registDate, deadLine, content, isComplete } = this.props.todoInfo;
    const computeDDay = (registDate, deadLine) => {
      const regist = new Date(registDate);
      const dead = new Date(deadLine);

      return Math.floor((dead - regist) / (1000 * 60 * 60 * 24));
    };
    const dDay = computeDDay(registDate, deadLine);

    return (
      <div className="TodoInfo">
        <label className="Date">
          {registDate}
          <strong> ~ {deadLine}</strong>
        </label>
        {isComplete ? (
          <label className="D-Day"> D-{dDay === 0 ? "DAY" : dDay}</label>
        ) : (
          <label className="D-Day">Complete</label>
        )}

        <p>{content}</p>
        <button>Complete</button>
      </div>
    );
  }
}

export default TodoInfo;
