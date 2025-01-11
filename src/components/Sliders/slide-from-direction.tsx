import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideFromDirectionProps {
  children: ReactNode;
  initialX?: string | number;
  initialY?: string | number;
  duration?: number;
  transition?: object;
}

export default function SlideFromDirection({
  children,
  initialX = 0,
  initialY = 0,
  duration = 0.5,
  transition = {},
}: SlideFromDirectionProps) {
  return (
    <motion.div
      initial={{ x: initialX, y: initialY }}
      animate={{ x: 0, y: 0 }}
      transition={{ duration, ...transition }}
    >
      {children}
    </motion.div>
  );
}
