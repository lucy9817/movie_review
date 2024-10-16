import React, { useState } from "react";
import "./App.css";

function App() {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieReview, setMovieReview] = useState("");
  const [reviews, setReviews] = useState([]);
  const [image, setImage] = useState(null);

  const handleTitleChange = (e) => {
    setMovieTitle(e.target.value);
  };

  const handleReviewChange = (e) => {
    setMovieReview(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleSubmit = () => {
    if (movieTitle.trim() === "" || movieReview.trim() === "") {
      alert("제목과 리뷰를 입력해주세요!");
    } else {
      const newReview = {
        title: movieTitle,
        review: movieReview,
        image: image,
      };
      setReviews([...reviews, newReview]);
      setMovieTitle("");
      setMovieReview("");
      setImage(null);
    }
  };

  const handleDelete = (index) => {
    const updatedReviews = reviews.filter((_, i) => i !== index);
    setReviews(updatedReviews);
  };

  return (
    <div className="review-form">
      <h1>미니 영화 리뷰</h1>

      {/* 이미지 미리보기 */}
      {image && (
        <img src={image} alt="selected" className="movie-image-preview" />
      )}

      <div className="input-group">
        <input
          type="text"
          value={movieTitle}
          onChange={handleTitleChange}
          placeholder="영화 제목 입력"
        />
        <textarea
          value={movieReview}
          onChange={handleReviewChange}
          placeholder="영화 리뷰 입력"
        />

        <input type="file" accept="image/*" onChange={handleImageChange} />
      </div>
      <button onClick={handleSubmit}>추가</button>

      {/* 리뷰 목록 렌더링 */}
      <div className="review-list">
        {reviews.map((review, index) => (
          <div key={index} className="review-item">
            {review.title} : {review.review}
            {review.image && (
              <img src={review.image} alt="review" className="review-image" />
            )}
            {/* 삭제 버튼 */}
            <button
              onClick={() => handleDelete(index)}
              className="delete-button"
            >
              삭제
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
