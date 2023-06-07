import React from 'react';

import About from '../components/About';
import Analytics from '../components/Analytics';
// import HeaderNews from '../components/HeaderNews';
import Header from '../components/Header';
import MainHeroImage from '../components/MainHeroImage';
import News from '../components/News';

const news = () => {
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
          >
            <Header />
          </div>
          <div
            role="img"
            aria-label="OP3C logo"
            className="lg:absolute lg:inset-y-0 lg:right-20 lg:w-1/4"
          >
            <>
              <MainHeroImage />
            </>
          </div>
        </div>
      </div>
      <>
        <News />
      </>
      <>
        <About />
      </>
      <Analytics />
    </div>
  );
};

export default news;
