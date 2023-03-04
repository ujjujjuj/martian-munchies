import { Banner } from "@/components/Banner";
import { Cuisine } from "@/components/Cuisine";
import { Limited } from "@/components/Limited";
import Head from "next/head";

export default function Menu({
    authed,
    setAuthed
}) {
    return (
        <>
            <Head>
                <title>Martian munchies</title>
                <meta name="description" content="Your local mars cafe" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Banner />
            <Limited />
            <Cuisine />
        </>
    )
}