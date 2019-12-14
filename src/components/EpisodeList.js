import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Alert, ButtonGroup, Button } from "reactstrap";
import EpisodeCard from "./EpisodeCard";

export default function EpisodeList() {
  const [episodes, setEpisodes] = useState([]);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/episode/`)
      .then(res => {
        setEpisodes(res.data.results);
        setInfo(res.data.info);
      })
      .catch(err => console.log(err));
  }, []);

  console.log(episodes, info);
  return (
    <>
      <Row>
        <Col xs="12">
          <Alert color="info">{`${episodes.length} episodes found!`}</Alert>
        </Col>
      </Row>
      <Row>
        <Col xs="12">
          <Alert color="light">
            {`${info.count} characters found!`}
            <ButtonGroup className="float-right">
              <Button>Previous Page</Button>
              <Button>Next Page</Button>
            </ButtonGroup>
          </Alert>
        </Col>
      </Row>
      <Row className="character-list">
        {episodes.map(episode => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </Row>
    </>
  );
}
