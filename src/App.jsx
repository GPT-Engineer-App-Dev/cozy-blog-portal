import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box, Button, useColorMode } from "@chakra-ui/react";
import Index from "./pages/Index.jsx";
import AddBlogPost from "./pages/AddBlogPost.jsx";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Router>
      <Box p={4}>
        <Button onClick={toggleColorMode} mb={4}>
          Toggle {colorMode === "light" ? "Dark" : "Light"} Mode
        </Button>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/add-post" element={<AddBlogPost />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
