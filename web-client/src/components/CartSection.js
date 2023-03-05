import { CartContext } from "@/context/cartContext"
import { useContext, useEffect, useRef, useState } from "react"
import { AiOutlinePlus } from "react-icons/ai"
import { CartItem } from "./CartItem"

export const CartSection = () => {

    const { cart } = useContext(CartContext)
    const marsTax = useRef(42);
    const [prices, setPrices] = useState({
        amount: 0,
        tax: 0
    })

    useEffect(() => {
        const amount = Object.values(cart).reduce(
            (a, b) => ({ price: a.price + (b.price) * b.quantity }),
            {
                price: 0,
                quantity: 0,
            }
        ).price;
        const tax = ((amount * 18) / 100);
        setPrices({ amount, tax });
    }, [cart])

    return (
        <section className="flex flex-row justify-between items-start gap-12 mt-20 text-white mx-16 py-16">
            <div className="items bg-[rgba(255,255,255,0.05)] w-[60%] px-20 pb-12">
                {
                    Object.entries(cart).map(([productId, product], i) => {
                        return <CartItem key={i} index={i} item={product} />
                    })
                }
                {
                    Object.entries(cart).length === 0 && <div className="text-center">
                        <h1 className="text-2xl font-extralight mt-10">Your cart is empty</h1>
                        <p className="font-normal text-md tracking-wide mt-2">Add some items to it now</p>
                    </div>
                }
            </div>
            <div className="items bg-[rgba(255,255,255,0.05)] w-[40%] px-8 py-6">
                <div className="flex justify-between w-full">
                    <h1 className="text-[1.1rem] tracking-[0.495em]">SUBTOTAL</h1>
                    <h1 className="text-[1.1rem] tracking-[0.13em]">{prices.amount.toFixed(2)} MATIC</h1>
                </div>
                <div className="flex justify-between w-full pt-3">
                    <h1 className="text-[1.1rem] tracking-[0.495em]">MARS FEE</h1>
                    <h1 className="text-[1.1rem] tracking-[0.13em]">{marsTax.current.toFixed(2)} MATIC</h1>
                </div>
                <div className="flex justify-between w-full pt-3">
                    <h1 className="text-[1.1rem] tracking-[0.495em]">TAXES</h1>
                    <h1 className="text-[1.1rem] tracking-[0.13em]">{prices.tax.toFixed(2)} MATIC</h1>
                </div>
                <div className="w-full h-[0.5px] bg-white mt-4"></div>
                <div className="flex justify-between w-full pt-3 items-center">
                    <h1 className=" text-[1 rem] tracking-[0.495em]">HAVE A COUPON</h1>
                    <AiOutlinePlus size={20} className="cursor-pointer" />
                </div>
                <div className="w-full h-[0.5px] bg-white mt-4"></div>
                <div className="flex justify-between w-full mt-4">
                    <h1 className="text-lg tracking-[0.495em]">TOTAL</h1>
                    <h1 className="text-lg tracking-[0.13em]">{(prices.amount + prices.tax + marsTax.current).toFixed(2)} MATIC</h1>
                </div>
                <div className="bg-[#1D1D1D] text-center py-3 tracking-[0.21em] mt-5 w-[95%] mx-auto cursor-pointer hover:bg-black transition-all ease">
                    CONFIRM AND CHECKOUT
                </div>
            </div>
        </section>

    )
}