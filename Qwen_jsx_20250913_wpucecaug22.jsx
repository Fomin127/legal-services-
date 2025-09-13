import React from "react";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="font-roboto bg-white text-gray-800 min-h-screen">
      {/* Header */}
      <header className="bg-gray-900 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center">
            <img 
              src="https://placehold.co/60x60/10B981/FFFFFF?text=АК" 
              alt="Логотип Агроконсалтинг" 
              className="mr-2 rounded-full"
            />
            <h1 className="text-xl font-bold">Агроконсалтинг</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#services" className="hover:text-green-400">Услуги</a>
            <a href="#advantages" className="hover:text-green-400">Преимущества</a>
            <a href="#cases" className="hover:text-green-400">Кейсы</a>
            <a href="#contacts" className="hover:text-green-400">Контакты</a>
          </nav>
          <div className="flex items-center space-x-4">
            <a href="tel:+79181137980" className="text-sm">+7 (918) 113-79-80</a>
            <a href="mailto:anton.fomin113@mail.ru" className="text-sm">anton.fomin113@mail.ru</a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="bg-gray-100 py-20">
        <div className="container mx-auto text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Юридические услуги для вашего будущего
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl mb-8"
          >
            Профессиональное сопровождение в сфере земельного и цифрового права
          </motion.p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-green-600 transition"
          >
            Оставить заявку
          </motion.button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Земельное право */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Земельное право</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Поиск и оформление земельных участков от государства для физических лиц и предпринимателей</li>
                <li>• Подготовка документов для получения земли по программам: "Жильё для молодых семей", "Садоводство", "Индивидуальное жилищное строительство"</li>
                <li>• Работа с СНТ как юридическим лицом: взыскание членских взносов, управление имуществом, распределение доходов</li>
                <li>• Оформление прав на заброшенные, невостребованные и общие земли в рамках СНТ</li>
                <li>• Помощь в решении споров с соседями, межевании, выделении долей</li>
                <li>• Полное юридическое сопровождение развития СНТ: от создания цифровой среды до реализации экономических проектов внутри и между СНТ на партнерской основе</li>
              </ul>
            </div>
            {/* Цифровое право */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Цифровое право</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Консультации по использованию Центральных регистров ценных бумаг (ЦРЦБ)</li>
                <li>• Внедрение цифровых финансовых активов (ЦФА) в СНТ и малый бизнес</li>
                <li>• Поддержка при регистрации и использовании цифровых активов в рамках законодательства РФ</li>
                <li>• Разработка стратегии использования ЦФА для повышения прозрачности и эффективности управления СНТ</li>
                <li>• Помощь в создании цифровых платформ для коллективного управления ресурсами</li>
                <li>• Консультации по интеграции цифровых решений в аграрный сектор и кооперативы</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши преимущества</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <span className="text-4xl text-green-500">✅</span>
              <p className="mt-2">10+ лет опыта в земельном праве</p>
            </div>
            <div className="text-center">
              <span className="text-4xl text-green-500">✅</span>
              <p className="mt-2">Индивидуальный подход к каждому клиенту</p>
            </div>
            <div className="text-center">
              <span className="text-4xl text-green-500">✅</span>
              <p className="mt-2">Гарантия результатов</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Свяжитесь с нами</h2>
          <div className="flex flex-col md:flex-row justify-center items-start space-y-4 md:space-y-0 md:space-x-8">
            <form className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/2">
              <h3 className="text-xl font-bold mb-4">Оставьте заявку</h3>
              <input type="text" placeholder="Имя" className="w-full p-2 mb-4 border rounded" />
              <input type="email" placeholder="Email" className="w-full p-2 mb-4 border rounded" />
              <textarea placeholder="Сообщение" className="w-full p-2 mb-4 border rounded"></textarea>
              <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition w-full">
                Отправить
              </button>
            </form>
            <div className="text-gray-700 w-full md:w-1/2">
              <h3 className="text-xl font-bold mb-4">Контакты</h3>
              <p>Телефон: +7 (918) 113-79-80</p>
              <p>Email: anton.fomin113@mail.ru</p>
              <p className="mt-4">Местоположение:</p>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835708535584!2d38.9224684!3d44.8732399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c1b3e3e1e4e989%3A0x40b18a75c3e4b1c3!2z0JrQvtC60LjRgNC-0L7QuNGBINCI0LXQtdC90YnQvNC90YDRiNC-0LTQvdGL0YUg0YLQtdGF0L3QuNC60LA!5e0!3m2!1sen!2sru!4v1698734937252!5m2!1sen!2sru" 
                width="100%" 
                height="200" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Карта Краснодарский край, Кущевский район, село Красное"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto text-center px-4">
          <p>&copy; 2023 Агроконсалтинг. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}