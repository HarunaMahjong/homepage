import React, { useState } from "react"; // useState를 사용하기 위해 import
import "./App.css";

function App() {
  const [articleTitle, setArticleTitle] = useState("환영합니다."); // 초기 상태 설정
  const [articleContent, setArticleContent] = useState(
    "마작의 기초에 대해 배우실 수 있는 이 곳은 하루나 마작입니다."
  ); // 초기 상태 설정

  return (
    <div className="background-image">
      <div className="overlay"></div>
      <div style={{ position: "relative", zIndex: 2 }}>
        <div className="rounded-container">
          <Header
            title="하루나 마작"
            setArticleTitle={setArticleTitle}
            setArticleContent={setArticleContent}
          ></Header>
          <Nav
            setArticleTitle={setArticleTitle}
            setArticleContent={setArticleContent}
          />
          <Article title={articleTitle} content={articleContent} />
        </div>
      </div>
    </div>
  );
}

export default App;

function Header({ title, setArticleTitle, setArticleContent }) {
  return (
    <header
      style={{ marginTop: 0 }}
      onClick={() => {
        setArticleTitle("환영합니다.");
        setArticleContent(
          "마작 입문의 길잡이가 되어드리기 위한 하루나 마작입니다."
        );
      }}
    >
      <h1>
        <span style={{ color: "orange" }}>{title}</span>
      </h1>
    </header>
  );
}

function Nav({ setArticleTitle, setArticleContent }) {
  // setArticleTitle 함수를 props로 받음
  return (
    <nav>
      <ol>
        <strong>
          <li
            onClick={() => {
              setArticleTitle("리치마작에 대한 정보");
              setArticleContent(`하기된 링크에 들어가시면 리치마작을 즐기시는데 필요한 기본적인 정보를 얻으실 수 있습니다.
          <ul>
            <li><a href="https://namu.wiki/w/%EB%A6%AC%EC%B9%98%EB%A7%88%EC%9E%91" target="_blank" rel="noopener noreferrer">나무위키 리치마작 문서</a></li>
            <li><a href="https://cafe.naver.com/mahjongsoul/11310?tc=shared_link" target="_blank" rel="noopener noreferrer">리치 마작 표준서 <한 권으로 익히는 리치 마작> PDF본</a></li>
            <li><a href="https://www.youtube.com/playlist?list=PLE_LGlBjElbF7xkX0CZ3p3cN1xQN_Yqdn" target="_blank" rel="noopener noreferrer">일급천재의 리치마작 강의 유튜브</a></li>
          </ul>
          `);
            }}
          >
            리치마작에 대한 정보
          </li>
          <li
            onClick={() => {
              setArticleTitle("가진 패로 성립하는 역 알아보기");
              setArticleContent(
                "해당 기능은 추후 추가될 예정입니다. 죄송합니다!"
              );
            }}
          >
            가진 패로 성립하는 역 알아보기
          </li>
          <li
            onClick={() => {
              setArticleTitle("마작 커뮤니티 안내");
              setArticleContent(`하기된 링크에 들어가시면 리치마작을 즐기는 다른 사람들과 교류하거나 문답을 주고받을 수 있습니다.
          <ul>
            <li><a href="https://arca.live/b/majak" target="_blank" rel="noopener noreferrer">아카라이브 마작 채널</a></li>
            <li><a href="https://gall.dcinside.com/board/lists?id=majak" target="_blank" rel="noopener noreferrer">디시인사이드 마작 갤러리</a></li>
            <li><a href="https://namu.wiki/w/%EB%A7%88%EC%9E%91/%EC%BB%A4%EB%AE%A4%EB%8B%88%ED%8B%B0" target="_blank" rel="noopener noreferrer">기타 커뮤니티는 나무위키의 마작/커뮤니티 문서에서 보실 수 있습니다.</a></li>
          </ul>
          `);
            }}
          >
            마작 커뮤니티 안내
          </li>
        </strong>
      </ol>
    </nav>
  );
}

function Article({ title, content }) {
  return (
    <div>
      <h2>{title}</h2>
      <p dangerouslySetInnerHTML={{ __html: content }}></p>
    </div>
  );
}
