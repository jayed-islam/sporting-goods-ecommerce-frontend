import React, { useState } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  TableSortLabel,
  Paper,
} from "@mui/material";

import TableShimmer from "../table-shimmer";
import AddProductDialog from "../add-product-dialog";
import ProductTableRow from "../table-row";
import { orange } from "@mui/material/colors";
import { useGetProductListQuery } from "../../../redux/reducers/product/productApi";
import useBoolean from "../../../hooks/use-boolean";
import ScrollToTop from "../../../hooks/use-scroll-to-top";

interface FilterState {
  limit: number;
  page: number;
  sort: "asc" | "desc" | undefined;
}

const ManageProductView: React.FC = () => {
  const [filters, setFilters] = useState<FilterState>({
    sort: undefined,
    limit: 10,
    page: 1,
  });

  const { data, isFetching } = useGetProductListQuery(filters, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  const handleSort = () => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      sort: prevFilters.sort === "asc" ? "desc" : "asc",
    }));
  };

  const handleChangePage = (_event: unknown, newPage: number) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      page: newPage + 1,
    }));
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      limit: parseInt(event.target.value, 10),
      page: 1,
    }));
  };

  const addDialog = useBoolean();

  return (
    <div className="bg-gray-100">
      <ScrollToTop />
      <div className="max-w-5xl mx-auto px-5 xl:px-0 py-11">
        <div className="md:flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-semibold mb-2">Manage Product</h2>
            <h2 className="text-lg mb-5">
              Manage your products here its easy!!
            </h2>
          </div>
          <Button
            onClick={addDialog.setTrue}
            variant="contained"
            sx={{
              bgcolor: orange[500],
              "&:hover": {
                bgcolor: orange[600],
              },
              textTransform: "capitalize",
            }}
          >
            Add New Product
          </Button>
        </div>

        <Paper
          sx={{
            mt: {
              xs: 5,
              md: 0,
            },
          }}
        >
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Brand</TableCell>
                  <TableCell>
                    <TableSortLabel
                      active={true}
                      direction={filters.sort}
                      onClick={handleSort}
                    >
                      Price
                    </TableSortLabel>
                  </TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Stock</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {isFetching ? (
                  <TableShimmer />
                ) : (
                  data?.data.products.map((product, index) => (
                    <ProductTableRow key={index} product={product} />
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            component="div"
            count={data?.data.pagination.totalItems || 0}
            page={filters.page - 1}
            onPageChange={handleChangePage}
            rowsPerPage={filters.limit}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPageOptions={[10, 25, 50]}
          />
        </Paper>
      </div>
      <AddProductDialog dialog={addDialog} />
    </div>
  );
};

export default ManageProductView;
