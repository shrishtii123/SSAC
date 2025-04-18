import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = (props) => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      _Link: "Home",
      url: "",
    },
    {
      id: 2,
      _Link: "About",
      url: "",
    },
    {
      id: 3,
      _Link: "Countries",
      url: "",
    },
    {
      id: 4,
      _Link: "News",
      url: "",
    },
    {
      id: 5,
      _Link: "contact",
      url: "",
      name: "contact",
    },
    {
      id: 6,
      _Link: "EXAMS",
      url: "",
      name: "exam",
    },
  ];

  return (
    <div className=" flex justify-between items-center w-full h-20 px-4 bg-gradient-to-b from-[rgba(0,0,0,0.4)] to-transparent hover:from-[rgba(0,0,0,0.8)] hover:to-[rgba(0,0,0,0.4)] fixed top-0 z-50 ">
      
      <ul className="hidden md:flex w-500">
      <div onClick={()=>props.homeR.current.scrollIntoView({ behavior: "smooth" })}>
            <li
              key={links[0].id}
              className="px-4 cursor-pointer uppercase text-white hover:scale-105 "
            >
              {links[0]._Link}
            </li>
        </div>
        <Link to={links[1].name} smooth duration={500}>
            <li
              key={links[1].id}
              className="px-4 cursor-pointer uppercase text-white hover:scale-105 "
            >
              {links[1]._Link}
            </li>
        </Link>
        <Link to={links[2].name} smooth duration={500}>
            <li
              key={links[2].id}
              className="px-4 cursor-pointer uppercase text-white hover:scale-105 "
            >
              {links[2]._Link}
            </li>
        </Link>
      </ul>
      <div className="w-15 mt-[1px]">
        <img src="ssac.png" alt="" />
      </div>
      <ul className="hidden md:flex w-500">
      <div onClick={()=>props.newsR.current.scrollIntoView({ behavior: "smooth" })}>
            <li
              key={links[3].id}
              className="px-4 cursor-pointer uppercase text-white hover:scale-105 "
            >
              {links[3]._Link}
            </li>
        </div>
        <div onClick={()=>props.contactR.current.scrollIntoView({ behavior: "smooth" })}>
            <li
              key={links[4].id}
              className="px-4 cursor-pointer uppercase text-white hover:scale-105 "
            >
              {links[4]._Link}
            </li>
        </div>
        <div onClick={()=>props.examR.current.scrollIntoView({ behavior: "smooth" })}>
            <li
              key={links[5].id}
              className="px-4 cursor-pointer uppercase text-white hover:scale-105 "
            >
              {links[5]._Link}
            </li>
        </div>
      </ul>
      {/* <ul className="hidden md:flex ">
        {links.map(({ id, _Link, name }) => (
          <Link to={name} smooth duration={500}>
            <li
              key={id}
              className="px-4 cursor-pointer uppercase text-[#000000] hover:scale-105 "
            >
              {_Link}
            </li>
          </Link>
        ))}
      </ul> */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer text-[#000000] pr-4 z-50 md:hidden "
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col text-1xl justify-center items-center absolute top-0 left-0 w-full h-screen  z-10 bg-white">
          {links.map(({ id, _Link, url }) => (
            <li
              key={id}
              className="px-4 cursor-pointer  py-6 uppercase text-[#000000]"
            >
              <a href={url}>{Link}</a>
              {_Link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
