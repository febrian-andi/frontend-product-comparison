import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductComparison from "./pages/ProductComparison";
import AnalysisResults from "./pages/AnalysisResults";

function App() {
  return (
    <div className="container mx-auto py-4 lg:px-40">
      <Router>
        <Routes>
          <Route exact path="/" element={<ProductComparison />} />
          <Route exact path="/analysis-results" element={<AnalysisResults />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
