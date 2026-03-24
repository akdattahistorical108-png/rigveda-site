'use client';
import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useParams, useRouter } from 'next/navigation';
import { toBengaliNumber } from '@/lib/bengaliNumbers';
import Navbar from '@/components/Navbar';

export default function BrowseMandalPage() {
  const params = useParams();
  const mandal = Number(params.mandal);
  const router = useRouter();
  const [suktas, setSuktas] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSuktas() {
      try {
        const { data, error } = await supabase
          .from('rigveda_english')
          .select('sukta')
          .eq('mandal', mandal);
        if (error) throw error;
        const uniqueSuktas = Array.from(new Set(data?.map(d => d.sukta))) as number[];
        setSuktas(uniqueSuktas.sort((a,b)=>a-b));
      } catch(e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetchSuktas();
  }, [mandal]);

  if (loading) return <><Navbar /><p className="text-center py-10">লোড হচ্ছে...</p></>;

  if (!suktas.length) return <><Navbar /><p className="text-center py-10">তথ্য পাওয়া যায়নি</p></>;

  return (
    <>
      <Navbar />
      <main className="p-4">
        <h1 className="text-center text-3xl font-bold mb-6">মণ্ডল {toBengaliNumber(mandal)} সূক্তসমূহ</h1>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {suktas.map(sukta => (
            <div 
              key={sukta} 
              className="p-4 border-2 border-[#D4AF37] rounded text-center cursor-pointer hover:bg-[#FFF0D4]"
              onClick={() => router.push(`/browse/${mandal}/${sukta}`)}
            >
              সূক্ত {toBengaliNumber(sukta)}
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
