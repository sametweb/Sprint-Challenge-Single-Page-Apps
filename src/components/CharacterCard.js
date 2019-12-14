import React from "react";
import { Col, Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
export default function CharacterCard({ char }) {
  return (
    <Col xs="12" lg="4" className="mb-3">
      <Card>
        <CardImg top width="100%" src={char.image} alt={char.name} />
        <CardBody>
          <CardTitle>
            <strong>{char.name}</strong>, {char.species}
          </CardTitle>
          <CardText>
            <small>Gender: {char.gender}</small>
            <br />
            <small>Status: {char.status}</small>
            <br />
            <small>Location: {char.location.name}</small>
            <br />
            <small>Origin: {char.origin.name}</small>
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
}
