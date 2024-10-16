import React from "react";
import ReviewItem from "./ReviewItem";

function ReviewList({ reviews }) {
  return (
    <div>
      {reviews.length === 0 ? (
        <p>아직 리뷰가 없습니다</p>
      ) : (
        reviews.map((review, index) => (
          <ReviewItem key={index} review={review} />
        ))
      )}
    </div>
  );
}

export default ReviewList;
