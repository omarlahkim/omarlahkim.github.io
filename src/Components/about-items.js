import React, { lazy } from "react";
import "../Styles/styles.css";

const AboutItem = lazy(() => import("./about-item"));

function AboutItems(props) {
  const Items = props.data;
  return (
    <div className="Item ">
      <h1 className="font-sans text-xl text-gray-800 m-6 font-bold text-center">
        {props.title} {props.emoji}
      </h1>
      <div className="itemsContainer">
        {Items.map((item) => (
          <AboutItem
            title={item.title}
            logo={item.logo}
            name={item.name}
            start={item.start}
            end={item.end}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default AboutItems;
