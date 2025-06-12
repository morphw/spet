'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface NewspaperIssue {
  id: number;
  filename: string;
  date: string;
  path: string;
}

const newspaperIssues: NewspaperIssue[] = [
  {
    id: 2,
    filename: "newspaper1.pdf",
    date: "июнь 2025",
    path: "/uploads/newspapers/newspaper1.pdf"
  },
  {
    id: 1,
    filename: "newspaper2.pdf",
    date: "май 2025",
    path: "/uploads/newspapers/newspaper2.pdf"
  },
];

export default function NewspaperPage() {
  const router = useRouter();
  const [uploading, setUploading] = useState(false);
  const [issues, setIssues] = useState<NewspaperIssue[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIssues(newspaperIssues);
  }, []);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;

    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    setUploading(true);
    setError(null);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to upload file');
      }

      const data = await response.json();
      
      // Add new issue to the list
      const newIssue: NewspaperIssue = {
        id: issues.length + 1,
        filename: data.filename,
        date: new Date().toLocaleDateString('ru-RU'),
        path: data.path
      };

      setIssues([...issues, newIssue]);
    } catch (err) {
      setError('Ошибка при загрузке файла. Пожалуйста, попробуйте снова.');
      console.error('Upload error:', err);
    } finally {
      setUploading(false);
    }
  };

  const handleViewNewspaper = (path: string) => {
    window.open(path, '_blank');
  };

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
                <tbody>
                  {issues.map((issue) => (
                    <tr key={issue.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-center font-medium text-gray-700">{issue.id}</td>
                      <td className="px-6 py-4 text-gray-600">{issue.date}</td>
                      <td className="px-6 py-4">
                        <button 
                          onClick={() => handleViewNewspaper(issue.path)}
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
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>


        </div>
      </div>
    </main>
  );
}
