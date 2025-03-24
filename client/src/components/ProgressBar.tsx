import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ProgressBarProps {
  percentage: number;
}

const ProgressBar = ({ percentage }: ProgressBarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="progress-bar" ref={ref} style={{ "--progress": `${percentage}%` } as React.CSSProperties}>
      {isInView && (
        <motion.div
          className="h-full bg-primary rounded-lg"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      )}
    </div>
  );
};

export default ProgressBar;
