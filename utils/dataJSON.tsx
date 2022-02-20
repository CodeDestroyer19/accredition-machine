import { Schedule, Android, People } from "@material-ui/icons";

export const InfoDAta = [
  {
    title: "10 years of experience",
    list: [
      "Accredited more than 30 institutions",
      "Worked with kindergartens to universities",
      "Registered more than 20 companies and counting",
      "We link providers to accredited learning material developers",
      "We outsource assessors/moderators to providrs who need them",
    ],
    icon: (
      <Schedule
        color="secondary"
        style={{
          fontSize: "144px",
          margin: "0px auto",
          padding: "0px 0px 15px 0px",
        }}
      />
    ),
  },
  {
    title: "Software powered accreditation",
    list: [
      "Smart technology, powering our accreditation process",
      "Quick delivery for accreditation processes",
      "Little to no room for errors",
      "Our software is tried and tested to assure maximum performance",
    ],
    icon: (
      <Android
        style={{
          fontSize: "144px",
          margin: "0px auto",
          padding: "0px 0px 15px 0px",
          color: "var(--qunit)",
        }}
      />
    ),
  },
  {
    title: "Customer Service you won’t find anywhere else",
    list: [
      `A dedicated team who’ll address your queries`,
      "All-round customer support",
      "Frequent updates on your service progress",
      "Mentorship to entrepreneurs who buy educational franchises intending to exist",
    ],
    icon: (
      <People
        color="primary"
        style={{
          fontSize: "144px",
          margin: "0px auto",
          padding: "0px 0px 15px 0px",
        }}
      />
    ),
  },
];

export const clientData = [
  { imgPath: "/clients/mjr.png", alt: "MJR" },
  { imgPath: "/clients/saf.png", alt: "SAFIIT" },
  { imgPath: "/clients/jintek.png", alt: "Jintek" },
  { imgPath: "/clients/vaal.jpg", alt: "VTI" },
  { imgPath: "/clients/high.jpg", alt: "HTC" },
  { imgPath: "/clients/easy.jpg", alt: "EASY English" },
  { imgPath: "/clients/sandton.png", alt: "Sandton technical" },
  { imgPath: "/clients/mecha.png", alt: "MDA" },
];

export const Testemoninalslist = [
  { nameof: "Tina", testement: "", schoolname: "Easy English" },
  { nameof: "name", testement: "", schoolname: "Vaal techincal" },
  { nameof: "name", testement: "", schoolname: "SAFIIT" },
  { nameof: "name", testement: "", schoolname: "Mechatronics Acedemy" },
  { nameof: "name", testement: "", schoolname: "MJR Training" },
  { nameof: "name", testement: "", schoolname: "Sandton Technical" },
];

export const transitionStyles = {
  entering: { opacity: 1, transform: `translate(0px,0px)` },
  entered: { opacity: 1, transform: `translate(0px,0px)` },
  exiting: { opacity: 0, transform: `translate(0px,-150px)` },
  exited: { opacity: 0, transform: `translate(0px,-150px)` },
};

export const serviceData = {
  first: [
    {
      title: "Umalusi Accreditation",
      description: "",
      price: "R25,000",
      Servicetype: "Accreditation",
    },
    {
      title: "QCTO Accreditation",
      description: "",
      price: "R15,000",
      Servicetype: "Accreditation",
    },
    {
      title: "SETA Programme Accreditation",
      description: "",
      price: "R5,000 per programme",
      Servicetype: "Accreditation",
    },
  ],
  second: [
    {
      title: "CSD with Teasury Registration",
      description: "",
      price: "R2,000",
      Servicetype: "Registration",
    },
    {
      title: "Company Registration",
      description: "",
      price: "R1,800",
      Servicetype: "Registration",
    },
  ],
  third: [
    {
      title: "Tax Clearance",
      description: "",
      price: "R2,000",
      Servicetype: "Accreditation",
    },
    {
      title: "Acquisition of SARS report",
      description: "",
      price: "R1,500",
      Servicetype: "Accreditation",
    },
  ],
};
