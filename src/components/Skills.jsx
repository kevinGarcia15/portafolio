import React from "react";

function Skills() {
  return (
    <div>
      <h1 className="text-black text-4xl lg:text-6xl place-content-center font-bold tracking-widest border-b-4 border-red-700 w-20">
        Skills
      </h1>
      <div className="grid grid-cols-12 mt-8 gap-4">
        <div
          className="col-span-12 lg:col-span-5 md:col-span-6 border-6 rounded-2xl border-black p-4"
          data-aos="flip-left"
        >
          <h2 className="text-3xl place-content-center font-bold tracking-widest mb-6">
            Languages
          </h2>
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-center">
              <img
                className="w-12 h-20"
                src="../img/javascript.svg"
                alt="JavaScript"
              />
              <span className="text-sm font-bold">JavaScript</span>
            </div>
            <div className="flex flex-col items-center">
              <img className="w-12 h-20" src="../img/php-1.svg" alt="php" />
              <span className="text-sm font-bold">PHP</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="w-12 h-20"
                src="../img/python-5.svg"
                alt="Python"
              />
              <span className="text-sm font-bold">Python</span>
            </div>
            <div className="flex flex-col items-center">
              <img className="w-12 h-20" src="../img/c.svg" alt="c++" />
              <span className="text-sm font-bold">C++</span>
            </div>
          </div>
        </div>

        <div
          className="col-span-12 lg:col-span-6 md:col-span-6 border-6 rounded-2xl border-black p-4"
          data-aos="flip-right"
        >
          <h2 className="text-3xl place-content-center font-bold tracking-widest mb-6">
            Technologies
          </h2>
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-center">
              <img className="w-12 h-20" src="../img/react.svg" alt="ReactJs" />
              <span className="text-sm font-bold">React JS</span>
            </div>

            <div className="flex flex-col items-center">
              <img
                className="w-12 h-20"
                src="../img/laravel-1.svg"
                alt="Laravel"
              />
              <span className="text-sm font-bold">Laravel</span>
            </div>

            <div className="flex flex-col items-center">
              <img className="w-12 h-20" src="../img/mysql.svg" alt="MySQL" />
              <span className="text-sm font-bold">MySQL</span>
            </div>

            <div className="flex flex-col items-center">
              <img className="w-12 h-20" src="../img/django.svg" alt="django" />
              <span className="text-sm font-bold">Django</span>
            </div>

            <div className="flex flex-col items-center">
              <img
                className="w-12 h-20"
                src="../img/tailwindcss.svg"
                alt="tailwindcss"
              />
              <span className="text-sm font-bold">Tailwindcss</span>
            </div>
          </div>
        </div>

        <div
          className="col-span-12 lg:col-span-5 md:col-span-6 border-6 rounded-2xl border-black p-4"
          data-aos="flip-up"
        >
          <h2 className="text-3xl place-content-center font-bold tracking-widest mb-6">
            Tools
          </h2>
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-center">
              <img className="w-12 h-20" src="../img/git.svg" alt="Git" />
              <span className="text-sm font-bold">Git</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="w-12 h-20"
                src="../img/adobe-xd.svg"
                alt="Adobe xd"
              />
              <span className="text-sm font-bold">Adobe XD</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="w-12 h-20"
                src="../img/microsoft-windows-22.svg"
                alt="microsoft-windows"
              />
              <span className="text-sm font-bold">Windows</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="w-12 h-20"
                src="../img/ubuntu-2.svg"
                alt="ubuntu"
              />
              <span className="text-sm font-bold">Ubuntu</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
