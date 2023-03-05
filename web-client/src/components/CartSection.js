import { AiOutlinePlus } from "react-icons/ai"
import { CartItem } from "./CartItem"

export const CartSection = () => {
    return (
        <section className="flex flex-row justify-between items-start gap-12 mt-20 text-white mx-16 py-16">
            <div className="items bg-[rgba(255,255,255,0.05)] w-[60%] px-20 pb-12">
                <CartItem />
                <CartItem />
            </div>
            <div className="items bg-[rgba(255,255,255,0.05)] w-[40%] px-8 py-6">
                <div className="flex justify-between w-full">
                    <h1 className="text-[1.1rem] tracking-[0.495em]">SUBTOTAL</h1>
                    <h1 className="text-[1.1rem] tracking-[0.13em]">3999 MATIC</h1>
                </div>
                <div className="flex justify-between w-full pt-3">
                    <h1 className="text-[1.1rem] tracking-[0.495em]">MARS FEE</h1>
                    <h1 className="text-[1.1rem] tracking-[0.13em]">10 MATIC</h1>
                </div>
                <div className="flex justify-between w-full pt-3">
                    <h1 className="text-[1.1rem] tracking-[0.495em]">TAXES</h1>
                    <h1 className="text-[1.1rem] tracking-[0.13em]">4 MATIC</h1>
                </div>
                <div className="w-full h-[0.5px] bg-white mt-4"></div>
                <div className="flex justify-between w-full pt-3 items-center">
                    <h1 className=" text-[1 rem] tracking-[0.495em]">HAVE A COUPON</h1>
                    <AiOutlinePlus size={20} className="cursor-pointer"/>
                </div>
                <div className="w-full h-[0.5px] bg-white mt-4"></div>
                <div className="flex justify-between w-full mt-4">
                    <h1 className="text-lg tracking-[0.495em]">TOTAL</h1>
                    <h1 className="text-lg tracking-[0.13em]">3999 MATIC</h1>
                </div>
                <div className="bg-[#1D1D1D] text-center py-3 tracking-[0.21em] mt-5 w-[95%] mx-auto cursor-pointer hover:bg-black transition-all ease">
                    CONFIRM AND CHECKOUT
                </div>
            </div>
        </section>

    )
}