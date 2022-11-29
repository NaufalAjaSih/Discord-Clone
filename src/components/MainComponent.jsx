import React from "react";
import Hero from "./Hero";
import Featured from "./Featured";

function MainComponent() {
  return (
    <div className="bg-[#393943] w-full px-5 pt-4">
      {/* Hero */}
      <Hero />
      {/* Featured */}
      <Featured />
    </div>
  );
}

export default MainComponent;
