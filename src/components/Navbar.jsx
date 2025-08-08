import React from 'react';
import Logo from '../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';
import BgImage from '../assets/BgImage.png';

export default function Navbar() {
  return (
    <div>
      <nav
        className="p-0 m-0"
        style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          minHeight: '100vh',
          backgroundImage: `url(${BgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          zIndex: 1000,
        }}
      >
        <div className="flex flex-wrap justify-around p-0 m-0 h-[60px] w-full flex-col mt-[35px]">
          <Link to="/Navbar" className="flex items-center">
            <img
              className="p-0 w-[300px] h-[60px] object-cover mr-[5px]"
              src={Logo}
              alt="logo"
            />
          </Link>

          <div>
            <ul className="list-none flex flex-wrap flex-row justify-around gap-5 font-semibold text-[20px] text-white mr-[75px]">
              <li>
                <NavLink to="/popular">Popular</NavLink>
              </li>
              <li>
                <NavLink to="/guide">Guide</NavLink>
              </li>
              <li>
                <input
                  className="w-[450px]  border-solid border-black border-2"
                  type="text"
                  placeholder="Search..."
                />
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center flex-wrap mt-[80px]">
          <div className="flex items-center justify-center w-[800px] h-[300px] bg-none">
            <h1 className="text-center font-serif text-[75px]">
              Your ultimate vault for movies & shows
            </h1>
          </div>
        </div>
      </nav>
    </div>
  );
}
