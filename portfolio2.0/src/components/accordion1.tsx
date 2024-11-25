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
      <h2 id="accordion-open-heading-1">
        <button
          type="button"
          className="group flex items-center justify-between w-full  font-medium rtl:text-right   gap-3"
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
            <span className="text-gray-400 text-sm">
              October 2023 - November 2024
            </span>
            <p aria-hidden="true" className="h-7" />
          </div>
        </button>
      </h2>
      <div
        id="accordion-open-body-1"
        aria-labelledby="accordion-open-heading-1"
        className={` transition-all ease-out overflow-hidden   ${
          openAccordion["accordion-open-body-1"]
            ? "max-h-96 opacity-100 "
            : "max-h-0 opacity-0 "
        }`}
      >
        <div className="p-5 ">
          <p className="mb-2 ">
            Led the development of enterprise ERP/CRM systems from scratch while
            building robust API integrations and XML raw data treatment in OOP
            PHP & SQL frameworks. I engineered data analysis solutions
            incorporating Google Maps and AI technologies for franchise
            performance metrics, and collaborated with designers and marketeers
            on the launch of digital brands while also optimizing UX/UI and
            features associated with the company's official e-commerce platform.
          </p>
        </div>
      </div>

      <h2 id="accordion-open-heading-2">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 gap-3"
          data-accordion-target="#accordion-open-body-2"
          aria-expanded="false"
          aria-controls="accordion-open-body-2"
        >
          <span className="flex items-center">
            <svg
              className="w-5 h-5 me-2 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              ></path>
            </svg>
            Is there a Figma file available?
          </span>
          <svg
            data-accordion-icon
            className="w-3 h-3 rotate-180 shrink-0"
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
        </button>
      </h2>
      <div
        id="accordion-open-body-2"
        className="hidden"
        aria-labelledby="accordion-open-heading-2"
      >
        <div className="p-5 ">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma
            software so everything you see in the library has a design
            equivalent in our Figma file.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out the{" "}
            <a
              href="https://flowbite.com/figma/"
              className="text-blue-600 dark:text-blue-500 hover:underline"
            >
              Figma design system
            </a>{" "}
            based on the utility classes from Tailwind CSS and components from
            Flowbite.
          </p>
        </div>
      </div>
      <h2 id="accordion-open-heading-3">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500  gap-3"
          data-accordion-target="#accordion-open-body-3"
          aria-expanded="false"
          aria-controls="accordion-open-body-3"
        >
          <span className="flex items-center">
            <svg
              className="w-5 h-5 me-2 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              ></path>
            </svg>{" "}
            What are the differences between Flowbite and Tailwind UI?
          </span>
          <svg
            data-accordion-icon
            className="w-3 h-3 rotate-180 shrink-0"
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
        </button>
      </h2>
      <div
        id="accordion-open-body-3"
        className="hidden"
        aria-labelledby="accordion-open-heading-3"
      >
        <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            The main difference is that the core components from Flowbite are
            open source under the MIT license, whereas Tailwind UI is a paid
            product. Another difference is that Flowbite relies on smaller and
            standalone components, whereas Tailwind UI offers sections of pages.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            However, we actually recommend using both Flowbite, Flowbite Pro,
            and even Tailwind UI as there is no technical reason stopping you
            from using the best of two worlds.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Learn more about these technologies:
          </p>
          <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
            <li>
              <a
                href="https://flowbite.com/pro/"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                Flowbite Pro
              </a>
            </li>
            <li>
              <a
                href="https://tailwindui.com/"
                rel="nofollow"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                Tailwind UI
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
