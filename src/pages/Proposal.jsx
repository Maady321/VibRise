import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { sendNotification } from '../utils/emailService';

const Proposal = () => {
  const navigate = useNavigate();
  const [noBtnPosition, setNoBtnPosition] = useState({ x: 0, y: 0 });
  const [hoverCount, setHoverCount] = useState(0);

  const moveNoButton = () => {
    // Generate random range but keep it somewhat visible or erratic
    const x = (Math.random() - 0.5) * 400; // -200 to 200
    const y = (Math.random() - 0.5) * 400; // -200 to 200
    setNoBtnPosition({ x, y });
    setHoverCount(prev => prev + 1);
  };

  const handleYesClick = () => {
      // Send notification slightly in background so navigation isn't blocked
      sendNotification("SHE SAID YES! 💍❤️ (Distance couldn't stop us!)");
      navigate('/success');
  };

  // Messages that change as you try to click No
  const getNoButtonText = () => {
      const texts = ["No", "Are you sure?", "Really sure?", "Think again!", "Last chance!", "Pretty please?", "You break my heart!", "Okay fine...", "Just kidding, NO!"];
      return texts[Math.min(hoverCount, texts.length - 1)];
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 z-10 relative overflow-hidden">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="glass p-12 text-center max-w-3xl w-full flex flex-col items-center gap-12"
      >
        <h1 className="text-5xl md:text-7xl font-romantic text-rose-600 drop-shadow-sm leading-tight">
          Will you be my Valentine, Rowdy? <br/>
          <span className="text-3xl md:text-5xl text-purple-600 block mt-4">(Even from a distance?)</span>
        </h1>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 w-full relative h-[100px] md:h-auto">
          <Button 
            onClick={handleYesClick}
            className="w-48 text-xl font-bold z-10 hover:scale-110 active:scale-95 transition-transform"
          >
            YES! ❤️
          </Button>

          <motion.div
            style={{ x: noBtnPosition.x, y: noBtnPosition.y }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            onHoverStart={moveNoButton}
            onClick={moveNoButton}
            className="absolute md:static z-20"
          >
             <Button 
                variant="outline" 
                className="w-48 text-xl"
            >
                {getNoButtonText()}
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Proposal;
