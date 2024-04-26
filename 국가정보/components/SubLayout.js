import style from './SubLayout.module.css';

export default function SubLayout({ children }) {
  return (
    <>
      {children}
      <footer className={style.footer}>@2024지구촌🌏</footer>
    </>
  );
}
