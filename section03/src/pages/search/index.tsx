import SearchableLayout from '@/components/searchable-layout';
import BookItem from '@/components/book-item';
import fetchBooks from '@/lib/fetch-books';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { BookData } from '@/types';

// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   // SSG 방식
//   // const q = context.query.q; // type 오류 → getStaticProps 에서는 context.query 프로퍼티가 존재하지 않음
//   const books = await fetchBooks(q as string);

//   return {
//     props: {
//       books
//     }
//   };
// };

// export default function Page({ books }: InferGetServerSidePropsType<typeof getServerSideProps>) {
export default function Page() {
  const [books, setBooks] = useState<BookData[]>([]); // 검색 결과를 저장

  const router = useRouter();
  const q = router.query.q;

  const fetchSearchResults = async () => {
    const data = await fetchBooks(q as string);
    setBooks(data);
  }
  
  useEffect(() => {
    if (q) {
      // 검색 결과를 불러오는 로직
      fetchSearchResults();
    }
  }, [q])

  return (
    <div>
      {
        books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))
      }
    </div>
  )
}

Page.getLayout = (page: React.ReactNode) => {
  return (
    <SearchableLayout>{page}</SearchableLayout>
  )
}