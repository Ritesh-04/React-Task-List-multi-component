import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./todo";
import { Provider } from "react-redux";
import "./styles.css";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoList />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
