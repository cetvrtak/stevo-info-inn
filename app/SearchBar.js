'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function SearchBar() {
    const [query, setQuery] = useState('7707083893');
    const router = useRouter();

    function handleSubmit(e) {
        e.preventDefault();
        router.push(`/info/${query}`);
    }

    return (
        <div className='search-container'>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Укажите ИНН' value={query} onChange={(e) => setQuery(e.target.value)} />
                <button>🔍</button>
            </form>
        </div>
    );
}
