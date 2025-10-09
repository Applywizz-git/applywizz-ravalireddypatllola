import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [isComplete, setIsComplete] = useState(false);
  const letters = ["L", "O", "A", "D", "I", "N", "G"];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsComplete(true);
      setTimeout(onComplete, 500);
    }, 3500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isComplete ? 0 : 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="flex gap-3">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: [0, 1, 1, 0],
              y: [0, -10, -10, 0],
            }}
            transition={{
              duration: 1.4,
              times: [0, 0.3, 0.7, 1],
              repeat: Infinity,
              delay: index * 0.1,
            }}
            className="text-4xl font-bold text-muted-foreground"
            style={{
              textShadow: "0 0 20px rgba(20, 184, 166, 0.5)",
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
