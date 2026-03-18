import React from "react";
import TodoList from "./Todolist";
import Timer from "./Timer"; // 방금 만든 Timer 컴포넌트를 불러옵니다.
import "./App.css";

function App() {
  return (
    <div className="container">
      {/* TodoList 컴포넌트 아래에 Timer 컴포넌트를 배치합니다. */}
      <TodoList />
      <hr /> {/* 화면을 구분하기 위해 얇은 선을 하나 추가했습니다. */}
      <Timer />
    </div>
  );
}

export default App;
