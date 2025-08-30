import React, { useState, useEffect } from "react";

const STORAGE_KEY = "smkicbi_userRating";

const Rating = () => {
  const [rating, setRating] = useState(0);         
  const [hover, setHover] = useState(0);          
  const [savedRating, setSavedRating] = useState(0); 

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const num = parseInt(stored, 10);
        if (!Number.isNaN(num)) {
          setSavedRating(num);
          setRating(num);
        }
      }
    } catch (e) {
      console.warn("Tidak bisa akses localStorage:", e);
    }
  }, []);

  const handleRating = (value) => {
    setRating(value);
    setSavedRating(value);
    try {
      localStorage.setItem(STORAGE_KEY, String(value));
    } catch (e) {
      console.warn("Gagal menyimpan rating:", e);
    }
  };

  const handleReset = () => {
    setRating(0);
    setSavedRating(0);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.warn("Gagal menghapus rating:", e);
    }
  };

  return (
    <section id="rating" className="py-12 bg-gray-100 text-center px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        Berikan Rating
      </h2>

      <div className="flex justify-center gap-2 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            className="text-4xl transition"
            title={`Bintang ${star}`}
            aria-label={`Pilih ${star} bintang`}
            onClick={() => handleRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
          >
            {star <= (hover || rating) ? "⭐" : "☆"}
          </button>
        ))}
      </div>

      {savedRating > 0 ? (
        <p className="text-lg mt-2">
          Kamu memberi rating <span className="font-bold">{savedRating}</span> ⭐
        </p>
      ) : (
        <p className="text-lg mt-2 text-gray-600">Belum ada rating. Klik bintang untuk menilai.</p>
      )}

      <button
        type="button"
        onClick={handleReset}
        className="mt-4 inline-flex items-center px-4 py-2 rounded-2xl bg-white border shadow hover:bg-gray-50"
      >
        Reset Rating
      </button>
    </section>
  );
};

export default Rating;
