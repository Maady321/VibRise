import { motion } from 'framer-motion';

const ConnectionLines = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 opacity-30">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.path
          d="M 10,50 Q 50,20 90,50"
          fill="transparent"
          stroke="url(#gradient-line)"
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.path
          d="M 10,50 Q 50,80 90,50"
          fill="transparent"
          stroke="url(#gradient-line)"
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 4, ease: "easeInOut", delay: 1, repeat: Infinity, repeatType: "reverse" }}
        />
        
        <defs>
          <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f43f5e" stopOpacity="0" />
            <stop offset="50%" stopColor="#f43f5e" stopOpacity="1" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Location Dots */}
        <motion.circle cx="10" cy="50" r="1.5" fill="#f43f5e" initial={{ r: 1 }} animate={{ r: [1, 2, 1] }} transition={{ duration: 2, repeat: Infinity }} />
        <motion.circle cx="90" cy="50" r="1.5" fill="#8b5cf6" initial={{ r: 1 }} animate={{ r: [1, 2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} />
      </svg>
    </div>
  );
};

export default ConnectionLines;
