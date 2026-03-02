'use client';

import { useState } from 'react'

export default function Searchbar() {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={onChangeSearch}
      />
      <button type="button">검색</button>
    </div>
  )
}