import axios from "axios";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { AppContext } from "./context/authContext";
export default function Login({
    setAuthed
}) {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { account, connectWallet, error } = useContext(AppContext);
    const login = (e) => {
        console.log(e)
        e.preventDefault();
        axios.post("/api/auth/login", {
            email: email,
            password: password,
        }).then((res) => {
            Cookies.set("authToken", res.data.authToken);
            setAuthed(true);
            router.replace("/");
        });
    }

    useEffect(() => {
        const authToken = Cookies.get("authToken");
        if (account && !authToken) {
            axios.post("/api/auth/login", {
                wallet: account,
            }).then((res) => {
                Cookies.set("authToken", res.data.authToken);
                setAuthed(true);
                router.replace("/");
            });
        } else if (authToken) {
            setAuthed(true);
            router.replace("/");
        }
    }, [account]);

    return (
        <>
            <Head>
                <title>Martian munchies</title>
                <meta name="description" content="Your local mars cafe" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section>
                <button className="btn shadow-border" onClick={connectWallet}>
                    Login using Metamask
                </button>
                <form>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button onClick={login}>Sign In</button>
                </form>
            </section>
        </>
    )
}