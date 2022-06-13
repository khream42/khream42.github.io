import type { NextPage } from 'next';
import Head from 'next/head';
import Appbar from '../components/Appbar';

const Home: NextPage = () => {
  return (
    <div className="container mx-auto">
      <Head>
        <title>khream-app</title>
        <meta name="description" content="by khream" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Appbar />
      <main className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      </main>
    </div>
  )
}

export default Home
