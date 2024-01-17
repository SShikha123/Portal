import React, { useEffect, useState } from "react";
import axios from "axios";
import "./WelcomePage.css";
const WelcomePage = () => {
  // const [Dummydata, setDummydata] = useState([]);
  // useEffect(() => {
  //   const takedata = async () => {
  //     try {
  //       // const datas = await axios.get('data.json');
  //       awaitfetch('data.json').then((response)=>response.json().then((data)=>setDummydata(data)))
  //       // setDummydata(datas);
  //       console.log(Dummydata)

  //     } catch (error) {
  //       console.error("error fetching data", error);
  //     }
  //   };

  //   takedata();
  // }, []);
  // console.log(Dummydata)
  const Dummydata = [
    {
      id: 1,
      title: "SmartATP",
      imageicon: "",
      description: "Production",
      tags:"Smart ATP Prod"
    },
    {
      id: 2,
      title: "ReconSure",
      imageicon: "",
      description: "Production",
    },
    {
      id: 3,
      title: "NaviSource ",
      imageicon: "",
      description: "Beta",
    },
    {
      id: 4,
      title: "SmartATP",
      imageicon: "",
      description: "Production",
    },
    {
      id: 5,
      title: "ReconSure",
      imageicon: "",
      description: "Production",
    },
    {
      id: 6,
      title: "NaviSource ",
      imageicon: "",
      description: "Beta",
    },
    {
      id: 7,
      title: "NaviSource ",
      imageicon: "",
      description: "Beta",
    },
    {
      id: 8,
      title: "SmartATP",
      imageicon: "",
      description: "Production",
    },
    {
      id: 9,
      title: "ReconSure",
      imageicon: "",
      description: "Production",
    },
    {
      id: 10,
      title: "NaviSource ",
      imageicon: "",
      description: "Beta",
    },
    {
      id: 11,
      title: "ReconSure",
      imageicon: "",
      description: "Production",
    },
    {
      id: 12,
      title: "NaviSource ",
      imageicon: "",
      description: "Beta",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const tilesPerPage = 6;
  // const totalTiles = 7;
  const TotalPages = Math.ceil(Dummydata.length / tilesPerPage);
  const startIndex = (currentPage - 1) * tilesPerPage;
  const endIndex = startIndex + tilesPerPage;
  const currentPageitems = Dummydata.slice(startIndex, endIndex);
  const handlePageChange = (nextPage) => {
    setCurrentPage(nextPage);
  };
  return (
    <div className="dashboard-container">
      <h3> Welcome, name here</h3>
      <div className="tile-container-row">
        {currentPageitems.map((tiles) => (
          <div key={tiles.id} className="tiles-box">
            <h2>{tiles.title} </h2>
            <p>{tiles.description}</p>
            <button className="subscribebtn">Subscribe</button>
            <button className="usebutton">Use</button>
          </div>
        ))}
      </div>
      <div className="tiles-pagination">
        {Array.from({ length: TotalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default WelcomePage;
