import '@/styles/globals.css'
import { useEffect, useState } from 'react'
import Cookies from "js-cookie";
import AppProvider from './context/authContext';
import { Navbar } from '@/components/Navbar';

export default function App({ Component, pageProps }) {
  const [authed, setAuthed] = useState("check");
  const [user, setUser] = useState({});

  useEffect(() => {
    const checkAuth = async () => {
      const token = Cookies.get("authToken");
      if (!token) {
        Cookies.remove("authToken");
        return setAuthed(false);
      }
      if (token !== null) {
        setAuthed(true);
      }
    };
    checkAuth();
  }, []);


  return (<AppProvider setAuthed={setAuthed}>
    <Navbar />
    <Component
      authed={authed}
      user={user}
      setAuthed={setAuthed}
      setUser={setUser}
      {...pageProps}
    />
  </AppProvider>)
}
