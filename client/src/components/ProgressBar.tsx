import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ProgressBarProps {
  percentage: number;
}

const ProgressBar = ({ percentage }: ProgressBarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div 
      className="w-full h-2 bg-[var(--grey-medium)] rounded-full overflow-hidden" 
      ref={ref}
    >
      {isInView && (
        <motion.div
          className="h-full bg-gradient-to-r from-[var(--blue-primary)] to-[var(--yellow-accent)] rounded-lg"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      )}
    </div>
  );
};

export default ProgressBar;
