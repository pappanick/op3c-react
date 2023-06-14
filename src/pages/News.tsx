import React from 'react';

import About from '../components/About';
import HeaderNews from '../components/HeaderNews';
import News from '../components/News';

const news = () => {
  return (
    <div
      role="region"
      aria-label="all"
      className={`bg-background grid gap-y-1 overflow-hidden`}
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
            <HeaderNews />
          </div>
        </div>
      </div>
      <>
        <News />
      </>
      <>
        <About />
      </>
      {/* <Analytics /> */}
    </div>
  );
};

export default news;
