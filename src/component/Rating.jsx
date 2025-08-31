import React, { useState, useEffect } from "react";

const DEFAULT_REVIEWS = [
  {
    id: 1,
    rating: 5,
    comment: "Sekolah ini sangat bagus, fasilitas lengkap! ⭐⭐⭐⭐⭐",
  },
  {
    id: 2,
    rating: 4,
    comment: "Guru-gurunya ramah dan profesional, recommended 👍",
  },
];

const STORAGE_KEY = "smkicbi_reviews";

const Rating = () => {
  const [reviews, setReviews] = useState([]);
  const [newRating, setNewRating] = useState(0);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && JSON.parse(stored).length > 0) {
        setReviews(JSON.parse(stored));
      } else {
        setReviews(DEFAULT_REVIEWS);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_REVIEWS));
      }
    } catch (e) {
      console.warn("Tidak bisa load reviews:", e);
      setReviews(DEFAULT_REVIEWS);
    }
  }, []);

  useEffect(() => {
    if (reviews.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
    }
  }, [reviews]);

  const handleAddReview = () => {
    if (newRating === 0 || newComment.trim() === "") return;
    const newReview = {
      id: Date.now(),
      rating: newRating,
      comment: newComment.trim(),
    };
    setReviews([newReview, ...reviews]);
    setNewRating(0);
    setNewComment("");
  };

  const handleReset = () => {
    localStorage.removeItem(STORAGE_KEY);
    setReviews(DEFAULT_REVIEWS);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 rounded-2xl shadow-lg mt-10">
      <h2 className="text-2xl font-bold text-center mb-4">Rating & Review</h2>
      <div className="flex flex-col items-center mb-6">
        <div className="flex space-x-2 mb-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              className={`text-3xl ${
                newRating >= star ? "text-yellow-500" : "text-gray-400"
              }`}
              onClick={() => setNewRating(star)}
            >
              ★
            </button>
          ))}
        </div>
        <textarea
          className="w-full p-3 border rounded-lg mb-3"
          rows="3"
          placeholder="Tulis komentar..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          onClick={handleAddReview}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Tambah Review
        </button>
      </div>
      <div className="space-y-4">
        {reviews.length === 0 ? (
          <p className="text-center text-gray-500">Belum ada review.</p>
        ) : (
          reviews.map((rev) => (
            <div
              key={rev.id}
              className="p-4 bg-white rounded-lg shadow-md border"
            >
              <div className="flex items-center mb-2">
                {[...Array(rev.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">
                    ★
                  </span>
                ))}
                {[...Array(5 - rev.rating)].map((_, i) => (
                  <span key={i} className="text-gray-300 text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700">{rev.comment}</p>
            </div>
          ))
        )}
      </div>
      <div className="text-center mt-6">
        <button
          onClick={handleReset}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Hapus Semua Review
        </button>
      </div>
    </div>
  );
};
export default Rating;
