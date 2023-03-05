import { CartContext } from "@/context/cartContext";
import Image from "next/image";
import { useContext, useState } from "react";

export const MenuItem = ({ name, price, src, sm, desc, id }) => {
    const { setCartItem } = useContext(CartContext);
    const [addding, setAdding] = useState(false);
    return (
        <>
            <div className={`flex flex-col justify-between items-center mx-auto relative px-12 bg-black py-5 mt-6 ${sm ? " border-[#FFD747] w-[20em]" : "w-full border-white"}  border-[1px]`} onClick={
                () => {
                    setCartItem({
                        name,
                        price,
                        src,
                        id,
                        desc
                    }, 1)
                    setAdding(true)
                    setTimeout(() => {
                        setAdding(false)
                    }, 1000);
                }
            }>
                <div className=" bg-black bg-opacity-80 w-[101%] opacity-0 hover:opacity-100 ease-in cursor-pointer transition-all -top-0.5 -bottom-0.5 text-center absolute mx-auto flex justify-center items-center z-10 font-medium tracking-[0.585em]">
                    {addding ? "ADDED" : "ADD TO CART"}
                </div>
                <Image
                    src={src}
                    width={200}
                    height={200}
                    className="w-[90%] h-auto mb-4"
                />
                <h1 className="text-[2rem] font-extralight text-center break-word leading-10">
                    {name}
                </h1>
                {sm ? (
                    ""
                ) : (
                    <small className="text-center font-extralight leading-[1.2em] mt-2 text-[0.8rem] opacity-[0.8]">
                        {desc}
                    </small>
                )}
                <p className="tracking-[0.1em] text-[1rem] mt-3 mb-1 font-medium">
                    {price} MATIC
                </p>
            </div>
        </>
    );
};
