import React, { useState } from "react";
import "./SearchBar.css";
import bell from "../webimg/bell.png"; 
import search from "../webimg/search.png";
import { Link } from "react-router-dom";

function SearchBar(){
    const [search_data, setSearch] = useState("");
    
    const onChangeSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
        console.log(search_data);
    };
    
    

    return( 
        <div className="Sbar">
            <div className="searchbox">
                <img src={search} alt="검색" className="search_icon"/>
                <input type="text" value={search_data} placeholder="검색어를 입력하세요." onChange={onChangeSearch}/>
            
            </div> 
        </div>
    )
}

export default SearchBar;