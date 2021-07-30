import React from "react";

function LandinPage() {
  return (
    <div className="grid grid-cols-12 lg:h-xxl xl:mx-32">
      <div className="col-span-12 md:col-span-6 h-96 lg:h-full">
        <div className="flex flex-col justify-center items-center lg:items-start h-full">
          <div className="flex">
            <h1 className="text-white text-6xl tracking-widest font-bold border-t-4 border-red-700 mr-4">
              I'm
            </h1>
            <h1 className="text-white text-6xl tracking-widest font-bold">
              Kevin
            </h1>
          </div>
          <span className="text-red-600 tracking-widest text-lg block font-bold">
            Full Stack Web Developer
          </span>
          <span className="text-white tracking-widest text-base font-bold uppercase my-10 block">
            contact me
          </span>

          <div className="flex">
            <a
              href="https://twitter.com/Tdejesus19"
              target="_blanck"
              className="mr-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                width="28"
                height="28"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a
              href="https://github.com/kevinGarcia15"
              target="_blanck"
              className="mr-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                width="28"
                height="28"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/kevin--tomas-garcia"
              target="_blanck"
              className="mr-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                fill="white"
                height="28"
                viewBox="0 5 1036 990"
              >
                <path d="M0 120c0-33.334 11.667-60.834 35-82.5C58.333 15.833 88.667 5 126 5c36.667 0 66.333 10.666 89 32 23.333 22 35 50.666 35 86 0 32-11.333 58.666-34 80-23.333 22-54 33-92 33h-1c-36.667 0-66.333-11-89-33S0 153.333 0 120zm13 875V327h222v668H13zm345 0h222V622c0-23.334 2.667-41.334 8-54 9.333-22.667 23.5-41.834 42.5-57.5 19-15.667 42.833-23.5 71.5-23.5 74.667 0 112 50.333 112 151v357h222V612c0-98.667-23.333-173.5-70-224.5S857.667 311 781 311c-86 0-153 37-201 111v2h-1l1-2v-95H358c1.333 21.333 2 87.666 2 199 0 111.333-.667 267.666-2 469z" />
              </svg>
            </a>
            <a href="mailto:developer.kevin.95@gmail.com" className="mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                width="28px"
                height="28px"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="col-span-12 md:col-span-6 h-96 lg:h-full md:mt-8 lg:mt-0">
        <div className="flex flex-col justify-center items-center h-full">
          <div className="hover:shadow-lg absolute z-10">
            <img
              className="w-full h-auto lg:w-96 lg:h-96 md:w-64 object-cover rounded"
              src="../img/profile-2.png"
              alt="Porfile"
            />
          </div>
          <div className="ml-12 mt-12 w-96 h-96 border-4 rounded-lg border-red-700 relative hidden  z-0 lg:block"></div>
        </div>
      </div>
    </div>
  );
}

export default LandinPage;
