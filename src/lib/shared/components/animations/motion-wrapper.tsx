import { motion } from "framer-motion";
import type { VariantName } from "./variants";
import { variantsMap } from "./variants";

type MotionWrapperProps = {
  children: React.ReactNode;
  variant?: VariantName;
  delay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
};

export function MotionWrapper({
  children,
  variant = "fadeIn",
  delay = 0,
  duration = 0.5,
  once = true,
  className,
}: MotionWrapperProps) {
  const variants = variantsMap[variant];

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ duration, delay, ease: "easeOut" }}
      viewport={{ once }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
