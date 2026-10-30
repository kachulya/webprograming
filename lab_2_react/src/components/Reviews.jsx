import { useState, useEffect } from 'react';

function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/9/comments')
      .then(response => response.json())
      .then(data => setReviews(data))
      .catch(error => console.error('Помилка завантаження відгуків:', error));
  }, []);

  return (
    <section className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border-t-4 border-teal-500 transition-colors duration-300">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 border-b dark:border-slate-700 pb-2">Відгуки роботодавців</h2>
      <div className="space-y-4">
        {reviews.map(review => (
          <div key={review.id} className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg border border-slate-100 dark:border-slate-600">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-1">
              <strong className="text-slate-800 dark:text-slate-100">{review.name}</strong>
              <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">{review.email}</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm italic">"{review.body}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;