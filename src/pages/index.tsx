import React from 'react';

import About from '../components/About';
import Analytics from '../components/Analytics';
import Features from '../components/Features';
import Header from '../components/Header';
// import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
// import HeroTitleLite from '../components/HeroTitleLite';
import Product from '../components/Product';

const App = () => {
  return (
    <div
      role="region"
      aria-label="all"
      className={`bg-background grid gap-y-16 overflow-hidden`}
    >
      <div
        role="region"
        aria-label="header"
        className={`relative bg-background`}
      >
        <div role="document" className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-xl lg:w-full lg:pb-28 xl:pb-32`}
            // className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-xl lg:w-1/2 lg:pb-28 xl:pb-32`}
          >
            <Header />
            <MainHero />
            {/* <HeroTitleLite /> */}
          </div>
        </div>
        {/* <MainHeroImage /> */}
      </div>
      <>
        <Product />
      </>
      <>
        <Features />
      </>
      <>
        <About />
      </>
      <Analytics />
    </div>
  );
};

export default App;
