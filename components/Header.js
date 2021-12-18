import Image from "next/image";
import React from "react";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

const Header = () => {
  const { user, logout } = useMoralis();
  return (
    <div className="text-pink-500 sticky top-0 p-5 z-50 bg-black shadow-sm border-b-2 border-pink-700 ">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid group">
          <Image
            src="https://i.imgur.com/WYAjt3T.jpeg"
            layout="fill"
            objectFit="cover"
            className="rounded-full hover:opacity-80 cursor-pointer "
            onClick={logout}
          />
          <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 hidden group-hover:inline cursor-pointer">
            Logout
          </div>
        </div>
        <div className="text-left lg:text-center col-span-4">
          <div className="h-48 w-48 relative lg:mx-auto border-pink-500 border-8 rounded-full">
            <Avatar logoutOnClick={true} />
          </div>
          <h1 className="text-3xl">Welcome to the MetaChat</h1>
          <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>
          <ChangeUsername />
        </div>
      </div>
    </div>
  );
};

export default Header;
