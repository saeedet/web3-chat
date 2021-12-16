import Head from "next/head";
import Login from "../components/Login";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Web3 Chat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login />
    </div>
  );
}
