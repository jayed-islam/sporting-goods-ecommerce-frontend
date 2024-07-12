import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { navConfig } from "./config-navigation";
import { paths } from "../paths";
import { IconButton } from "@mui/material";
import { BsCart4 } from "react-icons/bs";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useAppSelector } from "../../redux/hooks";
// import { useAppSelector } from "src/redux/hooks";

const Header = () => {
  const { cartItems } = useAppSelector((state) => state.cart);
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const pathname = location.pathname;
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 xl:px-0 mt-2">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <NavLink className="block text-teal-600" to={paths.root}>
              <span className="sr-only">Home</span>
              <img src={logo} alt="fantasy stports" className="w-28" />
            </NavLink>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                {navConfig.map((navItem, index) => (
                  <li key={index}>
                    <NavLink
                      className={`text-gray-500 transition font-semibold hover:text-orange-500  text-md ${
                        pathname === navItem.path && "text-orange-600"
                      } `}
                      to={navItem.path}
                    >
                      {navItem.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="md:hidden w-full">
            <ul
              className={`flex items-start flex-col gap-6 text-sm bg-white absolute h-screen top-0 z-10 w-72 shadow-lg border-r transition-all duration-300 pl-5 pt-7 ${
                isOpen ? "left-0" : "-left-80"
              }`}
            >
              {navConfig.map((navItem, index) => (
                <li key={index} className="w-full">
                  <NavLink
                    className={`text-gray-500 transition font-semibold hover:text-orange-500 hover:bg-gray-100 w-full px-3 py-2 text-md ${
                      pathname === navItem.path && "text-orange-600"
                    } `}
                    to={navItem.path}
                    onClick={() => setIsOpen((prev) => !prev)}
                  >
                    {navItem.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <div className="relative">
                <NavLink to={paths.cart}>
                  <IconButton
                    sx={{
                      border: "1px solid orange",
                    }}
                  >
                    <BsCart4 />
                  </IconButton>
                </NavLink>
                <div className="absolute top-0 right-0 w-5 h-5 bg-orange-400 rounded-full flex items-center justify-center text-sm text-white">
                  {cartItems.length}
                </div>
              </div>
            </div>

            <div className="block md:hidden">
              <button
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                {isOpen ? (
                  <AiOutlineClose className="text-xl" />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
