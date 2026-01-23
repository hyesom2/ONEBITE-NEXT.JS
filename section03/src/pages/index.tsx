// CSS Module
import SearchableLayout from '@/components/searchable-layout';
import styles from './index.module.css';
import books from '@/mock/books.json';
import BookItem from '@/components/book-item';
import { useEffect } from 'react';
import { InferGetServerSidePropsType } from 'next';

// Next.js는 페이지 역할을 하는 파일 안에 `getServerSideProps`같은 Next.js에서 약속된 이름의 함수를 만들어서 export하면 해당 페이지는 이제부터 SSR로 동작하도록 자동으로 설정
// 컴포넌드보다 먼저 실행이 되어서, 컴포넌트에 필요한 데이터 불러오는 함수
export const getServerSideProps = () => {
  // 예) window.location, window.alert
  // 오류 발쌩 : window is not defined → 서버사이드에서는 window 객체가 없음
  // 함수 내부 에서는 브라우저에서만 동작하는 코드를 사용할 수 없음
  
  console.log('서버사이드프롭스 입니다.');

  const data = 'hello';

  return {
    props: {
      data,
    }
  };
}

export default function Home({ data } : InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(data);

  useEffect(() => {
    console.log(window);
  }, []);

  return (
    <div className={styles.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </div>
  )
}

Home.getLayout = (page: React.ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>
};