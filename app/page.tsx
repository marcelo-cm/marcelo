import Projects from '@/components/Projects';
import Resume from '@/components/Resume';

export default function Home() {
  return (
    <main className="flex h-fit w-dvw flex-col items-center gap-8 overflow-y-auto p-2 md:h-full lg:flex-row-reverse lg:gap-0 lg:overflow-hidden">
      <Resume />
      <Projects />
    </main>
  );
}
