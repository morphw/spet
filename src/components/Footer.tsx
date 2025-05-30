const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <p className="mb-2">Адрес: г. Стаханов, ул. Ленина, д. 20</p>
            <p className="mb-2">Телефон: +7 (959)-134-03-58</p>
            <p className="mb-2">Email: spet1929@yandex.ru</p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Режим работы</h3>
            <p className="mb-2">пн — пт: 08:00— 16:30</p>
            <p className="mb-2">сб — вс: выходные</p>
            <p className="mb-2">праздничные дни — выходные</p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Социальные сети</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.9 5.1c-1.6-.7-3.3-1.2-5.1-1.5-.2.4-.4.8-.6 1.2-1.9-.3-3.8-.3-5.7 0-.2-.4-.4-.8-.6-1.2-1.8.3-3.5.8-5.1 1.5C.8 9.1-.1 13 .4 16.9c2.1 1.6 4.1 2.5 6.1 3.1.5-.7.9-1.4 1.3-2.2-.7-.3-1.4-.6-2-1 .2-.1.3-.2.5-.3 3.9 1.8 8.1 1.8 12 0 .2.1.3.2.5.3-.6.4-1.3.7-2 1 .4.8.8 1.5 1.3 2.2 2-.6 4-1.5 6.1-3.1.6-4.5-.3-8.4-2.3-11.8zM8 14.7c-1.2 0-2.1-1.1-2.1-2.4s.9-2.4 2.1-2.4 2.1 1.1 2.1 2.4-.9 2.4-2.1 2.4zm7.8 0c-1.2 0-2.1-1.1-2.1-2.4s.9-2.4 2.1-2.4 2.1 1.1 2.1 2.4-.9 2.4-2.1 2.4z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-blue-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148a13.98 13.98 0 0 0 10.15 5.144 4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-blue-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.686c.223-.198-.054-.308-.346-.11l-6.4 4.02-2.773-.918c-.598-.187-.608-.598.126-.887l10.833-4.18c.503-.187.943.112.79.816z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} ГБОУ СПО ЛНР "СПЭТ". Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 