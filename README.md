![vscode](https://user-images.githubusercontent.com/110226567/220018546-eebbfa96-726e-45a8-8739-9f9094bc7a06.png)

# ✨ VSCode Portfolio

비주얼 스튜디오 코드 컨셉 포트폴리오 사이트 👉 [Demo](https://jone-vscode-portfolio.netlify.app)

<br />

## 📢 프로젝트 개요

본격적으로 취업 준비를 시작하며 가장 먼저 고민한 것이 포트폴리오 사이트의 컨셉이었습니다.<br />
어딜 가나 흔히 볼 수 있는 레이아웃이 아닌 나만의 스타일로 독특하게 제작하고 싶어 계속 고민하던 와중,<br />
개발자라면 매일 보는 에디터인 비주얼 스튜디오 코드 컨셉으로 만들어보면 좋을 것 같다는 생각이 들어 제작하게 되었습니다.



<br />

## 🗨️ 사용 기술

<p>
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/>
  <img src="https://img.shields.io/badge/PostCSS-DD3A0A?style=flat-square&logo=PostCSS&logoColor=white"/>
</p>

<br />

## 📋 주요 기능

- SPA의 효과를 극대화한 라우터 탭 메뉴
- 메인 페이지 텍스트 타이핑 애니메이션
- 카테고리별 프로젝트 리스트 필터링
- 이메일 및 전화번호 클립보드 복사 기능
- 복사 완료 메시지를 담은 토스트 팝업창
- 사이트 테마 변경 (베이직 / 드라큘라)

<br />

## 💻 소스 코드

전체 코드 보러 가기 👉 [Notion](https://imjone.notion.site/Portfolio-VSCode-ver-06aff04aff4b491aa502af98ba8ba6d6?pvs=4)

### 📍 텍스트 타이핑 애니메이션

텍스트를 한 글자씩 나타내기 위해 `split()` 함수를 사용해서 문자열을 배열로 만들어주었습니다.<br />
`shift()`와 `setInterver()` 함수를 통해 배열의 가장 앞에 있는 문자부터 하나씩 더해져서 출력됩니다.

```javascript
// Home.jsx

const [title, setTitle] = useState('');
const [count, setCount] = useState(0); // 문자열의 index를 나타낼 상태값
const completed = 'Hello Jung-Won World!';

useEffect(() => {
  const typingInterval = setInterval(() => {
    setTitle(title + completed[count]);
    setCount(count + 1);
  }, 60);
  if (count === completed.length) clearInterval(typingInterval);
  return () => clearInterval(typingInterval);
});
```

### 📍 프로젝트 리스트 필터링

카테고리를 관리할 `state`를 만들어서 선택된 카테고리를 현재의 상태로 업데이트하고,<br />
미리 정의해둔 프로젝트 리스트 배열을 순회하며 카테고리와 일치하는 원소들만 필터링합니다.

```javascript
// Projects.jsx

const [filter, setFilter] = useState('all');
const categories = ['all', 'web', 'mobile', 'toy'];

const getProjectCount = category => {
  if (category === 'all') return projectList.length;
  return projectList.filter(project => project.category === category).length;
};
const getFilteredList = () => {
  if (filter === 'all') return projectList;
  return projectList.filter(project => project.category === filter);
};
```

### 📍 사이트 테마 변경

Context API를 사용하여 사이트의 테마를 전역적으로 변경합니다.<br />
변경 사항은 로컬 스토리지에 저장되며, 따로 저장된 테마가 없다면 기본 테마로 세팅됩니다.<br />
의존성 배열을 활용하여 `theme` state가 변경된 이후에 콜백함수를 동기적으로 실행되도록 하였습니다.

```javascript
export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'basic');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
	);
}
```

<br />

## 😊 배운 점 및 느낀 점

- 나라는 사람을 나타낼 수 있는 포트폴리오 사이트를 제작하며 그동안의 시간을 되돌아볼 수 있는 값진 경험이었습니다.
- 지금까지 진행해온 프로젝트들을 취합하는 과정에서 가독성 좋게 정리할 수 있는 나만의 요령을 터득할 수 있었습니다.
- Clipboard API를 사용하면서, Web API의 종류는 정말 다양하며 아는 것이 힘이다 라는 점을 다시 한 번 느꼈습니다.
