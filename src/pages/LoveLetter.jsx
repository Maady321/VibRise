import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { useState, useEffect } from 'react';

import ReasonDeck from '../components/ReasonDeck';

const LoveLetter = () => {
  const navigate = useNavigate();
  // Feel free to edit this message!
  const message = "Even though there are miles between us, you are never far from my thoughts. Every morning, I wake up missing you, and every night, I dream of the day I'll see you again. Your voice is my favorite sound, and your happiness is my favorite feeling. The distance is hard, but loving you is the easiest thing I've ever done. ❤️";
  
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < message.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + message.charAt(index));
        setIndex(index + 1);
      }, 40); 
      return () => clearTimeout(timeout);
    }
  }, [index, message]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 z-10 relative">
        <motion.div 
            className="glass p-8 md:p-12 max-w-3xl w-full relative overflow-hidden shadow-2xl my-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
             {/* Decorative lines */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-300 via-rose-400 to-purple-300" />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-300 via-rose-400 to-pink-300" />
            
            <h2 className="text-4xl md:text-5xl font-romantic text-rose-600 mb-8 tracking-wide">My Dearest Rowdy,</h2>
            
            <div className="text-lg md:text-2xl text-gray-700 font-body leading-loose min-h-[150px] tracking-wide mb-8">
                {displayedText}
                {index < message.length && <span className="animate-pulse text-rose-500">|</span>}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: index >= message.length ? 1 : 0 }}
                transition={{ duration: 1 }}
            >
                <ReasonDeck />
            </motion.div>

            <motion.div 
                className="mt-10 flex justify-end"
                initial={{ opacity: 0 }}
                animate={{ opacity: index >= message.length ? 1 : 0 }}
                transition={{ duration: 0.5 }}
            >
                <Button onClick={() => navigate('/proposal')}>
                    One Last Thing...
                </Button>
            </motion.div>
        </motion.div>
    </div>
  );
};

export default LoveLetter;
