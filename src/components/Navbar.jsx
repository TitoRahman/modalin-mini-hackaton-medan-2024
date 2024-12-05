import { Button } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { PiSignIn } from "react-icons/pi";

import React from "react";

export default function Navbar() {
  return (
    <div className="flex px-48 py-4 shadow-sm items-center justify-between">
      <div className="flex items-center gap-2">
        <a>
          <img width={50} height={50} src="https://via.placeholder.com/50" />
        </a>
        <h1 className="font-semibold text-xl">Modalin</h1>
      </div>
      <div>
        <ul className="flex gap-4">
          <NavLink to={"/"}>
            <li className="text-gray-600 hover:text-black hover:bg-blue-gray-50 py-2 px-3 rounded-lg hover:cursor-pointer">
              Beranda
            </li>
          </NavLink>
          <NavLink to={"/portofolio"}>
            <li className="text-gray-600 hover:text-black hover:bg-blue-gray-50 py-2 px-3 rounded-lg hover:cursor-pointer">
              Portofolio
            </li>
          </NavLink>
          <NavLink to={"/browse"}>
            <li className="text-gray-600 hover:text-black hover:bg-blue-gray-50 py-2 px-3 rounded-lg hover:cursor-pointer">
              Jelajahi
            </li>
          </NavLink>
        </ul>
      </div>
      <div className="flex gap-2">
        <NavLink to={"/login"}>
          <Button>Masuk</Button>
        </NavLink>
      </div>
    </div>
  );
}
