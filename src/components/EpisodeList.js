import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Alert, ButtonGroup, Button } from "reactstrap";
import EpisodeCard from "./EpisodeCard";

export default function EpisodeList() {
  const [episodes, setEpisodes] = useState([]);
  const [info, setInfo] = useState([]);
  const [baseUrl, setBaseUrl] = useState(
    "https://rickandmortyapi.com/api/episode/"
  );

  useEffect(() => {
    axios
      .get(baseUrl)
      .then(res => {
        setEpisodes(res.data.results);
        setInfo(res.data.info);
      })
      .catch(err => console.log(err));
  }, [baseUrl]);

  console.log(episodes, info);
  return (
    <>
      <Row>
        <Col xs="12">
          <Alert color="light">
            {`${info.count} episodes found!`}
            <ButtonGroup className="float-right">
              <Button
                onClick={() => info.prev && setBaseUrl(info.prev)}
                disabled={info.prev ? false : true}
              >
                Previous Page
              </Button>
              <Button
                onClick={() => info.next && setBaseUrl(info.next)}
                disabled={info.next ? false : true}
              >
                Next Page
              </Button>
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
