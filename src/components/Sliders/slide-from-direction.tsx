import React, { ReactNode, useMemo } from "react";
import * as m from "motion/react-m";

interface SlideFromDirectionProps {
  children: ReactNode;
  initialX?: string | number;
  initialY?: string | number;
  duration?: number;
  transition?: object;
}

const SlideFromDirection = React.memo(function SlideFromDirection({
  children,
  initialX = 0,
  initialY = 0,
  duration = 0.5,
  transition = { ease: "easeInOut" },
}: SlideFromDirectionProps) {
  const animationProps = useMemo(
    () => ({
      initial: { x: initialX, y: initialY },
      animate: { x: 0, y: 0 },
      transition: { duration, ...transition },
    }),
    [initialX, initialY, duration, transition]
  );

  return <m.div {...animationProps}>{children}</m.div>;
});

export default SlideFromDirection;
