import React from 'react';

interface Props {
  title?: string;
  subtitle?: string;
  content: string[];
  decorativeSymbol?: string;
}

export default function BengaliTextSection({
  title,
  subtitle,
  content,
  decorativeSymbol = '🪷'
}: Props) {
  return (
    <section className="bg-[#FFF8E7] bg-[url('/textures/parchment.png')] bg-cover p-6 rounded-xl shadow-md my-6 border-2 border-[#D4AF37] relative">
      {decorativeSymbol && <div className="absolute top-2 right-2 text-3xl">{decorativeSymbol}</div>}
      {title && <h2 className="text-[#8B0000] text-3xl font-serif mb-2">{title}</h2>}
      {subtitle && <h3 className="text-[#3E1C00] text-xl font-serif mb-4">{subtitle}</h3>}
      <div className="space-y-2 text-[#3E1C00] font-serif text-base">
        {content.map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </div>
      <div className="mt-4 border-t-2 border-[#D4AF37]"></div>
    </section>
  );
}