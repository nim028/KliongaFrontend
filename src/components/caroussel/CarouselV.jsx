import React from "react";
import img from "../../assets/images/anonyme.jpg";
export default function CarouselV({ data }) {
  return (
    <div>
      <div className="h-96 carousel carousel-vertical rounded-box">
        {data.map((d, i) => (
          <div key={i} className="carousel-item h-full">
            <img src={d.img} />
          </div>
        ))}
      </div>
    </div>
  );
}
