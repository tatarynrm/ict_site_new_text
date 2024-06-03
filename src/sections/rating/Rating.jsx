import React, { useState } from "react";
import { Rating as RatingComponent } from "react-simple-star-rating";
const Rating = () => {
  const [rating, setRating] = useState(0);
  const handleRating = (rate) => {
    setRating(rate)

    // other logic
  }
  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value, index) =>console.log(value, index);
  return <section className="rating section">
         <RatingComponent
        onClick={handleRating}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onPointerMove={onPointerMove}
        size={25}
        SVGstorkeWidth={1}
        /* Available Props */
      />
  </section>;
};

export default Rating;
