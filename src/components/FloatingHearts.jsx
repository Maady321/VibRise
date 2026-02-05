import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const generateHearts = () => {
      const newHearts = Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 15 + Math.random() * 10,
        scale: 0.5 + Math.random() * 1,
      }));
      setHearts(newHearts);
    };

    generateHearts();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {hearts.map((heart) => (
            <motion.div
                key={heart.id}
                className="absolute text-rose-300/30"
                style={{ 
                    left: `${heart.left}%`,
                    fontSize: `${heart.scale * 2}rem`
                }}
                initial={{ y: '110vh', opacity: 0 }}
                animate={{
                    y: '-10vh',
                    opacity: [0, 0.8, 0],
                    rotate: [0, 45, -45, 0],
                }}
                transition={{
                    duration: heart.duration,
                    delay: heart.delay,
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                ❤️
            </motion.div>
        ))}
    </div>
  );
};

export default FloatingHearts;
