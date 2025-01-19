import { RiExternalLinkFill } from "react-icons/ri";
import {
  FaGithub,
  FaBehanceSquare,
  FaMediumM,
  FaPhp,
  FaReact,
  FaYoutube,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { TbWorld } from "react-icons/tb";

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
          <span className="absolute flex items-center justify-center w-6 h-6 bg-gray-200 ring-gray-800 rounded-full -start-3 ring-8 ">
            <FaMediumM color="black" />
          </span>
          <a
            href="https://medium.com/@strasbourgwebsolutions/building-advanced-ai-speech-to-text-analysis-tools-with-assemblyai-4605ccabe018"
            target="_blank"
          >
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white hover:text-gray-400 hover:underline underline-offset-4">
              Building Advanced AI Speech-to-Text Analysis Tools w/ AssemblyAI
            </h3>
          </a>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Jan 19, 2025
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Wrote a Medium technical article demonstrating how to build an
            AI-powered Speech-to-Text analysis client using TypeScript,
            AssemblyAI API, and Angular. The tutorial guides readers through
            creating a full-featured interface for video analysis, covering
            implementation of speech recognition features including word
            detection, content safety analysis, IAB topic categorization,
            real-time caption synchronization, and sentiment analysis.
          </p>

          <div className="mt-2  relative w-[50%] aspect-video rounded-lg overflow-hidden">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/BCXRzmGFX8I"
              title="Project Demo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className=" mt-2 flex gap-2">
            <a
              href="https://medium.com/@strasbourgwebsolutions/building-advanced-ai-speech-to-text-analysis-tools-with-assemblyai-4605ccabe018"
              target="_blank"
            >
              <span className="bg-gray-800 border-gray-200 rounded-lg border text-gray-200  text-xs py-[3px] px-3 hover:opacity-80 inline-flex items-center">
                <RiExternalLinkFill color="white" />
                <span className="pl-1">Link to article</span>
              </span>
            </a>
            <a
              href="https://www.youtube.com/watch?v=BCXRzmGFX8I"
              target="_blank"
            >
              <span className="bg-gray-800 border-gray-200 rounded-lg border text-gray-200  text-xs py-[3px] px-3  hover:opacity-80 inline-flex items-center">
                <FaYoutube color="white" />
                <span className="pl-1">Video</span>
              </span>
            </a>
          </div>
        </li>
        <li className="mb-10 ms-8">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-gray-200 ring-gray-800 rounded-full -start-3 ring-8  ">
            <FaReact color="#149ECA" />
          </span>
          <a href="https://mars-france.vercel.app/" target="_blank">
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white hover:text-gray-400 hover:underline underline-offset-4">
              Mars Inc. France Official Website Frontend Redesign <br />
              Vite React Proof of Concept
              {/* <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
                Latest
              </span> */}
            </h3>
          </a>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Jan 03, 2025
          </time>
          <p className="pb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Leading a comprehensive UX/UI redesign initiative for Mars France's
            official website, focusing on modern aesthetics and improved user
            experience. Developing a proof of concept to evaluate the
            feasibility of migrating from a Drupal theme to a modern React-based
            architecture using Vite. Status: In Development.
          </p>
          <a href="https://mars-france.vercel.app/" target="_blank">
            <span className="bg-gray-800 border-gray-200 rounded-lg border text-gray-200  text-xs py-[3px] px-3 hover:opacity-80 inline-flex items-center">
              <TbWorld color="white" />
              <span className="pl-1">Website</span>
            </span>
          </a>
        </li>
        <li className="mb-10 ms-8">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-gray-200 ring-gray-800 rounded-full -start-3 ring-8  ">
            <FaBehanceSquare color="blue" />
          </span>
          <a
            href="https://www.behance.net/gallery/215079523/Dossier-Projet-GreenFoot-Application-Mark3tsio-VF"
            target="_blank"
          >
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white hover:text-gray-400 hover:underline underline-offset-4">
              VF Extensive Technical Documentation & Research <br />
              Nodejs CO₂ Tracker App & Python FastAPI Htmx SaaS
              {/* <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
                Latest
              </span> */}
            </h3>
          </a>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Dec 18, 2024
          </time>
          <p className="pb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Wrote technical documentation and research paper in French detailing
            the build process of two full-stack apps. GreenFoot, a CO₂ tracker
            using Node.js and Next.js, and Mark3ts.io, a retail data platform
            built with Python FastAPI and HTMX that serves businesses with
            real-time electronics market data. Documentation covers everything
            from conception to deployment across 75 pages.
          </p>
          <a
            href="https://www.behance.net/gallery/215079523/Dossier-Projet-GreenFoot-Application-Mark3tsio-VF"
            target="_blank"
          >
            <span className="bg-gray-800 border-gray-200 rounded-lg border text-gray-200  text-xs py-[3px] px-3 hover:opacity-80 inline-flex items-center">
              <RiExternalLinkFill color="white" />
              <span className="pl-1">Documentation</span>
            </span>
          </a>
        </li>
        <li className="mb-10 ms-8">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-gray-200 ring-gray-800 rounded-full -start-3 ring-8  ">
            <FaBehanceSquare color="blue" />
          </span>
          <a
            href="https://www.behance.net/gallery/207935375/Mark3ts-SAAS-UXUI"
            target="_blank"
          >
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white hover:text-gray-400 hover:underline underline-offset-4">
              Mark3ts UX/UI Behance Study Case
            </h3>
          </a>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Nov 19, 2024
          </time>
          <p className="pb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Developed a comprehensive SaaS platform using Python FastAPI and
            created a detailed Behance frontend case study showcasing the UX/UI
            design decisions and user workflow built in HTML, TailwindCSS and
            HTMX over Jinja2 templates.
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
          <span className="absolute flex items-center justify-center w-6 h-6 bg-gray-200 ring-gray-800 rounded-full -start-3 ring-8 ">
            <FaMediumM color="black" />
          </span>
          <a
            href="https://medium.com/@strasbourgwebsolutions/fastapi-as-a-hypermedia-driven-application-w-htmx-jinja2templates-644c3bfa51d1"
            target="_blank"
          >
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white hover:text-gray-400 hover:underline underline-offset-4">
              FastAPI as a Hypermedia Driven Application w/ HTMX &
              Jinja2Templates
            </h3>
          </a>
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

          <div className=" mt-4 flex gap-2">
            <a
              href="https://medium.com/@strasbourgwebsolutions/fastapi-as-a-hypermedia-driven-application-w-htmx-jinja2templates-644c3bfa51d1"
              target="_blank"
            >
              <span className="bg-gray-800 border-gray-200 rounded-lg border text-gray-200  text-xs py-[3px] px-3 hover:opacity-80 inline-flex items-center">
                <RiExternalLinkFill color="white" />
                <span className="pl-1">Link to article</span>
              </span>
            </a>
            <a
              href="https://github.com/ricardomrcruz/FastAPI_Jinja2_HTMX-Login_Form_Dashboard"
              target="_blank"
            >
              <span className="bg-gray-800 border-gray-200 rounded-lg border text-gray-200  text-xs py-[3px] px-3  hover:opacity-80 inline-flex items-center">
                <FaGithub color="white " />
                <span className="pl-1">Source</span>
              </span>
            </a>
          </div>
        </li>
        <li className="mb-10 ms-8">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-gray-200 ring-gray-800 rounded-full -start-3 ring-8 ">
            <FcGoogle />
          </span>
          <a
            href="https://github.com/ricardomrcruz/PHP_Google_Search_Console_API_Client"
            target="_blank"
          >
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white hover:text-gray-400 hover:underline underline-offset-4">
              PHP Google Search Console API Client & XML Parser
            </h3>
          </a>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            December 2023
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Developed a Google Search Console API client to address the lack of
            comprehensive documentation. Designed for seamless connectivity with
            Google APIs, it facilitates comprehensive data exchange, keyword
            analystics and features an XML data parser. Dedicated mainly to
            Laravel, Symfony, Wordpress and Prestashop developers.
          </p>
          <div className="pt-4  flex gap-2">
            <a
              href="https://github.com/ricardomrcruz/PHP_Google_Search_Console_API_Client"
              target="_blank"
            >
              <span className="bg-gray-800 border-gray-200 rounded-lg border text-gray-200  text-xs py-[3px] px-3  hover:opacity-80 inline-flex items-center">
                <FaGithub color="white " />
                <span className="pl-1">Source</span>
              </span>
            </a>
          </div>
        </li>
        <li className="mb-10 ms-8">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-gray-200 ring-gray-800 rounded-full -start-3 ring-8 ">
            <FaPhp color="black" />
          </span>
          <a
            href="https://github.com/ricardomrcruz/freshlabels"
            target="_blank"
          >
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white hover:text-gray-400 hover:underline underline-offset-4">
              Fresh Labels - PHP Automated Food Labeling Printing App
            </h3>
          </a>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            November 2022
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Developed an automated food safety labeling system for restaurants,
            featuring dual temperature tracking (freezer and ambient), custom
            label generation, and scheduled printing workflows. Built using PHP
            OOP APACHE with MVC architecture, MySQL, and DOMPDF for high-quality
            label production. The system streamlines food safety compliance by
            automating expiration dates and storage requirements.
          </p>
          <div className=" mt-4 flex gap-2">
            <a
              href="https://github.com/ricardomrcruz/freshlabels"
              target="_blank"
            >
              <span className="bg-gray-800 border-gray-200 rounded-lg border text-gray-200  text-xs py-[3px] px-3  hover:opacity-80 inline-flex items-center">
                <FaGithub color="white " />
                <span className="pl-1">Source</span>
              </span>
            </a>
            <a
              href="https://www.behance.net/gallery/176957559/Technical-Doc-VF-FreshLabels-App"
              target="_blank"
            >
              <span className="bg-gray-800 border-gray-200 rounded-lg border text-gray-200  text-xs py-[3px] px-3 hover:opacity-80 inline-flex items-center">
                <FaBehanceSquare color="white" />
                <span className="pl-1">Documentation VF</span>
              </span>
            </a>
          </div>
        </li>
      </ol>
    </section>
  );
}
