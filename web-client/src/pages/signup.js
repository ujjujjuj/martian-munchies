import axios from "axios";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { AppContext } from "./context/authContext";
import { useRouter } from "next/router";
export default function Login({
    setAuthed
}) {
    const { account, connectWallet, error } = useContext(AppContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const router = useRouter();

    const signup = (e) => {
        e.preventDefault();
        if (!account) {
            alert("Please connect your wallet first");
            return;
        }
        axios.post("/api/auth/signup", {
            email: email,
            password: password,
            username: username,
            wallet: account,
        }).then((res) => {
            Cookies.set("authToken", res.data.authToken);
            setAuthed(true);
            router.replace("/");
        });
    }

    useEffect(() => {
        const authToken = Cookies.get("authToken");
        if (authToken) {
            setAuthed(true);
            router.replace("/");
        }
    }, []);

    return (
        <>
            <Head>
                <title>Martian munchies</title>
                <meta name="description" content="Your local mars cafe" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section>
                <form>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <button onClick={signup}>Sign Up</button>
                </form>
                <button onClick={connectWallet}> Connect to Metamask</button>
            </section>
        </>
    )
}