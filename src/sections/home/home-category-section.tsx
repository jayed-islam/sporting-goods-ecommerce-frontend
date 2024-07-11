import { NavLink } from "react-router-dom";
import { categories } from "../../constants";
import { paths } from "../../layouts/paths";

const HomeCategorySection = () => {
  return (
    <div className="bg-gray-100 my-7">
      <section className="py-8 max-w-5xl mx-auto px-5 xl:px-0">
        <h2 className="text-3xl font-bold text-center mb-6">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {categories.map((category) => (
            <NavLink to={`${paths.allProducts}?category=${category.name}`}>
              <div
                key={category.id}
                className="flex flex-col items-center group"
              >
                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mb-4 overflow-hidden rounded-full shadow-lg border">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 group-hover:shadow-xl"
                  />
                </div>
                <h3 className="text-lg font-medium">{category.name}</h3>
              </div>
            </NavLink>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomeCategorySection;
