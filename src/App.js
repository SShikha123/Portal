import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./Components/LoginPage";
import RegisterPage from "./Components/RegisterPage";
import WelcomePage from "./Components/WelcomePage";
import Header from "./Components/Header";
import { useState } from "react";

function App() {
  const Demodata = [
    {
      id: 1,
      title: "SmartATP",
      imageicon: "",
      description: "Production",
      tags: "AI distribution",
    },
    {
      id: 2,
      title: "ReconSure",
      imageicon: "",
      description: "Production",
      tags: "Recon ATP Prod",
    },
    {
      id: 3,
      title: "NaviSource ",
      imageicon: "",
      description: "Beta",
      tags: "ReconSure ATP Prod",
    },
    {
      id: 4,
      title: "SmartATP",
      imageicon: "",
      description: "Production",
      tags: "ReconSure ATP Prod",
    },
    {
      id: 5,
      title: "ReconSure",
      imageicon: "",
      description: "Production",
      tags: "ReconSure ATP Prod",
    },
    {
      id: 6,
      title: "NaviSource ",
      imageicon: "",
      description: "Beta",
      tags: "ReconSure ATP Prod",
    },
    {
      id: 7,
      title: "NaviSource ",
      imageicon: "",
      description: "Beta",
      tags: "ReconSure ATP Prod",
    },
    {
      id: 8,
      title: "SmartATP",
      imageicon: "",
      description: "Production",
      tags: "Smart ATP Prod",
    },
    {
      id: 9,
      title: "ReconSure",
      imageicon: "",
      description: "Production",
      tags: "ReconSure ATP Prod",
    },
    {
      id: 10,
      title: "NaviSource ",
      imageicon: "",
      description: "Beta",
      tags: "NaviSource ATP Prod",
    },
    {
      id: 11,
      title: "ReconSure",
      imageicon: "",
      description: "Production",
      tags: "ReconSure ATP Prod",
    },
    {
      id: 12,
      title: "NaviSource ",
      imageicon: "",
      description: "Beta",
      tags: "Navi ATP Prod",
    },
  ];

  const [datalist, setDatalist] = useState(Demodata);
  const HandleFilterApiData = (inputvalue) => {
    const filtereddata = datalist.filter((item) =>
      item.tags.toLowerCase().includes(inputvalue.toLowerCase())
    );
    inputvalue !== "" ? setDatalist(filtereddata) : setDatalist(Demodata);
    // console.log(filtereddata, datalist, inputvalue);
  };
  return (
    <BrowserRouter>
      <Header FilterDatabutton={HandleFilterApiData} />
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/signup" element={<RegisterPage />}></Route>
        <Route
          path="/dashboard"
          element={<WelcomePage Dummydata={datalist} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
