import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Hackathon from './pages/Hackathon';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hack" element={<Hackathon />} />
      </Routes>
    </Router>
  );
}

export default App;
