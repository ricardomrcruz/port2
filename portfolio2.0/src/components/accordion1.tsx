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
    <div id="accordion-open" data-accordion="open">
      <h2 className="mb-3 text-xl font-bold ">Work Experience</h2>
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
                className="h-10 w-10 sm:h-[3.5rem] sm:w-[3.5rem] rounded-full object-cover "
              />
            </span>
            <div className="text-left px-4">
              <p className="text-base sm:text-lg">CBD'eau SAS</p>
              <p className="text-[11px] sm:text-xs text-gray-200">
                Fullstack Software Developer
              </p>
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
            <span className="text-[11px] sm:text-sm text-gray-500 ">
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
          <ul className="space-y-4">
            <li>
              Led the development of an ERP/BI solution (25,000+ lines of code)
              managing a network of 140+ franchised stores across France and
              overseas territories: management, accounting, order flows (€4+
              Million annual revenue) and Europe's largest hemp-based product
              catalog (1500+ references). Project management in a team of 3
              developers.
            </li>

            <li>
              Designed and deployed a secure RESTful middleware API ensuring
              interconnection between the PrestaShop MySQL database (150+
              tables, queries processing over 1 Million rows) and external
              microservices, optimizing data exchanges via PHP/PDO and XML/JSON
              flows.
            </li>

            <li>
              Integration of Google APIs (Search Console, Maps) and Artificial
              Intelligence (OpenAI, Anthropic) in product performance
              optimization and predictive analysis (revenue, margin, costs, CTR)
              and AI-automated geographic report generation to target high
              commercial potential areas.
            </li>

            <li>
              Constant communication with management and IT teams, marketing,
              design, and SEO departments for traffic optimization and
              development of new brands and e-commerce stores, contributing to
              commercial network expansion.
            </li>
          </ul>
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
                className="h-10 w-10 sm:h-[3.5rem] sm:w-[3.5rem] rounded-full object-cover "
              />
            </span>
            <div className="text-left px-4">
              <p className="text-base sm:text-lg">Strasbourg Web Solutions</p>
              <p className="text-[11px] sm:text-xs text-gray-200">
                Fullstack Web Developer Freelancer
              </p>
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
            <span className="text-[11px] sm:text-sm text-gray-500 justify-end">
              June 2021 - Today
            </span>
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
          <ul className="space-y-4">
            <li>
              Self-employed: IT services and consulting - freelance status.
            </li>

            <li>
              Delivered custom e-commerce solutions and showcase websites
              (WordPress, PrestaShop, Custom Applications). Provided technical
              consulting and expertise to clients in their digital
              transformation.
            </li>

            <li>
              Co-founder of Mark3ts.io - e-commerce web-crawling SaaS service
              (Python, FastAPI) enabling large-scale automated product data
              extraction and monitoring for retailers (Amazon, eBay, NVIDIA,
              Apple) and real-time integration - in development.
            </li>
          </ul>
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
                className="h-10 w-10 sm:h-[3.5rem] sm:w-[3.5rem] rounded-full object-cover "
              />
            </span>
            <div className="text-left px-4">
              <p className="text-base sm:text-lg">MyMetal®</p>
              <p className="text-[11px] sm:text-xs text-gray-200">
                Intern Web Developer
              </p>
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
            <span className="text-[11px] sm:text-sm text-gray-500 justify-end">
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
        <p className=" text-gray-300">
          <ul className="space-y-4">
            <li>
              Design and deployment of a company showcase website, ranked Top 3
              on Google Search for targeted keywords.
            </li>

            <li>
              Full project ownership: UX/UI design, Figma wireframing,
              React/JavaScript frontend development, and Google Business
              optimization.
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
}
