import React, { lazy, Suspense } from "react";
import _ from "lodash";
const ProjectItem = lazy(() => import("./project-item"));

function projectItems(props) {
  const projects = [
    {
      title: "Title 1",
      subtitle: "Subtitle",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      title: "Title 1",
      subtitle: "Subtitle",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
  ];
  return (
    <div style={{ backgroundColor: "#FAFAFA" }}>
      <h1>
        {props.title} {props.emoji}
      </h1>
      <div className="projectsContainer">
        {projects.map((project) => (
          <ProjectItem
            id={_.snakeCase(project.title)}
            title={project.title}
            susbtitle={project.subtitle}
            description={project.description}
            match={props.match}
            deviceContent={project.image}
          />
        ))}
      </div>
    </div>
  );
}

export default projectItems;
