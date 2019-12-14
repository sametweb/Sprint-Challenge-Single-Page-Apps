import React from "react";
import { Link } from "react-router-dom";
import {
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Media
} from "reactstrap";
export default function CharacterCard(props) {
  const { char, isSingleView, setIsSingleView, history } = props;
  return (
    <Col xs="12" className="mb-3">
      <Card style={{ padding: 10 }}>
        {isSingleView ? (
          <span
            onClick={() => {
              setIsSingleView(false);
              history.goBack();
            }}
            style={{
              display: "inline-block",
              width: 30,
              height: 30,
              position: "absolute",
              top: 10,
              right: 10,
              fontSize: 20,
              backgroundColor: "black",
              color: "white",
              borderRadius: 15,
              textAlign: "center",
              cursor: "pointer"
            }}
          >
            X
          </span>
        ) : null}
        <Media style={{ flexWrap: "wrap" }}>
          <Media
            left
            style={{
              width: isSingleView ? "100%" : "150px",
              marginRight: 10
            }}
          >
            <CardImg top width="100%" src={char.image} alt={char.name} />
          </Media>
          <Media body>
            <Media heading>
              <Link
                to={`/characters/${char.id}`}
                onClick={() => setIsSingleView(true)}
              >
                {char.name}, <small>{char.species}</small>
              </Link>
            </Media>
            <CardText>
              <small>Gender: {char.gender}</small>
              <br />
              <small>Status: {char.status}</small>
              <br />
              <small>Location: {char.location.name}</small>
              <br />
              <small>Origin: {char.origin.name}</small>
            </CardText>
          </Media>
        </Media>
      </Card>
    </Col>
  );
}
