'use client'

import Image from 'next/image'
import Link from 'next/link'

interface NewsCardProps {
  id: number
  title: string
  description: string
  imageUrl: string
  date: string
}

const NewsCard = ({ id, title, description, imageUrl, date }: NewsCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="text-sm text-gray-500 mb-2">{date}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link 
          href={`/news/${id}`}
          className="text-blue-600 font-semibold hover:text-blue-700"
        >
          Читать далее →
        </Link>
      </div>
    </div>
  )
}

export default NewsCard 