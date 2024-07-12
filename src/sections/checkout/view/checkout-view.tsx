/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "../validation";
import FormProvider from "@/components/hook-form/hook-form-provider";
import RHFTextField from "@/components/hook-form/text-filed";
import OrderSummary from "@/sections/cart/common/order-summery";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@/redux/hooks";
import toast from "react-hot-toast";
import { useUpdateProductStockMutation } from "@/redux/reducers/product/productApi";
import ScrollToTop from "@/hooks/use-scroll-to-top";

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
}

const CheckoutView = () => {
  const { cartItems } = useAppSelector((state) => state.cart);
  const navigate = useNavigate();
  const methods = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { handleSubmit } = methods;

  const [updateProductStock, { isLoading }] = useUpdateProductStockMutation();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    const productsToUpdate = cartItems.map((item) => ({
      productId: item.product._id,
      quantity: item.quantity,
    }));
    try {
      const response = await updateProductStock({
        products: productsToUpdate,
      }).unwrap();

      if (response.success) {
        toast.success("Order placed successfully");
        navigate("/success");
      } else {
        toast.error(response.message);
      }
    } catch (err: any) {
      console.log(err);
      toast.error(err.data.message);
    }
  });

  return (
    <div className="max-w-5xl mx-auto my-11 px-5 xl:px-0">
      <ScrollToTop />
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <h2 className="text-3xl font-semibold mb-2">Checkout</h2>
        <h2 className="text-lg mb-5">Add your Information to make order</h2>
        <div className="lg:flex items-start gap-7">
          <div className="w-full">
            <div className="w-full flex-1 grid grid-cols-1 md:grid-cols-2 gap-3">
              <RHFTextField name="name" label="Name" fullWidth />
              <RHFTextField name="email" label="Email" fullWidth />
              <RHFTextField
                name="address"
                label="Address"
                className="md:col-span-2"
              />
              <RHFTextField name="phone" label="Phone" />
            </div>
            <h3 className="mt-5 text-xl font-semibold mb-3">Payment Methods</h3>
            <RadioGroup
              aria-label="paymentMethod"
              name="paymentMethod"
              defaultValue="cashOnDelivery"
            >
              <FormControlLabel
                value="cashOnDelivery"
                control={<Radio />}
                label="Cash on Delivery"
              />
              <FormControlLabel
                value="stripe"
                control={<Radio />}
                label="Stripe"
              />
            </RadioGroup>
          </div>
          <div className="w-full md:w-[21rem]">
            <OrderSummary isSubmit isLoading={isLoading} />
          </div>
        </div>
      </FormProvider>
    </div>
  );
};

export default CheckoutView;
