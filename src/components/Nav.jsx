import React from "react";

function Nav() {
  const [statusnav, setStatusnav] = React.useState("hidden");
  let classNav = `text-sm mt-6 md:flex md:justify-between ${statusnav}`
/**manejador del menu nav en forma responsiva 6-13 */
  function handleNav(){
    if (statusnav==='hidden') {
      setStatusnav('block')            
    } else {
      setStatusnav('hidden')      
    }
  }
  return (
    <React.Fragment>
      <div className="flex justify-between items-center md:block">
        <h1 className="text-xl tracking-widest font-bold p-4 border-gray-100 md:hidden">
          <a href="/" className="hover:text-white text-white">
            DevTom
          </a>
        </h1>
        <div className="cursor-pointer md:hidden" id="burger" onClick={handleNav}>
          <svg
            className="w-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>

      <nav className=""> 
        <ul className={classNav} id="menu">
          <li className="text-red-700 text-lg px-4 py-1 mt-1 rounded font-bold hover:bg-gray-800 tracking-widest md:text-white">
            <a href="/">Home</a>
          </li>
          <li className="text-red-700 text-lg px-4 py-1 mt-1 rounded font-bold hover:bg-gray-800 tracking-widest md:text-white">
            <a href="#about">About</a>
          </li>
          <li className="text-red-700 text-lg px-4 py-1 mt-1 rounded font-bold hover:bg-gray-800 tracking-widest md:text-white">
            <a href="/">Projects</a>
          </li>
          <li className="text-red-700 text-lg px-4 py-1 mt-1 rounded font-bold hover:bg-gray-800 tracking-widest md:text-white">
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default Nav;
