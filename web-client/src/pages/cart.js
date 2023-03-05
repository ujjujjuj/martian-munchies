import { CartSection } from "@/components/CartSection";
import Head from "next/head";

export default function Cart({
    authed,
    setAuthed
}) {
    return (
        <>
            <Head>
                <title>Martian Munchies</title>
                <meta name="description" content="Your local mars cafe" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <CartSection />
        </>
    )
}