import styles from './page.module.css';
import Image from 'next/image';
// import zLogo from '../../public/zlogo.png';
import Link from 'next/link';

// Directory
// Next.js에서 프로젝트의 폴더명은 주소창에 표시되는 이름
// 만약 주소창에 관여하지 않는 그룹을 만들고 싶을 경우 ()안에 이름을 정의 후 폴더 생성
// 주소창에 관여하지 않는 그룹을 만들더라도 해당 폴더 내부에 layout.tsx를 정의해서 레이아웃은 생성 가능

// Page Router
// pages 폴더에 모든 웹사이트 페이지 컴포넌트 정의
// React와 달리 라우팅 설정을 하나도 하지 않아도 파일 구조를 활용해서 라우팅 가능

// App Router (Next.js 13 ↑, 현재 사용)
// 라우팅을 원하는 경로에 pages.tsx 파일을 생성하여 컴포넌트 정의
// 같은 폴더 내에 layout 파일을 생성하여 여러 페이지 간 UI 공유 가능
// 레이아웃의 경우 상태를 유지하고 해당 폴더 내에서 탐색할 때 다시 렌더링되지 않아 효율적

// RootPage
// app/page.tsx
// 웹 애플리케이션의 시작점이자 루트(/) 경로 페이지
// 다른 페이지의 경우 폴더를 만든 뒤 하위에 page.tsx를 만들어 url별 페이지 생성 가능
export default function Main() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>{/* <Image src={zLogo} alt='logo' /> */}</div>
      <div className={styles.right}>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>
        <Link href='/i/flow/signup' className={styles.signup}>
          계정 만들기
        </Link>
        <h3>이미 트위터에 가입하셨나요?</h3>
        <Link href='/login' className={styles.login}>
          로그인
        </Link>
      </div>
    </div>
  );
}
