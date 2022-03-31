import React from "react";
import "../Styles/styles.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="HomeContainer">
      <div className="introduction">
        <h1 className="font-sans text-3xl">Hello, my name is Omar.</h1>
        <h4 className="font-sans text-xl">
          I’m a Mobile Developer & Growth Hacker from{" "}
          <span aria-label="Moroccan Flag" role="img">
            🇲🇦
          </span>
          .{" "}
          <Link to={{ pathname: "about" }}>
            <span style={{ color: "#403342" }}>Read more.</span>
          </Link>
        </h4>
      </div>
    </div>
  );
}

export default Home;
