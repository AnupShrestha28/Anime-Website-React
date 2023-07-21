import { BrowserRouter, Route, Routes } from "react-router-dom";
import AnimeItem from "./components/AnimeItem";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route  path="/anime/:id" element={<AnimeItem />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;