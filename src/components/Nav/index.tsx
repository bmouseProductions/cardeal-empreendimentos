import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"; // Importando os ícones
import { Link } from "react-router-dom";

export function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // O uso de "smooth" proporciona uma animação suave, mas você pode optar por "auto" para um comportamento mais rápido.
    });
  };
  
  function fecharMenu(){
    if (openNav === true){
      setOpenNav(false)
    }

    scrollToTop()
  }

  const navList = (
    <ul 
      className={
        openNav ? ('mb-4 mt-2 flex !h-full flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6') :
        ('mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6')
      }
    
    >
      <Typography
        as="li"
        variant="bold"
        color="blue-gray"
        className="p-1 text-xl"
      >
        <Link to='/' onClick={fecharMenu}>
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="bold"
        color="blue-gray"
        className="p-1 text-xl"
      >
        <Link to='/sobre' onClick={fecharMenu}>
          Sobre
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="bold"
        color="blue-gray"
        className="p-1 text-xl"
      >
        
        <Link to='/empreendimentos' onClick={fecharMenu}>
          Empreendimentos
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="bold"
        color="blue-gray"
        className="p-1 text-xl"
      >
        
        <Link to='/contato' onClick={fecharMenu}>
          Contato
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="bold"
        color="blue-gray"
        className="p-1 text-xl"
      >
        
        <Link to='/seja-um-parceiro' onClick={fecharMenu}>
          Seja um parceiro
        </Link>
      </Typography>
    </ul>
  );

  return (
    <Navbar
      className={
      openNav ? ('mx-auto py-2 px-4 lg:px-8 fixed top-0 left-0 w-full h-full z-50 border-0 font-bold bg-[#1b3aa0] bg-opacity-80 backdrop-blur-md border-rounded transition-all duration-300  text-white') : 
      ('mx-auto py-2 px-4 lg:px-8 fixed top-0 left-0 w-full z-50 border-0 font-bold bg-[#1b3aa0] bg-opacity-80 backdrop-blur-md border-rounded transition-all duration-300  text-white')
    }
    >
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Link to='/'>
          <img src="/icon-cardeal.png" width='70px' />
        </Link>

        <div className="hidden lg:flex items-center ">
          <div className="pr-10 ">{navList}</div>

          {/* REDES SOCIAIS*/}
          <div className="hidden lg:flex gap-4 border-l-2 border-l-blue-900 pl-10">
            <a href="https://www.facebook.com/empreendimentoscardeal" target="_blank">
              <FaFacebook className="text-white text-2xl " />
            </a>
            <a href="https://www.instagram.com/empreendimentoscardeal/" target="_blank">
              <FaInstagram className="text-white text-2xl" />
            </a>
            <a href="https://www.youtube.com/@EmpreendimentosCardeal" target="_blank">
              <FaYoutube className="text-white text-2xl" />
            </a>
          </div>
        </div>
        {/* Substituir o botão Buy Now pelos ícones */}

        <IconButton
          variant="text"
          className="ml-auto mr-3 h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            //ICON HAMBURGUER MENU
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
            //ICON X MENU
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

      {/* MENU MOBILE */}
      <Collapse open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="flex items-center justify-center gap-4">
            <a href="https://www.facebook.com/empreendimentoscardeal" target="_blank">
              <FaFacebook className="text-white text-2xl " />
            </a>
            <a href="https://www.instagram.com/empreendimentoscardeal/" target="_blank">
              <FaInstagram className="text-white text-2xl" />
            </a>
            <a href="https://www.youtube.com/@EmpreendimentosCardeal" target="_blank">
              <FaYoutube className="text-white text-2xl" />
            </a>
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
}
