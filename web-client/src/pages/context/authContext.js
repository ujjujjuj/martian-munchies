import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const { ethereum } = typeof window !== "undefined" ? window : {};

const AppProvider = ({ children, setAuthed, setUser }) => {
    const [account, setAccount] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();
    const checkEthereumExists = () => {
        if (!ethereum) {
            setError("Please Install MetaMask.");
            return false;
        }
        return true;
    };

    const getConnectedAccounts = async () => {
        setError("");
        try {
            const accounts = await ethereum.request({
                method: "eth_accounts",
            });
            setAccount(accounts[0]);
            if (accounts.length === 0) {
                const authToken = Cookies.get("authToken");
                setAuthed(false);
                setUser({});
                if (authToken) {
                    Cookies.remove("authToken");
                    router.replace("/");
                }
                Cookies.remove("authToken");
            }
        } catch (err) {
            setError(err.message);
        }
    };

    const connectWallet = async () => {
        setError("");
        if (checkEthereumExists()) {
            try {
                const accounts = await ethereum.request({
                    method: "eth_requestAccounts",
                });
                setAccount(accounts[0]);
            } catch (err) {
                setError(err.message);
            }
        }
    };

    useEffect(() => {
        if (checkEthereumExists()) {
            ethereum.on("accountsChanged", getConnectedAccounts);
            getConnectedAccounts();
        }
        return () => {
            if (checkEthereumExists()) {
                ethereum.removeListener("accountsChanged", getConnectedAccounts);
            }
        };
    }, []);



    return (
        <AppContext.Provider value={{ account, connectWallet, error }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;