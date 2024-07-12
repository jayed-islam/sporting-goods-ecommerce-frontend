import { IconButton } from "@mui/material";
import { RiDeleteBinLine } from "react-icons/ri";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import DeleteProductDialog from "./delete-dialog";
import {
  ICartItem,
  updateProductQuantity,
} from "../../../redux/reducers/cart/cartSlice";
import { useAppDispatch } from "../../../redux/hooks";
import useBoolean from "../../../hooks/use-boolean";

interface Props {
  item: ICartItem;
}

const CartItem = ({ item }: Props) => {
  const dispatch = useAppDispatch();
  const deleteDialog = useBoolean();

  const handleUpdateQuantity = (id: string, quantity: number) => {
    dispatch(updateProductQuantity({ id, quantity }));
    console.log("aaa");
  };
  return (
    <div className="flex items-center gap-4 bg-white p-3 rounded-xl border shadow-sm">
      <img
        src={item.product.image}
        alt=""
        className="size-20 object-cover border rounded-xl"
      />

      <div>
        <h3 className="text-sm text-gray-900 line-clamp-2 pr-5">
          {item.product.name}
        </h3>

        <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
          <div>
            <dt className="inline">Brand:</dt>
            <dd className="inline">{item.product.brand}</dd>
          </div>

          <div>
            <dt className="inline">Category:</dt>
            <dd className="inline">{item.product.category}</dd>
          </div>
        </dl>
      </div>

      <div className="flex flex-1 items-center justify-end gap-7">
        <div className="flex items-center gap-2">
          <IconButton
            sx={{
              border: "1px solid gray",
              p: 0.5,
            }}
            size="small"
            onClick={() =>
              handleUpdateQuantity(item.product._id, item.quantity - 1)
            }
            disabled={item.quantity <= 1}
          >
            <FiMinus />
          </IconButton>
          <div>{item.quantity}</div>
          <IconButton
            sx={{
              border: "1px solid gray",
              p: 0.5,
            }}
            size="small"
            onClick={() =>
              handleUpdateQuantity(item.product._id, item.quantity + 1)
            }
          >
            <GoPlus />
          </IconButton>
        </div>

        <button
          className="text-gray-600 transition hover:text-yellow-600"
          onClick={deleteDialog.setTrue}
        >
          <span className="sr-only">Remove item</span>
          <RiDeleteBinLine className="text-2xl" />
        </button>
      </div>
      <DeleteProductDialog dialog={deleteDialog} productId={item.product._id} />
    </div>
  );
};

export default CartItem;
