import React from "react";

function Timeline() {
  return (
    <div className="text-primary">
      <h1 className="text-white text-4xl lg:text-6xl place-content-center font-bold tracking-widest border-b-4 border-red-700 w-20">
        Timeline
      </h1>
      <div className="flex flex-col items-center text-white mt-16">
        <div
          className="lg:w-96 h-64"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <div className="w-84 lg:w-96 h-64 pl-6 pt-4 absolute flex flex-col justify-center">
            <h2 className="font-bold text-lg tracking-widest">Aug-2020</h2>
            <div className="flex justify-between">
              <p>
                My first project as a freelancer. Developing a Task Management
                System for an Automotive Mechanic.
              </p>
              <span className="ml-83 lg:ml-95 absolute w-8 h-8 bg-red-700 rounded-full text-third font-bold pl-3 pt-1 z-10">
                6
              </span>
            </div>
          </div>
          <div className="w-84 lg:w-96 h-64 border-red-700 border-dotted rounded-r-3xl border-r-4 border-b-4 p-6 ml-8 relative"></div>
        </div>

        <div
          className="lg:w-96 h-64"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <div className="w-84 lg:w-96 h-64 pl-6 pt-4 absolute flex flex-col justify-center">
            <h2 className="font-bold text-lg tracking-widest">Feb-2020</h2>
            <div className="flex justify-between">
              <p>
                Starting my profesional practice in the "Hospital Regional of
                Occident" (Posterged for covid-19)
              </p>
              <span className="-ml-10 lg:-ml-10 absolute w-8 h-8 bg-red-700 rounded-full text-third font-bold pl-3 pt-1 z-10">
                5
              </span>
            </div>
          </div>
          <div className="w-84 lg:w-96 h-64 border-red-700 border-dotted rounded-l-3xl border-l-4 border-b-4 p-6 mr-8 relative"></div>
        </div>

        <div
          className="lg:w-96 h-64"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <div className="w-84 lg:w-96 h-64 pl-6 pt-4 absolute flex flex-col justify-center">
            <h2 className="font-bold text-lg tracking-widest">Nov-2019</h2>
            <div className="flex justify-between">
              <p>Close the curriculum of the degree in Systems Engineering.</p>
              <span className="ml-83 lg:ml-95 absolute w-8 h-8 bg-red-700 rounded-full text-third font-bold pl-3 pt-1 z-10">
                4
              </span>
            </div>
          </div>
          <div className="w-84 lg:w-96 h-64 border-red-700 border-dotted rounded-r-3xl border-r-4 border-b-4 p-6 ml-8 relative"></div>
        </div>

        <div
          className="lg:w-96 h-64"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <div className="w-84 lg:w-96 h-64 pl-6 pt-4 absolute flex flex-col justify-center">
            <h2 className="font-bold text-lg tracking-widest">Oct-2019</h2>
            <div className="flex justify-between">
              <p>
                Deployed the Graduate project. Developing a concession control
                system for PMT of Totonicapan
              </p>
              <span className="-ml-10 lg:-ml-10 absolute w-8 h-8 bg-red-700 rounded-full text-third font-bold pl-3 pt-1 z-10">
                3
              </span>
            </div>
          </div>
          <div className="w-84 lg:w-96 h-64 border-red-700 border-dotted rounded-l-3xl border-l-4 border-b-4 p-6 mr-8 relative"></div>
        </div>

        <div
          className="lg:w-96 h-64"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <div className="w-84 lg:w-96 h-64 pl-6 pt-4 absolute flex flex-col justify-center">
            <h2 className="font-bold text-lg tracking-widest">sep-2018</h2>
            <div className="flex justify-between">
              <p>
                Deployed the first application. Developing a inscription system
                for the "Media Maraton Atanasio Tzul" from Totonicapan.
              </p>
              <span className="ml-83 lg:ml-95 absolute w-8 h-8 bg-red-700 rounded-full text-third font-bold pl-3 pt-1 z-10">
                2
              </span>
            </div>
          </div>
          <div className="w-84 lg:w-96 h-64 border-red-700 border-dotted rounded-r-3xl border-r-4 border-b-4 p-6 ml-8 relative"></div>
        </div>

        <div
          className="lg:w-96 h-64"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <div className="w-84 lg:w-96 h-64 pl-6 pt-4 absolute flex flex-col justify-center">
            <h2 className="font-bold text-lg tracking-widest">Feb-2015</h2>
            <div className="flex justify-between">
              <p>Starting my career in the System Engineering faculty.</p>
              <span className="-ml-10 lg:-ml-10 absolute w-8 h-8 bg-red-700 rounded-full text-third font-bold pl-3 pt-1 z-10">
                1
              </span>
            </div>
          </div>
          <div className="w-84 lg:w-96 h-64 border-red-700 border-dotted rounded-l-3xl border-l-4 border-b-4 p-6 mr-8 relative"></div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
