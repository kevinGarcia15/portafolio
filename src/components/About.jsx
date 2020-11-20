import React from "react";

function About() {
  return (
    <div className="grid grid-cols-12" id="about">
      <div
        className="col-span-12 md:col-span-6 hidden md:block w-72 h-72 lg:w-96 lg:h-96"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <img
          className="lg:w-96 lg:h-96 object-cover rounded absolute z-10"
          src="../img/porfile.jpeg"
          alt="porfile about"
        />
        <div className="ml-12 mt-12 w-96 h-96 border-4 rounded-lg border-black relative z-0 hidden lg:block"></div>
      </div>

      <div
        className="col-span-12 md:col-span-6"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <h1 className="text-4xl lg:text-6xl tracking-widest font-bold border-b-4 border-red-600 w-20">
          About
        </h1>
        <p className="mt-4">
          Hello, My name is Kevin Garcia and I am Close Pensum in University of
          Guatemala.
        </p>
        <p className="mt-4">My field interests are Programming and IA</p>
        <p className="mt-4">
          I have been coding for around 2 years now. I love to build a web
          applications.
        </p>
        <p className="mt-4">Remember, never stop to learn</p>
      </div>
    </div>
  );
}

export default About;
