import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./css/reset.css";
import "./css/layout.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";
import Detail from "./components/Detail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
