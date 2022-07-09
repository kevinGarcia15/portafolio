import React from "react";

function Timeline() {
  const timeline = [
    {
      "id":7, 
      "date": "Sep-2021",
      "description": "I got my first job in COSAMI RL as a Developer JR.",
    },
    {
      "id":6, 
      "date": "Aug-2020",
      "description": "My first project as a freelancer. Developing a Task Management System for an Automotive Mechanic.",
    },
    {
      "id":5,
      "date": "Feb-2020",
      "description": "Starting my profesional practice in the 'Hospital Regional of Occident' (Posterged for covid-19)"
    },
    {
      "id":4,
      "date": "Nov-2019",
      "description": "Close the curriculum of the degree in Systems Engineering."
    },
    {
      "id":3,
      "date": "Oct-2019",
      "description": "Deployed the Graduate project. Developing a concession control system for PMT of Totonicapan"
    },
    {
      "id":2,
      "date": "Sep-2018",
      "description": "Deployed the first application. Developing a inscription system for the 'Media Maraton Atanasio Tzul' from Totonicapan."
    },
    {
      "id":1,
      "date": "Feb-2015",
      "description": "Starting my career in the System Engineering faculty."
    },
    {
      "id":0,
      "date": "My road map",
      "description": ""
    }
  ]
  return (
    <div className="text-primary">
      {/* Header */}
      <h1 className="text-white text-4xl lg:text-6xl place-content-center font-bold tracking-widest border-b-4 border-red-700 w-20">
        Timeline
      </h1>

      {/*Content  */}
      <div className="flex flex-col items-center text-white mt-16">

      {timeline.map(item => {
        let dottedRight = 'rounded-r-3xl border-r-4 border-b-4 ml-3 relative';
        let dottedLeft = 'rounded-l-3xl border-l-4 border-b-4 -ml-3 relative';
        let badgeAlignRight = 'ml-56 lg:ml-95';
        let badgeAlignLeft = '-ml-12 lg:-ml-10';

        let showDotted = item.id % 2 !== 0 ? dottedRight: dottedLeft;
        let showBadge = item.id % 2 !== 0 ? badgeAlignRight: badgeAlignLeft;
        return(
          <div
            key={item.id}
            className=" w-64 lg:w-96 h-64"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            <div className="w-64 lg:w-96 h-64 pl-6 pt-4 absolute flex flex-col justify-center">
              <h2 className="font-bold text-lg tracking-widest">{item.date}</h2>
              <div className="flex justify-between">
                <small>
                  {item.description}
                </small>
                <span className={`${showBadge} absolute w-8 h-8 bg-red-700 rounded-full text-third font-bold pl-3 pt-1 z-10`}>
                  {item.id}
                </span>
              </div>
            </div>
            <div className={ `w-full lg:w-96 h-64 border-red-700 border-dotted ${showDotted}` }></div>
          </div>
        )
      })}
    </div>
  </div>
  );

}

export default Timeline;
