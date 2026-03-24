'use client';
import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useParams, useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { toBengaliNumber } from '@/lib/bengaliNumbers';

interface Mantra {
  id: string;
  mandal: number;
  sukta: number;
  mantra: number;
  ref: string;
  english: string;
}

export default function MantraDetailPage() {
  const params = useParams();
  const id = params.id;
  const router = useRouter();
  const [mantra, setMantra] = useState<Mantra | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMantra() {
      try {
        const { data, error } = await supabase
          .from('rigveda_english')
          .select('*')
          .eq('id', id)
          .single();
        if (error) throw error;
        setMantra(data);
      } catch(e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetchMantra();
  }, [id]);

  if (loading) return <><Navbar /><p className="text-center py-10">লোড হচ্ছে...</p></>;
  if (!mantra) return <><Navbar /><p className="text-center py-10">তথ্য পাওয়া যায়নি</p></>;

  return (
    <>
      <Navbar />
      <main className="p-4 max-w-3xl mx-auto">
        <div className="text-center mb-4 text-4xl text-[#D4AF37]">{mantra.ref}</div>
        <div className="flex justify-center gap-4 mb-4 text-[#3E1C00]">
          <span>মণ্ডল {toBengaliNumber(mantra.mandal)}</span> | 
          <span>সূক্ত {toBengaliNumber(mantra.sukta)}</span> | 
          <span>মন্ত্র {toBengaliNumber(mantra.mantra)}</span>
        </div>
        <div className="mb-4 text-[#3E1C00]">{mantra.english}</div>
        <div className="italic text-gray-500 mb-4">বাংলা অনুবাদ শীঘ্রই আসছে...</div>
        <button className="mb-4 px-4 py-1 bg-[#FF6B00] text-white rounded">▶ Play</button>
        <div className="flex justify-between mt-6">
          <button
            className="px-4 py-2 border border-[#D4AF37] rounded hover:bg-[#FFF0D4]"
            onClick={() => router.push(`/mantra/${Number(id)-1}`)}
          >
            পূর্ব মন্ত্র
          </button>
          <button
            className="px-4 py-2 border border-[#D4AF37] rounded hover:bg-[#FFF0D4]"
            onClick={() => router.push(`/mantra/${Number(id)+1}`)}
          >
            পরবর্তী মন্ত্র
          </button>
        </div>
        <button
          className="mt-4 px-4 py-2 border border-[#D4AF37] rounded hover:bg-[#FFF0D4]"
          onClick={() => navigator.clipboard.writeText(window.location.href)}
        >
          Share
        </button>
      </main>
    </>
  );
}
