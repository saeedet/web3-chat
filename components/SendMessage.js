import React, { useRef } from "react";
import { useMoralis } from "react-moralis";

const SendMessage = ({ endOfMessagesRef }) => {
  const { user, Moralis } = useMoralis();
  const inputRef = useRef(null);
  const submitHandler = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;
    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();

    messages
      .save({
        message: inputRef.current.value,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then((message) => {
        // saved successfully
      })
      .catch((err) => {
        console.log(err);
      });

    inputRef.current.value = "";
    endOfMessagesRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <form
      onSubmit={submitHandler}
      className="flex w-11/12 fixed bottom-10
     bg-black opacity-80 px-6 py-4 max-w-2xl shadow-xl rounded-full border-4 border-blue-400"
    >
      <input
        type="text"
        ref={inputRef}
        placeholder={`Enter a Message ${user.getUsername()}`}
        className="pr-5 flex-grow outline-none bg-transparent text-white placeholder-gray-500"
      />
      <button className="font-bold text-pink-500" type="submit">
        Send
      </button>
    </form>
  );
};

export default SendMessage;
