import React from "react";

export const GifGridItem = ({ title, url }) => {
  console.log({ url, title });
  return (
    <div className="card animate__animated animate__animate__fadeIn__delay-2s">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
