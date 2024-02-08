"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  CaretDownIcon,
  CaretUpIcon,
  PaperPlaneIcon,
} from "@radix-ui/react-icons";

function HireMe() {
  const [conversation, setConversation] = useState<any[]>([
    { role: "CHATBOT", message: "Hello, how can I help you?" },
  ]);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuggested, setShowSuggested] = useState(true);
  const conversationEndRef = useRef(null); // Reference to the end of the conversation

  const handlePrompt = async (prompt: string) => {
    console.log(prompt);
    setConversation((prev) => [...prev, { role: "USER", message: prompt }]);
    setPrompt("");

    setLoading(true);

    const responseData = await fetch("/api/cohere-generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: prompt, conversation }),
    });

    const response = await responseData.json();
    console.log(response);

    setLoading(false);

    if (!response) {
      setConversation((prev) => [
        ...prev,
        {
          role: "CHATBOT",
          message:
            "Yikes. I couldn't quite hear you (it's loud in here). Can you try again?",
        },
      ]);
    } else {
      setConversation((prev) => [
        ...prev,
        { role: "CHATBOT", message: response && response.text },
      ]);
    }
  };

  useEffect(() => {
    (conversationEndRef.current as HTMLElement | null)?.scrollIntoView({
      behavior: "smooth",
    });
  }, [conversation, showSuggested]);

  return (
    <div className="flex flex-col items-center justify-end w-full h-full pb-24 gap-2">
      <div className="w-[90%] max-w-[900px] pt-8 flex flex-col gap-4 h-auto overflow-y-scroll no-scrollbar border-3xl">
        {conversation.map((message, index) =>
          message.role == "CHATBOT" ? (
            <p
              key={index}
              className="py-2 px-4 
          transition-all 
          rounded-3xl 
          rounded-bl-none
          border
          border-[#2e2e2e] 
          bg-[#1C1C1C]
          whitespace-pre-wrap
          w-fit
          self-start
         "
            >
              {message.message}
            </p>
          ) : (
            <p
              key={index}
              className="py-[6px] px-4 
          transition-all 
          rounded-3xl
          rounded-br-none
          border
          border-[#1c1cc1c] 
          bg-[#2e2e2e]
          whitespace-pre-wrap
          w-fit
          self-end
          "
            >
              {message.message}
            </p>
          )
        )}
        {loading ? (
          <p
            className="py-2 px-4 
          transition-all 
          rounded-3xl 
          rounded-bl-none
          border
          border-[#2e2e2e] 
          bg-[#1C1C1C]
          whitespace-pre-wrap
          w-fit
          self-start
         "
          >
            Hold on... I'm thinking!
          </p>
        ) : null}
        <div ref={conversationEndRef} />
      </div>
      {showSuggested ? (
        <div className="flex flex-col gap-2 items-center w-full w-[90%] max-w-[500px]">
          <p className="w-fit text-[#2e2e2e] italic">Suggested Questions</p>
          <button
            onClick={() => handlePrompt("Who is Marcelo?")}
            className="py-[6px] px-4 transition-all rounded-xl border border-[#2e2e2e] z-50 bg-[#1C1C1C] w-full"
          >
            Who is Marcelo?
          </button>
          <button
            onClick={() => handlePrompt("Why should I hire Marcelo?")}
            className="py-[6px] px-4 transition-all rounded-xl border border-[#2e2e2e] z-50 bg-[#1C1C1C] w-full"
          >
            Why should I hire Marcelo?
          </button>
          <button
            onClick={() => handlePrompt("What are Marcelo's skills?")}
            className="py-[6px] px-4 transition-all rounded-xl border border-[#2e2e2e] z-50 bg-[#1C1C1C] w-full"
          >
            What are Marcelo's skills?
          </button>
          <button
            onClick={() => handlePrompt("What are Marcelo's Goals?")}
            className="py-[6px] px-4 transition-all rounded-xl border border-[#2e2e2e] z-50 bg-[#1C1C1C] w-full"
          >
            What are Marcelo's Goals?
          </button>
        </div>
      ) : null}
      <div className="flex flex-row justify-center w-[90%] gap-2">
        <button
          className="h-10 w-10
          flex items-center justify-center
          rounded-xl 
          border 
          border-[#2e2e2e] 
          z-50
          bg-[#1C1C1C]
          hover:bg-[#2e2e2e]"
          onClick={() => setShowSuggested(!showSuggested)}
        >
          {showSuggested ? <CaretDownIcon /> : <CaretUpIcon />}
        </button>
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
          placeholder="Why is Marcelo the best?"
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={(e) =>
            e.key == "Enter" ? handlePrompt(prompt) : console.log(e.key)
          }
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
}

export default HireMe;
