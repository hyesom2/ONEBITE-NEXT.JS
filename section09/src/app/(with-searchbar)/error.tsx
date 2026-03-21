'use client';

import { useRouter } from 'next/navigation';
import { startTransition, useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void; }) {
  const router = useRouter();

  useEffect(() => {
    console.error(error.message);
  }, [error]);
  
  return (
    <div>
      <h3>오류가 발생했습니다.</h3>
      {/* <button onClick={() => reset()}>다시 시도</button> */}
      {/* <button onClick={() => window.location.reload()}>다시 시도</button> */}
      <button onClick={() => {
        startTransition(() => {
          router.refresh(); // 현재 페이지에 필요한 Server Component들을 다시 불러옴
          reset(); // error 상태를 초기화, 컴포넌트들을 다시 렌더링
        });
      }}>다시 시도</button>
    </div>
  )
}