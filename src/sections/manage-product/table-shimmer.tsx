import { TableCell, TableRow } from "@mui/material";

const TableShimmer = () => {
  return (
    <>
      {Array.from(new Array(10)).map((_, index) => (
        <TableRow key={index} className="animate-pulse">
          <TableCell>
            <div className="h-3 bg-gray-200 w-full rounded-sm"></div>
          </TableCell>
          <TableCell>
            <div className="h-3 bg-gray-200 w-full rounded-sm"></div>
          </TableCell>
          <TableCell>
            <div className="h-3 bg-gray-200 w-full rounded-sm"></div>
          </TableCell>
          <TableCell>
            <div className="h-3 bg-gray-200 w-full rounded-sm"></div>
          </TableCell>
          <TableCell>
            <div className="h-3 bg-gray-300 w-full rounded-sm"></div>
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default TableShimmer;
