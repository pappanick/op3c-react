import React from 'react';

// import Link from 'next/link';
import CompanyLogo from './CompanyLogo';
import HeaderLogo from './HeaderLogo';

const Menu = () => {
  return (
    <>
      <svg
        className={`hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-background transform translate-x-1/2`}
        fill="currentColor"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg>
      <div role="alert" className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav
          className="relative flex items-center justify-between sm:h-10 lg:justify-start"
          aria-label="Global"
        >
          <div
            role="link"
            className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0"
          >
            <>
              <HeaderLogo />
            </>
            <>
              <CompanyLogo />
            </>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Menu;
