'use client';

import Link from 'next/link';

interface Document {
  title: string;
  description: string;
  path: string;
}

const documents: Document[] = [
  {
    title: 'Расписание занятий',
    description: 'Актуальное расписание занятий на текущий семестр',
    path: '/uploads/students/schedule.pdf'
  },
  {
    title: 'Студенческий совет',
    description: 'Студенческий совет техникума является составным элементом системы учебно- воспитательной работы техникума.',
    path: '/uploads/students/studsovet.pdf'
  },
  // {
  //   title: 'График учебного процесса',
  //   description: 'График учебного процесса на текущий учебный год',
  //   path: '/uploads/students/academic-calendar.pdf'
  // }
];

export default function StudentsPage() {
  const handleOpenDocument = (path: string) => {
    window.open(path, '_blank');
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Студентам</h1>

        {/* Основная информация */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold mb-6 text-blue-600">Информация для студентов</h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6">
                На этой странице вы найдете важную информацию, необходимую для обучения в ГБОУ СПО ЛНР "СПЭТ".
              </p>
            </div>
          </div>
        </section>

        {/* Документы и расписание */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold mb-6 text-blue-600">Документы и расписание</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {documents.map((doc, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => handleOpenDocument(doc.path)}
                >
                  <div className="text-blue-600 mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{doc.title}</h3>
                  <p className="text-gray-600">{doc.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Полезные ссылки */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold mb-6 text-blue-600">Полезные ссылки</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Трудоустройство выпускников</h3>
                <p className="text-gray-600 mb-4">
                Работа со студентами и выпускниками техникума
                </p>
                <Link target="_blank"
                  href="https://spet-lnr.gosuslugi.ru/studentam/trudoustroystvo-vypusknikov/"
                  className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                >
                  Перейти
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Дистанционное обучение</h3>
                <p className="text-gray-600 mb-4">
                  Платформа дистанционного обучения
                </p>
                <Link target="_blank"
                  href="https://spet-lnr.gosuslugi.ru/studentam/distantsionnoe-obuchenie/"
                  className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                >
                  Перейти
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Газета "Мой СПЭТ"</h3>
                <p className="text-gray-600 mb-4">
                  Студенческая газета техникума
                </p>
                <Link 
                  href="/newspaper"
                  className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                >
                  Перейти
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Контакты */}
        <section>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold mb-6 text-blue-600">Контакты</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Учебная часть</h3>
                <p className="text-gray-700 mb-2">Телефон: +7 (959) 134-03-58</p>
                <p className="text-gray-700 mb-4">Email: spet1929@yandex.ru</p>

                <h3 className="text-xl font-semibold mb-4">Время работы</h3>
                <p className="text-gray-700 mb-2">Понедельник - Пятница: 8:00 - 16:30</p>
                <p className="text-gray-700">Суббота, Воскресенье: выходной</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Адрес</h3>
                <p className="text-gray-700">
                  ЛНР, г.о. Стаханов, г. Стаханов, ул. Ленина, д. 20
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 