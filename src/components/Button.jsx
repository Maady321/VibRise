import { motion } from 'framer-motion';

const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
  const baseStyle = "px-8 py-3 rounded-full font-semibold shadow-lg backdrop-blur-sm transition-all text-lg flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-rose-500 text-white hover:bg-rose-600 shadow-rose-500/30",
    secondary: "bg-white/80 text-rose-600 hover:bg-white border-2 border-white",
    outline: "border-2 border-rose-500 text-rose-500 hover:bg-rose-50",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default Button;
