tsx
import React from 'react';

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
