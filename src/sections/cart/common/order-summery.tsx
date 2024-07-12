/* eslint-disable @typescript-eslint/no-explicit-any */

import { LoadingButton } from "@mui/lab";
import { Button, Divider, Typography } from "@mui/material";
import { orange } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks";
import {
  selectIsCartInStock,
  selectTotalItems,
  selectTotalWithVAT,
} from "../../../redux/reducers/cart/cartSlice";
import { paths } from "../../../layouts/paths";

interface Props {
  isSubmit?: boolean;
  onSubmit?: any;
  isLoading?: boolean;
}

const OrderSummary = ({ isSubmit, isLoading }: Props) => {
  const { cartItems } = useAppSelector((state) => state.cart);
  const { subtotal, vatTotal, totalWithVAT } =
    useAppSelector(selectTotalWithVAT);
  const totalItem = useAppSelector(selectTotalItems);
  const isCartInStock = useAppSelector(selectIsCartInStock);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(paths.checkout);
  };

  return (
    <div className="rounded-xl border w-full md:w-[21rem] bg-white">
      <div className="p-3 bg-gray-100 border-b rounded-t-xl">
        <h2 className="text-md font-semibold">Order Summary</h2>
      </div>
      <div className="p-3 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <Typography variant="body1">Subtotal ({totalItem} Items)</Typography>
          <Typography variant="subtitle1" className="font-semibold">
            ৳{subtotal}
          </Typography>
        </div>
        <div className="flex items-center justify-between">
          <Typography variant="body1">Vat Total (15%) OP</Typography>
          <Typography variant="subtitle1" className="font-semibold">
            ৳{vatTotal}
          </Typography>
        </div>
        <Divider />
        <div className="flex items-center justify-between">
          <Typography variant="body1" className="font-semibold">
            Total (with VAT)
          </Typography>
          <Typography variant="subtitle1" className="font-semibold">
            ৳{totalWithVAT}
          </Typography>
        </div>

        {isSubmit ? (
          <LoadingButton
            variant="contained"
            type="submit"
            loading={isLoading}
            disabled={cartItems.length === 0}
            sx={{
              bgcolor: orange[500],
              "&:hover": {
                bgcolor: orange[600],
              },
              textTransform: "capitalize",
            }}
          >
            Place Order
          </LoadingButton>
        ) : (
          <Button
            variant="contained"
            color="primary"
            type="button"
            disabled={!isCartInStock || cartItems.length === 0}
            onClick={handleNavigate}
            sx={{
              bgcolor: orange[500],
              "&:hover": {
                bgcolor: orange[600],
              },
              textTransform: "capitalize",
            }}
          >
            Proceed to Checkout
          </Button>
        )}
      </div>
    </div>
  );
};

export default OrderSummary;
