import React, { Component } from "react";
import "./InputForm.css";

class InputForm extends Component {
  /** importance skyblue : normal / orange : importante / red : very importante */
  state = {
    importance: "skyblue",
    title: "",
    content: ""
  };
  // 입력정보를 변경할 때마다 실행
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    // 페이지 리로딩 방지
    e.preventDefault();

    // title, content 입력확인
    if (this.props.inputType === "Memo") {
      if (this.state.title === "") {
        alert("Title is Empty");
        return false;
      }
    }
    if (this.state.content === "") {
      alert("Content is Empty");
      return false;
    }

    // 리스트로 데이터 보내기. 등록작업
    this.props.onRegist(this.state);

    // state값 초기화
    this.setState({
      importance: "",
      title: "",
      content: ""
    });
  };

  // Reset button event
  handleReset = () => {
    // state값 초기화
    this.setState({
      importance: "",
      title: "",
      content: ""
    });
  };

  render() {
    const { title, content } = this.state;
    const inputType = this.props.inputType === "TodoList";

    return (
      <div className="BackgroundInpufForm">
        <div className="InputForm">
          <form onSubmit={this.handleSubmit}>
            {inputType ? (
              <React.Fragment>
                <label>중요도 : </label>
                <input
                  type="radio"
                  name="importance"
                  id="importance1"
                  value="skyblue"
                  onChange={this.handleChange}
                />
                <label htmlFor="importance1">일반</label>
                <input
                  type="radio"
                  name="importance"
                  id="importance2"
                  value="orange"
                  onChange={this.handleChange}
                />
                <label htmlFor="importance2">중요</label>
                <input
                  type="radio"
                  name="importance"
                  id="importance3"
                  value="red"
                  onChange={this.handleChange}
                />
                <label htmlFor="importance3">매우중요</label>
                <input
                  type="text"
                  name="content"
                  placeholder="Content"
                  value={content}
                  onChange={this.handleChange}
                />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={title}
                  onChange={this.handleChange}
                />
                <textarea
                  type="text"
                  name="content"
                  placeholder="Content"
                  value={content}
                  onChange={this.handleChange}
                />
              </React.Fragment>
            )}
            <button type="submit">Registration</button>
            <button type="reset" onClick={this.handleReset}>
              Reset
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default InputForm;
