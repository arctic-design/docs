import styles from './page.module.scss';

// import { Landing } from './Landing';
import { Button, Grid, GridColumn, GridRow } from '@arctic-kit/snow';
import { Feature } from '@/components/Feature';
import { LottieAnimation, LottieSkeleton } from '@/components/LottieAnimation';
import animationData from '@/assets/lottie/design_system.json';
import { Suspense } from 'react';
import { SnowEffect } from '@/components/SnowEffect';

// import LogoSrc from './logo.png';

export default function Home() {
  return (
    <main className={styles.main}>
      <SnowEffect />
      <section className={styles.header}>
        <div className={styles.centeredText}>
          <h1>Arctic Design Kit</h1>
          <p>
            Building modern and efficient UI components with the best tools.
          </p>
          <Button size='large'>Get Started</Button>
        </div>
        <div className={styles.imageWrapper}>
          <Suspense fallback={<LottieSkeleton />}>
            <LottieAnimation animationData={animationData} />
          </Suspense>
        </div>
      </section>
      <section className={styles.content}>
        <Grid>
          <GridRow>
            <GridColumn>
              <div className={styles.title}>Core Features</div>
            </GridColumn>
          </GridRow>
          <GridRow>
            <GridColumn xs={12} md={6} lg={3}>
              <Feature
                title='Zero Runtime CSS'
                description='Based on @pigment-css/react which extracts styles to CSS files at build time, ensuring zero-runtime overhead.'
              />
            </GridColumn>
            <GridColumn xs={12} md={6} lg={3}>
              <Feature
                title='RSC Compatible'
                description='Compatible with Next.js React Server Components (RSC) for seamless server-side rendering.'
              />
            </GridColumn>
            <GridColumn xs={12} md={6} lg={3}>
              <Feature
                title='Floating UI'
                description='Position floating elements effortlessly with @floating-ui/react for tooltips, popovers, and dropdowns.'
              />
            </GridColumn>
            <GridColumn xs={12} md={6} lg={3}>
              <Feature
                title='Interactive Animations'
                description='Framer Motion makes it easy to create fluid animations in React.'
              />
            </GridColumn>
          </GridRow>
        </Grid>
      </section>
    </main>
  );
}
