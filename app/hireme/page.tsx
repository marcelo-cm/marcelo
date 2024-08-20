'use client';

import React, { useEffect, useRef, useState } from 'react';

import {
  CaretDownIcon,
  CaretUpIcon,
  PaperPlaneIcon,
} from '@radix-ui/react-icons';

function HireMe() {
  const [conversation, setConversation] = useState<any[]>([
    { role: 'CHATBOT', message: 'Hello, how can I help you?' },
  ]);
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSuggested, setShowSuggested] = useState(true);
  const conversationEndRef = useRef(null); // Reference to the end of the conversation

  useEffect(() => {
    (conversationEndRef.current as HTMLElement | null)?.scrollIntoView({
      behavior: 'smooth',
    });
  }, [conversation, showSuggested]);

  const handlePrompt = async (prompt: string) => {
    if (!prompt) return;

    console.log(prompt);
    setConversation((prev) => [...prev, { role: 'USER', message: prompt }]);
    setPrompt('');

    setLoading(true);

    const responseData = await fetch('/api/cohere-generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: prompt, conversation }),
    });

    if (!responseData.ok) {
      setConversation((prev) => [
        ...prev,
        {
          role: 'CHATBOT',
          message:
            "Yikes. I couldn't quite hear you (it's loud in here). Can you try again?",
        },
      ]);
      console.error('Failed to fetch response from Cohere', responseData);
      setLoading(false);
      return;
    }

    const response = await responseData.json();
    console.log(response);

    setLoading(false);
    setConversation((prev) => [
      ...prev,
      { role: 'CHATBOT', message: response && response.text },
    ]);
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-end gap-2 pb-24">
      <div className="no-scrollbar border-3xl flex h-auto w-[90%] max-w-[900px] flex-col gap-4 overflow-y-scroll pt-8">
        {conversation.map((message, index) =>
          message.role == 'CHATBOT' ? (
            <p
              key={index}
              className="w-fit self-start whitespace-pre-wrap rounded-3xl rounded-bl-none border border-[#2e2e2e] bg-[#1C1C1C] px-4 py-2 transition-all"
            >
              {message.message}
            </p>
          ) : (
            <p
              key={index}
              className="w-fit self-end whitespace-pre-wrap rounded-3xl rounded-br-none border border-[#1c1cc1c] bg-[#2e2e2e] px-4 py-2 transition-all"
            >
              {message.message}
            </p>
          ),
        )}
        {loading ? (
          <p className="w-fit self-start whitespace-pre-wrap rounded-3xl rounded-bl-none border border-[#2e2e2e] bg-[#1C1C1C] px-4 py-2 transition-all">
            Hold on... I'm thinking!
          </p>
        ) : null}
        <div ref={conversationEndRef} />
      </div>
      {showSuggested ? (
        <div className="flex w-[90%] max-w-[500px] flex-col items-center gap-2">
          <p className="w-fit italic text-[#2e2e2e]">Suggested Questions</p>
          <button
            onClick={() => handlePrompt('Who is Marcelo?')}
            className="z-50 w-full rounded-xl border border-[#2e2e2e] bg-[#1C1C1C] px-4 py-[6px] transition-all"
          >
            Who is Marcelo?
          </button>
          <button
            onClick={() => handlePrompt('Why should I hire Marcelo?')}
            className="z-50 w-full rounded-xl border border-[#2e2e2e] bg-[#1C1C1C] px-4 py-[6px] transition-all"
          >
            Why should I hire Marcelo?
          </button>
          <button
            onClick={() => handlePrompt("What are Marcelo's skills?")}
            className="z-50 w-full rounded-xl border border-[#2e2e2e] bg-[#1C1C1C] px-4 py-[6px] transition-all"
          >
            What are Marcelo's skills?
          </button>
          <button
            onClick={() => handlePrompt("What are Marcelo's Goals?")}
            className="z-50 w-full rounded-xl border border-[#2e2e2e] bg-[#1C1C1C] px-4 py-[6px] transition-all"
          >
            What are Marcelo's Goals?
          </button>
        </div>
      ) : null}
      <div className="flex w-[90%] flex-row justify-center gap-2">
        <button
          className="z-50 flex h-10 w-10 items-center justify-center rounded-xl border border-[#2e2e2e] bg-[#1C1C1C] hover:bg-[#2e2e2e]"
          onClick={() => setShowSuggested(!showSuggested)}
        >
          {showSuggested ? <CaretDownIcon /> : <CaretUpIcon />}
        </button>
        <input
          className="z-50 w-full max-w-[400px] rounded-xl border border-[#2e2e2e] bg-[#1C1C1C] px-4 py-[6px] transition-all"
          type="text"
          value={prompt}
          placeholder="Why is Marcelo the best?"
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={(e) =>
            e.key == 'Enter' ? handlePrompt(prompt) : console.log(e.key)
          }
        />
        <button
          className="z-50 flex h-10 w-10 items-center justify-center rounded-xl border border-[#2e2e2e] bg-[#1C1C1C] hover:bg-[#2e2e2e]"
          onClick={() => handlePrompt(prompt)}
        >
          <PaperPlaneIcon />
        </button>
      </div>
    </div>
  );
}

export default HireMe;
