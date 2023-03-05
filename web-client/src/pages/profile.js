import Head from "next/head";

export default function Profile({
    authed,
    setAuthed,
    user
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
                <h1 className="font-[akira] text-4xl text-center tracking-widest">Hi, {user.username}</h1>
            </section>
        </>
    );
}