import { Suspense } from "react";
import ModelViewer from "./components/modelViewer";
import Accordion from "./components/accordion1";
import Accordion2 from "./components/accordion2";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Timeline from "./components/timeline";

function App() {
  // Correct path - just the filename with forward slash
  const MODEL_PATH = "/8_bit_pc.glb";

  return (
    <div className="w-full flex flex-col text-white">
      {/* <header className="h-[10vh]">
        <nav className="flex">
          <a href="">Home</a>
          <a href="">Work</a>
          <a href="">Blog</a>
        </nav>
      </header> */}
      <section className=" bg-black mt-[20vh]">
        <div className="container mx-auto  ">
          <Suspense
            fallback={
              <div className="h-[50vh] w-full flex items-center justify-center">
                <div className=" text-md text-mono">
                  This is not a simulation.
                </div>
              </div>
            }
          >
            <ModelViewer
              modelPath={MODEL_PATH}
              scale={8.2} // Adjust this value if needed
              autoRotate={true}
            />
          </Suspense>
        </div>
      </section>
      <section className="w-[35%] m-auto ">
        <div className="flex w-full justify-between mt-6">
          <div className="w-[68%] ">
            <h1 className="text-6xl pt-3 pb-2 font-bold tracking-tighter">
              Hi, I'm Ricardo ✌️
            </h1>
            <p className="text-base leading-snug ">
              Software Web Developer & Freelancer based in Strasbourg, France. I
              build and deploy beautiful business websites and applications.
              Engineering student and passionate for open source. Have a project
              in mind? Let's connect.
            </p>
          </div>
          <div className="w-[26%] flex justify-center items-center overflow-hidden mt-3 ">
            <img
              src="/avatar.jpg"
              alt="Avatar"
              className="h-[8.5rem] w-[8.5rem] rounded-full object-cover "
            />
          </div>
        </div>
        <div className="my-10">
          <h2 className="text-xl font-bold mb-2">About</h2>
          <p className="text-gray-400  text-justify leading-tight prose max-w-full text-pretty font-sans text-sm ">
            Ricardo Martinho is a full-stack web developer who has been involved
            in enterprise projects and{" "}
            <a href="" className="underline text-gray-100">
              freelancing
            </a>{" "}
            ventures for the last couple of years. Currently pursuing a{" "}
            <a href="" className="underline text-gray-100">
              software engineering degree
            </a>
            , he has built custom ERP/BI solutions in-company, deployed SAAS
            apps and solutions, and contributed actively to the{" "}
            <a href="" className="underline text-gray-100">
              open-source community
            </a>
            . He specializes in full-stack development with TypeScript
            (Javascript), Node.js, React, Python FastAPI, and PHP Symfony.
            Ricardo is passionate about programming both complex and efficient
            backend systems, while also crafting artsy and creative UX/UI
            design-driven websites.
          </p>
        </div>
        <Accordion />
        <Accordion2 />
        <Skills />
        <Projects />
        <Timeline />
      </section>
    </div>
  );
}

export default App;
