import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./Components/LoginPage";
import RegisterPage from "./Components/RegisterPage";
import WelcomePage from "./Components/WelcomePage";


function App() {
  return (
    <BrowserRouter>
    Hello
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/signup" element={<RegisterPage />}></Route>
        <Route path="/dashboard" element={<WelcomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
