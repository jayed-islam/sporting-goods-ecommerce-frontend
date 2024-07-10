import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { navConfig } from "./config-navigation";
import { paths } from "../paths";
import { IconButton } from "@mui/material";
import { BsCart4 } from "react-icons/bs";

const Header = () => {
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
                      className="text-gray-500 transition hover:text-gray-500/75 text-md"
                      to={navItem.path}
                    >
                      {navItem.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <div className="hidden sm:flex">
                <NavLink to="/">
                  <IconButton
                    sx={{
                      border: "1px solid #D97706",
                    }}
                  >
                    <BsCart4 />
                  </IconButton>
                </NavLink>
              </div>
            </div>

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
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
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
