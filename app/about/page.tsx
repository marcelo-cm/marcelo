import Image from "next/image";
import React, {Fragment} from "react";
import IconBar from "../../components/molecules/IconBar";

export default function Home() {
  // const { fashionPhotos, artPhotos } = useLoaderData();

  const about = [
    {
      title: "WHO I AM",
      description:
        "I am a 20 year old product designer & software engineer born in Lima, Peru, raised in Toronto leading Canada’s largest undergraduate organization on AI, and organizing the Canadian Undergraduate Conference on AI. I’m a 3x founder having worked in fashion at 13, to marketing & design studio at 16, and then scaled a 50k+ community at 18. Today I’m serial-building product with friends. \
         \n \n \
        I grew up immersed by a energetic Peruvian culture, with amazing food, and a mother who always pushed me to try things I’m bad at... and sent me to engineer summer camps against my will. My brother introduced me to the world of technology when the iPhone 3GS released, and he is my greatest influence.\
         \n \n \
        I love art, tech, community, and learning new things. I love making new friends. I love everything I do.",
    },
    {
      title: "WHO I USED TO BE",
      description:
        "As a kid I spent most of my time on the basketball court, until the day I touched a camera. Quickly, I became obsessed with art in its many forms – from fashion, to photography and eventually user experience & product design. At 17, I joined QMIND, where I was introduced to AI, and the story is still writing itself until today.",
    },
    {
      title: "WHO I WILL TO BE",
      description:
        "Founder, builder, artist, and someone who gives back to underprivileged youth in Peru.\
        \n \n \
        My two goals in life are to design one of everything, and to provide the resources and opportunities to kids in my home country that didn’t have the luck I had to be brought to Canada by my parents.",
    },
    {
      title: "MY WHY",
      description:
        "Coming from a country with many underprivileged and impoverished families, I am determined to make the most out of the all the resources I have so that one day I can give back to those who enabled me to get where I am, and to the kids of Peru whom I see myself in.",
    },
  ];

  let artListFormat: string[] = [];

  for (let x = 1; x <= 70; x++) {
    artListFormat.push(`/about-images/art/art_${x}.jpg`);
  }

  let fashionListFormat: string[] = ["/about-images/fashion/fashion_100.gif"];

  for (let x = 1; x <= 13; x++) {
    fashionListFormat.push(`/about-images/fashion/fashion_${x}.png`);
  }

  const photos = [
    {
      title: "Fashion",
      description: "What sparked my interest in design.",
      photos: fashionListFormat,
    },
    {
      title: "Photography & Art",
      description: "What I would do if I could never write code again.",
      photos: artListFormat,
    },
  ];

  const AboutSection = ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => {
    const descriptionLines = description.split("\n");

    return (
      <div className="flex flex-col gap-[4px] w-full font-light">
        <div className="flex flex-row w-full items-center mb-[2px] text-[#A0A0A0] font-normal text-xs">
          {title} <hr className="h-px mx-4 bg-[#A0A0A0]/10 border-0 flex-1" />
        </div>
        <p className="leading-normal tracking-wide">
          {descriptionLines.map((line, index) => (
            <Fragment key={index}>
              {line}
              {index < descriptionLines.length - 1 && <br />}
            </Fragment>
          ))}
        </p>
      </div>
    );
  };

  return (
    <main className="h-fit xl:h-full w-[100dvw] flex flex-col xl:flex-row gap-4 xl:gap-0 items-center overflow-y-scroll xl:overflow-hidden no-scrollbar">
      <div className="h-fit w-full xl:w-[50dvw] xl:h-[100dvh] flex flex-col items-center gap-4 xl:overflow-y-scroll py-20 no-scrollbar">
        <h1 className="text-4xl max-w-[700px] w-4/5">
          Marcelo Chaman Mallqui
          <p className="text-[#A0A0A0] inline font-light">
            –Product Designer, Software Engineer & Founder
          </p>
        </h1>
        {/* ICONS */}
        <IconBar />
        <div className="max-w-[700px] w-4/5 flex flex-col gap-6 h-fit">
          {about.map((item, key) => (
            <AboutSection
              title={item.title}
              description={item.description}
              key={key}
            />
          ))}
        </div>
      </div>
      <div className="h-fit xl:h-full w-full xl:w-[50dvw] xl:h-[100dvh] flex flex-col gap-2 xl:overflow-y-scroll xl:pt-24 no-scrollbar">
        <div className="h-fit w-full flex flex-col gap-8 no-scrollbar">
          {photos.map((category, key) => (
            <div key={key}>
              {/* category details */}
              <div className="mb-2 ml-[20px] z-50">
                {category.title}
                <p className="inline font-light text-[#A0A0A0]">
                  {" "}
                  – {category.description}
                </p>
              </div>
              {/* Photos */}
              <div className="h-full relative">
                <div className="flex flex-row w-full xl:w-[50dvw] h-[300px] overflow-x-scroll gap-2 no-scrollbar px-4 static">
                  <div className="bg-gradient-to-r from-[#161616] to-[#161616]/0 absolute left-0 h-full w-4 z-40" />
                  {category.photos.map((photo, key) => (
                    <img
                      src={photo}
                      alt=""
                      key={key}
                      className="w-full h-full border-[2px] border-[#2e2e2e] flex bg-[#1C1C1C] rounded-lg "
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
