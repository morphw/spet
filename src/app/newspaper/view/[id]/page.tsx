'use client';

import dynamic from 'next/dynamic';

const NewspaperPDF = dynamic(() => import('@/components/NewspaperPDF'), {
  ssr: false,
});

export default function ViewNewspaperPage() {
  return (
    <div className="w-full h-screen">
      <NewspaperPDF />
    </div>
  );
} 