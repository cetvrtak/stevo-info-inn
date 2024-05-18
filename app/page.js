'use client'
import React, { useState } from 'react';

const HomePage = () => {
  const [query, setQuery] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={query} onChange={(e) => setQuery(e.target.value)} />
        <button>🔍</button>
      </form>
    </div>
  );
};

export default HomePage;
