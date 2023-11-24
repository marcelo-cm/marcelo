import React, { Fragment, useEffect } from "react";
import parse, { domToReact, Element } from "html-react-parser";
import CustomLink from "@/app/components/CustomLink";
import Image from "next/image";

function LockedIn() {
  const proj_info = [
    { section_name: "MY ROLE", section_content: ["Product Designer"] },
    { section_name: "TECH STACK", section_content: ["Figma"] },
    {
      section_name: "DATE & PLACE",
      section_content: ["May 2023, San Francisco"],
    },
  ];

  const content = [
    {
      section_name: "DESCRIPTION",
      section_content: [
        "Locked In is a social accountability app that has a GitHub-commit-like feature but for all work, not just coding. At the beginning of each work session, you can start your session by swiping across the bottom bar – Just like good 'ol iOS – and a timer will start.",
        "",
        'When your timer is on, your status will update to "Locked In" for all your friends to see! This will be motivating for others to also lock in with you – and friends can even turn on their notification for you so they get a ding when you lock in.',
        "",
        "When you're done working, simply swipe back and you will get brought to a screen where you can write the details of your work session, add any tags or relevant links, and publish it to your Ship Log. You can share your Ship Log, and the heatmap it comes with, with friends, or employers you want to impress!",
      ],
    },
    {
      section_name: "STORY",
      images: [],
      section_content: [
        "I was sitting in the HI SF Fisherman's Wharf Hostel [$43 a night, would rec.] for <a href=\"https://buildspace.so/\"> buildspace's n&w s3 </a> event and after meeting a few builder's a felt super inspired to create something new. My first inspiration for this idea was triggered by two things:",
        "",
        "Everyone is SF was guaranteed to ask me one thing: What are you building?",
        "",
        'Every time I would cold email/pitch a startup to hire me (0% from the field so far, but that\'s what I get for going for the full-time PM roles at Series A companies), they would ask me: "What have you built?"',
        "and while I could tell them that I'm all about that grind, actions spoke louder than words. I wished there was a way for me to show my consistent every day grind – just like GitHub heatmaps – but for non-software related building (ie. designing). Immediately, it hit me. Three hours later, it was done.",
      ],
    },
    {
      section_name: "SCREENS",
      images: [
        {
          url: "/project-images/lockedin/HOME.png",
          alt: "Home",
          width: 500,
          height: 500,
        },
        {
          url: "/project-images/lockedin/LOCKED-IN.png",
          alt: "Swipe to Start!",
          width: 500,
          height: 500,
        },
        {
          url: "/project-images/lockedin/PUBLISH.png",
          alt: "Publish your WOrk Session",
          width: 500,
          height: 500,
        },
        {
          url: "/project-images/lockedin/SHIPLOG.png",
          alt: "See your Ship Log Heatmap",
          width: 500,
          height: 500,
        },
        {
          url: "/project-images/lockedin/FRIENDS.png",
          alt: "Check Out Your Friends' Status",
          width: 500,
          height: 500,
        },
      ],
    },
    {
      images: [
        {
          url: "/project-images/lockedin/about.png",
          alt: "Why Locked In?",
          width: 500,
          height: 500,
        },
        {
          url: "/project-images/lockedin/how1.png",
          alt: "How it works",
          width: 500,
          height: 500,
        },
        {
          url: "/project-images/lockedin/how2.png",
          alt: "How it works (2)",
          width: 500,
          height: 500,
        },
      ],
    },
  ];

  const SectionContainer = ({
    title,
    images,
    description,
  }: {
    title?: string;
    images?: {
      url: string;
      alt: string;
      width: number;
      height: number;
    }[];
    description?: string[];
  }) => {
    const parseLine = (line: string) => {
      return parse(line, {
        replace: (domNode) => {
          if (
            domNode instanceof Element &&
            domNode.name === "a" &&
            domNode.attribs &&
            domNode.attribs.href
          ) {
            return (
              <CustomLink to={domNode.attribs.href}>
                {domToReact(
                  domNode.children as unknown as import("html-react-parser").DOMNode[]
                )}
              </CustomLink>
            );
          } else if (domNode instanceof Element && domNode.name === "li") {
            return (
              <li className="list-disc">
                {domToReact(
                  domNode.children as unknown as import("html-react-parser").DOMNode[]
                )}
              </li>
            );
          } else if (domNode instanceof Element && domNode.name === "ol") {
            return (
              <ol>
                {domToReact(
                  domNode.children as unknown as import("html-react-parser").DOMNode[]
                )}
              </ol>
            );
          }
        },
      });
    };

    const descriptionLines = description?.map((line, index) => (
      <Fragment key={index}>
        {parseLine(line)} <br />
      </Fragment>
    ));

    return (
      <div className="mb-6">
        <h3 className="flex flex-row w-full items-center mb-[2px] text-[#A0A0A0] font-normal text-xs">
          {title || null}
        </h3>
        <div className="flex flex-row flex-wrap gap-4">
          {images?.map((image, index) => (
            <div
              className={`min-w-[300px] ${
                images.length == 1 ? "w-fit" : "w-[45%]"
              } mb-4`}
              key={index}
            >
              <Image
                src={image.url}
                alt={image?.alt || ""}
                width={image.width}
                height={image.height}
                className="rounded-xl border-8 border-white/5 mt-4 mb-2"
              />
              <p className="text-center text-[#A0A0A0] text-light text-xs">
                {image.alt}
              </p>
            </div>
          ))}
        </div>
        <div className="font-light">{descriptionLines}</div>
      </div>
    );
  };

  return (
    <div className="h-full w-full overflow-y-scroll no-scrollbar">
      <div className="h-fit w-full flex flex-col justify-center items-center gap-8 py-16 px-4 font-normal tracking-wide">
        <div className="max-w-[1000px] w-full flex flex-col gap-2">
          <div>
            <h2>Locked In</h2>
            <h3 className="opacity-50">
              An app for accountability, built for builders
            </h3>
          </div>
          <hr className="border-[#343434] mb-4" />
          <div className="flex md:flex-row flex-col gap-2 md:gap-10">
            <div className="flex flex-col">
              {proj_info.map((item, key) => (
                <SectionContainer
                  title={item.section_name}
                  description={item.section_content}
                  key={key}
                />
              ))}
            </div>
            <div className="flex flex-col flex-1">
              {content.map((item, key) => (
                <SectionContainer
                  title={item.section_name}
                  images={item.images}
                  description={item.section_content}
                  key={key}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LockedIn;
