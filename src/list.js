import React from "react";

class List extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <ul
        style={{
          "list-style-type": "none",
          margin: 0,
          padding: 0
        }}
      >
        {this.props.items.map((listItems, index) => (
          <li
            className="alert alert-primary text-left"
            role="alert"
            key={index}
          >
            {listItems}

            <button
              onClick=""
              className="btn 
        btn-primary btn-sm float-right"
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default List;
