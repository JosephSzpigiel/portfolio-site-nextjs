import { useEffect, useState } from 'react';
import styles from './Spotlight.module.css';

const Spotlight = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: { clientX: any; clientY: any; }) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className={styles.spotlight}
      style={{
        left: cursorPosition.x - 100, // Adjust size as needed
        top: cursorPosition.y - 100,
      }}
    />
  );
};

export default Spotlight;