import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChampionPage from "./pages/ChampionPage";
import ChampionSummaryPage from "./pages/ChampionSummaryPage";
import HomePage from "./pages/HomePage";
import SummonerSearchPage from "./pages/SummonerSearchPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/summoner" element={<SummonerSearchPage />} />
            <Route path="/champions"  element={<ChampionPage />}/>
            <Route path="/champions/:championName" element={<ChampionSummaryPage />}/>
            {/* </Route> */}
          </Route>
      </Routes>
    </Router>
  )
}

export default App;
