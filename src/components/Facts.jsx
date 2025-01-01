import { useState, useEffect } from 'react';
import _char_to_binary from '../data/binary';


const createPattern = (text) => {
  const pattern = Array(5).fill().map(() => Array(30).fill(0));
  let pos = 0;
  
  text.split('').forEach(char => {
    const charPattern = _char_to_binary[char.toUpperCase()];
    if (charPattern) {
      for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
          pattern[i][pos + j] = charPattern[i][j];
        }
      }
      pos += 5;
    }
  });
  
  return pattern;
};

const Facts = () => {

  const texts = [
    {
      pattern: "WINNER",
      secondary_text: "@ JPMC HACKATHON 2024"
    },
    {
      pattern: "INTERN",
      secondary_text: "@ STALCON SOLUTIONS"
    }
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [displayPattern, setDisplayPattern] = useState(() => createPattern(texts[textIndex].pattern));
  const [nextPattern,setNextPattern] = useState(() => createPattern(texts[(textIndex+1)%texts.length].pattern));
  const [currentCol, setCurrentCol] = useState(-1);

  useEffect(() => {
    const timer = setInterval(startTransition, 5000);
    console.log(textIndex);
    return () => clearInterval(timer);
  }, [textIndex]);

  const startTransition = () => {
    for(let col = 0; col < 30; col++) {
      setTimeout(() => {
        setCurrentCol(col);
        setDisplayPattern(prev => {
          const newPattern = [...prev.map(row => [...row])];
          for(let row = 0; row < 5; row++) {
            newPattern[row][col] = nextPattern[row][col];
          }
          return newPattern;
        });

        if(col === 29) {
          setTimeout(() => {
            setTextIndex(prev => (prev + 1) % texts.length);
            setCurrentCol(-1);
          }, 250);
        }
      }, col * 80);
    }
    setNextPattern(createPattern(texts[textIndex].pattern));
  };

  return (
    <div className="facts-wrapper">
      <div className="pattern-grid">
        {displayPattern.map((row, i) => (
          <div key={i} className="pattern-row">
            {row.map((cell, j) => (
              <div
                key={j}
                className={`pattern-cell ${cell ? 'active' : 'inactive'} ${(j+1) % 5 === 0 ? 'space-after' : ''}`}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="facts-secondary-text">
        {texts[textIndex].secondary_text}
      </div>
    </div>
  );
};

export default Facts;