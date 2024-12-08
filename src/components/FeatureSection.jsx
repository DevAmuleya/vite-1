import React from "react";
import { useState } from "react";
import { features } from "../constants"; 

const FeatureSection = () => {
  const [expanded, setExpanded] = useState(features.map(() => false));

  const toggleExpanded = (index) => {
    setExpanded((prev) =>
      prev.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <div className="border-b">
      <div className="relative mt-20 border-neutral-800">
        <div className="text-center">
          <span className="bg-neutral-900 text-orange-500 rounded-full text-sm font-medium px-2 py-1 uppercase">
            Feature
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
            Easily build{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
              your code
            </span>
          </h2>
        </div>
        <div className="flex flex-wrap mt-10 lg:mt-20">
          {features.length > 0 ? (
            features.map((feature, index) => {
              const maxWords = 10;
              const words = feature.description.split(" ");
              const isTruncated = words.length > maxWords;
              const displayedDescription = expanded[index]
                ? feature.description
                : `${words.slice(0, maxWords).join(" ")}${
                    isTruncated ? "..." : ""
                  }`;

              return (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 h-auto mb-5">
                  <div className="flex">
                    <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                      {feature.icon}
                    </div>
                    <div>
                      <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                      <p className="text-md p-2 text-neutral-500">
                        {displayedDescription}
                      </p>
                      {isTruncated && (
                        <button
                          className="text-orange-700 hover:underline mt-2"
                          onClick={() => toggleExpanded(index)}
                        >
                          {expanded[index] ? "View Less" : "View More"}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p>No features available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
