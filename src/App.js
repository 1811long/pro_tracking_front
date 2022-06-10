import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChampionPage from "./components/ChampionPage";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route path="/about" element={<></>} />
        <Route path="/contact" />
        <Route path="/faq"  />
        <Route path = "/champions" element={<ChampionPage/>}/> 
      </Routes>
  </Router>
  );
}

export default App;
