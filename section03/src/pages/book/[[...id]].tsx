import { useRouter } from 'next/router'

export default function Page() {
  const router = useRouter();
  const { id } = router.query; // 구조분해할당 또는 const id = router.query.id;

  return (
    <h1>Book 페이지의 URL파라미터 : { id }</h1>
  )
}