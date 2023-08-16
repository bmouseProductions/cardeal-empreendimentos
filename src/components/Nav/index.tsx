import React, { useEffect, useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa"; // Importando os ícones

export function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex   flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="bold"
        color="blue-gray"
        className="p-1 text-xl"
      >
        <a href="/" className="flex items-center">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="bold"
        color="blue-gray"
        className="p-1 text-xl"
      >
        <a href="/sobre" className="flex items-center">
          Sobre
        </a>
      </Typography>
      <Typography
        as="li"
        variant="bold"
        color="blue-gray"
        className="p-1 text-xl"
      >
        <a href="/frutal" className="flex items-center">
          Frutal
        </a>
      </Typography>

      <Typography
        as="li"
        variant="bold"
        color="blue-gray"
        className="p-1 text-xl"
      >
        <a href="/nova-serrana" className="flex items-center">
          Nova Serrana
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar
      className={`mx-auto font-bold py-2 px-4 lg:px-8 lg:py-6 fixed top-0 left-0 w-full   z-50 border-0 ${
        scrolled
          ? "bg-[#1B3BA0] bg-opacity-40 backdrop-blur-md border-rounded transition-all duration-300  text-white"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          <img src="/icon-cardeal.png" width={70} />
        </Typography>

        <div className="hidden lg:flex items-center ">
          <div className="pr-10 ">{navList}</div>
          <div className="hidden lg:flex gap-4 border-l-2 border-l-blue-900 pl-10">
            <a href="https://google.com" target="_blank">
              <FaFacebook className="text-white text-2xl " />
            </a>
            <FaTwitter className="text-white text-2xl" />
            <FaYoutube className="text-white text-2xl" />
          </div>
        </div>
        {/* Substituir o botão Buy Now pelos ícones */}

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="flex items-center justify-center gap-4">
            <FaFacebook className="text-white text-2xl" />
            <FaTwitter className="text-white text-2xl" />
            <FaYoutube className="text-white text-2xl" />
          </div>
        </div>
      </MobileNav>
    </Navbar>
  );
}
