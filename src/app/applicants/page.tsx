'use client'

import { useState } from 'react'
import PageWrapper from '@/components/PageWrapper'

interface Specialty {
  id: number
  code: string
  title: string
  studyForms: string
  educationRequired: string
  duration: string
  description: string
  qualification: string
}

const specialties: Specialty[] = [
  {
    id: 1,
    code: '08.02.08',
    title: 'Монтаж и эксплуатация оборудования и систем газоснабжения',
    studyForms: 'Очная / заочная',
    educationRequired: 'основное общее / среднее общее',
    duration: '3 года 10 месяцев/2 года 10 месяцев',
    description: 'Специальность направлена на подготовку специалистов, занимающихся установкой, настройкой, обслуживанием и ремонтом систем и оборудования, которое используется для транспортировки и распределения газа, включая газопроводы, газорегуляторные пункты, счётчики и другие устройства.',
    qualification: 'Специалист среднего звена, техник'
  },
  {
    id: 2,
    code: '08.02.09',
    title: 'Монтаж, наладка и эксплуатация электрооборудования промышленных и гражданских зданий',
    studyForms: 'Очная / заочная',
    educationRequired: 'основное общее / среднее общее',
    duration: '2 года 10 месяцев/1 год 10 мес',
    description: 'Специальность предполагает подготовку специалистов в области монтажа, наладки, ремонта и эксплуатации силового и осветительного оборудования электрических сетей промышленных и гражданских зданий.',
    qualification: 'Специалист среднего звена, техник'
  },
  {
    id: 3,
    code: '09.02.01',
    title: 'Компьютерные системы и комплексы',
    studyForms: 'Очная',
    educationRequired: 'основное общее',
    duration: '3 года 10 месяцев',
    description: 'Специальность ориентирована на подготовку специалистов в области проектирования, монтажа, настройки и обслуживания компьютерных систем и комплексов, включая сетевые и серверные технологии, а также системы автоматизации и управления данными.',
    qualification: 'Специалист среднего звена, техник по компьютерным системам'
  },
  {
    id: 4,
    code: '23.02.07',
    title: 'Техническое обслуживание и ремонт автотранспортных средств',
    studyForms: 'Очная / заочная',
    educationRequired: 'основное общее / среднее общее',
    duration: '3 года 10 месяцев/2 года 10 месяцев',
    description: 'Специальность предполагает подготовку специалистов среднего звена в области технического обслуживания и ремонта двигателей, систем и агрегатов автомобилей.',
    qualification: 'Специалист среднего звена, техник'
  },
  {
    id: 5,
    code: '38.02.06',
    title: 'Финансы',
    studyForms: 'Очная',
    educationRequired: 'основное общее',
    duration: '2 года 10 месяцев',
    description: 'Специальность ориентирована на подготовку специалистов в области финансов и кредита, банковского дела.',
    qualification: 'Специалист среднего звена, финансист'
  },
  {
    id: 6,
    code: '40.02.04',
    title: 'Юриспруденция',
    studyForms: 'Очная / заочная',
    educationRequired: 'основное общее / среднее общее',
    duration: '2 года 10 месяцев/1 год 10 месяцев',
    description: 'Специальность предполагает обучение в области права, судебного администрирования и организации социального обеспечения.',
    qualification: 'Специалист среднего звена, юрист'
  }
]

interface DocumentsList {
  title: string
  items: string[]
}

const documentsLists: DocumentsList[] = [
  {
    title: 'Для очной формы обучения (для граждан РФ):',
    items: [
      'Документ об образовании и (или) квалификации – оригинал',
      'Оригинал и 3 копии паспорта Российской Федерации',
      'Оригинал и 3 копии СНИЛС',
      'Оригинал и копия полиса обязательного медицинского страхования (ОМС)',
      'Медицинская справка по форме 0-86У (с картой прививок)',
      'Фото 3х4 – 8 шт.',
      'Документы, дающие право на льготы (при наличии)',
      'Документы, подтверждающие высокий уровень учебных достижений поступающих',
      'Характеристику с предыдущего места учебы',
      'Оригинал и ксерокопию паспорта Российской Федерации родителей (опекунов, официальных представителей)'
    ]
  },
  {
    title: 'Для заочной формы обучения (для граждан РФ):',
    items: [
      'Оригинал и 3 ксерокопии документов, удостоверяющих личность, гражданство',
      'Оригинал и 3 ксерокопии ИНН',
      'Оригинал и 3 ксерокопии СНИЛС',
      'Оригинал и копия полиса обязательного медицинского страхования (ОМС)',
      'Оригинал документа об образовании и о квалификации',
      '6 фотографий размером 3×4см',
      'Документы, дающие право на льготы, установленные законодательством РФ',
      'Копию трудовой книжки, заверенную отделом кадров',
      'Характеристику с места работы',
      'Медицинскую справку формы 086 – У (с картой прививок)'
    ]
  },
  {
    title: 'Для иностранных граждан дополнительно:',
    items: [
      'Оригинал и 3 ксерокопии заверенного в установленном порядке перевод на русский язык документ, удостоверяющий личность, гражданство',
      'Оригинал или ксерокопию заверенного в установленном порядке перевода на русский язык документа об образовании и о квалификации и приложения к нему',
      'Справку из миграционной службы о месте регистрации и проживании поступающего на территории РФ'
    ]
  }
]

