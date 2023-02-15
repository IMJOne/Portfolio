import { SiRedux, SiTailwindcss } from 'react-icons/si';
import { BsBootstrapFill } from 'react-icons/bs';
import { FaSass } from 'react-icons/fa';

import HtmlIcon from '../icons/HtmlIcon';
import CssIcon from '../icons/CssIcon';
import JavaScriptIcon from '../icons/JavaScriptIcon';
import ReactIcon from '../icons/ReactIcon';
import PostCssIcon from '../icons/PostCssIcon';
import FirebaseIcon from '../icons/FirebaseIcon';

import { RxGithubLogo, RxNotionLogo, RxFigmaLogo } from 'react-icons/rx';
import { MdDesktopWindows } from 'react-icons/md';

export const projectList = [
  {
    category: 'web',
    image: 'images/vscode.png',
    title: 'VSCode Portfolio',
    description: '비주얼 스튜디오 코드 컨셉의 포트폴리오 사이트입니다. 취향에 따라 Dracula 테마로 변경이 가능합니다.',
    skills: [
      { Icon: ReactIcon, name: 'React' },
      { Icon: PostCssIcon, name: 'PostCSS' },
      { Icon: FirebaseIcon, name: 'Firebase' },
    ],
    links: [
      {
        Icon: RxGithubLogo,
        name: 'Github',
        url: '#',
      },
      {
        Icon: MdDesktopWindows,
        name: 'Demo',
        url: '#',
      },
      {
        Icon: RxFigmaLogo,
        name: 'Figma',
        url: 'https://www.figma.com/proto/9DLDm5AkSNwldlbeTGOOQW/Portfolio?node-id=10%3A1555&scaling=contain&page-id=0%3A1&starting-point-node-id=10%3A1555',
      },
    ],
  },
  {
    category: 'web',
    image: 'images/blog.png',
    title: 'My Blog',
    description: '나만의 개발 블로그 사이트입니다. Toast UI Editor를 활용하여 포스트 내용을 마크다운 형태로 표현하였습니다.',
    skills: [
      { Icon: ReactIcon, name: 'React' },
      { Icon: SiRedux, color: '#764abc', name: 'Redux Toolkit' },
      { Icon: FirebaseIcon, name: 'Firebase' },
    ],
    links: [
      {
        Icon: RxGithubLogo,
        name: 'Github',
        url: 'https://github.com/IMJOne/my-blog',
      },
      {
        Icon: MdDesktopWindows,
        name: 'Demo',
        url: 'https://jone-dev-blog.netlify.app/',
      },
      {
        Icon: RxNotionLogo,
        name: 'Notion',
        url: 'https://www.notion.so/imjone/Blog-1069c963a9d646368e3415bff6739ac7?pvs=4',
      },
    ],
  },
  {
    category: 'web',
    image: 'images/lacoste.png',
    title: 'Lacoste',
    description: '라코스테 쇼핑몰 사이트입니다. 로그인 및 로그아웃, 제품 상세 보기, 장바구니 추가 등이 가능합니다.',
    skills: [
      { Icon: ReactIcon, name: 'React' },
      { Icon: SiTailwindcss, color: '#06b6d4', name: 'Tailwind' },
      { Icon: FirebaseIcon, name: 'Firebase' },
    ],
    links: [
      {
        Icon: RxGithubLogo,
        name: 'Github',
        url: 'https://github.com/IMJOne/lacoste',
      },
      {
        Icon: MdDesktopWindows,
        name: 'Demo',
        url: 'https://jone-lacoste.netlify.app/',
      },
      {
        Icon: RxNotionLogo,
        name: 'Notion',
        url: 'https://www.notion.so/imjone/Lacoste-9d78c5adf550498580463c0f9d0d82eb?pvs=4',
      },
    ],
  },
  {
    category: 'web',
    image: 'images/youtube.png',
    title: 'YouTube',
    description: '유튜브 클론 코딩 사이트입니다. 동영상 검색/재생 및 연관된 동영상/댓글 목록 조회가 가능합니다.',
    skills: [
      { Icon: ReactIcon, name: 'React' },
      { Icon: SiTailwindcss, color: '#06b6d4', name: 'Tailwind' },
      { Icon: FirebaseIcon, name: 'Firebase' },
    ],
    links: [
      {
        Icon: RxGithubLogo,
        name: 'Github',
        url: 'https://github.com/IMJOne/youtube',
      },
      {
        Icon: MdDesktopWindows,
        name: 'Demo',
        url: 'https://jone-youtube.netlify.app/',
      },
      {
        Icon: RxNotionLogo,
        name: 'Notion',
        url: 'https://www.notion.so/imjone/Youtube-ad0edcc0e5924199a9e4962f6c298b9b?pvs=4',
      },
    ],
  },
  {
    category: 'toy',
    image: 'images/diary.png',
    title: 'Emotion Diary',
    description: '오늘의 감정을 함께 기록할 수 있는 감정 일기장입니다. 일기 추가/수정/삭제/저장이 가능합니다.',
    skills: [
      { Icon: ReactIcon, name: 'React' },
      { Icon: PostCssIcon, name: 'PostCSS' },
      { Icon: FirebaseIcon, name: 'Firebase' },
    ],
    links: [
      {
        Icon: RxGithubLogo,
        name: 'Github',
        url: 'https://github.com/IMJOne/emotion-diary',
      },
      {
        Icon: MdDesktopWindows,
        name: 'Demo',
        url: 'https://emotion-diary-jone.web.app/',
      },
      {
        Icon: RxNotionLogo,
        name: 'Notion',
        url: 'https://www.notion.so/imjone/Emotion-diary-8a01a0f8e2fd43e2b84576eb631f6fb2',
      },
    ],
  },
  {
    category: 'toy',
    image: 'images/todo-react.png',
    title: 'Todo List (React)',
    description: '리액트 버전 투두 리스트입니다. 진행 상황 필터링 및 다크모드 기능이 새롭게 추가되었습니다.',
    skills: [
      { Icon: ReactIcon, name: 'React' },
      { Icon: PostCssIcon, name: 'PostCSS' },
    ],
    links: [
      {
        Icon: RxGithubLogo,
        name: 'Github',
        url: 'https://github.com/IMJOne/to-do-react',
      },
      {
        Icon: MdDesktopWindows,
        name: 'Demo',
        url: 'https://jone-to-do.netlify.app/',
      },
      {
        Icon: RxNotionLogo,
        name: 'Notion',
        url: 'https://www.notion.so/imjone/React-TO-DO-LIST-bd42d365689243d0b7547d115cefee7b',
      },
    ],
  },
  {
    category: 'toy',
    image: 'images/tetris.png',
    title: 'Tetris',
    description: '바닐라 자바스크립트로 제작한 테트리스 게임입니다. 배열과 구조 분해 할당을 통해 블럭들을 관리합니다.',
    skills: [
      { Icon: HtmlIcon, name: 'HTML' },
      { Icon: CssIcon, name: 'CSS' },
      { Icon: JavaScriptIcon, name: 'JavaScript' },
    ],
    links: [
      {
        Icon: RxGithubLogo,
        name: 'Github',
        url: 'https://github.com/IMJOne/tetris',
      },
      {
        Icon: MdDesktopWindows,
        name: 'Demo',
        url: 'https://imjone.github.io/tetris/',
      },
      {
        Icon: RxFigmaLogo,
        name: 'Figma',
        url: 'https://www.notion.so/imjone/2d36893b850046a882a20f1f0451a029',
      },
    ],
  },
  {
    category: 'toy',
    image: 'images/fish.png',
    title: 'Catch the fish!',
    description: '바닐라 자바스크립트로 제작한 미니 게임입니다. 클래스 문법을 통해 함수들을 기능별로 모듈화하였습니다.',
    skills: [
      { Icon: HtmlIcon, name: 'HTML' },
      { Icon: CssIcon, name: 'CSS' },
      { Icon: JavaScriptIcon, name: 'JavaScript' },
    ],
    links: [
      {
        Icon: RxGithubLogo,
        name: 'Github',
        url: 'https://github.com/IMJOne/catch-the-fish',
      },
      {
        Icon: MdDesktopWindows,
        name: 'Demo',
        url: 'https://imjone.github.io/catch-the-fish/',
      },
      {
        Icon: RxNotionLogo,
        name: 'Notion',
        url: 'https://www.notion.so/imjone/0f2e6609e83d43e2838d933a9c9c5b39',
      },
    ],
  },
  {
    category: 'toy',
    image: 'images/paint.png',
    title: 'Paint app',
    description: '바닐라 자바스크립트로 제작한 미니 그림판입니다. 사용자의 눈을 보호하기 위한 다크모드를 지원합니다.',
    skills: [
      { Icon: HtmlIcon, name: 'HTML' },
      { Icon: CssIcon, name: 'CSS' },
      { Icon: JavaScriptIcon, name: 'JavaScript' },
    ],
    links: [
      {
        Icon: RxGithubLogo,
        name: 'Github',
        url: 'https://github.com/IMJOne/paint-app',
      },
      {
        Icon: MdDesktopWindows,
        name: 'Demo',
        url: 'https://imjone.github.io/paint-app/',
      },
      {
        Icon: RxNotionLogo,
        name: 'Notion',
        url: 'https://www.notion.so/imjone/3b7fa527999141cbbe0b2885a43fed05',
      },
    ],
  },
  {
    category: 'toy',
    image: 'images/lovetype.png',
    title: 'Twelve love type',
    description: '12가지 연애 유형 심리테스트 사이트입니다. 결과 화면을 카카오톡으로 공유할 수 있습니다.',
    skills: [
      { Icon: HtmlIcon, name: 'HTML' },
      { Icon: CssIcon, name: 'CSS' },
      { Icon: JavaScriptIcon, name: 'JavaScript' },
      { Icon: BsBootstrapFill, color: '#7952b3', name: 'Bootstrap' },
    ],
    links: [
      {
        Icon: RxGithubLogo,
        name: 'Github',
        url: 'https://github.com/IMJOne/twelvelovetype',
      },
      {
        Icon: MdDesktopWindows,
        name: 'Demo',
        url: 'https://imjone.github.io/twelvelovetype/',
      },
      {
        Icon: RxNotionLogo,
        name: 'Notion',
        url: 'https://www.notion.so/imjone/1889c7cd3b084a5ba8196bf05de98ffb',
      },
    ],
  },
  {
    category: 'toy',
    image: 'images/todo.png',
    title: 'TO-DO List',
    description: '심플 투두 리스트입니다. 추가/삭제된 리스트들이 로컬 스토리지에 저장됩니다.',
    skills: [
      { Icon: HtmlIcon, name: 'HTML' },
      { Icon: CssIcon, name: 'CSS' },
      { Icon: JavaScriptIcon, name: 'JavaScript' },
    ],
    links: [
      {
        Icon: RxGithubLogo,
        name: 'Github',
        url: 'https://github.com/IMJOne/to-do-list',
      },
      {
        Icon: MdDesktopWindows,
        name: 'Demo',
        url: 'https://imjone.github.io/to-do-list/',
      },
      {
        Icon: RxNotionLogo,
        name: 'Notion',
        url: 'https://www.notion.so/imjone/d5d802305fa6461b8c3b410fa96528e6',
      },
    ],
  },
  {
    category: 'web',
    image: 'images/apple.png',
    title: 'Apple',
    description: 'Apple iPad 소개 페이지입니다. 별도의 라이브러리 사용 없이 바닐라 자바스크립트로 제작되었습니다.',
    skills: [
      { Icon: HtmlIcon, name: 'HTML' },
      { Icon: CssIcon, name: 'CSS' },
      { Icon: JavaScriptIcon, name: 'JavaScript' },
    ],
    links: [
      {
        Icon: RxGithubLogo,
        name: 'Github',
        url: 'https://github.com/IMJOne/apple',
      },
      {
        Icon: MdDesktopWindows,
        name: 'Demo',
        url: 'https://imjone.github.io/apple/',
      },
      {
        Icon: RxNotionLogo,
        name: 'Notion',
        url: 'https://www.notion.so/imjone/Apple-com-ba7b279ed3c643eb88a3439cb004d3c3',
      },
    ],
  },
  {
    category: 'mobile',
    image: 'images/starbucks.png',
    title: 'Starbucks',
    description: 'Starbucks PWA 리뉴얼 사이트입니다. 매장 지도 및 메뉴 검색 등의 기능이 구현되어 있습니다.',
    skills: [
      { Icon: HtmlIcon, name: 'HTML' },
      { Icon: CssIcon, name: 'CSS' },
      { Icon: JavaScriptIcon, name: 'JavaScript' },
    ],
    links: [
      {
        Icon: RxGithubLogo,
        name: 'Github',
        url: 'https://github.com/IMJOne/starbucks',
      },
      {
        Icon: MdDesktopWindows,
        name: 'Demo',
        url: 'https://imjone.github.io/starbucks/',
      },
      {
        Icon: RxFigmaLogo,
        name: 'Figma',
        url: 'https://www.figma.com/proto/ff4zKrR8CIZ3iIMb3aPndB/Starbucks?node-id=1%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2',
      },
    ],
  },
  {
    category: 'mobile',
    image: 'images/beartalk.png',
    title: 'Bear Talk',
    description: '카카오톡 디자인을 참고하여 제작한 베어톡입니다. SCSS를 사용하여 빠르게 스타일링 하였습니다.',
    skills: [
      { Icon: HtmlIcon, name: 'HTML' },
      { Icon: FaSass, color: '#cc6699', name: 'SCSS' },
      { Icon: JavaScriptIcon, name: 'JavaScript' },
    ],
    links: [
      {
        Icon: RxGithubLogo,
        name: 'Github',
        url: 'https://github.com/IMJOne/bear-talk',
      },
      {
        Icon: MdDesktopWindows,
        name: 'Demo',
        url: 'https://imjone.github.io/bear-talk/',
      },
      {
        Icon: RxNotionLogo,
        name: 'Notion',
        url: 'https://www.notion.so/imjone/BearTalk-31aa513be24941818f2ee5c65ec71eef',
      },
    ],
  },
  {
    category: 'web',
    image: 'images/portfolio.png',
    title: 'Portfolio (2021 ver)',
    description: '저의 첫 포트폴리오 사이트입니다. 스크롤값을 감시하며 현재 섹션에 따라 메뉴가 활성화됩니다.',
    skills: [
      { Icon: HtmlIcon, name: 'HTML' },
      { Icon: CssIcon, name: 'CSS' },
      { Icon: JavaScriptIcon, name: 'JavaScript' },
    ],
    links: [
      {
        Icon: RxGithubLogo,
        name: 'Github',
        url: 'https://github.com/IMJOne/notion',
      },
      {
        Icon: MdDesktopWindows,
        name: 'Demo',
        url: 'https://imjone.github.io/notion/',
      },
      {
        Icon: RxNotionLogo,
        name: 'Notion',
        url: 'https://www.notion.so/imjone/Notion-7260e6b7c68e467995630c2e52b664d5',
      },
    ],
  },
  {
    category: 'web',
    image: 'images/notion.png',
    title: 'Notion',
    description: 'Notion 공식 웹사이트를 클론 코딩했습니다. 모바일과 PC 모두 보기 편하도록 반응형으로 제작되었습니다.',
    skills: [
      { Icon: HtmlIcon, name: 'HTML' },
      { Icon: CssIcon, name: 'CSS' },
      { Icon: JavaScriptIcon, name: 'JavaScript' },
    ],
    links: [
      {
        Icon: RxGithubLogo,
        name: 'Github',
        url: 'https://github.com/IMJOne/notion',
      },
      {
        Icon: MdDesktopWindows,
        name: 'Demo',
        url: 'https://imjone.github.io/notion/',
      },
      {
        Icon: RxNotionLogo,
        name: 'Notion',
        url: 'https://www.notion.so/imjone/Notion-7260e6b7c68e467995630c2e52b664d5',
      },
    ],
  },
  {
    category: 'web',
    image: 'images/binggrae.png',
    title: 'Binggrae',
    description: '빙그레 공식 웹사이트를 클론 코딩했습니다. 모바일과 PC 모두 보기 편하도록 반응형으로 제작되었습니다.',
    skills: [
      { Icon: HtmlIcon, name: 'HTML' },
      { Icon: CssIcon, name: 'CSS' },
      { Icon: JavaScriptIcon, name: 'JavaScript' },
    ],
    links: [
      {
        Icon: RxGithubLogo,
        name: 'Github',
        url: 'https://github.com/IMJOne/notion',
      },
      {
        Icon: MdDesktopWindows,
        name: 'Demo',
        url: 'https://imjone.github.io/notion/',
      },
      {
        Icon: RxNotionLogo,
        name: 'Notion',
        url: 'https://www.notion.so/imjone/Notion-7260e6b7c68e467995630c2e52b664d5',
      },
    ],
  },
];
