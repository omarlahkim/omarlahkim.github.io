import React, { lazy, Suspense } from "react";
import "../Styles/styles.css";
import "../Styles/devices.min.css";

const ProjectItems = lazy(() => import("../Components/project-items"));

const renderLoader = () => <p>Loading</p>;

function Playground({ match }) {
  return (
    <div className="">
      <Suspense fallback={renderLoader()}>
        <ProjectItems
          match={match}
          title="Playground"
          type="playground"
          emoji="🧑‍💻"
        />
        <div style={{ height: 2 }} />
      </Suspense>
    </div>
  );
}

export default Playground;
