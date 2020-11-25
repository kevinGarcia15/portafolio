import React from "react";

function Projects() {
  return (
    <div id="projects">
      <h1 className="text-white text-4xl lg:text-6xl place-content-center font-bold tracking-widest border-b-4 border-red-700 w-20">
        Projects
      </h1>

      <div className="mt-8 grid lg:grid-cols-12 md:grid-cols-12 gap-16 justify-center">
        <div className="card lg:col-span-4 hover:shadow-lg" data-aos="fade-up">
          <div>
            <img
              src="img/FoodNinja.png"
              className="w-full h-48 object-cover"
              alt="almond"
            />
            <div className="m-4">
              <span className="font-bold">Recipies Food Ninja</span>
              <span className="block text-gray-500 text-sm">
                A site for learn Tailwind css
              </span>
            </div>
          </div>

          <div className="flex justify-between rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wider">
            <a href="https://learntailwindcss.web.app/" target="_blanck">
              <svg
                className="w-6 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              <span className="pl-2">live site</span>
            </a>
            <a
              href="https://github.com/kevinGarcia15/LearnTailwindCSS"
              target="_blanck"
            >
              <svg
                className="w-6 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                fill="black"
                width="28"
                height="28"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span className="pl-2">Repo link</span>
            </a>
          </div>
        </div>

        <div className="card lg:col-span-4 hover:shadow-lg" data-aos="fade-up">
          <div>
            <img
              src="img/PlatziBadges.png"
              className="w-full h-48 object-cover"
              alt="almond"
            />
            <div className="m-4">
              <span className="font-bold">Platzi Badges</span>
              <span className="block text-gray-500 text-sm">
                A site using React
              </span>
            </div>
          </div>
          <div className="flex justify-between rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wider">
            <a href="https://platzibadges2020.web.app/" target="_blanck">
              <svg
                className="w-6 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              <span className="pl-2">live site</span>
            </a>
            <a
              href="https://github.com/kevinGarcia15/LearnTailwindCSS"
              target="_blanck"
            >
              <svg
                className="w-6 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                fill="black"
                width="28"
                height="28"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span className="pl-2">Repo link</span>
            </a>
          </div>
        </div>

        <div className="card lg:col-span-4 hover:shadow-lg" data-aos="fade-up">
          <div>
            <img
              src="img/Totocalzado.png"
              className="w-full h-48 object-cover"
              alt="totocalzado"
            />
            <div className="m-4">
              <span className="font-bold">Totocalzado.com</span>
              <span className="block text-gray-500 text-sm">
                E-commerce for a shoes store. Created with php using framework
                Codeigniter and vanilla css.
              </span>
            </div>
          </div>
          <div className="flex justify-between rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wider">
            <a href="https://totocalzado.com/" target="_blanck">
              <svg
                className="w-6 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              <span className="pl-2">live site</span>
            </a>
            <a
              href="https://github.com/kevinGarcia15/LearnTailwindCSS"
              target="_blanck"
            >
              <svg
                className="w-6 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                fill="black"
                width="28"
                height="28"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span className="pl-2">Repo link</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
