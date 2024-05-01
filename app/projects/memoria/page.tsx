import React, { Fragment, useEffect } from "react";
import parse, { domToReact, Element } from "html-react-parser";
import CustomLink from "@/components/ui/custom-link";
import Image from "next/image";

function Memoria() {
  const proj_info = [
    {
      section_name: "MY ROLE",
      section_content: [
        "Frontend Developer",
        "Product Manager",
        "Product Designer",
      ],
    },
    {
      section_name: "TECH STACK",
      section_content: [
        "Reactjs",
        "Nodejs",
        "Tailwind CSS",
        "Figma",
        "Supbase",
      ],
    },
    {
      section_name: "DATE & PLACE",
      section_content: ["April 2023 – July 2023", "San Francisco & Toronto"],
    },
  ];

  const content = [
    {
      section_name: "THE BEGINNING – CONTEXT",
      images: [],
      section_content: [
        'Until April 16th, <a href="https://github.com/marcelo-cm">My Github,</a>, was almost entirely blank. Besides some failed attempts to start personal projects, I hadn\'t yet put all the hours I spent on CodeAcademy in practice. Honestly, I thought I was pretty good at this frontend thing, until I actually started doing frontends. My first startup was less than I had wished, but everything I had hoped & expected – I wished for a homerun, but I got a couple of singles.',
        "",
        '<a href="https://memoria.live/">Memoria [V2]</a> is a voice journalling tool that allows users to reflect on their life & thoughts through an AI powered chat interface – enabling users to clear their mind at the end of each day, or respond to one of our GPT generate prompts with a voice memo that is transcribed by Deepgram. Originally [V1], it was a second brain, hosting all your spontaneous thoughts within one natural language query away – eliminating the need for robust note/thought organization systems.',
        "We worked in a very lean environment, having classic stand ups & co-working sessions almost daily as I picked up React, Node, Git & Tailwind.",
        "",
        "Our team consisted of myself & 3 bright individuals. All of whom I learnt a lot from.",
        "<li>Harsh Gupta – Ex-Google PM, Ex-Startup Founder </li>\
        <li>John Santa – Ex-Google PM, UCLA MBA, ML Growth @ Factored</li>\
        <li>Bartek Kowalski – Director of AI Research @ QMIND, and long time friend</li>",
        "Our approach was to solve one aspect of what makes this difficult. We use countless tools to organize our lives, which is often helpful is retaining information but not in retrieving it. Even worse, sometimes organizations system are too hard to set up. Our angle was to provide people with a way to:",
        "",
        "<li>Store these thoughts quickly, reliably and effortlessly so that they’re not lost with time </li>\
        <li> Effortlessly organize this information for future use </li>\
        <li>Enable users to retrieve these thoughts whenever needed so they can take action on them.</li>",
        "Our solution, was what then became Version 1 of Memoria.",
      ],
    },
    {
      section_name: "VERSION 1 – BUILDSPACE N&W S3",
      section_content: ["Our product initally was composed of 3 screens:"],
    },
    {
      section_name: "CREATE",
      images: [
        {
          url: "/project-images/memoria/MV1-CREATE.png",
          alt: "Create Page",
          width: 500,
          height: 500,
        },
        {
          url: "/project-images/memoria/MV1-CREATE2.png",
          alt: "Thought Recording",
          width: 500,
          height: 500,
        },
      ],
      section_content: [
        "A screen where you can record your thoughts to get automatically transcribed, automatically assigned a title and 3 tags with keywords associated to your note.",
      ],
    },
    {
      section_name: "ASK",
      images: [
        {
          url: "/project-images/memoria/MV1-ASK.png",
          alt: "Chat Interface",
          width: 500,
          height: 500,
        },
      ],
      section_content: [
        'A chat interface to "Query your thoughts", with 3 main features: Retrieve, Expand & Summarize. Interact with the chat like ChatGPT, but get responses that use all your thoughts as context. Retrieve would recall exactly the detail you\'re looking for, with reference to the notes that it retrieved from. Expand would help you build onto your thoughts by asking questions and using external information. Summarize would help you create a synopsys of various different thoughts and ideas.',
      ],
    },
    {
      section_name: "VIEW",
      images: [
        {
          url: "/project-images/memoria/MV1-VIEW.png",
          alt: "Thought Library",
          width: 500,
          height: 500,
        },
      ],
      section_content: [
        "An information bank holding all your thoughts, easily searchable by keyword tags",
        "I had designed this from scratch about 5 times, and spent dozens of hours each week figuring out how to work through the bugs I was experiencing since it was my first time developing a product. Unfortunately, all we have now is the Figma designs since the product has been updated from this version.",
      ],
    },
    {
      section_name: "WHY VERSION 1 WENT WRONG",
      images: [],
      section_content: [
        '<a href="https://www.linkedin.com/in/braden-ream">Braden, CEO of Voiceflow,</a> said something really interesting during a fireside chat by Ripple Ventures: First-time founders don\'t think about distribution, they often think that if they make a good product the users will come. This was largely true for me & my team... we had focused too much on the product & not enough on identifying our real target market, distribution channels, & doing customer discovery to understand whether or not this pain-point was worth solving. The result of this was that we had no clue who our target persona was – we were too broad. We had no one use case we had focused on, instead we tried to tackle all spontaneous thought retrieval, enhancement & summary. When it was time to craft our GTM, we struggled to nail our story. For version 2, we aimed to fix this.',
        "",
        "A mistake I had made was designing the product without doing research on UX for other products similar to ours in user flow. Our pages were too complex, the language wasn't clear & it wasn't immediately intuitive how to interact with the product.",
        "",
        "As with many Version 1 products, we have various problems we overlooked. Users had a hard time knowing what to ask if they didn't come to the platform with questions, but their questions were no good if they hadn't already put notes in – we had a chicken-and-egg problem, which meant that the activation time of our product was three days, and that was far too long.",
        "Unfortunately, during this time the team disbanded because of time constraints – John went on to work full-time while Harsh decided to pursue other initiatives & start job hunting as well. The next steps for me were clear at this point:",
        "",
        "<li>Simplify the interface.</li>\
        <li>Focus on one use case.</li>\
        <li>Help users with ideas on what to record, and what to ask. </li>\
        <li>Use easy to understand & consistent language.</li>\
        <li>Study products to inform design choices.</li>",
        "I took these steps & started working on Version 2",
      ],
    },
    {
      section_name: "VERSION 2",
      section_content: [
        "After deliberation with the team prior to disbanded, we decided that the most common & delightful use case for our users was self-reflection. We decided to start tailoring Memoria to this, which begged the question of what kind of notes can they provide that will enhance this experience. I thought Journalling was the best way to do this for a few reasons.",
        "",
        "<li>There is a target persona & community to target for this use case, which provides much clearer distribution channels. </li>\
    <li>You can journal every day, making it an organic opportunity for retention & stickiness. Shortening the activation period because users would be able to see their results immediately: a quickly capture voice journal transcribed into organize text (We clear & reformat text with AI). </li>\
    <li>Journalling gives us a lot of detail about a users life, which is extremely helpful as context when answering questions surrounding self-reflection. </li>\
    <li>Journalling is an intuitive process: Recapture what your day was about, how you felt about it, etc. Solving our problem where people did not know what to record. s</li>",
        "To further assist users in recording journals & asking questions, I generated a new prompt for them to journal to, or a new question for them to simply tap to ask in the chat interface.",
        "",
        "I then brought on a highschool kid who was interested in exploring tech, and we studied various products to understand the good and the bad from each journal product's user experience, language, and UI. Memoria was then condensed all into one screen, merging Create & Ask into one page, and making the View page a button on the navigation bar (User interview showed that people don't look back into their journals often,and when they do it's only for reminiscing & self reflection).",
      ],
    },
    {
      section_name: "LANDING",
      images: [
        {
          url: "/project-images/memoria/MV2-LANDING.png",
          alt: "Revamped Landing Page",
          width: 500,
          height: 500,
        },
      ],
      section_content: [
        "There were a lot of major changes made, and we have yet to go-to-market (GTM) with this new version (though it is live in production), but I believe that this should begin to resolve many of the pain points users were experiencing, as well as our own challenges. This time around we spent much more time on research (Product, UX, User) and much more time focusing on the details, which I believe is a step in the right direction.",
      ],
    },
    {
      section_name: "REFLECT",
      images: [
        {
          url: "/project-images/memoria/MV2-REFLECT.png",
          alt: "New Chat Interface",
          width: 500,
          height: 500,
        },
      ],
      section_content: [
        "Once a user clicks the Reflection Bar, we open their chat interface where they can either ask a question or simply click our suggested question to effortlessly start their self reflection.",
      ],
    },
    {
      section_name: "JOURNAL",
      images: [
        {
          url: "/project-images/memoria/MV2-JOURNAL.png",
          alt: "New Recording Interface",
          width: 500,
          height: 500,
        },
      ],
      section_content: [
        "The Home page was also slightly revamped with a prompt given to the user to journal to, or a question to ask. This was to help users who didn't know what to talk about in their journal.",
      ],
    },
    {
      section_name: "VIEW",
      images: [
        {
          url: "/project-images/memoria/MV2-VIEW.png",
          alt: "New Thought Library",
          width: 500,
          height: 500,
        },
      ],
      section_content: [
        'Our view page got a revamp, even though it\'s less highlighted. Filtering became easier, journals became editable after submission (previously you could only edit before submitting), and sorting became possible. We also introduced the "Time saved using Memoria" to show users how much time they saved by journalling by voice instead of typing or writing their journals.',
      ],
    },
    {
      section_name: "THE IMPACT",
      images: [
        {
          url: "/project-images/memoria/MV2-MAU.png",
          alt: "Google Analytics",
          width: 500,
          height: 500,
        },
      ],
      section_content: [
        "The data immediately following the update did show this was true as well.",
      ],
    },
    {
      section_name: "OVERVIEW & LEARNINGS",
      images: [],
      section_content: [
        "My goal is to become a Full-stack developer & Product Manager, meaning that I want to be able to understand product development from every angle: Business, Design and Tech. Achieving this goal, I believe, will position me to be a good founder & have a good relationship with the rest of my team because I am able to understand the work they are all doing, from first-hand experience. Memoria was a grand step towards that direction, where I was able to get familiar with front-end & introduced to back-end, in practice. The rate of learning by developing a real product is ~7x the rate of learning by doing courses & practice problems.",
        "",
        "Through this project, I got great insights into designing, optimizing for front-end development processes. I realized how vital it is for designer's to have a technical understanding, or at the very least, a comprehension of the dynamics involved in implementing a front-end. Working alongside two amazing Product Managers, I learned how to effectively roadmap, how to best go through the ideation process, and got a fresh perspective on problem-solving and product assessment.",
        "",
        "My next product, I'll be able to take all the learnings and hopefully achieve a greater impact for others, a greater reach, and attain even greater learnings. I want to express my profound gratitude to the dedicated team at RippleX Ventures and their Fellowship program. Their guidance has been instrumental in teaching me essential knowledge about founding companies and engaging with venture capital firms & connecting me with a community of founders.",
      ],
    },
    {
      section_name: "NEXT STEPS",
      images: [],
      section_content: [
        "Learn more, build, ship. I think this is the first step of the journey up this mountain, and I will simply continue running.",
      ],
    },
    {
      section_name: "NOTES",
      images: [],
      section_content: [
        'If you\'d like to reach out, please message me on <a href="https://www.linkedin.com/in/marc-cham/">LinkedIn</a>, or you can <a href="mailto:marcechaman@gmail.com">Email me</a>. If you\'d like to take a peek at my GitHub since I started this project, look <a href="https://github.com/marcelo-cm">here.</a>',
        "",
        "Thank you to those who read, edited & gave me feedback on this capsule.",
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
    description: string[];
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

    const descriptionLines = description.map((line, index) => (
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
            >
              <Image
                src={image.url}
                key={index}
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
            <h2>Memoria</h2>
            <h3 className="opacity-50">
              My first startup, a voice journalling tool.
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

export default Memoria;
