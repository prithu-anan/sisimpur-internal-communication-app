import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import LoginPage from './scenes/LoginPage'
import Channels from './scenes/Channels';
import Cookies from "js-cookie";
import { checkLoginStatus } from './api-helpers';
import Topbar from './components/Topbar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

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
    <>
      {/* {isLoggedIn && <Topbar />} */}
      <Topbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/channels" element={<Channels />} />
      </Routes>
    </>
  )
}

export default App
