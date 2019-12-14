import React from "react";
import {
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText
} from "reactstrap";
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
          <CardText>
            <small>
              See Episode at <a href={episode.url}>{episode.url}</a>
            </small>
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
}
