import '@/styles/globals.css'
import { useContext, useEffect, useState } from 'react'
import Cookies from "js-cookie";
import AppProvider, { AppContext } from '../context/authContext';
import CartProvider from '../context/cartContext';
import { Navbar } from '@/components/Navbar';
import axios from 'axios';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import { useRouter } from 'next/router';
import { Footer } from '@/components/Footer';

export default function App({ Component, pageProps }) {
  const [authed, setAuthed] = useState("check");
  const [user, setUser] = useState({});
  const router = useRouter();
  useEffect(() => {
    const notyf = new Notyf();
    const checkAuth = async () => {
      const token = Cookies.get("authToken");
      if (!token) {
        Cookies.remove("authToken");
        return setAuthed(false);
      }
      if (token !== null) {
        axios.post("/api/auth/verify", {
          token
        }).then((res) => {
          setUser(res.data.user);
          setAuthed(true);
        }).catch((err) => {
          console.log(err.response.data.error);
          notyf.error(err.response.data.error);
          Cookies.remove("authToken");
          setAuthed(false);
        });
      }
    };
    checkAuth();
  }, []);

  return (<AppProvider setAuthed={setAuthed} setUser={setUser}>
    <CartProvider>
      <>
        <Navbar authed={authed} />
        <Component
          authed={authed}
          user={user}
          setAuthed={setAuthed}
          setUser={setUser}
          {...pageProps}
        />
      </>
    </CartProvider>
  </AppProvider>)
}
