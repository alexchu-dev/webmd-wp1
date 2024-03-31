/*
Author: Alex Chu up2244885
University of Portsmouth
Latest Journal section for the home page.
*/
"use client"
import React from 'react';
import { latestJournals } from './data.js';

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-GB', options);
  
    const day = date.getDate();
    let suffix = 'th';
    if (day === 1 || day === 21 || day === 31) suffix = 'st';
    else if (day === 2 || day === 22) suffix = 'nd';
    else if (day === 3 || day === 23) suffix = 'rd';
  
    return formattedDate.replace(/(\d+)(?=\s)/, `$1<sup>${suffix}</sup>`);
  };

export default function LatestJournal() {
  return (
    <section id="latest-journal" className="border rounded-xl p-4 mb-4 bg-white">
      <h2 className="text-xl font-bold mb-2">LATEST JOURNAL</h2>
      <div className="journal-entries grid grid-cols-1 md:grid-cols-3 gap-4">
        {latestJournals.map(({ id, slug, title, date, excerpt }) => (
          <div key={id} className="journal-entry rounded-lg overflow-hidden shadow-lg p-4">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-gray-500" dangerouslySetInnerHTML={{ __html: formatDate(date) }}></p>
            <p className="excerpt">{excerpt}<a href={`/journal/${slug}`} className="font-semibold color3 hover:text-blue-700 ml-2">[Read More]</a></p>
            {/* <p className="excerpt">{excerpt}<a href={`/journal/${id}`} className="font-semibold color3 hover:text-blue-700 ml-2">[Read More]</a></p> */}
            
          </div>
        ))}
      </div>
      <style jsx>{`
        .journal-entry {
          margin-bottom: 20px;
          padding-bottom: 20px;
          border-bottom: 1px solid #eaeaea;
        }

        .excerpt {
          margin-top: 10px;
        }
      `}</style>
    </section>
  );
}
