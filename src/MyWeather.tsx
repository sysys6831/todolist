import React, { Component } from "react";

interface MyProps {
  weather: string;
  children: React.ReactNode;
}

class MyWeather extends Component<MyProps> {
  render() {
    const { children, weather } = this.props;

    return (
      <div>
        {children}
        <p></p>
        오늘의 날씨는 {weather} 입니다.
      </div>
    );
  }
}

export default MyWeather;
