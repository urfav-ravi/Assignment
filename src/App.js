import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Dashbord from "./components/Dashbord";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Dashbord />
        <Routes>
          <Route path="/"></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
