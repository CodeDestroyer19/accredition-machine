import React from "react";
import Marquee from "react-fast-marquee";
import TestimonialCards from "./TestimonialCards";

const Testemoninals = () => {
  return (
    <div>
      <Marquee>
        {[
          { nameof: "Tina", testement: "", schoolname: "Easy English" },
          { nameof: "name", testement: "", schoolname: "Vaal techincal" },
          { nameof: "name", testement: "", schoolname: "SAFIIT" },
          { nameof: "name", testement: "", schoolname: "Mechatronics Acedemy" },
          { nameof: "name", testement: "", schoolname: "MJR Training" },
          { nameof: "name", testement: "", schoolname: "Sandton Technical" },
        ].map((elem, index) => {
          return <TestimonialCards key={`Testicard-no#${index}`} elem={elem} />;
        })}
      </Marquee>
    </div>
  );
};

export default Testemoninals;
