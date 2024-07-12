import { Grid, Typography } from "@mui/material";
import { FaLinkedinIn } from "react-icons/fa6";
import { GoGlobe } from "react-icons/go";
import { IoLogoGithub } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import ScrollToTop from "../../hooks/use-scroll-to-top";

const AboutPage = () => {
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

  const teams = [
    {
      name: "Sabbir Hossain",
      desig: "Project Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
    {
      name: "Rahat Rezwan",
      desig: "Web Developer",
      image:
        "https://images.unsplash.com/photo-1608174386344-80898cec6beb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      name: "Jayedul Islam",
      desig: "Web Developer",
      image:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
  ];
  return (
    <div>
      <ScrollToTop />
      <div className="py-10 max-w-5xl mx-auto px-5 xl:px-0">
        <Typography variant="h3" className="mb-6">
          About Us
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="body1"
              className="mb-7"
              sx={{
                mb: 2,
              }}
            >
              <strong>Welcome to the Fantasy Sports,</strong> your ultimate
              destination for premium sports equipment and accessories. We aim
              to provide athletes and sports enthusiasts with a diverse range of
              high-quality products tailored to enhance their performance and
              enjoyment in various sports activities.
            </Typography>
            <Typography
              variant="body1"
              className="mb-4"
              sx={{
                mb: 2,
              }}
            >
              <strong>Mission Statement:</strong> Our mission is to empower
              athletes of all levels by offering top-notch sports gear that
              combines innovation, quality, and affordability. We strive to
              foster a community where sports enthusiasts can find everything
              they need to excel in their chosen sport.
            </Typography>
            <Typography variant="body1">
              <strong>Vision Statement:</strong> Our vision is to become a
              leading online platform known for its exceptional customer
              service, extensive product selection, and commitment to promoting
              a healthy and active lifestyle through sports.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" className="mb-4">
              Contact Information
            </Typography>
            <Typography variant="body1" className="mb-4">
              <strong>Email:</strong> support@fantasysports.com
            </Typography>
            <Typography variant="body1" className="mb-4">
              <strong>Phone:</strong> +8801954057920
            </Typography>
            <Typography variant="body1" className="mb-4">
              <strong>Address:</strong> Aftabnagar, Dhaka, Bangladesh
            </Typography>
            <Typography variant="body1">
              For any inquiries or assistance, feel free to reach out to our
              dedicated customer support team.
            </Typography>
          </Grid>
        </Grid>
      </div>

      <Grid item xs={12}>
        <section className="bg-white dark:bg-gray-900">
          <div className="max-w-5xl px-5 mx-auto xl:px-0">
            <Typography variant="h4" className="mb-4">
              Our Team
            </Typography>
            <div className="grid grid-cols-1 gap-8 mt-5 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
              {teams.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-orange-500"
                >
                  <img
                    className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                    src={item.image}
                    alt=""
                  />

                  <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize group-hover:text-white">
                    {item.name}
                  </h1>

                  <p className="mt-2 text-gray-500 capitalize group-hover:text-gray-300">
                    {item.desig}
                  </p>

                  <div className="flex mt-3 -mx-2">
                    {socialLinks.map((item, index) => (
                      <NavLink
                        key={index}
                        to={item.href}
                        className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white"
                      >
                        {item.icon}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Grid>
      <div className="max-w-5xl mx-auto px-5 xl:px-0 py-11">
        <Grid item xs={12}>
          <Typography variant="h4" className="mb-4">
            Store Location
          </Typography>
          <Typography variant="body1" className="mb-4">
            Visit our physical store to explore our products and get expert
            advice from our knowledgeable staff.
          </Typography>
          <Typography variant="body1">
            <strong>Location:</strong> Aftabnagar, Dhaka, Bangladesh
          </Typography>
          <Typography variant="body1">
            <strong>Store Hours:</strong> Mon - Fri: 9 AM - 6 PM, Sat: 10 AM - 4
            PM
          </Typography>
        </Grid>
      </div>
    </div>
  );
};

export default AboutPage;
