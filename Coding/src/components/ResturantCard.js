import { CDN_URL } from "./constants";

const ResturantCard = (props) => {
  //console.log(props);
  const { name, cloudinaryImageId, cuisines, lastMileTravelString } =
    props.cardList.data;
  return (
    <>
      <div className="card">
        <img src={CDN_URL + cloudinaryImageId} />
        <h4>{name}</h4>
        <div>{cuisines.join(" , ")}</div>
        <div>{lastMileTravelString} </div>
      </div>
    </>
  );
};

export default ResturantCard;
