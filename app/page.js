'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const HomePage = () => {
  const [query, setQuery] = useState('7707083893')
  const router = useRouter()

  async function handleSubmit(e) {
    e.preventDefault()

    var url = "http://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party";
    var token = "237a7776db5718ec773b4319a288282fc9723df2";

    var options = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token " + token
      },
      body: JSON.stringify({ query: query })
    }

    try {
      const response = await fetch(url, options);
      const result = await response.text();

      router.push(`/info/${query}`)
    } catch (error) {
      console.log("error", error);
    }
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
