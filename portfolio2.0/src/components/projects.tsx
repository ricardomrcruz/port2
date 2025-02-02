import { TbWorld } from "react-icons/tb";
import { FaGithub, FaBehanceSquare } from "react-icons/fa";

export default function Projects() {
  let stack1 = [
    "Python",
    "Fastapi",
    "Sqlalchemy",
    "Pydantic",
    "Htmx",
    "Jinja2",
    "Tailwindcss",
    "Postgres",
    "Docker",
    "HATEOAS",
  ];

  let stack2 = [
    "Typescript",
    "React",
    "Nextjs",
    "Axios",
    "TailwindCSS",
    "Prisma",
    "MongoDB",
    "Google Cloud Platform",
    "Serverless",
  ];

  let stack3 = [
    "Nodejs",
    "Apollo Server",
    "GraphQL",
    "TypeORM",
    "PostgresQL",
    "Express",
    "React",
    "Nextjs",

    "Docker",
  ];

  let stack4 = [
    "HTML",
    "TailwindCSS",
    "Javascript",
    "Google Maps",
    "Google Business",
    "SEO",
    "Vercel",
    "UX/UI",
    "Responsive",
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <span className="bg-white text-black px-3 py-1 rounded-md text-sm inline-block hover:opacity-80">
          My Projects
        </span>
        <h2 className="mt-4 mb-2 text-3xl font-bold tracking-tighter sm:text-5xl text-gray-100">
          Check out my latest work
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          From responsive business websites to complex web applications, here's
          a showcase of some of my projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* CARD1 */}
        <div className="bg-black border border-gray-800 rounded-lg shadow overflow-hidden">
          <a
            href="https://streamnow.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <video
              className="w-full aspect-video object-cover border-b border-gray-900"
              poster=""
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/now_showcase.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </a>
          <div className="p-4">
            <h5 className="text-lg font-semibold text-white truncate">
              NOW Streaming App
            </h5>
            <p className="text-gray-400 text-xs mb-2">
              December 2022 - February 2023
            </p>
            <p className="text-xs text-gray-700 mb-3 line-clamp-4">
              A serverless streaming platform built with Nextjs, MongoDB and
              Google Cloud Storage, featuring secure content delivery and
              responsive design for optimal viewing experience.
            </p>
            <div className="flex flex-wrap gap-1">
              {stack2.map((skill, index) => (
                <span
                  key={index}
                  className="bg-neutral-900 px-2 py-0.5 rounded-sm text-[10px] font-semibold hover:bg-black"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="mt-2 flex gap-1">
              <a
                href="https://streamnow.vercel.app//"
                target="_blank"
                className="bg-white text-black py-[3px] px-2 text-xs rounded-md border-transparent hover:opacity-80 inline-flex items-center"
              >
                <TbWorld color="black" /> Website
              </a>
              <a
                href="https://github.com/ricardomrcruz/NOW-streaming-service"
                target="_blank"
                className="bg-white text-black py-[3px] px-2 text-xs rounded-md border-transparent hover:opacity-80 inline-flex items-center"
              >
                <FaGithub color="black" /> Source
              </a>
            </div>
          </div>
        </div>

        {/* CARD2 */}
        <div className="bg-black border border-gray-800 rounded-lg shadow overflow-hidden">
          <a
            href="https://mark3ts.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <video
              className="w-full aspect-video object-cover border-b border-gray-900"
              poster=""
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/saas_showcase.mp4" type="video/mp4" />
            </video>
          </a>
          <div className="p-4">
            <h5 className="text-lg font-semibold text-white truncate">
              Mark3ts.io SAAS
            </h5>
            <p className="text-gray-400 text-xs mb-2">
              February 2024 - Present
            </p>
            <p className="text-xs text-gray-700 mb-3 line-clamp-4">
              Advanced SaaS platform designed for web scraping and crawling to
              deliver real-time e-commerce data and analytics from major global
              electronics retailers.
            </p>
            <div className="flex flex-wrap gap-1">
              {stack1.map((skill, index) => (
                <span
                  key={index}
                  className="bg-neutral-900 px-2 py-0.5 rounded-sm text-[10px] font-semibold hover:bg-black"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="mt-2 flex gap-1">
              <a
                href="https://mark3ts.io/"
                target="_blank"
                className="bg-white text-black py-[3px] px-2 text-xs rounded-md border-transparent hover:opacity-80 inline-flex items-center"
              >
                <TbWorld color="black" /> Website
              </a>
              <a
                href="https://www.behance.net/gallery/207935375/Mark3ts-SAAS-UXUI"
                target="_blank"
                className="bg-white text-black py-[3px] px-2 text-xs rounded-md border-transparent hover:opacity-80 inline-flex items-center"
              >
                <FaBehanceSquare /> <span className="px-1">Behance</span>
              </a>
            </div>
          </div>
        </div>

        {/* CARD3 */}
        <div className="bg-black border border-gray-800 rounded-lg shadow overflow-hidden">
          <a
            href="https://mymetal.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-full aspect-video object-cover rounded-t-lg border-b border-gray-900"
              src="/metal_usecase.jpg"
              alt="MyMetal business website showcase"
            />
          </a>
          <div className="p-4">
            <h5 className="text-lg font-semibold text-white truncate">
              MyMetal Business Page
            </h5>
            <p className="text-gray-400 text-xs mb-2">
              February 2024 - Present
            </p>
            <p className="text-xs text-gray-700 mb-3 line-clamp-4">
              SEO-optimized business page featuring modern design, seamless
              contact integration, and enhanced performance metrics for improved
              user engagement.
            </p>
            <div className="flex flex-wrap gap-1">
              {stack4.map((skill, index) => (
                <span
                  key={index}
                  className="bg-neutral-900 px-2 py-0.5 rounded-sm text-[10px] font-semibold hover:bg-black"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="mt-2 flex gap-1">
              <a
                href="https://mymetal.vercel.app/"
                target="_blank"
                className="bg-white text-black py-[3px] px-2 text-xs rounded-md border-transparent hover:opacity-80 inline-flex items-center"
              >
                <TbWorld color="black" /> Website
              </a>
            </div>
          </div>
        </div>

        {/* CARD4 */}
        <div className="bg-black border border-gray-800 rounded-lg shadow overflow-hidden">
          <a
            href="https://1123-bleu-3.wns.wilders.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <video
              className="w-full aspect-video object-cover border-b border-gray-900"
              poster=""
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/greenfoot.mp4" type="video/mp4" />
            </video>
          </a>
          <div className="p-4">
            <h5 className="text-lg font-semibold text-white truncate">
              Carbon Footprint Tracker
            </h5>
            <p className="text-gray-400 text-xs mb-2">
              February 2024 - Present
            </p>
            <p className="text-xs text-gray-700 mb-3 line-clamp-4">
              Full-stack carbon emissions calculator developed in an agile team
              environment, where I was responsible for the development of the
              backoffice platform and other features.
            </p>
            <div className="flex flex-wrap gap-1">
              {stack3.map((skill, index) => (
                <span
                  key={index}
                  className="bg-neutral-900 px-2 py-0.5 rounded-sm text-[10px] font-semibold hover:bg-black"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-2 flex gap-1">
              <a
                href="https://1123-bleu-3.wns.wilders.dev/"
                target="_blank"
                className="bg-white text-black py-[3px] px-2 text-xs rounded-md border-transparent hover:opacity-80 inline-flex items-center"
              >
                <TbWorld color="black" /> Website
              </a>
              <a
                href="https://github.com/WildCodeSchool/2023-11-wns-bleu-g3"
                target="_blank"
                className="bg-white text-black py-[3px] px-2 text-xs rounded-md border-transparent hover:opacity-80 inline-flex items-center"
              >
                <FaGithub color="black" /> Source
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
