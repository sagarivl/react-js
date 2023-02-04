import { CDN_URL } from "./constants";
import { removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const CardView = ({ name, cloudinaryImageId, price, description, id }) => {
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    console.log(id);
    dispatch(removeItem(id));
  };
  return (
    <>
      <div className="card">
        <img src={CDN_URL + cloudinaryImageId} />
        <h4>{name}</h4>
        <div>{description}</div>
        <div>{price}</div>
        <button
          onClick={() => {
            handleRemove(id);
          }}
        >
          remove
        </button>
      </div>
    </>
  );
};

export default CardView;
