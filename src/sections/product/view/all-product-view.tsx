import React, { useState } from "react";
import { useGetProductListQuery } from "@/redux/reducers/product/productApi";
import ShimmerCard from "@/layouts/common/product-shimmer-card";
import ProductCard from "@/layouts/common/product-card";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
  Slider,
  TextField,
} from "@mui/material";
import EmptyComponent from "../common/empty-data-component";
import ScrollToTop from "@/hooks/use-scroll-to-top";
import { orange } from "@mui/material/colors";

interface Props {
  category?: string;
}

interface FilterState {
  category: string;
  search: string;
  sort: "asc" | "desc";
  limit: number;
  page: number;
  brand: string[];
  rating: number;
  priceRange: number[];
}

const AllProductView = ({ category: initialCategory }: Props) => {
  const [filters, setFilters] = useState<FilterState>({
    category: initialCategory as string,
    search: "",
    sort: "asc",
    limit: 10,
    page: 1,
    brand: [],
    rating: 0,
    priceRange: [0, 1000],
  });

  const { data, isFetching } = useGetProductListQuery(filters, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  const handleFilterChange = (
    key: keyof FilterState,
    value: string | number | number[]
  ) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
  };

  const handleClearFilters = () => {
    setFilters({
      category: "",
      search: "",
      sort: "asc",
      limit: 10,
      page: 1,
      brand: [],
      rating: 0,
      priceRange: [0, 1000],
    });
  };

  const handleBrandChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const brand = event.target.value;
    setFilters((prevFilters) => {
      const newBrands = prevFilters.brand.includes(brand)
        ? prevFilters.brand.filter((b) => b !== brand)
        : [...prevFilters.brand, brand];
      return { ...prevFilters, brand: newBrands };
    });
  };

  return (
    <div className="bg-gray-100">
      <ScrollToTop />
      <div className="max-w-5xl mx-auto px-5 xl:px-0 py-9 md:py-11">
        <div className="mb-7">
          <div className="flex items-center flex-col lg:flex-row gap-3">
            <div className="w-full">
              <TextField
                label="Search"
                value={filters.search}
                onChange={(e) => handleFilterChange("search", e.target.value)}
                variant="outlined"
                size="small"
                fullWidth
                sx={{
                  bgcolor: "white",
                }}
              />
            </div>
            <div className="flex items-start gap-3 flex-col lg:flex-row w-full">
              <Select
                id="category"
                value={filters.category}
                onChange={(e: SelectChangeEvent) =>
                  handleFilterChange("category", e.target.value)
                }
                size="small"
                fullWidth
                variant="outlined"
                displayEmpty
                sx={{
                  bgcolor: "white",
                }}
              >
                <MenuItem value="">All Categories</MenuItem>
                <MenuItem value="Apparel">Apparel</MenuItem>
                <MenuItem value="Equipment">Equipment</MenuItem>
                <MenuItem value="Footwear">Footwear</MenuItem>
                <MenuItem value="Accessories">Accessories</MenuItem>
                <MenuItem value="Nutrition">Nutrition</MenuItem>
                <MenuItem value="Electronics">Electronics</MenuItem>
              </Select>

              <Select
                id="sort"
                value={filters.sort}
                onChange={(e: SelectChangeEvent) =>
                  handleFilterChange("sort", e.target.value)
                }
                size="small"
                fullWidth
                variant="outlined"
                displayEmpty
                sx={{
                  bgcolor: "white",
                }}
              >
                <MenuItem value="asc">Sort by Price: Asce</MenuItem>
                <MenuItem value="desc">Sort by Price: Dsce</MenuItem>
              </Select>
              <Select
                id="rating"
                value={filters.rating}
                onChange={(e) =>
                  handleFilterChange("rating", Number(e.target.value))
                }
                size="small"
                fullWidth
                variant="outlined"
                displayEmpty
                sx={{
                  bgcolor: "white",
                }}
              >
                <MenuItem value="0">Ratings</MenuItem>
                <MenuItem value="1">Rating: 1</MenuItem>
                <MenuItem value="2">Rating: 2</MenuItem>
                <MenuItem value="3">Rating: 3</MenuItem>
                <MenuItem value="4">Rating: 4</MenuItem>
                <MenuItem value="5">Rating: 5</MenuItem>
              </Select>
            </div>
          </div>

          <div className="flex items-center flex-col lg:flex-row gap-3 mt-3">
            <div className="w-full bg-white px-5 py-2 rounded-lg border shadow-sm">
              <FormControl component="fieldset">
                <FormLabel component="legend">Brand</FormLabel>
                <Box>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={filters.brand.includes("Adidas")}
                        onChange={handleBrandChange}
                        value="Adidas"
                      />
                    }
                    label="Adidas"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={filters.brand.includes("Puma")}
                        onChange={handleBrandChange}
                        value="Puma"
                      />
                    }
                    label="Puma"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={filters.brand.includes("Reebok")}
                        onChange={handleBrandChange}
                        value="Reebok"
                      />
                    }
                    label="Reebok"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={filters.brand.includes("Under")}
                        onChange={handleBrandChange}
                        value="Under"
                      />
                    }
                    label="Under"
                  />
                </Box>
              </FormControl>
            </div>
            <div className="flex items-center flex-col lg:flex-row gap-3 w-full">
              <div className="w-full bg-white px-5 py-2 rounded-lg border shadow-sm">
                <label>Price Range</label>
                <Slider
                  value={filters.priceRange}
                  onChange={(e, newValue) =>
                    handleFilterChange("priceRange", newValue as number[])
                  }
                  valueLabelDisplay="auto"
                  min={0}
                  max={1000}
                  step={10}
                  color="warning"
                />
              </div>
              <Button
                variant="contained"
                onClick={handleClearFilters}
                sx={{
                  textTransform: "capitalize",
                  fontSize: "0.7rem",
                  whiteSpace: "nowrap",
                  bgcolor: orange[500],
                  "&:hover": {
                    bgcolor: orange[600],
                  },
                }}
              >
                Clear Filters
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          {isFetching ? (
            Array.from({ length: 11 }).map((_, idx) => (
              <div key={idx} className="w-full md:w-1/3 px-3 mb-6">
                <ShimmerCard />
              </div>
            ))
          ) : data?.data.products.length === 0 ? (
            <EmptyComponent />
          ) : (
            data?.data.products.map((product) => (
              <div key={product._id} className="w-full md:w-1/3 px-3 mb-6">
                <ProductCard product={product} />
              </div>
            ))
          )}
        </div>
        <div className="flex items-center justify-center bg-white">
          <Pagination
            count={data?.data.pagination.totalPages}
            showFirstButton
            showLastButton
          />
        </div>
      </div>
    </div>
  );
};

export default AllProductView;
