import Projects from '@/components/Projects';
import Resume from '@/components/Resume';

export default function Home() {
  return (
    <main className="h-fit md:h-full w-dvw flex flex-col lg:flex-row-reverse gap-8 lg:gap-0 items-center p-2 overflow-y-scroll lg:overflow-hidden">
      <Resume />
      <Projects />
    </main>
  );
}
