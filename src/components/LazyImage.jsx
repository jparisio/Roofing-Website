// LazyImage.js
import React from "react";

export default function LazyImage({ src, alt }) {
  return (
    <div className="imageContainer">
      <img src={`/${src}`} alt={alt} loading="lazy" />
    </div>
  );
}
