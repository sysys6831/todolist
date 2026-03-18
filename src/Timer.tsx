import React, { useState, useEffect } from "react";

const Timer: React.FC = () => {
  const [time, setTime] = useState(new Date());

  // useEffect를 사용해서 타이머가 1초마다 한 번씩만 안전하게 실행되도록 설정합니다.
  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // 컴포넌트가 화면에서 사라질 때 타이머를 꺼주는 정리(cleanup) 기능입니다.
    return () => clearInterval(timerId);
  }, []);

  return <div>현재 시간 : {time.toLocaleTimeString()}</div>;
};

export default Timer;
