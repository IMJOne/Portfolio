import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  // 로컬 스토리지에 저장된 테마가 없다면 기본 테마로 세팅
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'basic');

  // 의존성 배열을 활용하여
  // theme state가 변경된 이후에 콜백함수를 동기적으로 실행
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}
