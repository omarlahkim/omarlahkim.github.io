import React from "react";

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Screens/Home";
import Playground from "./Screens/Playground";
import Works from "./Screens/Works";
import About from "./Screens/About";
import NotFound from "./Screens/NotFound";
import Footer from "./Components/Footer";
import Project from "./Screens/Project";
import ReactGA from "react-ga";
import Blog from "./Screens/Blog";
import Feed from "./Screens/Feed";
import Article from "./Screens/Article";

function App() {
  const trackingId = "UA-1234567890-1"; // Replace with your Google Analytics tracking ID
  ReactGA.initialize(trackingId);
  return (
    <Router>
      <div className="App">
        <div role="presentation" className="llQKKb"></div>
        <div className="hjte4t-1 EYUtG"></div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/playground" exact component={Playground} />
          <Route path="/work" exact component={Works} />
          <Route path="/about" exact component={About} />
          {/* <Route path="/blog" exact component={Blog} />
          <Route path="/blog/:slug" component={Article} /> */}
          <Route path={`/playground/project`} exact component={Project} />
          <Route path={`/work/project`} exact component={Project} />
          {/* <Route path="/Feed" exact component={Feed} /> */}

          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
