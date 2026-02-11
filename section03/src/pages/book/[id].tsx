import { GetStaticPropsContext, InferGetServerSidePropsType } from 'next';
import style from "./[id].module.css";
import fetchOneBook from '@/lib/fetch-one-book';

export const getStaticPaths = () => {
  return {
    // 현재 이 페이지에 어떠한 URL 파라미터들이 존재할 수 있는지 → 어떠한 경로들이 존재할 수 있는지 배열로 반환
    path: [
      { params: { id: '1'}}, // URL 파라미터는 무조건 "문자열"
      { params: { id: '2'}},
      { params: { id: '3'}},
    ],
    // 대체, 대비책 옵션 (없는 경로로 요청시)
    fallback: false // false: 존재하지 않는 경로에 대한 요청은 404 오류를 반환
    // fallback: blocking → blocking: 즉시 생성 (Link SSR)
    // fallback: true → true: 즉시 생성 + 페이지만 미리 반환
  }
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params!.id;
  const book = await fetchOneBook(Number(id));

  return {
    props: {
      book,
    },
  }
}

export default function Page({ book } : InferGetServerSidePropsType<typeof getStaticProps>) {
  if (!book) return "책 정보를 불러오는 데 오류가 발생했습니다.";
  
  const {
    id,
    title,
    subTitle,
    description,
    author,
    publisher,
    coverImgUrl,
  } = book;

  return (
    <div className={style.container}>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url('${coverImgUrl}')` }}
      >
        <img src={coverImgUrl} alt={title} />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>
        {author} | {publisher}
      </div>
      <div className={style.description}>{description}</div>
    </div>
  );
}