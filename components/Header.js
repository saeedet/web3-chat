import Image from "next/image";
import React from "react";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

const Header = () => {
  const { user } = useMoralis();
  return (
    <div className="text-pink-500">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image
            src="https://i.imgur.com/WYAjt3T.jpeg"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
      </div>
      <div className="text-left lg:text-center">
        <div className="h-48 w-48 relative lg:mx-auto border-pink-500 border-8 rounded-full">
          <Avatar logoutOnClick={true} />
        </div>
        <h1 className="text-3xl">Welcome to the Meta Chat</h1>
        <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>
        <ChangeUsername />
      </div>
    </div>
  );
};

export default Header;
