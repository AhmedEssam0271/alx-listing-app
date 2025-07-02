import React from "react";
import { CardProps } from "../../interfaces";

const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  children,
  className = "",
}) => {
  return (
    <div className={`bg-white rounded shadow p-4 ${className}`}>
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded mb-4"
        />
      )}
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      {children}
    </div>
  );
};

export default Card;
