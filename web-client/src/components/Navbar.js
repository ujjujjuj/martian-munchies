import Image from "next/image";
import { NavLink } from "./NavLink";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { FiLogOut } from "react-icons/fi";
import Cookies from "js-cookie";
export const Navbar = ({
    authed,
}) => {
    return (<>
        <div className={`flex flex-row justify-between items-center w-full bg-transparent text-white ${styles.nav} px-16 mt-3`}>
            <div className="flex flex-row justify-start items-center h-full gap-20">
                <Image src="/assets/logo-white.svg" width={50} height={50} />
                <NavLink href="/" exact styles={styles} className={`${styles.navlink} font-bold text-md hover:text-[#FF7547]`}>HOME</NavLink>
                <NavLink href="/menu" exact styles={styles} className={`${styles.navlink} font-bold text-md hover:text-[#FF7547]`}>MENU</NavLink>
                <NavLink href="/nft" exact styles={styles} className={`${styles.navlink} font-bold text-md hover:text-[#FF7547]`}>NFTs</NavLink>
            </div>
            <div className="flex flex-row gap-9 items-center h-full ">
                <NavLink exact href="/cart" styles={styles} className={styles.navlink}
                >
                    <Image src="/assets/cart.svg" width={30} height={30} />
                </NavLink>
                <NavLink styles={styles} href={
                    authed ? "/profile" : "/login"
                }
                    className={styles.navlink}
                >
                    <Image src="/assets/user.svg" width={30} height={30} />
                </NavLink>
                {authed &&
                    <FiLogOut size={24} className="cursor-pointer hover:text-[#FF7547]" onClick={() => {
                        Cookies.remove("authToken");
                        window.location.href = "/";
                    }} />
                }
            </div>
        </div>
    </>);
};