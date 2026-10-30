function Experience() {
  return (
    <section className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border-t-4 border-blue-600 flex-1 hover:shadow-xl transition-all duration-300">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 border-b dark:border-slate-700 pb-2">Технічні навички</h2>
      <ul className="space-y-3 text-slate-600 dark:text-slate-300">
        <li className="flex items-center gap-2">
          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          <strong className="text-slate-800 dark:text-slate-100">Python:</strong> скрипти, ООП, аналіз логів.
        </li>
        <li className="flex items-center gap-2">
          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          <strong className="text-slate-800 dark:text-slate-100">C#:</strong> Windows Forms, алгоритми.
        </li>
        <li className="flex items-center gap-2">
          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          <strong className="text-slate-800 dark:text-slate-100">Кібербезпека:</strong> ISO 27001/27005.
        </li>
      </ul>
    </section>
  );
}

export default Experience;