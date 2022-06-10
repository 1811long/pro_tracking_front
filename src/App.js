import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route path="/about" element={<></>} />
        <Route path="/contact" />
        <Route path="/faq"  />
      </Routes>
  </Router>
  );
}

export default App;
