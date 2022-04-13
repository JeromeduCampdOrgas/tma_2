import "./App.css";

/***** Components ***************/
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/body/Home";
import Cta from "./components/body/Cta";

function App() {
  return (
    <div className="App">
      <Header />

      <Home />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
