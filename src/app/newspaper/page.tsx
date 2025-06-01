'use client';

export default function NewspaperPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-2 text-gray-800">Газета СПЭТ</h1>
          <p className="text-center text-gray-600 mb-8 mt-8">Электронная газета "Мой СПЭТ"</p>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-600 to-blue-700">
                    <th className="px-6 py-4 text-white font-semibold text-sm">Выпуск газеты, №</th>
                    <th className="px-6 py-4 text-white font-semibold text-sm">Дата выпуска</th>
                    <th className="px-6 py-4 text-white font-semibold text-sm">Файл</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[...Array(12)].map((_, index) => (
                    <tr key={index + 1} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-center font-medium text-gray-700">{index + 1}</td>
                      <td className="px-6 py-4 text-gray-600">февраль 2025</td>
                      <td className="px-6 py-4">
                        <a 
                          href="#" 
                          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                        >
                          <svg 
                            className="w-4 h-4 mr-2" 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 12.586l4.293-4.293a1 1 0 011.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 12.586z"/>
                          </svg>
                          Просмотр газеты
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Добавить новый выпуск</h2>
            <form className="flex flex-col sm:flex-row items-center gap-4">
              <div className="w-full">
                <input
                  type="file"
                  className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-3 file:px-4
                    file:rounded-md file:border-0
                    file:text-sm file:font-medium
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 
                  text-white font-medium rounded-md hover:from-blue-700 hover:to-blue-800 
                  transition-all duration-200 shadow-md hover:shadow-lg
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Добавить газету
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
