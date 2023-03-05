import { CartContext } from "@/context/cartContext";
import Image from "next/image"
import { useContext, useEffect } from "react";
import { RxCross2 } from 'react-icons/rx';
export const CartItem = ({ sm, item, index }) => {
    const { deleteCartItem } = useContext(CartContext);
    return <>
        <div className={
            sm ? 'w-[100%] mx-auto' : 'w-[95%] mx-auto'
        }>
            <div className={`flex flex-row items-center py-4`}>
                <p className="text-[2.4rem] mr-4">
                    {
                        index + 1 < 10 ? `0${index + 1}` : index + 1
                    }
                </p>
                <Image src={item.src} className="mr-4 object-contain w-24 h-24" alt="nft1" width={110} height={110} />
                <div className="w-[40%]">
                    <h1 className="text-2xl font-extralight">{item.name}</h1>
                    <p className="font-normal text-md tracking-wide">{item.price} MATIC</p>
                </div>
                <div className="text-center mr-8">
                    <h1 className="text-xl font-medium">QTY</h1>
                    <p className=" text-xl">{item.quantity}</p>
                </div>
                {sm && <div className="text-center">
                    <h1 className="text-xl font-medium">Date</h1>
                    <p className=" text-xl">05/03/2023</p>
                </div>}
                {!sm && <div className=" self-start mt-6 ml-auto cursor-pointer" onClick={() => {
                    deleteCartItem(item.id)
                }}>
                    <RxCross2 size={25} />
                </div>}
            </div>
            <div className="bg-white h-[0.5px] w-[90%] ml-auto">
            </div>
        </div>
    </>
}