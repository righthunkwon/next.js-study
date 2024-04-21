import { ReactNode } from 'react';

// 로그인 이후의 레이아웃
export default function AfterLoginLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      애프터 로그인 레이아웃
      {children}
    </div>
  );
}
