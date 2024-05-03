import React from "react";

const UserMessage = ({ message }: { message: string }) => {
  return (
    <div
      className="w-fit py-2 px-4 
    rounded-3xl
    rounded-br-none
    border
    border-[#1c1cc1c] 
    bg-[#2e2e2e]
    self-end
    "
    >
      {message}
    </div>
  );
};

export default UserMessage;
