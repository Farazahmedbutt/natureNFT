import React from "react";
import { Disclosure } from "@headlessui/react";
import { AiOutlineMenu, AiFillFacebook, AiOutlineClose } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "Gallery", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Header() {
  return (
    <Disclosure
      as="nav"
      className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg left-0 right-0 fixed z-50"
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <AiOutlineClose
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  ) : (
                    <AiOutlineMenu
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <p className="text-xl md:text-2xl text-white font-bold">
                    <span className="text-sky-400">APE</span> SHIBANATI
                  </p>
                  {/* <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="APESHIBANATI"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="APESHIBANATI"
                  /> */}
                </div>
                <div className="hidden sm:block sm:ml-6 flex-grow text-center">
                  <div className="flex flex-grow justify-center space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "text-white"
                            : "text-gray-300 hover:text-white",
                          "px-3 py-2  text-sm font-medium border-b-2 border-transparent hover:border-sky-400"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 text-2xl text-white  transition duration-100 gap-5">
                <a className=" hover:text-sky-400" href="#">
                  <AiFillFacebook className=" " />
                </a>
                <a className="hover:text-sky-400" href="#">
                  <FaTwitterSquare />
                </a>
                <a className="hover:text-sky-400" href="#">
                  <FiInstagram />
                </a>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
export default Header;
