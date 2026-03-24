'use client';
import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useParams, useRouter } from 'next/navigation';
import { toBengaliNumber } from '@/lib/bengaliNumbers';
import Navbar from '@/components/Navbar';

interface Mantra {
  id: string;
  mandal: number;
  sukta: number;
  mantra: number;
  ref: string;
  english: string;
}

export default function BrowseSuktaPage() {
  const params = useParams();
  const mandal = Number(params.mandal);
  const sukta = Number(params.sukta);
  const router = useRouter();
  const [mantras, setMantras] = useState<Mantra[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMantras() {
      try {
        const { data, error } = await supabase
          .from('rigveda_english')
          .select('*')
          .eq('mandal', mandal)
          .eq('sukta', sukta)
          .order('mantra');
        if (error) throw error;
        setMantras(data || []);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetchMantras();
  }, [mandal, sukta]);

  if (loading) return <><Navbar /><p className="text-center py-10">লোড হচ্ছে...</p></>;
  if (!mantras.length) return <><Navbar /><p className="text-center py-10">তথ্য পাওয়া যায়নি</p></>;

  return (
    <>
      <Navbar />
      <main className="p-4">
        <h1 className="text-center text-3xl font-bold mb-6">
          মণ্ডল {toBengaliNumber(mandal)} — সূক্ত {toBengaliNumber(sukta)}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mantras.map(m => (
            <div key={m.id} className="p-4 border-2 border-[#D4AF37] rounded hover:bg-[#FFF0D4]">
              <div className="text-[#D4AF37] font-bold mb-2">{m.ref}</div>
              <div className="mb-2 text-[#3E1C00]">{m.english}</div>
              <div className="italic text-gray-500">বাংলা অনুবাদ শীঘ্রই আসছে...</div>
              <button className="mt-2 px-4 py-1 bg-[#FF6B00] text-white rounded">▶ Play</button>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-6">
          <button
            className="px-4 py-2 border border-[#D4AF37] rounded hover:bg-[#FFF0D4]"
            onClick={() => router.push(`/browse/${mandal}/${sukta-1}`)}
          >
            পূর্ব সূক্ত
          </button>
          <button
            className="px-4 py-2 border border-[#D4AF37] rounded hover:bg-[#FFF0D4]"
            onClick={() => router.push(`/browse/${mandal}/${sukta+1}`)}
          >
            পরবর্তী সূক্ত
          </button>
        </div>
      </main>
    </>
  );
}
