import { NFTCollection } from "@/components/NFTCollection";
import { Orders } from "@/components/Orders";
import Head from "next/head";

export default function Profile({
    authed,
    setAuthed,
    user,
    orders
}) {
    return (
        <>
            <Head>
                <title>Martian munchies</title>
                <meta name="description" content="Your local mars cafe" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className="mt-28 flex flex-col items-start px-20">
                <div className="flex flex-row">
                    <h1 className="font-[akira] text-4xl text-center tracking-wider">Hey, {user.username}</h1>
                </div>
                <Orders orders={orders} />
                <NFTCollection />
            </section>
        </>
    );
}

// export async function getServerSideProps(context) {
//     // const orders = await Orders.findAll();
//     // return {
//     //     props: { orders: orders }, //
//     // };
// }
