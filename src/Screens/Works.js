import React, { lazy, Suspense } from "react";
import "../Styles/styles.css";

const ProjectItems = lazy(() => import("../Components/project-items"));
const renderLoader = () => <p>Loading</p>;

function Works({ match }) {
  return (
    <div className="">
      <Suspense fallback={renderLoader()}>
        <ProjectItems match={match} title="Work" type="work" emoji="💼" />
        <div style={{ height: 2 }} />
      </Suspense>
    </div>
  );
}

export default Works;
