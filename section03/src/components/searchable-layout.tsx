import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import styles from '@/components/searchable-layout.module.css';

export default function SearchableLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [search, setSearch] = useState('');

  const q = router.query.q as string;

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  const onSubmit = () => {
    if (!search || q === search) return;
    router.push(`/search?q=${search}`);
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  }

  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  return (
    <div>
      <div className={styles.searchbar_container}>
        <input
          type="text"
          placeholder="검색어를 입력하세요..."
          value={search}
          onChange={onChangeSearch}
          onKeyDown={onKeyDown}
        />
        <button type="button" onClick={onSubmit}>검색</button>
      </div>
      {children}
    </div>
  )
}