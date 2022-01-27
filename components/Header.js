import React from "react";
import { Disclosure } from "@headlessui/react";
import { AiOutlineMenu, AiFillFacebook, AiOutlineClose } from "react-icons/ai";
import { FaTwitterSquare, FaDiscord } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/router";
const navigation = [{ id: 1, name: "Home", href: "/" }];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Header() {
  const router = useRouter();
  return (
    <Disclosure as="nav" className="bg-brown left-0 right-0 fixed z-50">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-nature focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                <div className="flex-shrink-0 flex items-center cursor-pointer">
                  <Link href="/">
                    <p className="text-xl md:text-2xl text-white font-bold">
                      <span className=" text-nature">NATURE</span> NFT
                    </p>
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6 flex-grow text-center">
                  <div className="flex flex-grow justify-center space-x-4 text-white">
                    {navigation.map((item) => (
                      <Link href={item.href} key={item.name}>
                        <a
                          className={`${
                            router.pathname === item.href
                              ? "border-sky-400"
                              : ""
                          } px-3 py-2 text-md font-medium border-b-2 border-transparent hover:border-lime-400`}
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 text-2xl text-white  transition duration-100 gap-2 md:gap-5">
                <a className=" hover:text-lime-400" href="#">
                  <AiFillFacebook className=" " />
                </a>
                <a className="hover:text-lime-400" href="#">
                  <FaTwitterSquare />
                </a>
                <a className="hover:text-lime-400" href="#">
                  <FiInstagram />
                </a>
                <a className="hover:text-lime-400" href="#">
                  <FaDiscord />
                </a>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button key={item.name}>
                  <Link href={item.href}>
                    <a
                      className={classNames(
                        router.pathname === item.href
                          ? "bg-nature text-white w-full"
                          : "text-gray-100 hover:bg-gray-700 hover:text-white",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                    >
                      {item.name}
                    </a>
                  </Link>
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
