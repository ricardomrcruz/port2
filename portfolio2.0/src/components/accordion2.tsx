export default function Accordion2() {
  return (
    <div id="accordion-open" data-accordion="open" className=" mt-4">
      <h2 className="text-2xl mb-3">Education</h2>
      {/* WORK NUMBER 1 */}
      <div className="group mb-3">
        <div className=" flex items-center justify-between w-full  font-medium rtl:text-right   gap-3">
          <span className="flex items-center">
            <span className=" flex justify-center items-center overflow-hidden ">
              <img
                src="/logo4.png"
                alt="cbdeau"
                className="h-[3.5rem] w-[3.5rem] rounded-full object-cover "
              />
            </span>
            <div className="text-left px-4">
              <div className="flex">
                <p className="">CNAM Strasbourg</p>
                <svg
                  data-accordion-icon
                  className="w-2 h-2 m-2 rotate-90 shrink-0 transition-all duration-300 ease-out  opacity-5 group-hover:opacity-80 "
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
              </div>
              <p className="text-xs">
                Software Systems Architecture and Engineering ( Bac +5 )
              </p>
            </div>
          </span>
          <div>
            <span className="text-gray-500 text-sm">
              November 2024 - Today (2026)
            </span>
            <p aria-hidden="true" className="h-7" />
          </div>
        </div>
      </div>
      {/* WORK NUMBER 2 */}
      <div className="mb-3">
        <div className="group flex items-center justify-between w-full  font-medium rtl:text-right gap-3">
          <span className="flex items-center">
            <span className=" flex justify-center items-center overflow-hidden ">
              <img
                src="/logo5.jpg"
                alt="cbdeau"
                className="h-[3.5rem] w-[3.5rem] rounded-full object-cover "
              />
            </span>
            <div className="text-left px-4">
              <div className="flex">
                <p className="">Wild Code School Paris</p>
                <svg
                  data-accordion-icon
                  className="w-2 h-2 m-2 rotate-90 shrink-0 transition-all duration-300 ease-out opacity-5 group-hover:opacity-80 "
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
              </div>

              <p className="text-xs">
                Bachelor's Degree Software Web Development ( Bac+4 )
              </p>
            </div>
          </span>
          <div>
            <span className="text-gray-500 text-sm">
              October 2023 - November 2024
            </span>
            <p aria-hidden="true" className="h-7" />
          </div>
        </div>
      </div>
      {/* WORK NUMBER 3 */}
      <div className="mb-3">
        <div className="group flex items-center justify-between w-full  font-medium rtl:text-right gap-3">
          <span className="flex items-center">
            <span className=" flex justify-center items-center overflow-hidden ">
              <img
                src="/logo6.png"
                alt="cbdeau"
                className="h-[3.5rem] w-[3.5rem] rounded-full object-cover "
              />
            </span>
            <div className="text-left px-4">
              <div className="flex">
                <p className="">WebForce3 Paris</p>
                <svg
                  data-accordion-icon
                  className="w-2 h-2 m-2 rotate-90 shrink-0 transition-all duration-300 ease-out  opacity-5 group-hover:opacity-80 "
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
              </div>

              <p className="text-xs">
                Associate's Degree Software Developement ( Bac+2 )
              </p>
            </div>
          </span>
          <div>
            <span className="text-gray-500 text-sm">
              January 2023 - Mars 2023
            </span>
            <p aria-hidden="true" className="h-7" />
          </div>
        </div>
      </div>
    </div>
  );
}
