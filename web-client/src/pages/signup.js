import axios from "axios";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { AppContext } from "../context/authContext";
import { useRouter } from "next/router";
import { BiUserCircle, BiLockAlt } from "react-icons/bi";
import { HiOutlineAtSymbol } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
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
            router.replace("/menu");
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
            <section className="bg-[rgba(255,255,255,0.06)] w-[40%] mt-24 mx-auto text-center py-8">
                <h1 className="font-[akira] text-4xl">SIGN UP</h1>
                <form className="flex flex-col w-[80%] mx-auto mt-4">
                    <div className="flex flex-col items-start w-full border-b-[0.8px] border-white">
                        <label htmlFor="email" className="text-[1rem] tracking-[0.58rem] block">EMAIL</label>
                        <div className="flex items-center w-full" >
                            <BiUserCircle size={30} color="rgba(255,255,255,0.5)" className="mr-4" />
                            <input type="email" className="w-full bg-transparent py-3 focus:outline-none" placeholder="johndoe@example.com" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                    </div>
                    <div className="flex flex-col items-start w-full border-b-[0.8px] border-x-white mt-7">
                        <label htmlFor="username" className="text-[1rem] tracking-[0.58rem] block">USERNAME</label>
                        <div className="flex items-center w-full" >
                            <HiOutlineAtSymbol size={30} color="rgba(255,255,255,0.5)" className="mr-4" />
                            <input type="email" className="w-full bg-transparent py-3 focus:outline-none" placeholder="johnDoe" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                        </div>
                    </div>
                    <div className="flex flex-col items-start w-full border-b-[0.8px] border-white mt-7">
                        <label htmlFor="password" className="text-[1rem] tracking-[0.58rem] block">PASSWORD</label>
                        <div className="flex items-center w-full" >
                            <BiLockAlt size={30} color="rgba(255,255,255,0.5 )" className="mr-4" />
                            <input type="password" name="password" id="password" className="w-full bg-transparent py-3 focus:outline-none" placeholder="****************" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                    </div>
                    <div onClick={connectWallet} className="bg-transparent  border-[0.5px] text-center py-2    flex items-center w-[100%] tracking-[0.4em] mt-8 justify-center gap-4 mx-auto cursor-pointer hover:bg-white hover:text-black transition-all ease">
                        <Image src="/assets/metamask.png" alt="metamask logo" width={40} height={40} /> CONNECT TO METAMASK
                    </div>
                    <div onClick={signup} className="bg-[#1D1D1D] text-center py-3 tracking-[0.4em] mt-7 w-[100%] mx-auto cursor-pointer hover:bg-white hover:text-black transition-all ease">
                        SIGN UP
                    </div>
                </form>
                <p className="mt-4">Already a user?  <Link href="/login" className="text-white underline">Login</Link>
                </p>
            </section>
        </>
    )
}