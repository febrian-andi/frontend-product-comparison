import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductComparison from "./pages/ProductComparison";
import AnalysisResults from "./pages/AnalysisResults";
import AnalysisProcess from "./pages/AnalysisProcess";

function App() {
  return (
    <div className="container mx-auto py-4">
      <Router>
        <Routes>
          <Route path="/" element={<ProductComparison />} />
          <Route path="/analysis-results" element={<AnalysisResults />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