export default function ApplicantsPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)
  const [selectedSpecialty, setSelectedSpecialty] = useState<Specialty | null>(null)

  return (
    <PageWrapper>
      <div className="min-h-screen pb-16">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-8">Абитуриентам</h1>

          {/* Основная информация */}
          <section className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-semibold mb-6 text-blue-600">Поступление в СПЭТ</h2>
              <div className="prose max-w-none">
                <p className="text-gray-700 mb-4">
                  Стахановский промышленно-экономический техникум приглашает абитуриентов на обучение по различным специальностям. 
                  Мы предлагаем качественное образование, современную материально-техническую базу и перспективы трудоустройства.
                </p>
                <p className="text-gray-700 mb-4">
                  Обучение проводится по очной и заочной формам на бюджетной и контрактной основе.
                </p>
              </div>
            </div>
          </section>

          {/* Таблица специальностей */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Перечень специальностей</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">№</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Код и название специальности</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Форма обучения</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Требования к образованию</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {specialties.map((specialty, index) => (
                    <tr 
                      key={specialty.id} 
                      className="hover:bg-gray-50 cursor-pointer"
                      onClick={() => setSelectedSpecialty(specialty)}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">{specialty.code}</div>
                        <div className="text-sm text-gray-500">{specialty.title}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{specialty.studyForms}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{specialty.educationRequired}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Подробная информация о выбранной специальности */}
          {selectedSpecialty && (
            <section className="mb-12">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-3xl font-semibold text-blue-600">{selectedSpecialty.title}</h2>
                  <button 
                    onClick={() => setSelectedSpecialty(null)}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Код специальности</h3>
                    <p className="text-gray-700 mb-4">{selectedSpecialty.code}</p>
                    
                    <h3 className="text-lg font-semibold mb-2">Форма обучения</h3>
                    <p className="text-gray-700 mb-4">{selectedSpecialty.studyForms}</p>
                    
                    <h3 className="text-lg font-semibold mb-2">Срок обучения</h3>
                    <p className="text-gray-700 mb-4">{selectedSpecialty.duration}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Квалификация</h3>
                    <p className="text-gray-700 mb-4">{selectedSpecialty.qualification}</p>
                    
                    <h3 className="text-lg font-semibold mb-2">О специальности</h3>
                    <p className="text-gray-700">{selectedSpecialty.description}</p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Необходимые документы */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Необходимые документы</h2>
            <div className="space-y-6">
              {documentsLists.map((list, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">{list.title}</h3>
                  <ul className="list-disc list-inside space-y-2">
                    {list.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-700">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Дополнительная информация */}
          <section className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-semibold mb-6 text-blue-600">Дополнительная информация</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Общежитие</h3>
                  <p className="text-gray-700">
                    Места в общежитии предоставляются иногородним студентам по их заявлению после зачисления на обучение. 
                    Количество мест в общежитии – 100.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Медицинский осмотр</h3>
                  <p className="text-gray-700">
                    Согласно Постановлению Правительства РФ от 14.08.2013 № 697 абитуриентом предоставляется медицинская справка по форме 0-86У.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Контактная информация */}
          <section>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-semibold mb-6 text-blue-600">Контакты приемной комиссии</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Адрес</h3>
                  <p className="text-gray-700 mb-2">Луганская Народная Республика, г.о. Стаханов, г. Стаханов, ул. Ленина, д. 20</p>
                  <p className="text-gray-700 mb-4">Кабинет приемной комиссии</p>

                  <h3 className="text-xl font-semibold mb-4">Телефон</h3>
                  <p className="text-gray-700 mb-4">8-857-444-27-12</p>

                  <h3 className="text-xl font-semibold mb-4">Email</h3>
                  <p className="text-gray-700">spet1929@yandex.ru</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Режим работы</h3>
                  <div className="space-y-2">
                    <p className="text-gray-700">Понедельник - Пятница: 8:00 - 16:00</p>
                    <p className="text-gray-700">Суббота, Воскресенье: выходной</p>
                    <p className="text-gray-700">Праздничные дни: выходной</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </PageWrapper>
  )
} 