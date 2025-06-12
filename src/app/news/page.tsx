'use client';

import Link from 'next/link';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  description: string;
  imageUrl?: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: 'День открытых дверей 2024',
    date: '2024-03-15',
    description: 'Приглашаем всех желающих на день открытых дверей в СПЭТ! Вы сможете познакомиться с нашими преподавателями, узнать о специальностях и задать интересующие вопросы.',
    imageUrl: '/uploads/news/open-day.jpg'
  },
  {
    id: 2,
    title: 'Победа в региональном конкурсе',
    date: '2024-03-10',
    description: 'Наши студенты заняли первое место в региональном конкурсе профессионального мастерства. Поздравляем победителей!',
    imageUrl: '/uploads/news/competition.jpg'
  },
  {
    id: 3,
    title: 'Новое оборудование для лабораторий',
    date: '2024-03-05',
    description: 'Техникум получил новое современное оборудование для лабораторий электротехники и автоматизации.',
    imageUrl: '/uploads/news/equipment.jpg'
  }
];

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Новости</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((news) => (
            <article 
              key={news.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {news.imageUrl && (
                <div className="relative h-48">
                  <img
                    src={news.imageUrl}
                    alt={news.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <time className="text-sm text-gray-500">
                  {new Date(news.date).toLocaleDateString('ru-RU', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                <h2 className="text-xl font-semibold mt-2 mb-3">{news.title}</h2>
                <p className="text-gray-600 mb-4">{news.description}</p>
                <Link
                  href={`/news/${news.id}`}
                  className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                >
                  Читать далее
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
} 