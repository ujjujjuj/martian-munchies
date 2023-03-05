import { Banner } from "@/components/Banner";
import { Cuisine } from "@/components/Cuisine";
import { Limited } from "@/components/Limited";
import Head from "next/head";
import { Item } from "../db/db";
import { default as _items } from "../../../dat.json";

export default function Menu({ authed, setAuthed, items }) {
  const featuredItem = items.filter((item) => item.isLimitedEdition)[0];
  const otherItems = items.filter((item) => !item.isLimitedEdition);
  console.log(featuredItem);
  return (
    <>
      <Head>
        <title>Martian Munchies</title>
        <meta name="description" content="Your local mars cafe" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <Limited item={featuredItem} />
      <Cuisine items={otherItems} />
    </>
  );
}

export async function getServerSideProps(context) {
  const items = await Item.findAll();
  return {
    props: { items: _items.items }, //
  };
}
