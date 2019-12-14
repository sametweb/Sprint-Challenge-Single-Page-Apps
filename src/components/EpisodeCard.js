import React from "react";
import { Col, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
export default function EpisodeCard({ episode }) {
  return (
    <Col xs="12" lg="4" className="mb-3">
      <Card>
        <CardBody>
          <CardTitle>
            <strong>
              {episode.episode}: {episode.name}
            </strong>
          </CardTitle>
          <CardSubtitle>Air Date: {episode.air_date}</CardSubtitle>
        </CardBody>
      </Card>
    </Col>
  );
}
