import React, { useState } from "react";
import "./Header.css";
const Header = ({ FilterDatabutton }) => {
  const [filterinput, setFilterinput] = useState("");
  const onChnageFiltervalue = (e) => {
    setFilterinput(e.target.value);
    FilterDatabutton(e.target.value);
  };
//   console.log(filterinput)
  //   const [filteredData, setFilteredData] = useState(DummyData);
  return (
    <div className="header-left-container">
      <img src="/icon" className="AI-logo-header" alt="ai icon" />
      <div>
        <p>Search Icon Browser</p>
        <input type="text" onChange={onChnageFiltervalue} value={filterinput} />
        {/* <button onClick={FilteApiData}>Search icon</button> */}
      </div>
      <div>Support</div>
      <div>About</div>
    </div>
  );
};

export default Header;
