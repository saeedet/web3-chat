import Image from "next/image";
import React from "react";
import { useMoralis } from "react-moralis";

const Login = () => {
  const { authenticate } = useMoralis();
  return (
    <div className="bg-black relative text-white">
      <div className="flex flex-col absolute z-50 h-4/6 items-center justify-center w-full space-y-4">
        <Image
          src="https://i.imgur.com/WYAjt3T.jpeg"
          height={200}
          width={200}
          className="rounded-full object-cover"
        />
        <button
          onClick={authenticate}
          className="bg-yellow-500 rounded-lg font-bold  p-5 active:bg-yellow-600 "
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
