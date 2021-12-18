import Head from "next/head";
import Image from "next/image";
import React from "react";
import { useMoralis } from "react-moralis";

const Login = () => {
  const { authenticate } = useMoralis();
  return (
    <div className="bg-black relative text-white font-bold">
      <Head>
        <title>MetaChat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div class="text-5xl font-extrabold  absolute bottom-52 z-50 w-screen text-center">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-fuchsia-300 to-cyan-500">
          Welcome to MetaChat
        </span>
      </div>
      <div className="flex flex-col absolute z-50 h-4/6 items-center justify-center w-full space-y-4">
        <Image
          src="/metamask.png"
          height={200}
          width={200}
          className="rounded-full object-cover"
        />
        <button
          onClick={authenticate}
          className="bg-yellow-500 rounded-lg font-bold  p-5 active:bg-yellow-700 hover:bg-yellow-600"
        >
          Login with MetaMask
        </button>
      </div>
      <div className="w-full h-screen">
        <Image
          src="https://i.imgur.com/WYAjt3T.jpeg"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Login;
