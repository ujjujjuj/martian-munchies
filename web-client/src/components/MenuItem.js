import Image from "next/image"

export const MenuItem = ({
    name, price, src, sm
}) => {
    return (
        <>
            <div className="flex flex-col justify-between items-center w-[20em] mx-auto relative px-12 bg-black py-5 mt-6 border-[#FFD747] border-[1px]">
                <div className=" bg-black bg-opacity-80 w-[100.5%] opacity-0 hover:opacity-100 ease-in cursor-pointer transition-all -top-0.5 -bottom-0.5 text-center absolute mx-auto flex justify-center items-center z-10 font-medium tracking-[0.585em]">
                    ADD TO CART
                </div>
                <Image src={src} width={200} height={200} className="w-[90%] h-auto mb-4" />
                <h1 className="text-[2rem] font-extralight text-center break-word leading-10">{name}</h1>
                {sm ? "" : <small className="text-center font-extralight leading-[1.2em] mt-2 text-[0.8rem] opacity-[0.8]">Shrimps grown in Mars Environment very very tasty. Made in the most premium region of mars where hahaha.</small>}
                <p className="tracking-[0.1em] text-[1rem] mt-3 mb-1 font-medium">{price} MATIC</p>
            </div>
        </>
    )
}