import React from 'react';

import About from '../components/About';
import Analytics from '../components/Analytics';
import Features from '../components/Features';
import Header from '../components/Header';
// import LazyShow from '../components/LazyShow';
// import MainHeroImage from '../components/MainHeroImage';
// import MainHeroImage from '../components/MainHeroImage';
import MainHeroImage from '../components/MainHeroImage';
// import HeroTitleLite from '../components/HeroTitleLite';
// import NestedLayout from '../components/nested-layout';
import Product from '../components/Product';
// import {IntlProvider} from 'react-intl';
// import Greek from '../config/indexGreek.json';
// import English from '../config/index.json";

// const locale = navigator.language;

// let lang;
// if (locale==="en") {
//    lang = English;
// } else {
//   lang = Greek;
// }
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

            {/* <MainHero /> */}
            {/* <HeroTitleLite /> */}
          </div>
          {/* <div role="document" className="w-1/4"> */}
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

// App.getLayout = function getLayout(App: ReactElement) {
//   return (
//     <Layout>
//       <NestedLayout>{App}</NestedLayout>
//     </Layout>
//   );
// };

export default App;
