import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useAllResturant from "../utils/useAllResturant";

const Main = () => {
  const {
    filterList,
    allList,
    searchtext,
    setFilterList,
    setSearchText,
    setAllList,
  } = useAllResturant();

  const handleChange = (e) => {
    setSearchText(e.target.value);
    if (e.target.value === "") {
      setFilterList(allList);
      return;
    }
    let filter = allList.filter((item) => {
      return item?.data?.name
        ?.toLowerCase()
        ?.includes(searchtext.toLowerCase());
    });

    setFilterList(filter);
    // setAllList(filter);
    console.log(filterList);
  };

  return allList?.length === 0 ? (
    Array(10)
      .fill("")
      .map((e, index) => <Shimmer key={index} />)
  ) : (
    <>
      <br />
      <div className="searchbox">
        <input
          type="text"
          placeholder="search here"
          value={searchtext}
          // onChange={(e) => setSearchText(e.target.value)}
          onChange={handleChange}
        />

        {/* <button onClick={() => onSearch(searchtext, allList)}>search</button> */}
      </div>

      <div className="resturant-list">
        {filterList &&
          filterList.map((list) => {
            console.log(filterList);
            return (
              <Link to={"/restuarant/" + list.data?.id} key={list.data?.id}>
                <ResturantCard cardList={list} />
              </Link>
            );
          })}
      </div>
    </>
  );
};
export default Main;
