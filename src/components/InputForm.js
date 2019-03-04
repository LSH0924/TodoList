import React, { Component } from "react";
import "./InputForm.css";

class InputForm extends Component {
  static defaultProps = {
    inputType: "",
    onRegist: () =>
      console.log("Error: this.props에서 onRegist을 찾을 수 없습니다."),
    onClick: () =>
      console.log("Error: this.props에서 onClick을 찾을 수 없습니다.")
  };

  /** importance skyblue : normal / orange : importante / red : very importante */
  state = {
    importance: "skyblue",
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

    //  content 입력확인
    if (this.state.content === "") {
      alert("Content is Empty");
      return false;
    }

    // 리스트로 데이터 보내기. 등록작업
    this.props.onRegist(this.state);

    // state값 초기화
    this.setState({
      content: ""
    });

    this.handleShow();
  };

  handleShow = e => this.props.onClick();

  render() {
    return (
      <div className="BackgroundInpufForm" onClick={this.handleShow}>
        <div className="InputForm" onClick={e => e.stopPropagation()}>
          <form onSubmit={this.handleSubmit}>
            <React.Fragment>
              <label>重要度 : </label>
              <label htmlFor="importance1" className="Radio">
                <input
                  type="radio"
                  name="importance"
                  id="importance1"
                  value="skyblue"
                  onChange={this.handleChange}
                />
                普通
              </label>
              <label htmlFor="importance2" className="Radio">
                <input
                  type="radio"
                  name="importance"
                  id="importance2"
                  value="orange"
                  onChange={this.handleChange}
                />
                　重要
              </label>
              <label htmlFor="importance3" className="Radio">
                <input
                  type="radio"
                  name="importance"
                  id="importance3"
                  value="red"
                  onChange={this.handleChange}
                />
                必
              </label>
              <input
                type="text"
                name="content"
                placeholder="Content"
                value={this.state.content}
                onChange={this.handleChange}
              />
            </React.Fragment>
            <button type="submit">登録</button>
          </form>
        </div>
      </div>
    );
  }
}

export default InputForm;
