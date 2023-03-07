import { Outlet } from "react-router-dom";
import "./App.scss";
import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";
import LeftBar from "./components/layout/leftBar/LeftBar";

function App() {
  return (
    <div className="app">
      <div className="app__leftBar">
        <LeftBar />
      </div>

      <div className="app__rightBar">
        <div className="app__header">
          <Header />
        </div>
        <div className="app__container">
          <Outlet />
        </div>
        <div className="app__footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
