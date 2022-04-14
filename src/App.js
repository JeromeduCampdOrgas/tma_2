import "./App.css";
import { useContext, useState, useEffect } from "react";
import DeviceYPosition from "./contexts/DeviceYPosition";

/***** Components ***************/
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/body/Home";
import Cta from "./components/body/Cta";

function App(position) {
  const [y, setY] = useState(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setY(window.scrollY);
    });
  }, [y]);

  return (
    <div className="App">
      <Header />

      <Home />
      <DeviceYPosition.Provider value={{ y: y, setY: setY }}>
        {y > 100 ? <Cta /> : ""}
      </DeviceYPosition.Provider>
      <Footer />
    </div>
  );
}

export default App;
