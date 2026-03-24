'use client';
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';
import { toBengaliNumber } from '@/lib/bengaliNumbers';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSearch = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('rigveda_english')
        .select('*')
        .ilike('english', `%${query}%`)
        .limit(50);
      if (error) throw error;
      setResults(data || []);
    } catch(e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="p-4 max-w-3xl mx-auto">
        <h1 className="text-center text-3xl font-bold mb-4">মন্ত্র খুঁজুন</h1>
        <div className="flex gap-2 mb-4">
          <input 
            type="text" 
            value={query} 
            onChange={e => setQuery(e.target.value)}
            className="flex-1 border border-[#D4AF37] rounded px-4 py-2"
            placeholder="মন্ত্র বা শব্দ লিখুন..."
          />
          <button onClick={handleSearch} className="px-4 py-2 bg-[#FF6B00] text-white rounded">খুঁজুন</button>
        </div>
        {loading && <p>লোড হচ্ছে...</p>}
        {!loading && results.length > 0 && <p>{toBengaliNumber(results.length)} টি মন্ত্র পাওয়া গেছে</p>}
        <div className="mt-4 space-y-2">
          {results.map(r => (
            <div 
              key={r.id} 
              className="p-2 border border-[#D4AF37] rounded cursor-pointer hover:bg-[#FFF0D4]"
              onClick={() => router.push(`/mantra/${r.id}`)}
            >
              <span className="font-bold text-[#D4AF37]">{r.ref}</span>: {r.english.slice(0,150)}...
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
