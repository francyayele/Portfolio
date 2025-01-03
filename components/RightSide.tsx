import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const RightSide = () => {
  const [text, setText] = useState("");
  const fullText = "CREATE AN IMPACT";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 150);

      return () => clearTimeout(timeout);
    } else {
      // Reset after completion with a delay
      const resetTimeout = setTimeout(() => {
        setText("");
        setIndex(0);
      }, 2000);

      return () => clearTimeout(resetTimeout);
    }
  }, [index]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-6 text-textLight">
      <motion.a 
        href="mailto:francyayele@gmail.com"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.p 
          className="text-sm rotate-90 w-72 tracking-widest text-textGreen font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {text}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
            className="inline-block ml-1 w-[2px] h-4 bg-textGreen"
          >
            
          </motion.span>
        </motion.p>
      </motion.a>
      <motion.span 
        initial={{ height: 0 }}
        animate={{ height: "9rem" }}
        transition={{ duration: 0.5 }}
        className="w-[2px] bg-textDark inline-flex"
      ></motion.span>
    </div>
  );
};

export default RightSide;
