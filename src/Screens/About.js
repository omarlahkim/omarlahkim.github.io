import React, { lazy, Suspense } from "react";
import "../Styles/styles.css";

const AboutItems = lazy(() => import("../Components/about-items"));

const renderLoader = () => <p>Loading</p>;

function About() {
  var portfolio = require("../Assets/portfolio.json");
  var about = portfolio["About"];

  var informations = [
    {
      type: "Education",
      emoji: "🎓",
      data: [...about.education],
    },
    {
      type: "Internships & Experience",
      emoji: "👨🏻‍💻",
      data: [...about.internships],
    },
    {
      type: "Challenges",
      emoji: "☕",
      data: [...about.Challenges],
    },
    {
      type: "Entrepreneurship",
      emoji: "💼",
      data: [...about.entrepreneurship],
    },
    {
      type: "Volunteerism",
      emoji: "🙌🏻",
      data: [...about.volunteerism],
    },
    {
      type: "Skills",
      emoji: "💻",
      data: [...about.skills],
    },
  ];
  return (
    <div className="aboutContainer">
      <Suspense fallback={renderLoader()}>
        <img
          className="w-40 h-40 rounded-full mx-auto"
          alt="lahkim omar"
          src={about.profile_pic}
        />
        <h2 className="font-sans text-2xl font-bold ">{about.full_name}</h2>
        <div className="aboutInfos">
          <a className="font-bold p-3" href="tel:+212677864400">
            <span aria-label="phone" role="img">
              📞
            </span>{" "}
            ({about.phone_indicator}) {about.phone_number}{" "}
          </a>
          <h4 className="font-bold p-3">
            <span aria-label="email" role="img">
              🌐
            </span>{" "}
            {about.email}
          </h4>
        </div>
        <div className="description">
          <p className="font-bold p-3">{about.description}</p>
        </div>
        {informations.map((section) => (
          <AboutItems
            title={section.type}
            emoji={section.emoji}
            data={section.data}
          />
        ))}
        <div className="h-10" />
      </Suspense>
    </div>
  );
}

export default About;
