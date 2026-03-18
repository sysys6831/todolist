import React, { useState } from "react";

// Todo 데이터의 형태(타입)를 정의합니다.
type Todo = {
  id: number;
  text: string;
  isChecked: boolean;
};

const TodoList: React.FC = () => {
  const title: string = "오늘 할일";

  // 상태를 객체 형태의 배열로 관리합니다.
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "공부하기", isChecked: false },
    { id: 2, text: "잠자기", isChecked: false },
    { id: 3, text: "미팅하기", isChecked: false },
  ]);

  // 삭제 기능: 클릭한 항목의 id와 다른 항목들만 필터링하여 상태를 업데이트합니다.
  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>{title}</h1>

      <div>
        <input type="text" placeholder="할일 입력" />
        <button>추가</button>
      </div>

      <p></p>

      <div className="container">
        <ul style={{ listStyle: "none", padding: 0 }}>
          {/* 배열의 map 함수를 사용하여 리스트를 화면에 출력합니다. */}
          {todos.map((todo) => (
            <li key={todo.id} style={{ marginBottom: "10px" }}>
              <input type="checkbox" defaultChecked={todo.isChecked} />
              <span style={{ margin: "0 10px" }}>{todo.text}</span>
              {/* 버튼 클릭 시 removeTodo 함수에 해당 항목의 id를 전달합니다. */}
              <button
                onClick={() => removeTodo(todo.id)}
                style={{
                  color: "red",
                  border: "1px solid red",
                  backgroundColor: "white",
                  padding: "2px 5px",
                  cursor: "pointer",
                }}
              >
                삭제
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
