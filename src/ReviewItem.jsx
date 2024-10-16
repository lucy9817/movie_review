import React from "react";

function ReviewItem({ review }) {
  return (
    <div>
      <h3>{review.movie}</h3>
      <p>{review.review}</p>
    </div>
  );
}

export default ReviewItem;
