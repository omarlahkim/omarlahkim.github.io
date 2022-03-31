import React, { lazy } from "react";
import _ from "lodash";
const ProjectItem = lazy(() => import("./project-item"));

function projectItems(props) {
  var portfolio = require("../Assets/portfolio.json");
  var projects = portfolio["Projects"];
  var results = _.filter(projects, (project) => project.type === props.type);

  return (
    <div style={{ backgroundColor: "#FAFAFA" }}>
      <h1 className="text-gray-800 font-bold font-sans text-3xl text-center mt-8">
        {props.title} {props.emoji}
      </h1>
      <h3 className="text-gray-600 font-sans text-xl text-center ">
        Welcome to my professional projects portfolio
      </h3>
      <div className="projectsContainer mt-6">
        {results !== 0 ? (
          results.map((project) => (
            <ProjectItem
              key={project.id}
              id={project.id}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              match={props.match}
              deviceContent={project.image}
              platform={project.platform}
            />
          ))
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default projectItems;
