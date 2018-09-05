import React, { Component } from "react";
import List from "./list";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      listItems: []
    };
  }

  onChange = event => {
    this.setState({ inputText: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({
      inputText: "",
      listItems: [...this.state.listItems, this.state.inputText]
    });
  };

  render() {
    return (
      <div className="col-sm-12">
        <p>Task List</p>
        <form className="input-group" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Task Name"
            value={this.state.inputText}
            onChange={this.onChange}
            required="true"
          />
          <div className="input-group-append">
            <button
              className="btn 
              btn-outline-primary"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
        <br />
        <List items={this.state.listItems} />
      </div>
    );
  }
}

export default Todo;
