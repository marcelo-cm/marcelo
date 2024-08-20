import React from 'react';

import Image from 'next/image';

import InfoSection from './components/InfoSection';
import CustomLink from '@/components/ui/custom-link';

const CUCAIPlatform = () => {
  const TECHnTOOLS = [
    'Next.js',
    'Typescript',
    'Tailwind CSS',
    'Shadcn',
    'PostgreSQL',
    'Supabase',
    'Vercel',
    'Figma',
    'Stripe',
  ];

  const SKILLS = [
    'Full-stack Development',
    'UI/UX Design',
    'Database Management',
    'Integration',
    'Unit Testing',
  ];

  const TABLEOFCONTENTS = [
    'Overview',
    'Features (Delegate Side)',
    'Features (Admin Side)',
    'Database',
    'Challenges',
    'Learnings',
    'Future Scope',
  ];

  return (
    <div className="items-left flex h-dvh w-dvw flex-col gap-16 overflow-x-hidden overflow-y-scroll p-6 py-16 pb-32 lg:px-32">
      <div className="flex w-full flex-col gap-8">
        {/* Title and Tagline */}
        <div className="justify-left flex w-full flex-col gap-4 lg:flex-row lg:gap-8">
          <h1 className="w-full max-w-[700px] text-4xl md:min-w-[530px]">
            Conference Management Platform
            <p className="inline font-light text-[#A0A0A0]">
              –Canadian Undergraduate Conference on AI
            </p>
          </h1>
          <p className="w-full font-light leading-tight lg:max-w-[400px]">
            A platform that facilitates the application, payment hotel selection
            & tracking process for delegates, and enables admins to manage
            applicants, ticketing, and admission process.
          </p>
        </div>
        <div className="flex flex-wrap gap-8">
          <Image
            src="/project-images/cucai-platform/demo.gif"
            alt="CUCAI Platform"
            className="w-full max-w-[1120px] rounded-xl border-2 border-white/5 md:border-8"
            width={500}
            height={300}
          />
          {/* Project Details */}
          <div className="[1568px]:w-fit flex max-w-[1120px] flex-col gap-4 gap-8 lg:flex-row-reverse min-[1569px]:flex-col">
            <div>
              <p className="mb-2 text-xs font-medium text-[#A0A0A0]">
                TECHNOLOGY & TOOLS
              </p>
              {
                // Tech & Tools
                TECHnTOOLS.map((tech, index) => (
                  <span key={index} className="block">
                    {tech}
                  </span>
                ))
              }
            </div>
            <div>
              <p className="mb-2 text-xs font-medium text-[#A0A0A0]">SKILLS</p>
              {
                // Tech & Tools
                SKILLS.map((tech, index) => (
                  <span key={index} className="block">
                    {tech}
                  </span>
                ))
              }
            </div>
            <div>
              <p className="mb-2 text-xs font-medium text-[#A0A0A0]">
                TECHNOLOGY & TOOLS
              </p>
              <ol className="ml-5 list-decimal">
                {
                  // Tech & Tools
                  TABLEOFCONTENTS.map((tech, index) => (
                    <a
                      key={index}
                      className="hover:underline-none block underline underline-offset-2 hover:text-[#A0A0A0]"
                      href={`#${tech}`}
                    >
                      <li>{tech}</li>
                    </a>
                  ))
                }
              </ol>
            </div>
          </div>
        </div>
      </div>
      <InfoSection
        title="Overview"
        description="What is this, and why did I built it? What is CUCAI?"
        image="/project-images/cucai-platform/cucai-2024-by-the-numbers.png"
        imagePosition="right"
      >
        <p>
          The{' '}
          <CustomLink to="https://www.cucai.ca/">
            Canadian Undergraduate Conference on AI
          </CustomLink>{' '}
          is a not-for-profit conference that bring together over 340 of the
          brightest minds on AI from across the country. The conference serves
          as a platform for top Canadian undergraduates in AI to learn, share
          their passion, and connect with industry leaders. I had the privilege
          of leading CUCAI 2024, our most successful event yet, however I
          encountered countless problems in the way that admin and logistics
          responsibilities were being managed, especially with a small team.
        </p>
        <p>
          Designed to streamline the complexities of delegate management and
          event logistics, this platform enhances the application process,
          simplifies ticket tracking, ensures accurate hotel room assignments,
          and expedites ticket verification upon arrival. It features two main
          interfaces: a delegate interface offering a user-friendly experience
          for managing participation details, and an admin interface that
          automates or expedites administrative tasks from ticketing to
          accommodations.
        </p>
        <p>
          Undertaking this project allowed me to address a genuine need,
          leveraging my deep understanding of the problems faced. It allowed me
          to apply and showcase my skills across the full stack, UX and UI
          design, database management, API integration, and testing. This system
          not only resolves a personal challenge but is set to make a lasting
          impact, was meant to demonstrate best practices in software
          engineering for scalability and maintainability and design for
          accessibility.
        </p>
      </InfoSection>
      <InfoSection
        title="Features (Delegate Side)"
        description="How does this make delegate lives easier?"
      >
        <InfoSection
          title="I. Application Process"
          description="—Facilitating applications for delegates"
          level={2}
          image="/project-images/cucai-platform/application.gif"
          className="mt-8"
        >
          <p>
            The application process is the pipeline where we can collect all the
            necessary information from the delegates. The platform allows
            delegates to fill out their personal and educational information,
            select their preferred ticket type (we offer conference only
            tickets, or conference + hotel tickets), select their affiliated
            student partner, register a new register or join an existing one by
            code. The platform also allows delegates to save their progress and
            return to their application at a later time.
          </p>
          <div>
            Based on the information collected in multipage & dynamic path form,
            we can construct 3 objects in our database:
            <ul className="ml-8 list-decimal">
              <li>Delegate Profile (delegates)</li>
              <li>Ticket Information (tickets)</li>
              <li>Project Information (projects, if applicable)</li>
            </ul>
            Projects are only updated if the applicant denotes that they do in
            fact have a project, for which they’ll be prompted to provide
            details or the project ID. The project ID is used to link the
            delegate to the existing project and update the project team with
            their information if they haven't already been registered by their
            project lead.
          </div>
        </InfoSection>
        <InfoSection
          title="II. Delegate Dashboard"
          description="—Central hub for delegates to manage their participation"
          level={2}
          image="/project-images/cucai-platform/dashboard.gif"
          className="mt-8"
        >
          <p>
            The Delegate Dashboard is the information hub for all delegates to
            track their profile information, ticket status and information,
            project details, and a place to access all{' '}
            <em>Important Resource</em>.
          </p>
          <div>
            A Ticket object may have 4 states & 2 types:
            <div className="flex w-full flex-row">
              <ol className="ml-8 w-1/2 list-decimal">
                <li>Applied</li>
                <li>Accepted</li>
                <li>Paid</li>
                <li>Rejected</li>
              </ol>
              <ol className="ml-8 w-1/2 list-decimal">
                <li>Conference</li>
                <li>Hotel</li>
              </ol>
            </div>
          </div>
          <p>
            If a delegate’s ticket is Accepted, then they will be prompted to
            buy the ticket every time they open the /dashboard link, which will
            stop when their ticket is Paid. If they have purchased a hotel
            ticket type and have not yet claimed their hotel room, they will be
            prompted to claim their hotel room. Under the Ticket component of
            the dashboard, there will be a call to action to purchase their
            ticket, or a call to action to claim their hotel room. Of course, if
            a user is not found in our database, they will be redirected to
            /apply.
          </p>
        </InfoSection>
        <InfoSection
          title="III. Hotel Selection"
          description="Self-assignment of hotel rooms"
          level={2}
          image="/project-images/cucai-platform/hotel.gif"
          className="mt-8"
        >
          <p>
            This solves one of the largest pain points we during CUCAI 2023.
            Managing all accommodation requests, and also maintaining one source
            of truth for hotel room assignment is tedious, difficult, and
            unproductive.
          </p>
          <p>
            This dashboard is only accessible to delegates who have paid for a
            hotel ticket, and who have not already claimed their hotel room. It
            enables delegates to select only the available rooms, having the
            information regarding who is also occupying that room. This is the
            eliminate the manual process involved with assigning hotel rooms and
            having to accommodate for roommate requests. It displays the name,
            school, self-identified gender, and graduation year of each
            occupant.
          </p>
        </InfoSection>
      </InfoSection>
      <InfoSection
        title="Features (Admin Side)"
        description="How does this make organizer lives eaiser?"
      >
        <InfoSection
          title="Application Management"
          description="Reviewing application and assigning ticket types"
          level={2}
          image="/project-images/cucai-platform/admin-apps.gif"
          imagePosition="left"
          className="mt-8"
        >
          <p>
            The applications tab of the Admin Dashboard displays the details of
            every application that is in our system. We pull the Delegate
            Profile, the Ticket that belongs to that delegate and render each
            row. Within each row component we pull the project they belong to as
            well. You can click “View Application Details” to open a sidebar
            with their written application response, project details, and
            application details.
          </p>
          <div>
            You may search a delegate by name. You can make two decisions on
            this screen:
            <ul className="ml-8 list-decimal">
              <li>What ticket type they will receive</li>
              <li>What batch they will be accepted in</li>
            </ul>
            Since we send tickets out in batches, you can only change the
            details of a delegates acceptance if their batch has not been sent
            yet. If it’s already been sent out then the dropdowns will be
            disabled, and you will not be able to change their details. More
            details on this logic will follow in the Acceptances section.
          </div>
        </InfoSection>
        <InfoSection
          title="Acceptance Management"
          description="Tracking ticket statuses and sending batch acceptances"
          level={2}
          image="/project-images/cucai-platform/acceptances.gif"
          imagePosition="left"
          className="mt-8"
        >
          <p>
            This screen is where an admin will facilitate acceptances. Each
            batch card shows the applicants in that batch, and enables you to
            copy all their emails at once in order to send acceptance emails.
            Once you've sent the acceptance email you can irreversibly change
            the status of a batch from Not Sent to Sent.
          </p>
          <p>
            When you mark a batch as sent, it will mark every person in that
            batch at Accepted (unless it’s the rejection batch, then it will
            mark the as Rejected). This results in them gaining access to a
            purchase link.
          </p>
          <p>
            Each batch displays the number of tickets in it in total and by
            ticket type. This is useful for ensuring that you have the correct
            number of tickets in each ticket type (given hotel room capacity).
          </p>
        </InfoSection>
        <InfoSection
          title="Project Dashboard"
          description="Centralized view of all projects & project teams"
          image="/project-images/cucai-platform/projects.svg"
          imagePosition="left"
          className="mt-8"
        >
          We have a projects page is that simply a grid view of all the projects
          that have applied. Each project card displays the name, description,
          special requests, and a list of the project members. The project
          members are mapped by email, if their email is in our applications
          database then we will show their name, email and application status,
          otherwise we will just have their email.
        </InfoSection>
        <InfoSection
          title="Dashboards for Delegate Details "
          description="Managing check-in and supervising hotel occupancy"
          level={2}
          className="mt-8"
        >
          <p>
            The delegate details page is a table view of all the delegates that
            have paid, and have not yet checked in. Each row displays the
            informatio of a delegate, including their name, email, school, and
            ticket type. You can search for a delegate by name or email, and you
            can filter the name of ticket ID by ticket type.
          </p>
          <p>
            The hotel occupancy page is a table view of all the hotel rooms that
            have been claimed. Each row displays the room number, the number of
            occupants, and the occupants’ names.
          </p>
        </InfoSection>
      </InfoSection>
      <div className="justify-left flex w-full flex-col gap-4">
        <h1 className="w-full text-2xl md:min-w-[530px]">
          Database
          <p className="inline font-light text-[#A0A0A0]">
            –How is the data structured and related?
          </p>
        </h1>
        <img
          src="/project-images/cucai-platform/database-diagram.png"
          alt="CUCAI Platform"
          className="w-full max-w-[700px] rounded-xl border-2 border-white/5 md:border-8"
        />
      </div>
      <InfoSection
        title="Challenges"
        description="What were the challenges I faced?"
      >
        <ol className="ml-8 flex list-disc flex-col gap-2">
          <li>
            <p className="font-medium">
              Database Design and Feature Exclusion:
            </p>
            One of the key challenges was in the design of the database schema,
            particularly deciding to exclude the resume input feature due to its
            complexity in storage and the detailed aggregation needed for
            tailoring resumes to sponsor requests. This decision was influenced
            by the need to avoid overly complicating the application process.
          </li>
          <li>
            <p className="font-medium">Application Portal Development:</p>
            Implementing context providers for dynamic routing and seamless
            navigation, and handling complex data manipulations for submission
            functionalities. Ensuring that the sequence of database operations
            was correct to properly link projects, users, and tickets presented
            significant challenges.
          </li>
          <li>
            <p className="font-medium">Project View Dashboard Configuration:</p>
            Adjusting the project view dashboard to display application statuses
            involved reconfiguring project objects to include member details
            dynamically based on application statuses (and whether an
            application is present), which was essential for managing delegate
            and project numbers efficiently.
          </li>
          <li>
            <p className="font-medium">Acceptance System Implementation:</p> The
            acceptance system required rigorous testing to ensure that status
            updates for batches were handled correctly and irreversibly, which
            was crucial for maintaining the integrity of the conference’s
            acceptance process.
          </li>
          <li>
            <p className="font-medium">Integration of Payment Systems:</p>
            Integrating Stripe for handling payments involved setting up webhook
            listeners and ensuring that payment confirmations triggered
            appropriate database updates and user redirections.
          </li>
          <li>
            <p className="font-medium">Management of Conference Logistics: </p>
            The addition of features like the Paid Delegates list and monitoring
            hotel room statuses involved developing new dashboard
            functionalities that could handle real-time data effectively and
            reliably.
          </li>
        </ol>
      </InfoSection>
      <InfoSection
        title="Learnings"
        description="What did I learn from this project?"
      >
        <ol className="ml-8 flex list-disc flex-col gap-2">
          <li>
            <p className="font-medium">
              Efficient Problem-Solving with Alternative Solutions:
            </p>
            The decision to use Google Forms for resume submissions during the
            application process instead of building a complex feature within the
            system was a key learning in optimizing resources and time, and
            thinking about the non-technical implications of technical
            decisions.
          </li>
          <li>
            <p className="font-medium">
              Advanced Form Handling and Data Structures:
            </p>
            Learning to utilize the zod library for validation and error
            handling.
          </li>
          <li>
            <p className="font-medium">
              Dynamic Data Handling and UI Components:
            </p>
            Implementing context providers for dynamic routing and multi-page
            form management demonstrated the importance of seamless user
            interaction within web applications.
          </li>
          <li>
            <p className="font-medium">
              Database Management and Operations Sequencing:
            </p>
            Handling complex database operations, such as the sequencing
            required to link projects, users, and tickets correctly, emphasized
            the need for careful planning and execution in database and software
            design prior to development to ensure data integrity and system
            reliability.
          </li>
          <li>
            <p className="font-medium">
              Batch Processing and Status Management:
            </p>
            The development of the acceptance system illustrated the critical
            role of precise batch processing and status management in
            administrative systems, particularly in scenarios where changes can
            have significant consequences.
          </li>
          <li>
            <p className="font-medium">
              Integration and Testing of Third-Party Services:
            </p>
            Integrating Stripe for payment processing and learning to manage
            webhooks and API routes provided practical experience in third-party
            service integration, emphasizing the importance of thorough testing
            and configuration to ensure smooth end-to-end processes.
          </li>
          <li>
            <p className="font-medium">
              Real-Time Data Management for Event Logistics:
            </p>
            The addition of real-time features to monitor and manage conference
            logistics, such as delegate check-ins and room statuses, highlighted
            the importance of responsive and reliable dashboard capabilities in
            managing large-scale events.
          </li>
          <li>
            <p className="font-medium">Importance of Modularity</p>
            After writing over 17 000 lines of code for this project, I learned
            that it is important to break down the code into smaller, more
            manageable parts, and to ensure that each part is independent of the
            others. This makes it easier to debug, test, and maintain the code,
            and also makes it easier to add new features in the future. Last but
            not least, great code is not just about writing code that works, but
            also about writing code that is easy to read and understand.
          </li>
        </ol>
      </InfoSection>
      <InfoSection
        title="Future Scope"
        description="What can be improved or added?"
      >
        <ol className="ml-8 flex list-disc flex-col gap-2">
          <li>
            <p className="font-medium">Delegate Dashboard:</p>
            Planned improvements include allowing delegates to downgrade their
            ticket types if unpaid, reflecting these changes in the database
            accurately for administrative transparency, and potentially adding a
            chat interface to provide direct support, enhancing delegate
            engagement and satisfaction.
          </li>
          <li>
            <p className="font-medium">Hotel Selection for Student Partners:</p>
            Future steps aim to automate the manual process of room assignments
            with a new system that would allow block bookings for student
            partners, transitioning from a ticket-based to a room-based selling
            strategy, thus optimizing hotel space management and delegate
            satisfaction.
          </li>
          <li>
            <p className="font-medium">Applications Dashboard:</p>
            The applications tab will be enhanced by adding the capability to
            filter applications by student partner.
          </li>
          <li>
            <p className="font-medium">Projects Dashboard:</p>
            Enhancements will include the ability to view applicant details
            directly by clicking on their name and an "Accept All" feature for
            project members to streamline the acceptance process, thereby
            reducing administrative overhead.
          </li>
          <li>
            <p className="font-medium">Acceptances:</p>
            Future development includes automating the emailing process when a
            batch is sent, thus improving efficiency and ensuring timely
            communication with delegates.
          </li>
          <li>
            <p className="font-medium">Hotel List Optimization:</p>
            Enhancements will focus on the ability to reassign delegates to
            different rooms more dynamically, integrating a system to handle
            unclaimed or unassigned rooms through an interactive interface, thus
            improving logistical management.
          </li>
        </ol>
      </InfoSection>
    </div>
  );
};

export default CUCAIPlatform;
