import React from "react";
import LandingPage from "./landing-page";
import { Switch, Route } from "react-router-dom";
import AboutMe from "./about-me";
import Contact from "./contact";
import Resume from "./resume";
import Projects from "./projects";

const Main = () => {
  return (
    <Switch>
      <Route path="/" component={LandingPage} exact />
      <Route path="/aboutme" component={AboutMe} />
      <Route path="/resume" component={Resume} />
      <Route path="/Contact" component={Contact} />
      <Route path="/projects" component={Projects} />
    </Switch>
  );
};

export default Main;
