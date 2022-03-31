import React from "react";
import "../Styles/styles.css";

function Project({ match }) {
  const id = match.params.id;
  const type = match.params.type;
  const IMAGE_HEIGHT_SIZE = "55vh";

  var projects = require("../Assets/portfolio.json");

  const project = {
    title: "Roomedia",
    subtitle: "Reservation de salles de reunion",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    images: [
      {
        title: "",
        url: "https://images.pexels.com/photos/4171211/pexels-photo-4171211.jpeg",
      },
      {
        title: "",
        url: "https://images.pexels.com/photos/4171211/pexels-photo-4171211.jpeg",
      },
      {
        title: "",
        url: "https://images.pexels.com/photos/4171211/pexels-photo-4171211.jpeg",
      },
    ],
  };
  return (
    <div className="projectContainer">
      <div className="slider">
        <h1
          style={{
            color: "white",
            fontSize: 40,
            fontFamily: "Times New Roman",
          }}
        >
          {project.title}
        </h1>
        <h4 style={{ color: "#c1c1c1", fontSize: 20 }}>{project.subtitle}</h4>
      </div>
      <div className="projectdesc">
        <div className="projectintro centered">
          <p>{project.description}</p>
        </div>

        <div className="imgslider">
          {project.images.map((image) => (
            <img
              alt={image.title}
              src={image.url}
              style={{ maxHeight: IMAGE_HEIGHT_SIZE, padding: 20 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
