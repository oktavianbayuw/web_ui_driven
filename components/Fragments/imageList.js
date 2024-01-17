import React from 'react';

export default function ImageList({ images }) {
  return (
    <div className="flex flex-wrap -mx-4">
      {images.map((image, index) => (
        <figure
          key={index}
          className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 mx-4 my-4"
        >
          <a href={image.link}>
            <img className="rounded-lg w-48 h-48" src={image.src} alt={image.alt} />
          </a>
          <figcaption className="absolute px-4 text-lg text-white bottom-6">
            <p>{image.description}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
