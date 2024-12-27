import styles from './page.module.scss';
import { Button, Grid, GridColumn, GridRow } from '@arctic-kit/snow';
import { Feature } from '@/components/Feature';
import { LottieAnimation, LottieSkeleton } from '@/components/LottieAnimation';
import animationData from '@/assets/lottie/design_system.json';
import { Suspense } from 'react';
import { SnowLink } from '@/components/SnowLink';
import { Footer } from '@/components/Footer';
import { ClientLayout } from '@/analytics/ClientLayout';
import { PageCategory } from '@/types';
import { ExamplesNavbar } from '@/components/ExamplesNavbar';
import { Examples } from '@/components/Examples/Examples';

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.header}>
        <div className={styles.centeredText}>
          <h1 className='gradient-text'>Arctic Design Kit</h1>
          <p>
            Building modern and efficient UI components with the best tools.
          </p>
          <div className={styles.headerActionContainer}>
            <SnowLink href='/getting-started/overview'>
              <Button size='large'>Get Started</Button>
            </SnowLink>
            <SnowLink href='/components'>
              <Button size='large' variant='outlined'>
                View Components
              </Button>
            </SnowLink>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <Suspense fallback={<LottieSkeleton />}>
            <LottieAnimation animationData={animationData} />
          </Suspense>
        </div>
      </section>
      <section className={`${styles.content} `}>
        <Grid spacing={2}>
          <GridRow>
            <GridColumn>
              <div className={styles.title}>Key Features</div>
            </GridColumn>
          </GridRow>
          <GridRow>
            <GridColumn xs={12} md={6} lg={3}>
              <Feature
                title='Zero-runtime CSS-in-JS'
                description='Based on @pigment-css/react which extracts styles to CSS files at build time, ensuring zero-runtime overhead.'
              />
            </GridColumn>
            <GridColumn xs={12} md={6} lg={3}>
              <Feature
                title='React Server Components'
                description='Compatible with React Server Components (RSC) for seamless server-side rendering.'
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
                description='Framer Motion makes it easy to create fluid animations. Its a modern animation library for JavaScript and React.'
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
                description={`Arctic Design's Snow library, or @arctic-kit/snow, is a React component library offering essential UI components for streamlined development and consistent application design.`}
                href='/components'
              />
            </GridColumn>
            <GridColumn xs={12} lg={4}>
              <Feature
                title='Iceberg'
                description={`The Iceberg project is an AI-powered form builder designed to revolutionize form creation and management within web applications. Currently in development.`}
              />
            </GridColumn>
            <GridColumn xs={12} lg={4}>
              <Feature
                title='Aurora'
                description={`The Aurora project is an AI-powered WYSIWYG editor that aims to revolutionize content creation and editing within the Arctic Design ecosystem. Currently under development.`}
              />
            </GridColumn>
          </GridRow>
        </Grid>
      </section>
      <section className={styles.examples}>
        <ExamplesNavbar isRootLayout />
        <Examples />
      </section>
      <ClientLayout category={PageCategory.Root}></ClientLayout>
      <Footer />
    </main>
  );
}
