import React, { useState, useEffect, useRef } from "react";
import useFadeIn from "./useFadeIn";

const App = () => {
  const fadeInH1 = useFadeIn(3, 2);
  const fadeInH3 = useFadeIn(5, 4);
  const fadeInP = useFadeIn();

  return (
    <div className="App">
      <h1 {...fadeInH1}>Hi u guys</h1>
      <h3 {...fadeInH3}>What ever u do~! What ever u want..!</h3>
      <p {...fadeInP}>
        이번 시즌 새롭게 선보인 맨시티 홈 키트의 저지는 앞면의 클래식 맨시티
        블루와 화이트 모자이크 패턴이 특징이며, 독특한 모자이크 패턴은 맨체스터
        지역에 있는 노던 쿼터(Northern Quarter)의 길거리를 장식한 모자이크
        벽화예술에서 영감 받았다. 모자이크 예술은 도시 맨체스터를 구성하는 축구,
        예술, 음악, 패션, 산업 등 다양한 문화의 뿌리가 노던 쿼터 특유의 활기
        넘치는 거리 예술, 인디 음악, 자유분방한 분위기의 바 등 창조적인 정신과
        결합해 탄생한 고유의 문화예술이다.
      </p>
    </div>
  );
};
export default App;
