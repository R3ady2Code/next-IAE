import React from 'react';

interface CardProps {
  cardBg: string;
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ cardBg, title, children }) => {
  return (
    <div className={`card ${cardBg}`}>
      {cardBg === 'card_red' && <div className="rectangle"></div>}
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default Card;
