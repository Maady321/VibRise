import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import ConnectionLines from '../components/ConnectionLines';
import { FaPlane, FaGlobeAmericas } from 'react-icons/fa';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative z-10 overflow-hidden">
      <ConnectionLines />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="glass p-12 max-w-2xl w-full flex flex-col items-center gap-10 text-center shadow-2xl relative z-20"
      >
        <motion.div
            animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="text-rose-500 text-5xl md:text-6xl flex gap-4 items-center justify-center mb-6"
        >
            <FaGlobeAmericas className="text-blue-400" />
            <div className="flex flex-col items-center text-xs md:text-sm gap-1 text-gray-400">
                <span className="border-t-2 border-dashed border-gray-400 w-12 md:w-16"></span>
                <FaPlane className="text-rose-500 animate-float-fast" />
            </div>
            <FaGlobeAmericas className="text-rose-400" />
        </motion.div>

        <motion.h1 
          className="text-4xl md:text-7xl font-romantic text-gradient font-bold leading-tight px-2"
          style={{ textShadow: '0 2px 10px rgba(0,0,0,0.1)' }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Miles Apart...<br/>
          <span className="text-3xl md:text-6xl text-rose-500 block mt-2">Connected at Heart, Rowdy</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-600 font-medium font-body max-w-md leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Distance is just a test to see how far love can travel. I sent this so you know I'm thinking of you.
        </motion.p>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
        >
            <Button onClick={() => navigate('/letter')} className="pulse-slow">
                Open My Love Letter 💌
            </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Landing;
