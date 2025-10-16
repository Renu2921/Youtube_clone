import React, { useEffect, useState,useCallback } from "react";
import { Menu ,Search} from "lucide-react";
import { useDispatch } from "react-redux";
import { setToggleMenu } from "../utils/store/toggleSlice";
import { setFilteredList } from "../utils/store/videoListSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate=useNavigate();
const dispatch=useDispatch()
const [search,setSearch]=useState("");
const [searchSuggestion,setSearchSuggestion]=useState([]);
const [searchSuggestionShow,setSearchSuggestionShow]=useState(false);
const SearchData = useCallback(async () => {
    if (!search) return;
    try {
      const response = await fetch(
        `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${search}`
      );
      const jsonData = await response.json();
      setSearchSuggestion(jsonData?.[1] || []);
    } catch (error) {
      console.error(error);
    }
  }, [search]);

  useEffect(() => {
    const timer = setTimeout(() => SearchData(), 500);
    return () => clearTimeout(timer);
  }, [search, SearchData]); 
  const handleToggleMenu=()=>{
    dispatch(setToggleMenu());
  }
  const handleSearchClick=(item)=>{
 setSearch(item ?? "");
    setSearchSuggestionShow(false);
    dispatch(setFilteredList(item))
    setSearch("")
  }
  return (
    <div className="flex w-full px-3 py-2 fixed z-10 bg-white">
      <div className="flex gap-5  items-center w-[20%]">
        <Menu onClick={handleToggleMenu} />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
          alt="youtube-logo"
          className="h-6"
          onClick={()=>{
            navigate("/")
            dispatch(setToggleMenu(true))
          }}
          
        />
      </div>
     
 <div className="flex justify-center w-full mt-4 relative">
      <div className="flex items-center w-[60%] max-w-2xl relative">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 rounded-l-full py-2 px-4 w-full focus:outline-none focus:border-blue-500"
          value={search}
          onChange={(e)=>{
            setSearch(e.target.value)
          }}
          onFocus={()=>setSearchSuggestionShow(true)}
         onBlur={() => setTimeout(() => setSearchSuggestionShow(false), 200)}
          onKeyDown={(e) => {
    if (e.key === "Enter")
       handleSearchClick(search);
  }}
        />
        <button
         onClick={handleSearchClick}
         className="bg-gray-100 border border-gray-300 border-l-0 rounded-r-full px-5 py-[0.64rem] hover:bg-gray-200">
          <Search className="w-5 h-5 text-gray-700" />
        </button>
         {searchSuggestionShow && (
        <div className="absolute top-full left-0 mt-2 w-[91%] bg-white shadow-lg border border-red-300 rounded-lg z-50">
          {searchSuggestion?.map((item,index)=>
            <div key={index}>
          <ul className="py-2 text-md text-gray-800">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={()=>handleSearchClick(item)}>{item}</li>
          </ul>
            </div>
          )}
        </div>
         )
}
      </div>
    </div>
      
      <div className="w-[20%] flex justify-end">
        <img src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png" 
        alt="profile-image"
        className="h-9"/>
      </div>
    </div>
  );
};

export default Header;
