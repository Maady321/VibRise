import { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';

const Success = () => {
  useEffect(() => {
    // Fire confetti immediately
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    // Fireworks
    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center z-10 relative">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="glass p-12 max-w-3xl w-full flex flex-col items-center gap-8 shadow-2xl"
      >
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="text-8xl md:text-9xl mb-4"
        >
            💖
        </motion.div>

        <h1 className="text-6xl md:text-8xl font-romantic text-rose-600 font-bold mb-4">
           Yay Rowdy!
        </h1>
        
        <p className="text-2xl md:text-3xl text-gray-700 font-body leading-relaxed">
            I knew you'd say yes! <br/>
            Can't wait to see you on video call later! 📹🥰
        </p>

        <p className="text-lg text-gray-500 mt-8">
            (Sending a HUGE virtual hug right now! 🤗)
        </p>
      </motion.div>
    </div>
  );
};

export default Success;
