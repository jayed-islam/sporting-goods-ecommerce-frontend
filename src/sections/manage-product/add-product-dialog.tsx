/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import { BooleanState } from "@/types/utils";
import FormProvider from "@/components/hook-form/hook-form-provider";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProductFormData, productFormSchema } from "./validation";
import RHFTextField from "@/components/hook-form/text-filed";
import RHFSelect from "@/components/hook-form/select-field";
import { categories } from "@/constants";
import { ICategory } from "@/types/category";
import { LoadingButton } from "@mui/lab";
import { useCreateProductMutation } from "@/redux/reducers/product/productApi";
import { IProduct } from "@/types/product";
import toast from "react-hot-toast";

interface AddProductProps {
  dialog: BooleanState;
}

const AddProductDialog: React.FC<AddProductProps> = ({ dialog }) => {
  const methods = useForm<ProductFormData>({
    resolver: zodResolver(productFormSchema),
  });

  const { handleSubmit } = methods;

  const [createProduct, { isLoading }] = useCreateProductMutation();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    try {
      const res = await createProduct(data as IProduct).unwrap();
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
  });

  return (
    <Dialog
      open={dialog.value}
      onClose={dialog.setFalse}
      maxWidth="sm"
      fullWidth
    >
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <DialogTitle>Create Product</DialogTitle>
        <DialogContent className="space-y-4">
          <div className="w-full flex-1 grid grid-cols-1 md:grid-cols-2 gap-3 py-5">
            <RHFTextField
              name="name"
              label="Name"
              fullWidth
              className="md:col-span-2"
            />
            <RHFSelect
              name="category"
              label="Category"
              options={Object.values(categories).map((category: ICategory) => ({
                value: category.name,
                label: category.name,
              }))}
            />
            <RHFTextField name="brand" label="Brand" />
            <RHFTextField name="stock" label="Stock" type="number" />
            <RHFTextField name="price" label="Price" type="number" />
            <RHFTextField
              name="image"
              label="Image"
              className="md:col-span-2"
            />
            <RHFTextField
              name="description"
              label="Description"
              className="md:col-span-2"
              multiline
              rows={3}
            />
          </div>
        </DialogContent>
        <div className="px-5 pb-5">
          <DialogActions>
            <Button
              variant="contained"
              color="warning"
              onClick={dialog.setFalse}
            >
              Cancel
            </Button>
            <LoadingButton
              type="submit"
              variant="contained"
              color="success"
              loading={isLoading}
            >
              Create Product
            </LoadingButton>
          </DialogActions>
        </div>
      </FormProvider>
    </Dialog>
  );
};

export default AddProductDialog;
