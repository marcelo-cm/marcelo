import React from "react";
import { ComponentContainer } from "./_components/ComponentContainer";
import CustomLink from "../components/CustomLink";

export default function Playground() {
  return (
    <div className="h-fit md:h-full w-[100dvw] flex flex-col gap-8 items-center p-8 overflow-y-scroll no-scrollbar">
      {/* TITLE & PAGE DESCRIPTION */}
      <div className="w-full flex flex-col gap-4 items-center">
        <h1 className="text-4xl max-w-[700px] w-4/5">
          Welcome to the Sandbox
          <p className="text-[#A0A0A0] inline font-light">
            –Grounds For Experimentation
          </p>
        </h1>
        <p className="max-w-[700px] w-4/5">
          A 2024 goal of mine is to code every single day. As a full stack
          engineer, I wanted to make sure I was sharpening both swords. While I
          do LeetCode often, I wanted to make sure I kept my front end game
          strong as well.
        </p>
        <p className="max-w-[700px] w-4/5">
          Below is a collection of small components as projects/experiments I've
          worked on to keep my product design and front end skills sharp.
        </p>
      </div>
      <div className="max-w-[1100px] w-full">
        <ComponentContainer
          date="01.01.2024"
          label="Component Container (Link Component as an Example)"
        >
          <CustomLink to="https://www.qmind.ca/" icon underline={false}>
            QMIND
          </CustomLink>
        </ComponentContainer>
      </div>
    </div>
  );
}
