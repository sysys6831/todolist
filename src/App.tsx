import React from "react";
import TodoList from "./Todolist";
import Timer from "./Timer";
import "./App.css";
import MyWeather from "./MyWeather";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container">
      {/* 1. 투두리스트 */}
      <TodoList />

      <hr />

      {/* 2. 타이머 */}
      <Timer />

      <hr />

      {/* 3. 일기예보 */}
      <MyWeather weather="맑음">일기예보</MyWeather>
    </div>
  );
}

export default App;
