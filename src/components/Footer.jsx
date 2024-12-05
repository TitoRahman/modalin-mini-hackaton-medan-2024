import React from "react";
import { DiGoogleCloudPlatform, DiReact } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";

export default function Footer() {
  const iconSize = 40;

  return (
    <footer className="bg-black text-white flex flex-col items-center justify-center p-6">
      <div className="text-center mb-4">
        <p>&copy; Modalin - Hackaton Mini 2024 Project</p>
        <p>By Tito Ardimam Rahman & Dinda Ayu Ningtyas</p>
      </div>
      <div className="text-center mb-4">
        <h4 className="text-lg font-semibold">Tech We Use</h4>
      </div>
      <div className="flex gap-6">
        <DiGoogleCloudPlatform size={iconSize} />
        <DiReact size={iconSize} />
        <IoLogoFirebase size={iconSize} />
      </div>
    </footer>
  );
}
