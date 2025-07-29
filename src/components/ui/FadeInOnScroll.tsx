// components/ui/FadeInOnScroll.tsx
"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export default function FadeInOnScroll({
  children,
  blur = true,
  delay = 0,
}: {
  children: React.ReactNode;
  blur?: boolean;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.6, delay }}
      variants={{
        hidden: {
          opacity: 0,
          filter: blur ? "blur(4px)" : "none",
          y: 40,
        },
        visible: {
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
        },
      }}
    >
      {children}
    </motion.div>
  );
}
