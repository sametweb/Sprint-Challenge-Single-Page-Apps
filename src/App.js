import React from "react";
import Header from "./components/Header.js";
import { Route } from "react-router-dom";
import { Container } from "reactstrap";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import EpisodeList from "./components/EpisodeList";
import LocationList from "./components/LocationList";

export default function App() {
  return (
    <Container>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" component={CharacterList} />
      <Route exact path="/episodes" component={EpisodeList} />
      <Route exact path="/locations" component={LocationList} />
    </Container>
  );
}
