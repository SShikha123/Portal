import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./Components/LoginPage";
import RegisterPage from "./Components/RegisterPage";
import WelcomePage from "./Components/WelcomePage";
import Header from "./Components/Header";
import { useEffect, useState } from "react";

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
      title: "Intelligent Warranty Assistant ",
      imageicon: "",
      description: "Beta",
      tags: "ReconSure ATP Prod",
    },
    {
      id: 5,
      title: "PO Validator ",
      imageicon: "",
      description: "Production",
      tags: "ReconSure ATP Prod",
    },
    {
      id: 6,
      title: "Returns Processing  ",
      imageicon: "",
      description: "Beta",
      tags: "ReconSure ATP Prod",
    },
    {
      id: 7,
      title: "Sentiment based Credit Management  ",
      imageicon: "",
      description: "Beta",
      tags: "Navi ATP Prod",
    },
    {
      id: 8,
      title: "ASN processing from email ",
      imageicon: "",
      description: "Production",
      tags: "Smart ATP Prod",
    },
    {
      id: 9,
      title: "ABAP Coding Assistant ",
      imageicon: "",
      description: "Production",
      tags: "ReconSure ATP Prod",
    },
    {
      id: 10,
      title: "Code Visualizer  ",
      imageicon: "",
      description: "Production",
      tags: "NaviSource ATP Prod",
    },
    {
      id: 11,
      title: "Change Impact Analyzer ",
      imageicon: "",
      description: "Production",
      tags: "ReconSure ATP Prod",
    },
    {
      id: 12,
      title: "Alert Auto Grouping and Incident creation  ",
      imageicon: "",
      description: "Production",
      tags: "Navi ATP Prod",
    },
    {
      id: 13,
      title: "ITSM Insights   ",
      imageicon: "",
      description: "Production",
      tags: "Navi ATP Prod",
    },
    {
      id: 14,
      title: "DRAKE SAP Assistant for End User  ",
      imageicon: "",
      description: "Production",
      tags: "Navi ATP Prod",
    },
    {
      id: 15,
      title: "DRAKE Agent Assist  ",
      imageicon: "",
      description: "Production",
      tags: "Navi ATP Prod",
    },
    {
      id: 16,
      title: "SAP Error Image Analysis ",
      imageicon: "",
      description: "Production",
      tags: "Navi ATP Prod",
    },
    {
      id: 17,
      title: "Job Runtime and Failure Prediction ",
      imageicon: "",
      description: "Production",
      tags: "Navi ATP Prod",
    },
    {
      id: 18,
      title: "Operational Report Curator ",
      imageicon: "",
      description: "Beta",
      tags: "AI distribution",
    },
    {
      id: 19,
      title: "AMS Sentiment Analyzer ",
      imageicon: "",
      description: "Beta",
      tags: "AI distribution",
    },
    {
      id: 20,
      title: "AMS ITSM Response Composer ",
      imageicon: "",
      description: "Beta",
      tags: "AI distribution",
    },
  ];
  const [datalist, setDatalist] = useState(Demodata);
  const HandleFilterApiData = (inputvalue) => {
    console.log(inputvalue);
    const filtereddata = Demodata.filter((item) =>
      item.tags.toLowerCase().includes(inputvalue.toLowerCase())
    );
    inputvalue !== "" ? setDatalist(filtereddata) : setDatalist(Demodata);
    console.log(filtereddata, datalist, inputvalue);
  };
  console.log(datalist);
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
