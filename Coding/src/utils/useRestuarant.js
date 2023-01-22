import { useState, useEffect } from "react";
import { RESTUARANT_URL } from "../components/constants";

const useRestuarant = (id) => {
  const [restaurantData, setRestuarantData] = useState(null);
  useEffect(() => {
    getResturantInfo();
  }, []);
  async function getResturantInfo() {
    const response = await fetch(RESTUARANT_URL + id);
    const dataRes = await response.json();
    console.log("----", dataRes.data);
    setRestuarantData(dataRes.data);
  }
  return restaurantData;
};
export default useRestuarant;
