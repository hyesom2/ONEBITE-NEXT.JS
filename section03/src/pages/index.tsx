// CSS Module
import SearchableLayout from '@/components/searchable-layout';
import styles from './index.module.css';
// import books from '@/mock/books.json';
import BookItem from '@/components/book-item';
// import { useEffect } from 'react';
import { InferGetServerSidePropsType } from 'next';
import fetchBooks from '@/lib/fetch-books';
import fetchRandomBooks from '@/lib/fetch-random-books';

export const getServerSideProps = async () => {
  // const allBooks = await fetchBooks();
  // const recoBooks = await fetchRandomBooks();
  // 참고) 요청이 먼저 모든 도서를 가져오고, 그 다음에 해당 도서를 가져오도록 순차적(직렬적인 방식)으로 동작한다.

  const [allBooks, recoBooks] = await Promise.all([
    fetchBooks(),
    fetchRandomBooks(),
  ]);
  // 참고) Promise.all 메서드 : 인수로 전달된 배열 안에 들어있는 모든 비동기 함수들을 동시에 실행시켜주는 메서드 → 병렬적인 방식으로 동작한다.

  return {
    props: {
      allBooks,
      recoBooks,
    },
  };
};

export default function Home({ allBooks, recoBooks }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className={styles.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {recoBooks.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>  
      <section>
        <h3>등록된 모든 도서</h3>
        {allBooks.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </div>
  )
}

Home.getLayout = (page: React.ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>
};