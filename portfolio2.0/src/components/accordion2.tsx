export default function Accordion2() {
  return (
    <div id="accordion-open" data-accordion="open" className=" mt-6">
      <h2 className="text-2xl mb-3">Education</h2>
      {/* WORK NUMBER 1 */}
      <div>
        <button
          type="button"
          className=" flex items-center justify-between w-full  font-medium rtl:text-right   gap-3"
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
                  className="w-2 h-2 rotate-90 shrink-0 transition-all duration-300 ease-out  "
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
      {/* WORK NUMBER 2 */}
      <div>
        <button
          type="button"
          className="group flex items-center justify-between w-full  font-medium rtl:text-right gap-3"
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
                  className="w-2 h-2 rotate-90 shrink-0 transition-all duration-300 ease-out 
                "
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
      {/* WORK NUMBER 3 */}
      <div id="accordion-open-heading-3">
        <button
          type="button"
          className="group flex items-center justify-between w-full  font-medium rtl:text-right gap-3"
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
                  className="w-2 h-2 rotate-90 shrink-0 transition-all duration-300 ease-out   "
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
    </div>
  );
}
