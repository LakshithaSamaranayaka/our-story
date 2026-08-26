import { AnimatePresence, motion } from "framer-motion";

interface PageTransitionWrapperProps {
  children: React.ReactNode;
}

export default function PageTransitionWrapper({ children }: PageTransitionWrapperProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={typeof children === "string" ? children : "page-transition"}
        initial={{ opacity: 0, scale: 0.98, y: 14, filter: "blur(8px)" }}
        animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, scale: 0.96, y: 18, filter: "blur(6px)" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
