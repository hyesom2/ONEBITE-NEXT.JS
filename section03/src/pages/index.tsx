// CSS Module
import SearchableLayout from '@/components/searchable-layout';
import styles from './index.module.css';

export default function Home() {
  return (
    <>
      {/* <h1 style={{ color: 'red' }}> */}
      <h1 className={styles.h1}>index 페이지</h1>
      <h2 className={styles.h2}>H2 입니다.</h2>
    </>
  )
}

Home.getLayout = (page: React.ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>
};