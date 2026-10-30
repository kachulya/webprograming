import { useState, useEffect } from 'react';

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Відкриваємо модальне вікно через 60000 мс (1 хвилина)
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-6 md:p-8 max-w-md w-full relative">
        <button 
          onClick={() => setIsOpen(false)} 
          className="absolute top-4 right-4 text-slate-400 hover:text-red-500 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        
        <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 text-center">Зворотний зв'язок</h3>
        
        <form action="https://formspree.io/f/mqpeodgp" method="POST" className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Ім'я</label>
            <input type="text" name="name" required className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-slate-700 dark:text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
            <input type="email" name="email" required className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-slate-700 dark:text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Номер телефону</label>
            <input type="tel" name="phone" className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-slate-700 dark:text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Повідомлення</label>
            <textarea name="message" rows="4" required className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-slate-700 dark:text-white resize-none"></textarea>
          </div>
          
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow-md transition duration-300 mt-2">
            Надіслати
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;