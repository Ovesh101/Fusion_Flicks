import React from 'react';
import { NavLink } from 'react-router-dom';
import { SideBarLinks } from '../utils/constant';

const SideBar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-full">
      <nav className="flex flex-col p-4">
        {SideBarLinks.map((link) => (
          <NavLink
            key={link.label}
            to={link.route}
            className={({ isActive }) =>
              `flex items-center p-2 mb-2 rounded ${
                isActive ? 'bg-brown-500' : 'hover:bg-gray-700'
              }`
            }
          >
            <img src={link.imgUrl} alt={link.label} className="h-6 w-6 mr-2" /> {/* Adjust icon size */}
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default SideBar;
