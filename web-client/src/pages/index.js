import { Explore } from '@/components/Explore';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Mrq } from '@/components/Marquee';
import { Navbar } from '@/components/Navbar';
import { Nfts } from '@/components/Nfts';
import Cookies from 'js-cookie';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home({
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
      <Hero />
      <Mrq />
      <Nfts />
      <Explore />
    </>
  )
}
