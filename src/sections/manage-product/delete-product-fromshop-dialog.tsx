/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import toast from "react-hot-toast";
import { LoadingButton } from "@mui/lab";
import { BooleanState } from "../../types/utils";
import { useDeleteProductMutation } from "../../redux/reducers/product/productApi";

interface Props {
  dialog: BooleanState;
  productId: string;
}

const DeleteProductDialogFromShop = ({ dialog, productId }: Props) => {
  const [deleteProduct, { isLoading }] = useDeleteProductMutation();

  const handleDelete = async () => {
    try {
      const res = await deleteProduct(productId).unwrap();
      if (res.success) {
        toast.success(res.message);
        dialog.setFalse();
      } else {
        toast.error(res.message);
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error.data.message);
    }
  };

  return (
    <div>
      <Dialog
        open={dialog.value}
        onClose={dialog.setFalse}
        aria-labelledby="delete-dialog-title"
        aria-describedby="delete-dialog-description"
      >
        <DialogTitle id="delete-dialog-title">Delete Product</DialogTitle>
        <DialogContent>
          <DialogContentText id="delete-dialog-description">
            Are you sure you want to delete this product?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={dialog.setFalse} color="success" variant="contained">
            Cancel
          </Button>
          <LoadingButton
            onClick={handleDelete}
            color="error"
            variant="contained"
            loading={isLoading}
          >
            Delete
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteProductDialogFromShop;
