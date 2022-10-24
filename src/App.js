import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FinalScreen from "./pages/FinalScreen";
import Questions from "./pages/Questions";
import Settings from "./pages/Settings";

import { Container, Box, Typography } from "@mui/material";

function App() {
  return (
    <div>
      <Router>
        <Container maxWidth="sm">
          <Box textAlign="center">
            <Typography variant="h2" fontWeight="bold">
              Open Trivia Quiz App
            </Typography>
            <Routes>
              <Route path="/" element={<Settings />} />
              <Route path="/questions" element={<Questions />} />
              <Route path="/score" element={<FinalScreen />} />
            </Routes>
          </Box>
        </Container>
      </Router>
    </div>
  );
}

export default App;
