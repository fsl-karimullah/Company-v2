import React from "react";

export default function Card({ imgSrc, title, desc }) {
  return (
    <div className="w-full rounded-lg shadow-md lg:max-w-sm">
      <img className="object-cover w-full h-48" src={imgSrc} alt="image" />
      <div className="p-4">
        <h4 className="text-xl font-semibold tracking-tight text-blue-600">
          {title}
        </h4>
        <p className="mb-2 leading-normal">{desc}</p>
        <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
          Read more
        </button>
      </div>
    </div>
  );
}
