import { useEffect, useState } from 'react';

function Footer() {
  const [sysInfo, setSysInfo] = useState({ os: '', browser: '' });

  useEffect(() => {
    const currentOs = navigator.platform;
    const currentBrowser = navigator.userAgent;

    // Зберігаємо в localStorage
    localStorage.setItem('react_os_info', currentOs);
    localStorage.setItem('react_browser_info', currentBrowser);

    // Зчитуємо та оновлюємо стан
    setSysInfo({
      os: localStorage.getItem('react_os_info'),
      browser: localStorage.getItem('react_browser_info')
    });
  }, []);

  return (
    <footer className="text-center p-6 mt-4 text-slate-500 dark:text-slate-400 text-sm flex flex-col items-center gap-4 transition-colors duration-300">
      <p>&copy; 2026 Назар Качмар. Всі права захищено.</p>
      
      {/* Блок із системною інформацією */}
      <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 w-full md:w-3/4 text-left">
        <p className="mb-1"><strong className="text-slate-700 dark:text-slate-300">ОС:</strong> {sysInfo.os}</p>
        <p className="text-xs wrap-break-word leading-relaxed">
          <strong className="text-slate-700 dark:text-slate-300 text-sm">Браузер:</strong> {sysInfo.browser}
        </p>
      </div>
    </footer>
  );
}

export default Footer;