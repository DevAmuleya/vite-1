import { testimonials } from "../constants";
import { useState } from "react";

const Testimonials = () => {
  const [expanded, setExpanded] = useState(testimonials.map(() => false));

  const toggleExpanded = (index) => {
    setExpanded((prev) =>
      prev.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <div className="mt-20 tracking-wide ">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        What People are saying
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials && testimonials.length > 0 ? (
          testimonials.map((testimonial, index) => {
            const maxWords = 10; // Set the max number of words to show initially
            const words = testimonial.text.split(" ");
            const isTruncated = words.length > maxWords;
            const displayedText = expanded[index]
              ? testimonial.text
              : `${words.slice(0, maxWords).join(" ")}${
                  isTruncated ? "..." : ""
                }`;

            return (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2 max-h-[260px]">
                <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin">
                  <p>{displayedText}</p>
                  {isTruncated && (
                    <button
                      className="text-orange-700 hover:underline mt-2"
                      onClick={() => toggleExpanded(index)}
                    >
                      {expanded[index] ? "View Less" : "View More"}
                    </button>
                  )}
                  <div className="flex mt-8 items-start">
                    <img
                      className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                      src={testimonial.image}
                      alt=""
                    />
                    <div>
                      <h6>{testimonial.user}</h6>
                      <span className="text-sm font-normal italic text-neutral-600">
                        {testimonial.company}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>No testimonials available.</p>
        )}
      </div>
    </div>
  );
};

export default Testimonials;
