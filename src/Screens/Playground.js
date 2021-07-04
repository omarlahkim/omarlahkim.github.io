import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import '../Styles/styles.css'
import '../Styles/devices.min.css'

const ProjectItems = lazy(() => import('../Components/project-items'));


const renderLoader = () => <p>Loading</p>;

function Playground({ match }) {
    return (
        <div className="playgroundContainer">
            <Suspense fallback={renderLoader()}>
                <ProjectItems match={match} title="Playground" emoji="🧑‍💻" />
            </Suspense>




        </div>
    )
}

export default Playground;