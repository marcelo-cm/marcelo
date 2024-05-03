"use client";

import React, { useState } from "react";
import UserMessage from "./components/UserMessage";
import ChatBotMessage from "./components/ChatBotMessage";
import { PaperPlaneIcon } from "@radix-ui/react-icons";

interface ChatMessage {
  role: "USER" | "CHATBOT";
  message: string;
}

const ChatBot = () => {
  const [conversation, setConversation] = useState<ChatMessage[]>([
    { role: "CHATBOT", message: "Hello, how can I help you?" },
    { role: "USER", message: "I'm Marcelo, nice to meet you" },
  ]);
  const [prompt, setPrompt] = useState<string>("");

  function handlePrompt(prompt: string) {
    setConversation((prev) => [...prev, { role: "USER", message: prompt }]);
    setPrompt("");
  }

  return (
    <div className="flex flex-col w-full h-full items-center justify-end pb-24 gap-2">
      <div className="flex flex-col max-w-[900px] w-[90%] gap-2">
        {conversation.map((item, i) =>
          item.role === "CHATBOT" ? (
            <ChatBotMessage message={item.message} key={i} />
          ) : (
            <UserMessage message={item.message} key={i} />
          )
        )}
      </div>
      <div className="flex gap-2">
        <input
          className="py-[6px] px-4 
        transition-all 
        rounded-xl 
        border 
        border-[#2e2e2e] 
        z-50
        bg-[#1C1C1C]
        w-full 
        max-w-[400px]"
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={(e) => (e.key === "Enter" ? handlePrompt(prompt) : null)}
        />
        <button
          className="h-10 w-10
          flex items-center justify-center
          rounded-xl 
          border 
          border-[#2e2e2e] 
          z-50
          bg-[#1C1C1C]
          hover:bg-[#2e2e2e]"
          onClick={() => handlePrompt(prompt)}
        >
          <PaperPlaneIcon />
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
