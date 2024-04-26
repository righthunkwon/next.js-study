import Link from 'next/link';
import { NextPage } from 'next';

// 파일명을 not-found.tsx로 설정하면
// next.js 프레임워크가 알아서 적절하지 않은 경로에 접근 시 해당 페이지를 띄워준다.
const Page404: NextPage = () => {
  return (
    <div>
      <div>이 페이지는 존재하지 않습니다. 다른 페이지를 검색해 보세요.</div>
      <Link href='/search'>검색</Link>
    </div>
  );
};

export default Page404;
