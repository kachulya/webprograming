import { useState, useEffect } from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';
import Reviews from './components/Reviews'; 
import ContactForm from './components/ContactForm'; 

function App() {
  const [theme, setTheme] = useState('light');

  // Автоматичне встановлення теми при завантаженні
  useEffect(() => {
    const hour = new Date().getHours();
    setTheme((hour >= 7 && hour < 21) ? 'light' : 'dark');
  }, []);

  // Застосування класу dark до <html>
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
  setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
};

  return (
    // Додано переходи transition-colors та підтримку темного фону dark:bg-slate-900
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 p-6 flex flex-col items-center font-sans transition-colors duration-300">
      <div className="w-full max-w-4xl space-y-6">
        
        {/* Кнопка перемикання теми */}
        <div className="flex justify-end">
          <button 
            onClick={toggleTheme} 
            className="bg-blue-600 hover:bg-blue-700 dark:bg-indigo-600 dark:hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300"
          >
            {theme === 'light' ? '🌙 Нічний режим' : '☀️ Денний режим'}
          </button>
        </div>

        <Header />
        
        <div className="flex flex-col md:flex-row gap-6">
          <Experience />
          <Education />
        </div>

        {/* Новий блок з відгуками */}
        <Reviews />
        
        <Footer />
        
        {/* Приховане модальне вікно */}
        <ContactForm />
      </div>
    </div>
  );
}

export default App;