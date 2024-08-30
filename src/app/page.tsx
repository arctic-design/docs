import styles from './page.module.scss';
import { Grid, GridColumn, GridRow } from '@arctic-kit/snow';
import { Feature } from '@/components/Feature';
import { LottieAnimation, LottieSkeleton } from '@/components/LottieAnimation';
import animationData from '@/assets/lottie/design_system.json';
import { Suspense } from 'react';
import { SnowEffect } from '@/components/SnowEffect';
import { SnowLink } from '@/components/SnowLink';
import { Footer } from '@/components/Footer';

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
          <SnowLink
            href='/getting-started/overview'
            className={styles.actionButton}
          >
            Get Started
          </SnowLink>
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
              <div className={styles.title}>Core Fundamentals</div>
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
          <GridRow>
            <GridColumn>
              <div className={styles.title}>Capabilities</div>
            </GridColumn>
          </GridRow>
          <GridRow>
            <GridColumn xs={12} lg={4}>
              <Feature
                title='Snow'
                description={`Arctic Design's Snow library, or @arctic-kit/snow, is a versatile React component library offering essential UI components for streamlined development and consistent application design. These components are meticulously crafted for seamless integration, providing both flexibility and ease of use.`}
                href='/components'
              />
            </GridColumn>
            <GridColumn xs={12} lg={4}>
              <Feature
                title='Iceberg'
                description={`The Iceberg project is an AI-powered form builder designed to revolutionize form creation and management within web applications. Currently in development, Iceberg will provide intelligent features to simplify and enhance the form-building process`}
              />
            </GridColumn>
            <GridColumn xs={12} lg={4}>
              <Feature
                title='Aurora'
                description={`The Aurora project is an AI-powered WYSIWYG editor that aims to revolutionize content creation and editing within the Arctic Design ecosystem. Currently under development, Aurora promises a range of innovative features to enhance the editing process`}
              />
            </GridColumn>
          </GridRow>
        </Grid>
      </section>
      <Footer />
    </main>
  );
}
