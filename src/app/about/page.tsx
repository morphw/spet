export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">О техникуме</h1>

        {/* История техникума */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold mb-6 text-blue-600">История техникума</h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-4">
                Стахановский промышленно-экономический техникум был основан в 1929 году как горный техникум. За свою историю техникум подготовил более 30 тысяч специалистов для различных отраслей промышленности.
              </p>
              <p className="text-gray-700 mb-4">
                В 1964 году техникум был переименован в Стахановский горноэкономический техникум, а в 1997 году получил название Стахановский промышленно-экономический техникум.
              </p>
            </div>
          </div>
        </section>

        {/* Основные сведения */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold mb-6 text-blue-600">Основные сведения</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Полное наименование</h3>
                <p className="text-gray-700 mb-6">
                  Государственное бюджетное образовательное учреждение среднего профессионального образования Луганской Народной Республики "Стахановский промышленно-экономический техникум"
                </p>

                <h3 className="text-xl font-semibold mb-4">Сокращенное наименование</h3>
                <p className="text-gray-700 mb-6">
                  ГБОУ СПО ЛНР "СПЭТ"
                </p>

                <h3 className="text-xl font-semibold mb-4">Дата создания</h3>
                <p className="text-gray-700 mb-6">
                  1929 год
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Контактная информация</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>294005, Луганская Народная Республика, г. о. Стаханов, город Стаханов, ул. Ленина, д. 20</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+7 (959)-134-03-58</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>spet1929@yandex.ru</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Руководство */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold mb-6 text-blue-600">Руководство техникума</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Директор</h3>
                <p className="text-gray-700 mb-2">Овчаренко Николай Анатольевич</p>
              </div>

            </div>
          </div>
        </section>

        {/* Материально-техническое обеспечение */}
        <section>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold mb-6 text-blue-600">Материально-техническое обеспечение</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-blue-600 mb-4">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Учебный корпус</h3>
                <p className="text-gray-700">
                  Современные аудитории, лаборатории и мастерские для практического обучения
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-blue-600 mb-4">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Библиотека</h3>
                <p className="text-gray-700">
                  Богатый фонд учебной и методической литературы
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-blue-600 mb-4">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Компьютерные классы</h3>
                <p className="text-gray-700">
                  Оснащенные современным оборудованием и программным обеспечением
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 