import React from "react";
import Marquee from "react-fast-marquee";
import TestimonialCards from "./TestimonialCards";

const Testemoninals = ({Testemoninalslist}) => {
  return (
    <div>
      <Marquee>
        {Testemoninalslist.map((elem, index) => {
          return <TestimonialCards key={`Testicard-no#${index}`} elem={elem} />;
        })}
      </Marquee>
    </div>
  );
};

export default Testemoninals;
