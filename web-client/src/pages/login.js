import axios from "axios";
import Head from "next/head";
import { useContext, useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { AppContext } from "../context/authContext";
import { BiUserCircle, BiLockAlt } from 'react-icons/bi';
import Image from "next/image";
import Link from "next/link";
import { Notyf } from "notyf";
import 'notyf/notyf.min.css';

export default function Login({
    setAuthed,
    setUser
}) {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const notif = useRef(null);
    const notyf = useRef(null);
    useEffect(() => {
        notyf.current = new Notyf({
            types: [
                {
                    type: 'error',
                    background: 'red',
                    color: 'white',
                    icon: false
                },
                {
                    type: 'success',
                    background: 'black',
                    icon: false
                }
            ],
        });
    }, []);
    const { account, connectWallet, error } = useContext(AppContext);
    const login = (e) => {
        e.preventDefault();
        axios.post("/api/auth/login", {
            email: email,
            password: password,
        }).then((res) => {
            Cookies.set("authToken", res.data.authToken);
            setAuthed(true);
            router.replace("/");
        }).catch((err) => {
            console.log(err.response.data.error)
            notyf.current.open({
                type: 'error',
                message: err.response.data.error,
            });
        });
    }

    useEffect(() => {
        const authToken = Cookies.get("authToken");
        if (account && !authToken && !notif.current) {
            notif.current = true;
            notyf.current.open({
                type: 'success',
                message: 'Wallet Connected',
            });
            axios.post("/api/auth/login", {
                wallet: account,
            }).then((res) => {
                Cookies.set("authToken", res.data.authToken);
                setAuthed(true);
                console.log(res.data);
                setUser(res.data.user);
                router.replace("/profile");
            }).catch((err) => {
                console.log(err.response.data.error)
                notyf.current.open({
                    type: 'error',
                    message: "Wallet not connected to any account",
                });
            });
        } else if (authToken) {
            setAuthed(true);
            router.replace("/profile");
        }
    }, [account]);

    return (
        <>
            <Head>
                <title>Martian Munchies</title>
                <meta name="description" content="Your local mars cafe" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className="bg-[rgba(255,255,255,0.06)] w-[40%] mt-28 mx-auto text-center py-8">
                <h1 className="font-[akira] text-4xl">LOGIN</h1>
                <form className="flex flex-col w-[80%] mx-auto mt-8" onSubmit={login}>
                    <div className="flex flex-col items-start w-full border-b-[0.8px] border-white">
                        <label htmlFor="email" className="text-[1rem] tracking-[0.58rem] block">EMAIL</label>
                        <div className="flex items-center w-full" >
                            <BiUserCircle size={30} color="rgba(255,255,255,0.5)" className="mr-4" />
                            <input type="email" className="w-full bg-transparent py-3 focus:outline-none" placeholder="johndoe@example.com" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                    </div>
                    <div className="flex flex-col items-start w-full border-b-[0.8px] border-white mt-8">
                        <label htmlFor="password" className="text-[1rem] tracking-[0.58rem] block">PASSWORD</label>
                        <div className="flex items-center w-full" >
                            <BiLockAlt size={30} color="rgba(255,255,255,0.5 )" className="mr-4" />
                            <input type="password" name="password" id="password" className="w-full bg-transparent py-3 focus:outline-none" placeholder="****************" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                    </div>
                    <button type="submit" className="bg-[#1D1D1D] text-center py-3 tracking-[0.4em] mt-8 w-[100%] mx-auto cursor-pointer hover:bg-white hover:text-black transition-all ease">
                        LOGIN
                    </button>
                </form>
                <h1 className="font-[akira] text-2xl my-5">OR</h1>
                <div onClick={connectWallet} className="bg-transparent  border-[0.5px] text-center py-2    flex items-center w-[80%] tracking-[0.4em] mt-3 justify-center gap-4 mx-auto cursor-pointer hover:bg-white hover:text-black transition-all ease">
                    <Image src="/assets/metamask.png" alt="metamask logo" width={40} height={40} /> LOGIN VIA METAMASK
                </div>
                <p className="mt-4">New User?  <Link href="/signup" className="text-white underline">Sign Up</Link>
                </p>
            </section>

        </>
    )
}