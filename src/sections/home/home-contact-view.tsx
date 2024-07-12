import toast from "react-hot-toast";
import { FaLinkedinIn } from "react-icons/fa6";
import { GoGlobe } from "react-icons/go";
import { IoLogoGithub } from "react-icons/io5";
import { NavLink } from "react-router-dom";

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

const HomeContactView = () => {
  const handleSubmit = () => {
    toast.success("Thanks for your submission!!!");
  };
  return (
    <section className="bg-white">
      <div className="max-w-5xl px-6 py-12 mx-auto">
        <div className="lg:flex lg:items-center lg:-mx-6">
          <div className="lg:w-1/2 lg:mx-6">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize  lg:text-3xl">
              Contact us for <br /> more info
            </h1>

            <div className="mt-6 space-y-8 md:mt-8">
              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-orange-500 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <span className="mx-2 text-gray-700 truncate w-72 ">
                  Dhaka, Aftabnagar, Bangladesh
                </span>
              </p>

              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-orange-500 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>

                <span className="mx-2 text-gray-700 truncate w-72 ">
                  (+880) 1954057920
                </span>
              </p>

              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-orange-500 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                <span className="mx-2 text-gray-700 truncate w-72 ">
                  acb@example.com
                </span>
              </p>
            </div>

            <div className="mt-6 w-80 md:mt-8">
              <h3 className="text-gray-600  ">Follow us</h3>

              <div className="flex mt-4 -mx-1.5 ">
                {socialLinks.map((item, index) => (
                  <NavLink
                    key={index}
                    className="mx-1.5  text-gray-700 transition-colors duration-300 transform hover:text-orange-600"
                    to={item.href}
                  >
                    {item.icon}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 lg:w-1/2 lg:mx-6">
            <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl  lg:max-w-xl shadow-gray-300/50 border">
              <h1 className="text-lg font-medium text-gray-700">
                What do you want to ask
              </h1>

              <div className="mt-6">
                <div className="flex-1">
                  <label className="block mb-2 text-sm text-gray-600 ">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md "
                  />
                </div>

                <div className="flex-1 mt-6">
                  <label className="block mb-2 text-sm text-gray-600 ">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="johndoe@example.com"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md "
                  />
                </div>

                <div className="w-full mt-6">
                  <label className="block mb-2 text-sm text-gray-600 ">
                    Message
                  </label>
                  <textarea
                    className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48"
                    placeholder="Message"
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-500 rounded-md hover:bg-orange-400 "
                >
                  get in touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContactView;
