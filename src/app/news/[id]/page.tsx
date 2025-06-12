'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  description: string;
  content: string;
  imageUrl?: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: 'День открытых дверей 2024',
    date: '2024-03-15',
    description: 'Приглашаем всех желающих на день открытых дверей в СПЭТ! Вы сможете познакомиться с нашими преподавателями, узнать о специальностях и задать интересующие вопросы.',
    content: `
      15 марта 2024 года ГБОУ СПО ЛНР "СПЭТ" проводит день открытых дверей для будущих абитуриентов и их родителей.

      В программе мероприятия:
      - Презентация специальностей
      - Встреча с преподавателями
      - Экскурсия по техникуму
      - Мастер-классы в лабораториях
      - Консультации по поступлению

      Начало мероприятия в 10:00.
      Место проведения: г. Стаханов, ул. Ленина, д. 20.

      Приглашаем всех желающих!
    `,
    imageUrl: '/uploads/news/open-day.jpg'
  },
  {
    id: 2,
    title: 'Победа в региональном конкурсе',
    date: '2024-03-10',
    description: 'Наши студенты заняли первое место в региональном конкурсе профессионального мастерства. Поздравляем победителей!',
    content: `
      Студенты ГБОУ СПО ЛНР "СПЭТ" заняли первое место в региональном конкурсе профессионального мастерства!

      Конкурс проходил с 8 по 10 марта 2024 года. В нем приняли участие команды из 12 учебных заведений региона.
      Наши студенты продемонстрировали высокий уровень профессиональной подготовки и практических навыков.

      Особо отличились:
      - Иванов Александр (группа ЭС-31)
      - Петрова Мария (группа АТ-41)
      - Сидоров Дмитрий (группа РТ-21)

      Поздравляем победителей и желаем дальнейших успехов!
    `,
    imageUrl: '/uploads/news/competition.jpg'
  },
  {
    id: 3,
    title: 'Новое оборудование для лабораторий',
    date: '2024-03-05',
    description: 'Техникум получил новое современное оборудование для лабораторий электротехники и автоматизации.',
    content: `
      В рамках программы модернизации материально-технической базы наш техникум получил новое современное оборудование для лабораторий электротехники и автоматизации.

      Новое оборудование включает:
      - Комплекты для изучения микроконтроллеров
      - Лабораторные стенды по электротехнике
      - Измерительные приборы
      - Программное обеспечение для моделирования

      Это позволит нашим студентам получать практические навыки работы с современным оборудованием и быть более конкурентоспособными на рынке труда.
    `,
    imageUrl: '/uploads/news/equipment.jpg'
  }
];

export default function NewsArticlePage() {
  const params = useParams();
  const newsId = Number(params.id);
  const newsItem = newsItems.find(item => item.id === newsId);

  if (!newsItem) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Новость не найдена</h1>
          <div className="text-center">
            <Link href="/news" className="text-blue-600 hover:text-blue-700">
              Вернуться к списку новостей
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          {newsItem.imageUrl && (
            <div className="relative h-96">
              <img
                src={newsItem.imageUrl}
                alt={newsItem.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="p-8">
            <div className="mb-8">
              <Link
                href="/news"
                className="text-blue-600 hover:text-blue-700 inline-flex items-center mb-4"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Назад к новостям
              </Link>
              <time className="text-sm text-gray-500 block">
                {new Date(newsItem.date).toLocaleDateString('ru-RU', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              <h1 className="text-4xl font-bold mt-2">{newsItem.title}</h1>
            </div>
            <div className="prose max-w-none">
              {newsItem.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </div>
        </article>
      </div>
    </main>
  );
} 