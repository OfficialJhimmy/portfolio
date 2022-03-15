import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./container/Home";
import MyWorks from "./container/MyWorks/index";
import Error404 from "./container/Error/Error404";
import Scrolltotop from "./components/Scroll-to-top/index.jsx";
import { ScrollFromBottom } from "./components/Scroll-to-top/ScrollFromBottom.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Scrolltotop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/projects" element={<MyWorks />} />
          <Route exact path="*" element={<Error404 />} />
        </Routes>
        <ScrollFromBottom />
      </Router>
    </div>
  );
}

export default App;
