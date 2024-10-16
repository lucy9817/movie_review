import React, { useState } from "react";

function ReviewForm({ addReview }) {
  const [movie, setMovie] = useState("");
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addReview({ movie, review });
    setMovie("");
    setReview("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Movie Title"
        value={movie}
        onChange={(e) => setMovie(e.target.value)}
      />
      <textarea
        placeholder="Write your review"
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />
      <button type="submit">Add Review</button>
    </form>
  );
}

export default ReviewForm;
