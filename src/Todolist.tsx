import React, { useState } from "react";
import TodoModal from "./TodoModal"; // 1. 방금 만든 모달 컴포넌트를 불러옵니다.

type Todo = {
  id: number;
  text: string;
  isChecked: boolean;
};

const TodoList: React.FC = () => {
  const title: string = "오늘 할일";

  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "공부하기", isChecked: false },
    { id: 2, text: "잠자기", isChecked: false },
    { id: 3, text: "미팅하기", isChecked: false },
  ]);

  // 2. 모달 창을 띄울지 말지 결정하는 스위치(state)입니다.
  const [showDetail, setShowDetail] = useState<boolean>(false);
  // 어떤 할 일을 클릭했는지 기억하는 저장소(state)입니다.
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

  // 3. 할 일 글씨를 클릭했을 때 실행될 함수입니다. (스위치를 켭니다!)
  const handleTodoClick = (todo: Todo) => {
    setShowDetail(true);
    setSelectedTodo(todo);
  };

  // 모달 창의 X 버튼을 눌렀을 때 실행될 함수입니다. (스위치를 끕니다!)
  const handleCloseDetail = () => {
    setShowDetail(false);
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-container">
      <h1>{title}</h1>

      <div className="input-group">
        <input type="text" placeholder="할일 입력" />
        <button className="add-btn">추가</button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" defaultChecked={todo.isChecked} />

            {/* 4. span 태그에 onClick 이벤트를 달아서 글씨를 누르면 handleTodoClick 함수가 실행되게 합니다. */}
            {/* 마우스를 올렸을 때 손가락 모양이 나오도록 cursor: 'pointer' 스타일도 추가했습니다. */}
            <span
              onClick={() => handleTodoClick(todo)}
              style={{ cursor: "pointer" }}
            >
              {todo.text}
            </span>

            <button className="delete-btn" onClick={() => removeTodo(todo.id)}>
              삭제
            </button>
          </li>
        ))}
      </ul>

      {/* 5. 화면 맨 아래에 모달 컴포넌트를 배치하고, 필요한 데이터들을 던져줍니다. */}
      <TodoModal
        show={showDetail}
        todo={selectedTodo}
        handleClose={handleCloseDetail}
      />
    </div>
  );
};

export default TodoList;
