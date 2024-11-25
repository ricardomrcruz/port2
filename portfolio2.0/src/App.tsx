import { Suspense } from "react";
import ModelViewer from "./components/modelViewer";
import Accordion from "./components/accordion1";

function App() {
  // Correct path - just the filename with forward slash
  const MODEL_PATH = "/8_bit_pc.glb";

  return (
    <div className="w-full flex flex-col text-white">
      <header className="h-[10vh]">
        <nav className="flex">
          <a href="">Home</a>
          <a href="">Work</a>
          <a href="">Blog</a>
        </nav>
      </header>
      <section className=" bg-black mt-[2vh]">
        <div className="container mx-auto ">
          <Suspense
            fallback={
              <div className="h-[50vh] w-full flex items-center justify-center">
                <div className=" text-2xl">This is not a simulation.</div>
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
          <div className="w-[70%] ">
            <h1 className="text-[3.5rem] py-3">Hi, I'm Ricardo ✌️</h1>
            <p className="text-lg leading-tight ">
              Software Web Developer & Freelancer based in Strasbourg, France. I
              build and deploy beautiful business websites and applications.
              Engineering student and passionate for open-source. Have a project
              in mind? Let's connect.
            </p>
          </div>
          <div className="w-[26%] flex justify-center items-center overflow-hidden mt-4">
            <img
              src="/avatar.jpg"
              alt="Avatar"
              className="h-[8rem] w-[8rem] rounded-full object-cover "
            />
          </div>
        </div>
        <div className="my-10">
          <h2 className="text-2xl">About</h2>
          <p className="text-gray-400 text-base text-justify">
            Ricardo Martinho is a full-stack web developer who has been involved
            in enterprise projects and{" "}
            <a href="" className="underline text-purple-900">
              freelancing
            </a>{" "}
            ventures for the last couple of years. Currently pursuing a{" "}
            <a href="" className="underline text-purple-900">
              software engineering degree
            </a>
            , he has built custom ERP/BI solutions in-company, deployed SAAS
            apps and solutions, and contributed actively to the{" "}
            <a href="" className="underline text-purple-900">
              open-source community
            </a>
            . He specializes in full-stack development with TypeScript, Node.js,
            React, Python FastAPI, and PHP Symfony. Ricardo is passionate about
            programming both complex and efficient backend systems, while also
            crafting artsy and creative UX/UI design-driven websites.
          </p>
        </div>
        <Accordion />
      </section>
    </div>
  );
}

export default App;
