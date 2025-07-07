//avoid designing, establishing or implementing any features inside the App.jsx file, it should remain as a simple routing/rendering file
// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import LandingPage from './pages/landing/LandingPage';
import AdminRoutes from './pages/admin/AdminRoutes';
import UserRoutes from './pages/user/UserRoutes';
import Team from './pages/other/Team';
import Signees from './pages/other/Signees';
import Goals from './pages/other/Goals'; // Ensure import is correct
import Article from './pages/other/Article'; // Ensure import is correct
import SignTeam from './pages/other/SignTeam'; // Ensure import is correct
import Sample from './pages/other/Sample';
import NotFound from './pages/other/NotFound';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* Landing page route */}
          <Route path="/" element={<LandingPage />} />
          {/* User routes */}
          <Route path="/user/*" element={<UserRoutes />} />
          {/* Admin routes */}
          <Route path="/admin/*" element={<AdminRoutes />} />
          {/* Route all components that are neither admin or user here as needed */}
          <Route path="/team" element={<Team />} />
          <Route path="/signees" element={<Signees />} />
          <Route path="/goals" element={<Goals />} /> {/* Added Goals route */}
          <Route path="/article" element={<Article />} /> {/* Added Article route */}
          <Route path="/sign-team" element={<SignTeam />} /> {/* Added SignTeam route */}
          {/* Sample route for testing */}
          <Route path="/sample" element={<Sample />} />
          {/* Fallback route for 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;