import logo from "../../assets/logo.png";
import { FaLinkedinIn } from "react-icons/fa6";
import { GoGlobe } from "react-icons/go";
import { IoLogoGithub } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { navConfig } from "./config-navigation";

const Footer = () => {
  const socialLinks = [
    {
      href: "https://jayedulislam.vercel.app",
      icon: <GoGlobe />,
    },
    {
      href: "https://www.linkedin.com/in/jayedulislam/",
      icon: <FaLinkedinIn />,
    },
    {
      href: "https://github.com/jayed-islam",
      icon: <IoLogoGithub />,
    },
  ];
  return (
    <footer className="bg-slate-800">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center text-teal-600">
          <img src={logo} className="w-32" />
        </div>

        <p className="mx-auto mt-3 max-w-md text-center leading-relaxed text-gray-300">
          The Fantasy Sports is an e-commerce platform designed to cater to
          athletes, sports enthusiasts, and fitness aficionados. It offers a
          diverse selection of high-quality sports equipment, apparel, and
          accessories.
        </p>

        <ul className="mt-11 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          {navConfig.map((item, index) => (
            <li key={index}>
              <NavLink
                className="text-gray-400 transition hover:text-gray-500"
                to={item.path}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>

        <ul className="mt-12 flex justify-center gap-6 md:gap-8">
          {socialLinks.map((item, index) => (
            <NavLink
              key={index}
              to={item.href}
              target="_blank"
              className="text-gray-400 transition hover:text-gray-500 h-7 w-7 rounded-full border-gray-500 border flex items-center justify-center"
            >
              {item.icon}
            </NavLink>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
