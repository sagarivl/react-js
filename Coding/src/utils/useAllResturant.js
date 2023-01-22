import { useState, useEffect } from "react";
import { ALL_RESTUARANT_URL } from "../components/constants";
const useAllResturant = () => {
  const [searchtext, setSearchText] = useState("");
  const [filterList, setFilterList] = useState([]);
  const [allList, setAllList] = useState([]);
  useEffect(() => {
    getResutrantList();
  }, [searchtext]);

  async function getResutrantList() {
    let response = await fetch(ALL_RESTUARANT_URL);
    let dataRes = await response.json();
    setFilterList(dataRes?.data?.cards[2]?.data?.data?.cards);
    setAllList(dataRes?.data?.cards[2]?.data?.data?.cards);
  }
  return {
    filterList,
    allList,
    searchtext,
    setSearchText,
    setAllList,
    setFilterList,
  };
};
export default useAllResturant;
