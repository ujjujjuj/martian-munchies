import Image from "next/image";
import { NavLink } from "./NavLink";
import styles from "../styles/Navbar.module.css";
export const Navbar = () => {
    return (<>
        <div className={`flex flex-row justify-between items-center w-full bg-transparent text-white ${styles.nav} px-16 mt-3`}>
            <div className="flex flex-row justify-start items-center h-full gap-20">
                <Image src="/assets/logo-white.svg" width={50} height={50} />
                <NavLink href="/" exact styles={styles} className={`${styles.navlink} font-bold text-md hover:text-[#FF7547]`}>HOME</NavLink>
                <NavLink href="/menu" exact styles={styles} className={`${styles.navlink} font-bold text-md hover:text-[#FF7547]`}>MENU</NavLink>
                <NavLink href="/nft" exact styles={styles} className={`${styles.navlink} font-bold text-md hover:text-[#FF7547]`}>NFTs</NavLink>
            </div>
            <div className="flex flex-row gap-9 items-center h-full ">
                <Image src="/assets/cart.svg" width={30} height={30} />
                <Image src="/assets/user.svg" width={30} height={30} />
            </div>
        </div>
    </>);
};