import Image from "next/image";
import React from "react";
import { useMoralis } from "react-moralis";

const Avatar = ({ username, logoutOnClick }) => {
  const { user, logout } = useMoralis();
  return (
    <Image
      className="rounded-full bg-black cursor-pointer hover:opacity-75"
      onClick={() => logoutOnClick && logout()}
      layout="fill"
      src={`https://avatars.dicebear.com/api/pixel-art/${
        username || user.get("username")
      }.svg`}
    />
  );
};

export default Avatar;
