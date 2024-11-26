import { RiExternalLinkFill } from "react-icons/ri";
import { FaGithub, FaBehanceSquare } from "react-icons/fa";

export default function timeline() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <span className="bg-white text-black px-3 py-1 rounded-md text-sm inline-block hover:opacity-80">
          Open Source
        </span>
        <h2 className="mt-4 mb-2 text-3xl font-bold tracking-tighter sm:text-5xl text-gray-100">
          I like building things
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Over time, I've developed various notable projects, written articles,
          and documented use cases—both open source and private—that I'm always
          excited to share with the community.
        </p>
      </div>
      {/* TIMELINE STARTS HERE */}
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        <li className="mb-10 ms-8">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <FaBehanceSquare color="white" />
          </span>
          <a href="https://www.behance.net/gallery/207935375/Mark3ts-SAAS-UXUI">
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Mark3ts UX/UI Behance Study Case
              <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
                Latest
              </span>
            </h3>
          </a>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Nov 19, 2024
          </time>
          <p className="pb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Developed a comprehensive SaaS platform using Python FastAPI and
            created a detailed Behance frontend case study showcasing the UX/UI
            design decisions and user workflow usign Html, Css and Htmx.
          </p>
          <a
            href="https://www.behance.net/gallery/207935375/Mark3ts-SAAS-UXUI"
            target="_blank"
          >
            <span className="bg-gray-800 border-gray-200 rounded-lg border text-gray-200  text-xs py-[3px] px-3 hover:opacity-80 inline-flex items-center">
              <RiExternalLinkFill color="white" />
              <span className="pl-1">External Link</span>
            </span>
          </a>
        </li>
        <li className="mb-10 ms-8">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            FastAPI as a Hypermedia Driven Application w/ HTMX & Jinja2Templates
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Aug 16, 2024
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Wrote a Medium article on how to set up FastAPI as a HATEOAS with
            Jinja2 templates and HTMX. In this article, I explore using HTMX to
            create a modern UI application with login and registration forms, as
            well as a dynamic SaaS dashboard and all the server side logic
            behind it.
          </p>

          <a
            href="https://medium.com/@strasbourgwebsolutions/fastapi-as-a-hypermedia-driven-application-w-htmx-jinja2templates-644c3bfa51d1"
            target="_blank"
          >
            <div className=" mt-4 flex gap-2">
              <span className="bg-gray-800 border-gray-200 rounded-lg border text-gray-200  text-xs py-[3px] px-3 hover:opacity-80 inline-flex items-center">
                <RiExternalLinkFill color="white" />
                <span className="pl-1">External Link</span>
              </span>
              <span className="bg-gray-800 border-gray-200 rounded-lg border text-gray-200  text-xs py-[3px] px-3  hover:opacity-80 inline-flex items-center">
                <FaGithub color="white " />
                <span className="pl-1">Source</span>
              </span>
            </div>
          </a>
        </li>
        <li className="ms-8">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            PHP Google Search Console API Client & XML Data Parser
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            April 2024
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Developed a Google Search Console API client to address the lack of
            comprehensive documentation. Designed for seamless connectivity with
            Google APIs, it facilitates comprehensive data exchange and features
            an XML data parser. Dedicated mainly to Laravel, Symfony, Wordpress
            and Prestashop developers.
          </p>
        </li>
      </ol>
    </section>
  );
}
