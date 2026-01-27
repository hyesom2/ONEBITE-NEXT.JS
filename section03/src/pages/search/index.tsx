import SearchableLayout from '@/components/searchable-layout';
import BookItem from '@/components/book-item';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import fetchBooks from '@/lib/fetch-books';

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  /* 
  예) http://localhost:3000/search?q=한입 인 경우 
  리스트링으로 전달된 검색어를 읽어와 이 검색어에 해당하는 데이터를 
  백엔드 서버로부터 불러오는 기능을 만들어야 한다.
  → getServerSideProps 함수에 전달되는 context 매개변수를 활용
  → context 매개변수 : 현재 브라우저로부터 받은 요청에 대한 모든 정보가 포함
 */
  // console.log(context.query.q);
  const q = context.query.q;
  const books = await fetchBooks(q as string);

  return {
    props: {
      books
    }
  };
};

export default function Page({ books }: InferGetServerSidePropsType<typeof getServerSideProps>) {
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