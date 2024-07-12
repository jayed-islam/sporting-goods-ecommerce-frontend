import { IconButton, TableCell, TableRow, Typography } from "@mui/material";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import UpdateProductDialog from "./update-product-dialog";
import DeleteProductDialogFromShop from "./delete-product-fromshop-dialog";
import useBoolean from "../../hooks/use-boolean";
import { IProduct } from "../../types/product";

interface Props {
  product: IProduct;
}

const ProductTableRow = ({ product }: Props) => {
  const updateDialog = useBoolean();
  const deleteDialog = useBoolean();
  return (
    <>
      <TableRow key={product._id}>
        <TableCell className="flex">
          <div className="flex items-center gap-3">
            <img src={product.image} className="w-11" alt="" />
            <Typography>{product.name}</Typography>
          </div>
        </TableCell>
        <TableCell>{product.brand}</TableCell>
        <TableCell>{product.price}</TableCell>
        <TableCell>{product.category}</TableCell>
        <TableCell>{product.stock}</TableCell>
        <TableCell
          align="center"
          sx={{
            gap: 3,
          }}
        >
          <IconButton onClick={deleteDialog.setTrue}>
            <RiDeleteBin6Line />
          </IconButton>
          <IconButton onClick={updateDialog.setTrue}>
            <TiEdit />
          </IconButton>
        </TableCell>
      </TableRow>
      <UpdateProductDialog dialog={updateDialog} initialValues={product} />
      <DeleteProductDialogFromShop
        dialog={deleteDialog}
        productId={product._id}
      />
    </>
  );
};

export default ProductTableRow;
