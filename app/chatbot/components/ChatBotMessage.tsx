import React from "react";

const ChatBotMessage = ({ message }: { message: string }) => {
  return (
    <div
      className="w-fit py-2 px-4 
    rounded-3xl 
    rounded-bl-none
    border
    border-[#2e2e2e] 
    bg-[#1C1C1C]
    whitespace-pre-wrap
    "
    >
      {message}
    </div>
  );
};

export default ChatBotMessage;
