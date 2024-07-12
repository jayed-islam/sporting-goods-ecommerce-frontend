import { z } from "zod";

const productFormSchema = z.object({
  name: z.string({
    required_error: "Product name is required",
  }),
  description: z.string({
    required_error: "Description is required",
  }),
  category: z.string({
    required_error: "Category is required",
  }),
  brand: z.string({
    required_error: "Brand is required",
  }),
  stock: z
    .number({
      required_error: "Stock is required",
    })
    .nonnegative({ message: "Stock cannot be negative" }),
  price: z
    .number({
      required_error: "Price is required",
    })
    .positive({ message: "Price must be greater than 0" }),
  image: z
    .string({
      required_error: "Image URL is required",
    })
    .url({ message: "Invalid URL format" }),
});

export interface ProductFormData extends z.infer<typeof productFormSchema> {}

export { productFormSchema };
