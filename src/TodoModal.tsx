import React from "react";
import { Modal } from "react-bootstrap"; // 사진의 태그를 쓰기 위해 필요한 라이브러리입니다.

// 1. Todo 데이터의 형태를 정의합니다.
type Todo = {
  text: string;
  isChecked: boolean;
};

// 2. 부모 컴포넌트에게서 전달받을 Props의 형태를 정의합니다.
type TodoModalProps = {
  show: boolean;
  todo: Todo | null;
  handleClose: () => void;
};

// 3. 모달 컴포넌트를 만듭니다.
const TodoModal: React.FC<TodoModalProps> = ({ show, todo, handleClose }) => {
  return (
    <div>
      {/* centered 속성을 주면 화면 한가운데에 모달이 뜹니다. */}
      <Modal show={show} onHide={handleClose} centered>
        {/* 모달의 머리(제목) 부분입니다. closeButton은 우측 상단의 X 버튼을 만들어 줍니다. */}
        <Modal.Header closeButton>
          <Modal.Title>Todo 상세 정보</Modal.Title>
        </Modal.Header>

        {/* 모달의 몸통(내용) 부분입니다. 클릭한 할 일의 텍스트를 보여줍니다. */}
        <Modal.Body>{todo?.text}</Modal.Body>
      </Modal>
    </div>
  );
};

export default TodoModal;
