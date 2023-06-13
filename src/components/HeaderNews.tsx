import React, { Fragment } from 'react';

import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-scroll';

import config from '../config/index.json';
import CompanyLogo from './CompanyLogo';

const Menu = () => {
  const { navigation, company, OP3CLogo } = config;
  const { img, name: OP3CLogoName } = OP3CLogo;
  const { logo } = company;

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
      <Popover>
        <div role="alert" className="relative pt-6 px-4 sm:px-6 lg:px-8">
          <nav
            className="relative flex items-center justify-between sm:h-10 lg:justify-start"
            aria-label="Global"
          >
            <div
              role="link"
              className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0"
            >
              <div
                role="presentation"
                className="flex items-center justify-between w-full md:w-auto"
              >
                {/* <a href="/"> */}
                <Link href="/">
                  <span className="sr-only">{OP3CLogoName}</span>
                  <img alt="logo" className="h-16 w-auto sm:h-16" src={img} />
                </Link>
                {/* </a> */}
                <div
                  role="button"
                  className="-mr-2 flex items-center md:hidden"
                >
                  <Popover.Button
                    className={`bg-background rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary`}
                  >
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>

            <div
              role="navigation"
              className="hidden md:block md:ml-10 md:pr-4 md:space-x-8"
            ></div>
            <CompanyLogo />
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div
              className={`rounded-lg shadow-md bg-background ring-1 ring-black ring-opacity-5 overflow-hidden`}
            >
              <div
                role="button"
                className="px-5 pt-4 flex items-center justify-between"
              >
                <div>
                  <img className="h-8 w-auto" src={logo} alt="" />
                </div>
                <div role="button" className="-mr-2">
                  <Popover.Button
                    className={`bg-background rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary`}
                  >
                    <span className="sr-only">Close main menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>

              <div role="link" className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    spy={true}
                    active="active"
                    smooth={true}
                    duration={1000}
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
      {/* <>
        <div role="alert" className="relative pt-6 px-4 sm:px-6 lg:px-8">
          <HeaderLogo />
        </div>
      </>
      <>
        <div role="alert" className="relative pt-6 px-4 sm:px-6 lg:px-8">
          <CompanyLogo />
        </div>
      </> */}
    </>
  );
};

export default Menu;
