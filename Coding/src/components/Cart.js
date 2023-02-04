import { useDispatch, useSelector } from "react-redux";
import CardView from "./CartView";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const store = useSelector((state) => state.cart.items);
  console.log("sore", store);
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(clearCart());
  };
  return (
    <>
      <h1>Cart items count-{store.length}</h1>
      <button
        onClick={() => {
          handleClear();
        }}
      >
        ClearAllCart
      </button>
      <div className="cart-view">
        {store.map((item) => (
          <CardView key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};
export default Cart;
