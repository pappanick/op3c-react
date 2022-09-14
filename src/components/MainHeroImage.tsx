import React from 'react';

import config from '../config/index.json';

const MainHeroImage = () => {
  const { mainHero } = config;
  return (
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        className="h-24 w-full object-contain sm:h-32 md:h-38 lg:w-full lg:h-full"
        // className="h-24 w-full object-cover sm:h-32 md:h-38 lg:w-full lg:h-full"
        // className="h-24 w-full sm:h-32 md:h-38 lg:w-1/2 lg:h-1/4"
        src={mainHero.img}
        alt="OP3C logo"
      />
    </div>
  );
};

export default MainHeroImage;
