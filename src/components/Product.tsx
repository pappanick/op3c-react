import React from 'react';

import config from '../config/index.json';

const Product = () => {
  const { product } = config;
  const [firstItem, secondItem, thirdItem, fourthItem, fifthItem] =
    product.items;

  return (
    <section className={`bg-background py-8`} id="product">
      {/* <div role="document" className={`container max-w-5xl mx-auto m-8`}> */}
      <div role="document" className={`w-5/6 sm:w-5/6 p-6 ml-20`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {product.title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>

        <h2>
          {' '}
          <p role="document" className="w-full sm:w-full p-12 text-border">
            <div className={`flex flex-wrap`}>
              <div className={`w-full sm:w-full p-6 mt-20`}>
                <h3
                  className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
                >
                  {product.title}
                </h3>
                <p className={`text-gray-600`}>{product.introduction1}</p>
                <div className={`w-full sm:w-full p-6`}>
                  <p className={`text-gray-600`}>{product.introduction2}</p>
                  <p className={`text-gray-600`}>{product.introduction3}</p>
                </div>
                <p className={`text-gray-600`}>{product.introduction4}</p>
              </div>
              <div className={`w-full sm:w-full p-6 mt-20`}>
                <p className={`text-gray-600`}>{product.description1}</p>
                <p className={`text-gray-600`}>{product.description2}</p>
                <p className={`text-gray-600`}>{product.description3}</p>
              </div>
            </div>
            {/* {product.description1}
            {product.description2}
            {product.description3} */}
          </p>
        </h2>
        {/* <Divider /> */}
        <div className={`flex flex-wrap`}>
          <div className={`w-full sm:w-full p-12 mt-12`}>
            <h3
              className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
            >
              {firstItem?.title}
            </h3>
            <p className={`text-gray-600`}>{firstItem?.description}</p>
          </div>
          <div className={`w-full sm:w-full p-6 ml-24`}>
            <img
              className="h-6/6"
              src={firstItem?.img}
              alt={firstItem?.title}
            />
          </div>
        </div>
        <div className={`flex flex-wrap flex-col-reverse sm:flex-row`}>
          <div className={`w-full sm:w-1/2 p-6 mt-10`}>
            <img
              className="h-6/6"
              src={secondItem?.img}
              alt={secondItem?.title}
            />
          </div>
          <div className={`w-full sm:w-1/2 p-6 mt-20`}>
            <div className={`align-middle`}>
              <h3
                className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
              >
                {secondItem?.title}
              </h3>
              <p className={`text-gray-600 mb-8`}>{secondItem?.description}</p>
            </div>
          </div>
        </div>
        <div className={`flex flex-wrap`}>
          <div className={`w-full sm:w-full p-12 mt-12`}>
            <h3
              className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
            >
              {thirdItem?.title}
            </h3>
            <p className={`text-gray-600`}>{thirdItem?.description}</p>
          </div>
        </div>
        <div className={`flex flex-wrap flex-col-reverse sm:flex-row`}>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img
              className="h-6/6"
              src={fourthItem?.img}
              alt={fourthItem?.title}
            />
          </div>
          <div className={`w-full sm:w-1/2 p-6 mt-10`}>
            <div className={`align-middle`}>
              <h3
                className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
              >
                {fourthItem?.title}
              </h3>
              <p className={`text-gray-600 mb-8`}>{fourthItem?.description}</p>
            </div>
          </div>
        </div>
        <div className={`flex flex-wrap`}>
          <div className={`w-full sm:w-full p-6 mt-20`}>
            <h3
              className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
            >
              {fifthItem?.title}
            </h3>
            <p className={`text-gray-600`}>{fifthItem?.description1}</p>
            <p className={`text-gray-600`}>{fifthItem?.description2}</p>
            <p className={`text-gray-600`}>{fifthItem?.description3}</p>
            <p className={`text-gray-600`}>{fifthItem?.description4}</p>
            <p className={`text-gray-600`}>{fifthItem?.description5}</p>
            <p className={`text-gray-600`}>{fifthItem?.description6}</p>
          </div>
        </div>
        <div className={`w-full sm:w-full p-6 ml-16`}>
          <img className="h-6/6" src={fifthItem?.img} alt={fifthItem?.title} />
        </div>
        <div className={`flex flex-wrap flex-col-reverse sm:flex-row`}>
          {/* <div className={`w-full sm:w-1/2 p-6`}>
          <img className="h-6/6" src={sixthItem?.img} alt={sixthItem?.title} />
        </div> */}
          {/* <div className={`w-full sm:w-1/2 p-6 mt-20`}>
            <div className={`align-middle`}>
              <h3
                className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
              >
                {sixthItem?.title}
              </h3>
              <p className={`text-gray-600 mb-8`}>{sixthItem?.description}</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Product;
