import { LottieAnimation, LottieSkeleton } from '@/components/LottieAnimation';
import animationData from '@/assets/lottie/coffee.json';
import { Suspense } from 'react';
import styles from '@/styles/markdown.module.scss';

export default function Index() {
  return (
    <div className={styles.container}>
      <h1>Work in Progress</h1>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Suspense fallback={<LottieSkeleton />}>
          <LottieAnimation animationData={animationData} />
        </Suspense>
      </div>
      <h5>
        This section is currently under development and will soon provide
        detailed guidelines on how to effectively use the components and design
        tokens in the Arctic Design Kit. Stay tuned for updates as we continue
        to enhance the documentation and make it easier for you to implement the
        design system in your projects.
      </h5>
    </div>
  );
}
