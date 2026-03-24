'use client';
import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-[#FFF8E7] border-b-2 border-[#D4AF37] z-50 p-4 flex justify-center gap-6">
      <Link href="/" className="text-[#3E1C00] font-semibold hover:text-[#FF6B00]">হোম</Link>
      <Link href="/browse/1" className="text-[#3E1C00] font-semibold hover:text-[#FF6B00]">পড়ুন</Link>
      <Link href="/search" className="text-[#3E1C00] font-semibold hover:text-[#FF6B00]">খুঁজুন</Link>
    </nav>
  );
}