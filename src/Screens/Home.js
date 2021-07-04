import React from "react";
import "../Styles/styles.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="HomeContainer">
      <div className="introduction">
        <h1>Hello, my name is Omar.</h1>
        <h4>
          I’m a Mobile Developer & Product Designer from <span>🇲🇦</span>.{" "}
          <Link to={{ pathname: "about" }}>
            <span style={{ color: "#424242" }}>Read more.</span>
          </Link>
        </h4>
      </div>
    </div>
  );
}

export default Home;
