import "./App.css"; // 스타일을 적용하기 위해 불러옵니다.

/*
작성자 : 1ch
작성일 : 2030.5.30.
내용 : 기능에 대한 내용
*/

function App() {
  let name = "리액트";
  return (
    <div className="container">
      <h1 className="test">
        Hello,
        {name === "리액트" ? <h1>YES</h1> : null}!!
      </h1>
      {/* <p>반갑습니다.</p> */}
    </div>
  );
}

export default App;
