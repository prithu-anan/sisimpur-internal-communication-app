import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import LoginPage from './scenes/LoginPage'
import Channels from './scenes/Channels';
import { checkLoginStatus } from './api-helpers';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Check login status when app loads
  // useEffect(() => {
  //   const verifySession = async () => {
  //     const response = await checkLoginStatus();
  //     if (response.success) {
  //       setIsLoggedIn(true);
  //       setUser(response.data);
  //     } else {
  //       setIsLoggedIn(false);
  //     }
  //   };

  //   verifySession();
  // }, []);

  return (
    <div className="app-container">
      {/* Topbar at the top */}
      <Topbar />

      {/* Sidebar + Page Content layout */}
      <div className="main-content">
        <Sidebar />
        <div className="page-content">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/channels" element={<Channels />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
