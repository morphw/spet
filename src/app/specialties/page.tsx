'use client'

import Image from 'next/image'
import PageWrapper from '@/components/PageWrapper'

interface Specialty {
  id: number
  title: string
  code: string
  description: string
  duration: string
  qualification: string
  imageUrl: string
}

const specialties: Specialty[] = [
  {
    id: 1,
    title: 'Монтаж и эксплуатация оборудования и систем газоснабжения',
    code: '08.02.08',
    description: ' Специальность направлена на подготовку специалистов, занимающихся установкой, настройкой, обслуживанием и ремонтом систем и оборудования, которое используется для транспортировки и распределения газа, включая газопроводы, газорегуляторные пункты, счётчики и другие устройства.',
    duration: '3 года 10 месяцев/2 года 10 месяцев',
    qualification: 'Специалист среднего звена, техник',
    imageUrl: 'https://spet-lnr.gosuslugi.ru/netcat_files/8/50/slesar_gazovaogo_oborudovaniya.jpg'
  },
  {
    id: 2,
    title: 'Компьютерные системы и комплексы',
    code: '09.02.01',
    description: 'Подготовка специалистов по обслуживанию компьютерных систем и комплексов. Выпускники работают системными администраторами, специалистами по обслуживанию компьютерной техники.',
    duration: '3 года 10 месяцев',
    qualification: 'Специалист среднего звена, техник по компьютерным системам',
    imageUrl: 'https://spet-lnr.gosuslugi.ru/netcat_files/8/50/Screenshot_5_3.jpg'
  },
  {
    id: 3,
    title: 'Монтаж, наладка и эксплуатация электрооборудования промышленных и гражданских зданий',
    code: '08.02.09',
    description: 'Подготовка специалистов по обслуживанию электрического и электромеханического оборудования. Выпускники работают на промышленных предприятиях.',
    duration: '3 года 10 месяцев',
    qualification: 'Специалист среднего звена, техник',
    imageUrl: 'https://spet-lnr.gosuslugi.ru/netcat_files/8/50/photo_2023_10_23_09_37_03.jpg'
  },
  {
    id: 4,
    title: 'Техническое обслуживание и ремонт автотранспортных средств',
    code: '23.02.07',
    description: 'Специальность предполагает подготовку специалистов среднего звена в области технического обслуживания и ремонта двигателей, систем и агрегатов автомобилей.',
    duration: '3 года 10 месяцев',
    qualification: 'Техник',
    imageUrl: 'https://spet-lnr.gosuslugi.ru/netcat_files/8/50/6728f6e97c566554222276.jpg'
  },
  {
    id: 5,
    title: 'Финансы',
    code: '38.02.06',
    description: 'Специальность ориентирована на подготовку специалистов в области финансов и кредита, банковского дела.',
    duration: '2 года 10 месяцев',
    qualification: 'Специалист среднего звена, финансист',
    imageUrl: 'https://spet-lnr.gosuslugi.ru/netcat_files/8/50/297319360873179.jpg'
  },
  {
    id: 6,
    title: 'Юриспруденция',
    code: '40.02.04',
    description: 'Специальность предполагает обучение в области права, судебного администрирования и организации социального обеспечения.',
    duration: '2 года 10 месяцев/1 год 10 месяцев',
    qualification: 'Специалист среднего звена, юрист',
    imageUrl: 'https://spet-lnr.gosuslugi.ru/netcat_files/8/50/Screenshot_7.jpg'
  }
]

export default function SpecialtiesPage() {
  return (
    <PageWrapper>
      <div className="min-h-screen pb-16">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-8">Специальности</h1>
          
          <div className="grid gap-8 md:grid-cols-2">
            {specialties.map((specialty) => (
              <div key={specialty.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={specialty.imageUrl}
                    alt={specialty.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h2 className="text-2xl font-semibold text-gray-800">{specialty.title}</h2>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {specialty.code}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{specialty.description}</p>
                  <div className="border-t pt-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Срок обучения</h3>
                        <p className="mt-1 text-sm text-gray-800">{specialty.duration}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Квалификация</h3>
                        <p className="mt-1 text-sm text-gray-800">{specialty.qualification}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  )
} 