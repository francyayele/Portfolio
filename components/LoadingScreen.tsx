import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.8, ease: "easeInOut" }
      }}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-[#09192D]"
    >
      <div className="relative">
        {/* Glowing background circles */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1.5, 1],
            opacity: [0, 0.3, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 rounded-full bg-textGreen blur-xl"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1.2, 0.8],
            opacity: [0, 0.5, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            delay: 0.5,
            ease: "easeInOut"
          }}
          className="absolute inset-0 rounded-full bg-textGreen blur-lg"
        />

        {/* Main logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          animate={{ 
            scale: [0, 1.2, 1],
            rotate: [180, 0],
            opacity: 1
          }}
          transition={{ 
            duration: 1.2,
            ease: "easeOut"
          }}
          className="relative w-24 h-24"
        >
          <Image
            src="/assets/images/logo.png"
            alt="Logo"
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Orbiting dots */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: 1,
              opacity: [0, 1, 0],
              rotate: 360
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.15,
              ease: "linear"
            }}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: "4px",
              height: "4px",
              borderRadius: "50%",
              backgroundColor: "#64ffda",
              transform: `rotate(${i * 30}deg) translateX(40px)`
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
