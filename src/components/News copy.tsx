import React from 'react';

// import config from 'next/dist/server/config';
import config from '../config/index.json';

const news = () => {
  const { News } = config;
  const [firstItem] = News.items;

  return (
    <section
      className={`mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 bg-background py-8`}
      id="product"
    >
      <div role="document" className={`container max-w-5xl mx-auto m-8`}>
        {/* <div role="document" className={`w-5/6 sm:w-5/6 p-6 ml-20`}> */}
        {/* <div
        role="document"
        className={`className="flex flex-col items-center justify-center"`}
      > */}

        <div className={`flex flex-wrap`}>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            {firstItem?.description}
          </div>
          {/* Image */}
          <div className={`w-full sm:w-full p-1 ml-24`}>
            <img
              className="h-6/6"
              src={firstItem?.img}
              alt={firstItem?.title}
            />
          </div>
          <div className={`w-full sm:w-full p-6 ml-24`}>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href={firstItem?.href}
                  className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10`}
                >
                  Διάβασε περισσότερα{' '}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default news;
