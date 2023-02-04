import { useParams } from "react-router-dom";
import { CDN_URL } from "./constants";
import Shimmer from "./Shimmer";
import useRestuarant from "../utils/useRestuarant";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../utils/cartSlice";

const ResturantMenu = () => {
  const { id } = useParams();
  const restaurantData = useRestuarant(id);
  const dispatch = useDispatch();
  const store = useSelector((state) => state.cart.items);
  console.log(restaurantData);
  console.log("store", store);

  const handleClick = (item) => {
    console.log(item);
    dispatch(addToCart(item));
  };

  return !restaurantData ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restraunt id: {id}</h1>
        <h2>{restaurantData?.name}</h2>
        <img src={CDN_URL + restaurantData?.cloudinaryImageId} />
        <h3>{restaurantData?.area}</h3>
        <h3>{restaurantData?.city}</h3>
        <h3>{restaurantData?.avgRating} stars</h3>
        <h3>{restaurantData?.costForTwoMsg}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul className="menu-list">
          {Object.values(restaurantData?.menu?.items).map((item) => (
            <>
              <li key={item.id}>
                {item.name}
                <button
                  onClick={() => {
                    handleClick(item);
                  }}
                >
                  add
                </button>

                {/* <img
                  style={{ width: "100px", height: "100px" }}
                  src={CDN_URL + item?.cloudinaryImageId}
                  alt={item?.name}
                /> */}
              </li>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResturantMenu;
