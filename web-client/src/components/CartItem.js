import Image from "next/image"
import { RxCross2 } from 'react-icons/rx';
export const CartItem = ({ sm }) => {
    return <>
        <div className={
            sm ? 'w-[100%] mx-auto' : 'w-[95%] mx-auto'
        }>
            <div className={`flex flex-row items-center py-4`}>
                <p className="text-[2.4rem] mr-4">01</p>
                <Image src="/assets/food.png" className="mr-4" alt="nft1" width={110} height={110} />
                <div className="w-[40%]">
                    <h1 className="text-2xl font-extralight">ELON SHRIMPS</h1>
                    <p className="font-normal text-md tracking-wide">99 MATIC</p>
                </div>
                <div className="text-center mr-8">
                    <h1 className="text-xl font-medium">QTY</h1>
                    <p className=" text-xl">2</p>
                </div>
                <div className="text-center">
                    <h1 className="text-xl font-medium">Date</h1>
                    <p className=" text-xl">14/02/2023</p>
                </div>
                {!sm && <div className=" self-start mt-6 ml-auto">
                    <RxCross2 size={25} />
                </div>}
            </div>
            <div className="bg-white h-[0.5px] w-[90%] ml-auto">
            </div>
        </div>
    </>
}