import React from "react";
import AboutPalm from "../components/AboutPalm";
import AboutCoconut from "../components/AboutCoconut";
import AboutTeam from "../components/AboutTeam";
import AboutKernel from "../components/AboutKernel";
import AboutCompany from "../components/AboutCompany";

export default function AboutPage() {
  return (
    <div className="bg-gray-50">
      <AboutCompany />
      <AboutTeam />
      <AboutPalm />
      <AboutCoconut />
      <AboutKernel />
    </div>
  );
}
