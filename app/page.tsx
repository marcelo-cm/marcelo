import Image from "next/image";
import ProjectCard from "./components/ProjectCard";
import CustomLink from "./components/CustomLink";

export default function Home() {
  const resume = [
    {
      title: "Managing Director",
      website: "https://qmind.ca",
      organization: "QMIND",
      date: "2023",
      description:
        "Leading Canada’s largest undergraduate organization on AI, 250+ members, 40+ AI projects",
    },
    {
      title: "President",
      website: "https://cucai.ca",
      organization: "Canadian Undergraduate Conference on AI",
      date: "2023",
      description:
        "Organizing Canada’s largest undergraduate conference on AI, 320+ delegates, featuring companies like Cohere, Microsoft, Intel, and more",
    },
    {
      title: "International Competitor",
      website: "https://qccu.info",
      organization: "Queen’s Case Competition Union",
      date: "2023",
      description:
        "1 of 6 students in my class (550 students) competing internationally on behalf of Queen’s university.",
    },
    {
      title: "Advisor",
      website: "https://instagram.com/inqubate.ai",
      organization: "inQUbate",
      date: "2023",
      description:
        "Organizing Canada’s largest undergraduate conference on AI, 320+ delegates, featuring companies like Cohere, Microsoft, Intel, and more",
    },
    {
      title: "AI Research Analyst Intern",
      website: "https://recalcacademy.com/",
      organization: " Recalc Academy",
      date: "2023",
      description:
        "Finance academy & accelerator program empowering ambitious students breaking into the world on finance. Automated processes & research AI tools in the data & AI space",
    },
    {
      title: "Co-Founder & Advisor ",
      website: "https://www.universitymedia.ca/",
      organization: "University Media Group",
      date: "2022-2023",
      description:
        "Changing the way students across Canada make friends before stepping on campus, 50k+ community",
    },
    {
      title: "Founder",
      website: "",
      organization: "verycalmstudios.",
      date: "2021-2022",
      description:
        "Marketing & design studio. Worked w/ FujiFilm, and on Footlocker, Adidas, & Hennessy supported projects",
    },
    {
      title: "Founder",
      website: "",
      organization: "ustudios.",
      date: "2017",
      description:
        "Fashion company where I found my love for art. Designed for companies 100k+ in revenue & design clothes for myself to this day",
    },
  ];

  const projects = [
    {
      title: "QMIND Design Team Portal",
      tags: ["Product Design"],
      type: "Case Study",
      image_url: "/DTP-P-A.png",
      to: "https://medium.com/@marcelochaman/ux-product-design-case-study-qmind-design-team-portal-89d7eb8ea526",
    },
    {
      title: "QMIND Website",
      tags: ["UI", "Frontend"],
      type: "Website",
      image_url: "/QMINDWEB.gif",
      to: "https://qmind.ca/",
    },
    {
      title: "Attention! Is All That Matters",
      tags: ["Writing"],
      type: "Article",
      image_url: "/attention-cover.webp",
      to: "https://medium.com/@marcelochaman/attention-is-all-that-matters-51d141844dec",
    },
    {
      title: "Easy Recipe",
      tags: ["UX", "UI"],
      type: "Case Study",
      image_url: "/EasyRecipe-mobile1.gif",
      to: "https://medium.com/@marcelochaman/easy-recipe-ux-ui-case-study-124a7992597e",
    },
    {
      title: "Memoria",
      tags: ["Product"],
      type: "Capsule",
      image_url: "/MEMORIA-COVER.png",
      to: "/projects/memoria",
    },

    {
      title: "EchoDMs",
      tags: ["Backend", "Slack App"],
      type: "Website",
      image_url: "/echodms-cover.png",
      to: "https://echo-dms.vercel.app/",
    },
    {
      title: "LockedIn",
      tags: ["Hackathon", "Product Design"],
      type: "Project",
      image_url: "/lockedin-cover.png",
      to: "/projects/lockedin",
    },
  ];

  const ResumeSection = ({
    title,
    website,
    organization,
    date,
    description,
  }: {
    title: string;
    website: string;
    organization: string;
    date: string;
    description: string;
  }) => {
    return (
      <div className="flex flex-col w-full font-light h-fit">
        <div className="flex flex-col sm:flex-row w-full items-left sm:items-center mb-[2px]">
          <div className="text-normal flex flex-col sm:flex-row">
            <div className="w-full sm:w-fit flex flex-row whitespace-nowrap items-center">
              {title}{" "}
              <hr className="h-px mx-4 bg-[#A0A0A0]/10 border-0 flex-1 sm:hidden w-0" />
            </div>
            <div className="inline text-[#A0A0A0] w-full">
              <p className="hidden sm:inline ml-[4px]"> – </p>
              {website ? (
                <CustomLink to={website} icon underline={false}>
                  {organization}
                </CustomLink>
              ) : (
                organization
              )}
            </div>
          </div>
          <hr className="h-px mx-4 bg-[#A0A0A0]/10 border-0 sm:flex-1 invisible sm:visible" />
          <p className="text-[#A0A0A0] break-keep whitespace-nowrap">{date}</p>
        </div>
        <p className="text-[#A0A0A0] leading-tight">{description}</p>
      </div>
    );
  };

  return (
    <main className="h-fit md:h-full w-[100dvw] flex flex-col-reverse lg:flex-row gap-8 lg:gap-0 items-center p-2 overflow-y-scroll lg:overflow-hidden">
      <div className="w-full min-w-[300px] lg:w-[45%] lg:h-[100dvh] flex flex-row gap-2 lg:overflow-y-scroll no-scrollbar">
        <div className=" columns-1 sm:columns-2 lg:columns-1 xl:columns-2 space-y-2 h-fit w-full gap-2 pt-2 overflow-y-scroll no-scrollbar">
          {projects.map((project, key) => (
            <ProjectCard
              image_url={project.image_url}
              to={project.to}
              tags={project.tags}
              title={project.title}
              type={project.type}
              key={key}
              alt={project.title}
            />
          ))}
        </div>
      </div>
      <div className="h-fit w-full xl:w-[55%] lg:h-[100dvh] flex flex-col items-center gap-16 lg:overflow-y-scroll  lg:py-24 no-scrollbar pt-16">
        <h1 className="text-4xl max-w-[700px] w-4/5">
          Marcelo Chaman Mallqui
          <p className="text-[#A0A0A0] inline font-light">
            –Product Designer, Software Engineer & Founder
          </p>
        </h1>
        <div className="h-fit max-w-[700px] w-4/5 flex flex-col gap-4">
          {resume.map((item, key) => (
            <ResumeSection
              title={item.title}
              website={item.website}
              organization={item.organization}
              date={item.date}
              description={item.description}
              key={key}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
