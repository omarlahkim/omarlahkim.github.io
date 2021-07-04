import React, { lazy, Suspense } from "react";
import "../Styles/styles.css";

const ProjectItems = lazy(() => import("../Components/project-items"));
const renderLoader = () => <p>Loading</p>;

function Works({ match }) {
  return (
    <div className="worksContainer">
      <Suspense fallback={renderLoader()}>
        <ProjectItems match={match} title="Work" emoji="💼" />
      </Suspense>
    </div>
  );
}

export default Works;
