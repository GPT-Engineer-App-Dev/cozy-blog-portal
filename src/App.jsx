import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import AddBlogPost from "./pages/AddBlogPost.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/add-post" element={<AddBlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
