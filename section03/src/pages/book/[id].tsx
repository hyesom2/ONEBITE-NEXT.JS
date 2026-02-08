import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import style from "./[id].module.css";
import fetchOneBook from '@/lib/fetch-one-book';

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const id = context.params!.id; // id값이 반드시 존재한다고 단언
  const book = await fetchOneBook(Number(id));

  return {
    props: {
      book,
    },
  }
}

export default function Page({ book } : InferGetServerSidePropsType<typeof getServerSideProps>) {
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