import { useState } from "react";

export default function Accordion() {
  const [openAccordion, setOpenAccordion]: any = useState({
    "accordion-open-body-1": false,
    "accordion-open-body-2": false,
    "accordion-open-body-3": false,
  });

  const toggleAccordion = (sectionId: any) => {
    setOpenAccordion((prev: any) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  return (
    <div id="accordion-open" data-accordion="open" className=" ">
      <h2 className="text-2xl mb-3">Work Experience</h2>
      {/* WORK NUMBER 1 */}
      <div id="accordion-open-heading-1 ">
        <button
          type="button"
          className="group flex items-center justify-between w-full  font-medium rtl:text-right  gap-3"
          aria-expanded={openAccordion["accordion-open-body-1"]}
          aria-controls="accordion-open-body-1"
          onClick={() => toggleAccordion("accordion-open-body-1")}
        >
          <span className="flex items-center">
            <span className=" flex justify-center items-center overflow-hidden ">
              <img
                src="/logo1.jpg"
                alt="cbdeau"
                className="h-[3.5rem] w-[3.5rem] rounded-full object-cover "
              />
            </span>
            <div className="text-left px-4">
              <p>CBD'eau SAS</p>
              <p className="">Software developer</p>
            </div>
            <div className="text-left ">
              <p>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3  shrink-0 transition-all duration-300 ease-out opacity-0 group-hover:opacity-100 
                ${
                  openAccordion["accordion-open-body-1"]
                    ? "rotate-180 "
                    : "rotate-90 "
                }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </p>
              <p aria-hidden="true" className="h-6" />
            </div>
          </span>
          <div>
            <span className="text-gray-300 text-sm">
              October 2023 - November 2024
            </span>
            <p aria-hidden="true" className="h-7" />
          </div>
        </button>
      </div>

      <div
        id="accordion-open-body-1 "
        aria-labelledby="accordion-open-heading-1"
        className={` transition-all ease-out overflow-hidden py-3 px-2 text-sm ${
          openAccordion["accordion-open-body-1"]
            ? "max-h-96 opacity-100 "
            : "max-h-0 opacity-0 "
        }`}
      >
        <p className=" text-gray-300 ">
          Led the development of enterprise ERP/CRM systems from scratch while
          building robust API integrations and XML raw data treatment in OOP PHP
          & SQL frameworks. I engineered data analysis solutions incorporating
          Google Maps and AI technologies for franchise performance metrics, and
          collaborated with designers and marketeers on the launch of digital
          brands while also optimizing UX/UI and features associated with the
          company's official e-commerce platform.
        </p>
      </div>
      {/* WORK NUMBER 2 */}
      <div id="accordion-open-heading-2">
        <button
          type="button"
          className="group flex items-center justify-between w-full  font-medium rtl:text-right gap-3"
          aria-expanded={openAccordion["accordion-open-body-2"]}
          aria-controls="accordion-open-body-2"
          onClick={() => toggleAccordion("accordion-open-body-2")}
        >
          <span className="flex items-center">
            <span className=" flex justify-center items-center overflow-hidden ">
              <img
                src="/logo3.jpg"
                alt="cbdeau"
                className="h-[3.5rem] w-[3.5rem] rounded-full object-cover "
              />
            </span>
            <div className="text-left px-4">
              <p>Strasbourg Web Solutions</p>
              <p className="">Fullstack Web Developer Freelancer</p>
            </div>
            <div className="text-left ">
              <p>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3  shrink-0 transition-all duration-300 ease-out opacity-0 group-hover:opacity-100 
                ${
                  openAccordion["accordion-open-body-2"]
                    ? "rotate-180 "
                    : "rotate-90 "
                }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </p>
              <p aria-hidden="true" className="h-6" />
            </div>
          </span>
          <div>
            <span className="text-gray-300 text-sm">June 2021 - Today</span>
            <p aria-hidden="true" className="h-7" />
          </div>
        </button>
      </div>
      <div
        id="accordion-open-body-2 "
        aria-labelledby="accordion-open-heading-2"
        className={` transition-all ease-out overflow-hidden py-3 px-2 text-sm  ${
          openAccordion["accordion-open-body-2"]
            ? "max-h-96 opacity-100 "
            : "max-h-0 opacity-0 "
        }`}
      >
        <p className=" text-gray-300">
          Founder of Strasbourg Web Solutions (POPCVLTVRA) - A freelance IT
          services business operating as a sole proprietorship under SIREN
          number 902 473 867, specializing in e-commerce buying and selling of
          non-food and non-regulated products. The company offers IT development
          services using WordPress, PrestaShop, React, Nodejs, and FastAPI,
          creating showcase websites, e-commerce platforms, and applications. We
          provide customized solutions tailored to clients needs and budgets.
        </p>
      </div>
      {/* WORK NUMBER 3 */}
      <div id="accordion-open-heading-3">
        <button
          type="button"
          className="group flex items-center justify-between w-full  font-medium rtl:text-right gap-3"
          aria-expanded={openAccordion["accordion-open-body-3"]}
          aria-controls="accordion-open-body-3"
          onClick={() => toggleAccordion("accordion-open-body-3")}
        >
          <span className="flex items-center">
            <span className=" flex justify-center items-center overflow-hidden ">
              <img
                src="/logo2.jpg"
                alt="cbdeau"
                className="h-[3.5rem] w-[3.5rem] rounded-full object-cover "
              />
            </span>
            <div className="text-left px-4">
              <p>MyMetal®</p>
              <p className="">Intern Web Developer</p>
            </div>
            <div className="text-left ">
              <p>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3  shrink-0 transition-all duration-300 ease-out opacity-0 group-hover:opacity-100 
                ${
                  openAccordion["accordion-open-body-3"]
                    ? "rotate-180 "
                    : "rotate-90 "
                }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </p>
              <p aria-hidden="true" className="h-6" />
            </div>
          </span>
          <div>
            <span className="text-gray-300 text-sm">
              January 2023 - Mars 2023
            </span>
            <p aria-hidden="true" className="h-7" />
          </div>
        </button>
      </div>
      <div
        id="accordion-open-body-3"
        aria-labelledby="accordion-open-heading-3"
        className={` transition-all ease-out overflow-hidden  py-3 px-2 text-sm ${
          openAccordion["accordion-open-body-3"]
            ? "max-h-96 opacity-100 "
            : "max-h-0 opacity-0 "
        }`}
      >
        <div className="p-2 ">
          <p className=" text-gray-300">
            Created and launched a business showcase website with Google
            Business optimization, including UX/UI design and interface mockups.
            The project utilized HTML, CSS, JavaScript, and Google Maps API,
            with deployment on the Vercel platform.
          </p>
        </div>
      </div>
    </div>
  );
}
