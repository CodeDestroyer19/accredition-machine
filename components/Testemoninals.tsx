import React from "react";
import Marquee from "react-fast-marquee";
import TestimonialCards from "./TestimonialCards";

const Testemoninals = () => {
  return (
    <div>
          <Marquee>
              
        {[1, 2, 3, 4, 5, 6].map((elem, index) => {
          return <TestimonialCards key={`Testicard-no#${index}`} />;
        })}
      </Marquee>
    </div>
  );
};

export default Testemoninals;
