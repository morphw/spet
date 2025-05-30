'use client'

import { useState } from 'react'

const newspapers = [
  { id: 1, date: 'февраль 2025', file: '#' },
  { id: 2, date: 'февраль 2025', file: '#' },
  { id: 3, date: 'февраль 2025', file: '#' },
  { id: 4, date: 'февраль 2025', file: '#' },
  { id: 5, date: 'февраль 2025', file: '#' },
  { id: 6, date: 'февраль 2025', file: '#' },
  { id: 7, date: 'февраль 2025', file: '#' },
  { id: 8, date: 'февраль 2025', file: '#' },
  { id: 9, date: 'февраль 2025', file: '#' },
  { id: 10, date: 'февраль 2025', file: '#' },
  { id: 11, date: 'февраль 2025', file: '#' },
  { id: 12, date: 'февраль 2025', file: '#' },
]

export default function NewspaperPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Здесь будет логика загрузки файла
    console.log('File submitted:', selectedFile)
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Газета "Мой СПЭТ"</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Добавить новый выпуск</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center space-x-4">
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100"
                  accept=".pdf"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Добавить газету
                </button>
              </div>
            </form>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-6">Архив выпусков</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Выпуск газеты, №
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Дата выпуска
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Файл
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {newspapers.map((newspaper) => (
                    <tr key={newspaper.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {newspaper.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {newspaper.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <a
                          href={newspaper.file}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          Просмотр газеты
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 