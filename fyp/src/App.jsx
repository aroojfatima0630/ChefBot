import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// English Pages

import PantryPage from "./pages/PantryPage";


function App() {
  return (
    <Router>
      <Routes>
        {/* English Routes */}
        <Route path="/" element={<PantryPage />} />
       

      </Routes>
    </Router>
  );
}

export default App;