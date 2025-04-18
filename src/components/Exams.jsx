import React from "react";
import "./Exams.css";
import Card from "./Card";
const countries = [
  {
    name: "USA",

    image: "https://m.media-amazon.com/images/I/51K0KISQfnL._AC_UF1000,1000_QL80_.jpg",
    Exams: " TOEFL,GMAT,IELTS,GRE,PTE,etc.",
    region: "North America"
  },  {
    name: "UK",

    image: "https://geology.com/world/united-kingdom-map.gif",
    Exams: " TOFEL,LNAT,GRE,IELTS,GMAT,etc.",
    region: "Europe"
  },  {
    name: "GERMANY",

    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFU7_1Q-B06MCdn0F8nMuZo72Be_sMLHY1Vg&usqp=CAU",
    Exams: " TestDaF,TOEFL,IELTS,DSH,GMAT,etc.",
    region: "Europe"
  },  {
    name: "NETHERLANDS",

    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTal-gkQDtla9fx7ezfmJ1Ay7Rx_cOcM6uXMQ&usqp=CAU",
    Exams: " TOFEL,IELTS,NT2,CNaVT,GRE,GMAT,etc.",
    region: "Europe"
  },  {
    name: "DENMARK",

    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQl_iV8VQZsg052At-9cFRu3qQs8YVrcjO3Q&usqp=CAU",
    Exams: " TOFEL,IELTS,GRE,GMAT,etc.",
    region: "Europe"
  },  {
    name: "AUSTRALIA",

    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS08kAnrHIik9eg25h6jLqt2XRBw1ZL4XafCA&usqp=CAU",
    Exams: "LSAT,CAE,ACT,SAT,TOFEL,etc.",
    region: "Australia"
  },  {
    name: "CANADA",

    image: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6D7iMlrs1DHVhYAxfLskhfuu0jevDkUmaQg&usqp=CAU",
    Exams: " TOFEL,GRE,GMAT,Duolingo,etc. ",
    region: "North America"
  },  {
    name: "SINGAPORE",

    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMnVm1rIkMw4ONTIS2O6TfLbXWRKlk_HYHDw&usqp=CAU",
    Exams: " TOFEL,IELTS,PTE,etc. ",
    region: "Asia"
  },
];
export const Exams = () => {
  return (
    <div className="exams-section">
      <div className="e-top">
        <div className="e-left">
          <p>Important</p>
        <h1>Exams</h1>
        </div>
        <div className="e-right">
          <button> &lt; </button>
          <button> &gt; </button>
        </div>
      </div>
      <div className="e-bottom">
        
      <div className="c-country-list">
      {countries.map((country, index) => (
        <Card key={index} country={country} />
      ))}
    </div>
      </div>
    </div>
  );
};
