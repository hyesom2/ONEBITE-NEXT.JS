import SearchableLayout from '@/components/searchable-layout';
import { useRouter } from 'next/router';

export default function Page() {
  const router = useRouter();
  const { q } = router.query; // 구조분해할당 또는 const q = router.query.q;

  return (
    <h1>Search 페이지의 쿼리 스트링 : { q }</h1>
  )
}

Page.getLayout = (page: React.ReactNode) => {
  return (
    <SearchableLayout>{page}</SearchableLayout>
  )
}