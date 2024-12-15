import { Suspense } from "react";
import FadeInSection from "./components/fadein";
import ModelViewer from "./components/modelViewer";
import Accordion from "./components/accordion1";
import Accordion2 from "./components/accordion2";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Timeline from "./components/timeline";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function App() {
  // Correct path - just the filename with forward slash
  const MODEL_PATH = "/relativity_by_mc_escher.glb";

  return (
    <div className="w-full flex flex-col text-white">
      <header className="h-auto pt-8 pb-4 px-4 w-[95%] sm:w-[90%] md:w-[75%] lg:w-[35%] mx-auto ">
        <FadeInSection delay={1.5}>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-2">
            <div>
              <h1 className="text-2xl font-bold">Ricardo Martinho</h1>
              <h2 className="">Strasbourg, France</h2>
            </div>
            <div className="text-left sm:text-end">
              <div>
                <a
                  href="mailto:strasbourgwebsolutions@gmail.com"
                  className="text-sm hover:text-gray-300 transition-colors "
                >
                  strasbourgwebsolutions@gmail.com
                </a>
              </div>

              <div>
                <a
                  href="tel:0785492177"
                  className="text-sm hover:text-gray-300 transition-colors"
                >
                  (+33) 07 85 49 21 77
                </a>
              </div>
              <div className="flex gap-3 justify-start sm:justify-end mt-2 text-gray-200">
                <a href="https://www.linkedin.com/in/ricardomartinhocruz/">
                  <span className="text-2xl">
                    <FaLinkedin />
                  </span>
                </a>
                <a href="https://github.com/ricardomrcruz" target="_blank">
                  <span className="text-2xl">
                    <FaGithub />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </FadeInSection>
        <FadeInSection delay={1.6}>
          <div className="mt-7 text-md">
            <p className="mb-1">
              Looking for a developer for your website, application, or
              freelance project? Contact me by email or linkedin.
            </p>
            <p className="text-gray-400 mt-5 italic">
              Vous recherchez un développeur pour la création d'un site, d'une
              application ou une mission freelance? Contactez-moi par mail ou
              linkedin.
            </p>
          </div>
        </FadeInSection>
      </header>
      <FadeInSection delay={1.8}>
        <section className=" bg-black mt-[4vh]">
          <div className="container mx-auto  ">
            <Suspense
              fallback={
                <div className="h-[50vh] w-full flex items-center justify-center">
                  <div className=" text-md text-mono">Loading model...</div>
                </div>
              }
            >
              <ModelViewer
                modelPath={MODEL_PATH}
                scale={1} // Adjust this value if needed
                autoRotate={true}
              />
            </Suspense>
          </div>
        </section>
      </FadeInSection>
      <section className="w-[95%] sm:w-[90%] md:w-[75%] lg:w-[35%] mx-auto">
        <FadeInSection delay={2}>
          <div className="flex flex-col sm:flex-row w-full sm:justify-between mt-6 gap-4 sm:gap-0">
            <div className="w-full sm:w-[68%] order-2 sm:order-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl pt-3 pb-2 font-bold tracking-tighter">
                Hi, I'm Ricardo 👋
              </h1>
              <p className="text-base leading-snug">
                Software Web Developer & Freelancer based in Strasbourg, France.
                I build and deploy beautiful business websites and applications.
                Engineering student and passionate for open source. Have a
                project in mind? Let's connect.
              </p>
            </div>
            <div className="w-full sm:w-[26%] flex justify-center items-center overflow-hidden order-1 sm:order-2">
              <img
                src="/avatar.jpg"
                alt="Avatar"
                className="h-32 w-32 sm:h-[8.5rem] sm:w-[8.5rem] rounded-full object-cover"
              />
            </div>
          </div>
        </FadeInSection>
        <FadeInSection delay={2}>
          <div className="my-10">
            <h2 className="text-xl font-bold mb-2">About</h2>
            <p className="text-gray-400  text-justify leading-tight prose max-w-full text-pretty font-sans text-sm ">
              Ricardo Martinho is a full-stack web developer who has been
              involved in enterprise projects and{" "}
              <a className="underline text-gray-100">freelancing</a> ventures
              for the last couple of years. Currently pursuing a{" "}
              <a className="underline text-gray-100">
                software engineering degree
              </a>
              , he has built custom ERP/BI solutions in-company, deployed SAAS
              apps and solutions, and contributed actively to the{" "}
              <a className="underline text-gray-100">open-source community</a>.
              He specializes in full-stack development with TypeScript
              (Javascript), Node.js, React, Python FastAPI, and PHP Symfony.
              Ricardo is passionate about programming both complex and efficient
              backend systems, while also crafting artsy and creative UX/UI
              design-driven websites.
            </p>
          </div>
        </FadeInSection>
        <FadeInSection delay={2}>
          <Accordion />
        </FadeInSection>
        <FadeInSection delay={2}>
          <Accordion2 />
        </FadeInSection>
        <FadeInSection delay={2.2}>
          <Skills />
        </FadeInSection>
        <FadeInSection delay={2.4}>
          <Projects />
        </FadeInSection>
        <FadeInSection delay={2.6}>
          <Timeline />
        </FadeInSection>
        <FadeInSection delay={2.8}>
          <section className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
              <span className="bg-white text-black px-3 py-1 rounded-md text-sm inline-block hover:opacity-80">
                Contact
              </span>
              <h2 className="mt-4 mb-2 text-3xl font-bold tracking-tighter sm:text-5xl text-gray-100">
                Get in Touch
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Looking for a developer or envisioning a project? Let's work
                together! <br />
                <a
                  href="https://www.linkedin.com/in/ricardomartinhocruz/"
                  target="_blank"
                  className="text-blue-600 "
                >
                  Send me a direct message on LinkedIn
                </a>{" "}
                outlining your project, and I'll get back to you within 24 hours
                to discuss how we can collaborate.
              </p>
            </div>
          </section>
        </FadeInSection>
      </section>
    </div>
  );
}

export default App;
