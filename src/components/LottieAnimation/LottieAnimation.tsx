'use client';
import React, { useEffect, useRef } from 'react';
import lottie, { AnimationItem } from 'lottie-web/build/player/lottie_light';
import styles from './LottieAnimation.module.scss';

interface LottieAnimationProps {
  animationData: unknown;
  loop?: boolean;
  autoplay?: boolean;
  onLoopComplete?: () => void;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  animationData,
  loop = true,
  autoplay = true,
  onLoopComplete,
}) => {
  const animationContainer = useRef<HTMLDivElement>(null);
  const animationInstance = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (animationContainer.current) {
      animationInstance.current = lottie.loadAnimation({
        container: animationContainer.current,
        animationData,
        loop,
        autoplay,
        renderer: 'svg',
      });

      if (onLoopComplete) {
        animationInstance.current.addEventListener(
          'loopComplete',
          onLoopComplete,
        );
      }
    }

    return () => {
      if (animationInstance.current) {
        animationInstance.current.destroy();
      }
    };
  }, [animationData, loop, autoplay, onLoopComplete]);

  return <div className={styles.container} ref={animationContainer} />;
};

export { LottieAnimation };
