'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function BrowseMandal({ params }: { params: { mandal: string } }) {
  const [suktas, setSuktas] = useState(Array.from({ length: 191 }, (_, i) => i + 1))
  const mandalNum = parseInt(params.mandal)

  return (
    <div className="min-h-screen bg-amber-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-amber-900 text-center mb-8" style={{ fontFamily: "'Tiro Bangla', serif" }}>
          মণ্ডল {mandalNum}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {suktas.map((sukta) => (
            <Link key={sukta} href={`/browse/${mandalNum}/${sukta}`} className="bg-white p-8 rounded-lg shadow-lg border-4 border-yellow-600 hover:shadow-2xl hover:bg-yellow-50 transition transform hover:scale-105 text-center">
              <h3 className="text-2xl font-bold text-amber-900" style={{ fontFamily: "'Tiro Bangla', serif" }}>
                সূক্ত {sukta}
              </h3>
              <p className="text-amber-800 mt-4">দেখুন →</p>
            </Link>
          ))}
        </div>
        <div className="flex justify-center gap-4">
          {mandalNum > 1 && (
            <Link href={`/browse/${mandalNum - 1}`} className="bg-amber-900 text-white px-6 py-3 rounded hover:bg-red-900 transition">
              পূর্ববর্তী মণ্ডল
            </Link>
          )}
          <Link href="/" className="bg-amber-900 text-white px-6 py-3 rounded hover:bg-red-900 transition">
            হোমে ফিরুন
          </Link>
          {mandalNum < 10 && (
            <Link href={`/browse/${mandalNum + 1}`} className="bg-amber-900 text-white px-6 py-3 rounded hover:bg-red-900 transition">
              পরবর্তী মণ্ডল
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}