import React, { Component } from "react";

import "./search.css";

class Search extends Component {
  static defaultProps = {
    onChange: () => console.log("onChangeを見つかりません。")
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.props.onChange(name, value);
  };

  render() {
    const { keyword } = this.props;
    return (
      <React.Fragment>
        <h1>Todo List</h1>
        <select
          name="filter"
          className="TodoListFilter"
          onChange={this.handleChange}
        >
          <option value="" />
          <option value="skyblue">普通</option>
          <option value="orange">重要</option>
          <option value="red">必</option>
          <option value="complete">完了</option>
        </select>
        <input
          type="search"
          name="keyword"
          value={keyword}
          onChange={this.handleChange}
          placeholder="検索"
        />
      </React.Fragment>
    );
  }
}
export default Search;
