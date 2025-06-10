import React, { useState } from 'react';

function getRandomFarPosition(minDistance, maxDistance) {
  let x = 0, y = 0;
  while (Math.abs(x) < minDistance && Math.abs(y) < minDistance) {
    x = Math.random() * (2 * maxDistance) - maxDistance;
    y = Math.random() * (2 * maxDistance) - maxDistance;
  }
  return { x, y };
}

function EvadingNoButton() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const evade = () => {
    const { x, y } = getRandomFarPosition(120, 350);
    setPos({ x, y });
  };

  return (
    <button
      onMouseEnter={evade}
      onTouchStart={evade}
      onClick={evade}
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        transition: 'transform 0.2s',
      }}
    >
      Não
    </button>
  );
}

export default EvadingNoButton;