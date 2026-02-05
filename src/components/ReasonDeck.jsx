import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const reasons = [
  "Your 'Rowdy' energy that always keeps me on my toes 😉",
  "The way you make me smile even from miles away 🌎",
  "Our endless late-night video calls 📹",
  "How you support my dreams 💫",
  "Your cute sleepy voice 😴",
  "That you are my best friend ❤️",
  "I love you more than distance can ever separate us 🚀"
];

const ReasonDeck = () => {
  const [index, setIndex] = useState(0);
  const [exitX, setExitX] = useState("100%");

  const nextCard = () => {
    setExitX(Math.random() > 0.5 ? "100%" : "-100%");
    setIndex((prev) => (prev + 1) % reasons.length);
  };

  return (
    <div className="flex flex-col items-center justify-center h-64 relative w-full max-w-xs mx-auto mt-10 perspective-1000">
      <h3 className="text-rose-500 font-romantic text-3xl mb-4 text-center">Why I Love You...</h3>
      <div className="relative w-full h-full flex items-center justify-center cursor-pointer" onClick={nextCard}>
        <AnimatePresence initial={false} mode='popLayout'>
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0, rotate: Math.random() * 4 - 2 }}
              exit={{ x: exitX, opacity: 0, rotate:  Math.random() * 20 - 10, transition: { duration: 0.4 } }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute w-64 h-40 bg-white rounded-xl shadow-xl border-2 border-rose-100 flex items-center justify-center p-6 text-center transform hover:scale-105 transition-transform z-20"
              style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
            >
              <p className="text-lg font-medium text-gray-700 font-body">
                {reasons[index]}
              </p>
              <span className="absolute bottom-2 right-2 text-xs text-rose-300">Tap for next 👆</span>
            </motion.div>
        </AnimatePresence>
        
        {/* Background stack effect */}
        <div className="absolute w-64 h-40 bg-white/50 rounded-xl border-2 border-rose-50 rotate-3 z-10 transform translate-y-2"></div>
         <div className="absolute w-64 h-40 bg-white/30 rounded-xl border-2 border-rose-50 -rotate-3 z-0 transform translate-y-4"></div>
      </div>
    </div>
  );
};

export default ReasonDeck;
