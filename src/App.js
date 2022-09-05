import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./css/reset.css";
import "./css/layout.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";
import Detail from "./components/Detail";
import SearchResult from "./components/SearchResult.";
import ProfileDetail from "./components/ProfileDetail";
import SimilarDetail from "./components/SimilarDetail";
function App() {
  return (
    <BrowserRouter>
      <div className="App scroll">
        <Header />
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/search" element={<SearchResult />} />
          <Route path="/profile/:id" element={<ProfileDetail />} />
          <Route path="/similar/:id" element={<SimilarDetail />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
