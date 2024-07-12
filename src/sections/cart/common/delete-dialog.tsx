import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { BooleanState } from "../../../types/utils";
import { useAppDispatch } from "../../../redux/hooks";
import { deleteProduct } from "../../../redux/reducers/cart/cartSlice";

interface Props {
  dialog: BooleanState;
  productId: string;
}

const DeleteProductDialog = ({ dialog, productId }: Props) => {
  const dispatch = useAppDispatch();

  const handleRemove = () => {
    dispatch(deleteProduct(productId));
    dialog.setFalse();
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
          <Button onClick={handleRemove} color="error" variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteProductDialog;
