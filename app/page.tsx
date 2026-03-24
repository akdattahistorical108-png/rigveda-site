import React from 'react';
import Navbar from '@/components/Navbar';
import BengaliTextSection from '@/components/BengaliTextSection';
import { toBengaliNumber } from '@/lib/bengaliNumbers';

const mandalInfo = [
  { mandal: 1, suktas: 191 },
  { mandal: 2, suktas: 43 },
  { mandal: 3, suktas: 62 },
  { mandal: 4, suktas: 58 },
  { mandal: 5, suktas: 87 },
  { mandal: 6, suktas: 75 },
  { mandal: 7, suktas: 104 },
  { mandal: 8, suktas: 103 },
  { mandal: 9, suktas: 114 },
  { mandal: 10, suktas: 191 },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FFF8E7] font-serif p-4">
        <header className="text-center py-10">
          <div className="text-6xl text-[#FF6B00] mb-4">ॐ</div>
          <h1 className="text-5xl text-[#8B0000] mb-2">ঋগ্বেদ</h1>
          <p className="text-xl text-[#3E1C00] mb-4">Dr. Tulsi Ram-এর ইংরেজি অনুবাদ সহ</p>
          <input 
            type="text"
            placeholder="মন্ত্র বা শব্দ খুঁজুন..."
            className="border border-[#D4AF37] rounded px-4 py-2 w-full max-w-md mx-auto text-[#3E1C00]"
          />
        </header>

        <section className="grid grid-cols-2 md:grid-cols-5 gap-4 my-10">
          {mandalInfo.map((m) => (
            <div key={m.mandal} className="p-4 border-2 border-[#D4AF37] rounded text-center font-semibold text-[#3E1C00] hover:bg-[#FFF0D4] cursor-pointer">
              মণ্ডল {toBengaliNumber(m.mandal)} <br />
              {toBengaliNumber(m.suktas)} সূক্ত
            </div>
          ))}
        </section>

        <BengaliTextSection
          title="🌸 ঋগ্বেদ 🌸"
          subtitle="ব্রাহ্মণ, আরণ্যক, উপনিষদ"
          decorativeSymbol="🪷"
          content={[
            "ব্রাহ্মণঃ ঐতরেয়, কৌষিতকি (শাঙ্খায়ন)",
            "আরণ্যকঃ ঐতরেয়, শাঙ্খায়ন",
            "উপনিষদঃ ঐতরেয়, কৌষিতকী",
            "💠 কল্পসূত্রঃ",
            "(১) গৃহ্যসূত্রঃ আশ্বলায়ন, শাঙ্খায়ন, কৌষিতকী (শাম্বব্য)",
            "(২) শ্রৌতসূত্রঃ আশ্বলায়ন, শাঙ্খায়ন",
            "(৩) ধর্মসূত্রঃ বসিষ্ঠ",
          ]}
        />

        <footer className="text-center py-4 border-t-2 border-[#D4AF37] mt-10 text-[#3E1C00]">
          সম্পূর্ণ ঋগ্বেদ — ১০,৫৫২ মন্ত্র
        </footer>
      </main>
    </>
  );
}