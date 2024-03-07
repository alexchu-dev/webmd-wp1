import React from 'react';
import Link from 'next/link';
import {destinations} from './data.js';

export default function Destinations() {
  return (
    <main className="max-w-screen-xl mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-6">Destinations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {destinations.map(({ name, banner, slug }) => (
          <div key={slug} className="group">
            <Link href={`/destinations/${slug}`} className="block relative">
                <img src={banner} alt={name} className="w-full h-auto rounded-xl" />
                <span className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4">{name}</span>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
