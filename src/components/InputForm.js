import React, { Component } from "react";
import "./InputForm.css";

class InputForm extends Component {
  state = {
    registDate: "",
    deadLine: "",
    title: "",
    content: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    //page Reloading X
    e.preventDefault();
    if (this.state.content === "") {
      alert("Content is Empty!");
      return false;
    }
    //send data to @arents
    this.props.onRegist(this.state);
    this.setState({
      registDate: "",
      deadLine: "",
      title: "",
      content: ""
    });
  };

  render() {
    const { registDate, deadLine, title, content } = this.state;
    const inputType = this.props.inputType === "TodoList";

    return (
      <div className="InputForm">
        <form onSubmit={this.handleSubmit}>
          {!inputType && (
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={title}
              onChange={this.handleChange}
            />
          )}
          <div className="DateArea">
            <label>RegistDate : </label>
            <input
              type="date"
              name="registDate"
              value={registDate}
              onChange={this.handleChange}
            />
          </div>
          {inputType ? (
            <React.Fragment>
              <div className="DateArea">
                <label>Deadline : </label>
                <input
                  type="date"
                  name="deadLine"
                  value={deadLine}
                  onChange={this.handleChange}
                />
              </div>
              <input
                type="text"
                name="content"
                placeholder="Content"
                value={content}
                onChange={this.handleChange}
              />
            </React.Fragment>
          ) : (
            <textarea
              name="content"
              placeholder="Content"
              value={content}
              onChange={this.handleChange}
            />
          )}
          <button type="submit">Registration</button>
          <button type="reset">Reset</button>
        </form>
      </div>
    );
  }
}

export default InputForm;
