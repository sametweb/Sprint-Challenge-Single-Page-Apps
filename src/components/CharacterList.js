import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Alert, ButtonGroup, Button } from "reactstrap";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  const [chars, setChars] = useState([]);
  const [info, setInfo] = useState([]);
  const [search, setSearch] = useState({ term: "", filter: "" });
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${search.filter}`)
      .then(res => {
        setChars(res.data.results);
        setInfo(res.data.info);
      })
      .catch(err => console.log(err));
  }, [search]);

  const handleSearch = term => {
    setSearch({ term: term, filter: `?name=${term}` });
  };

  console.log(info);
  return (
    <>
      <Row className="mb-3">
        <Col xs="12">
          <SearchForm handleSearch={handleSearch} />
        </Col>
      </Row>
      <Row>
        <Col xs="12">
          <Alert color="light">
            {`${info.count} characters found!`}
            <ButtonGroup className="float-right">
              <Button
                onClick={() =>
                  info.prev &&
                  setSearch({
                    ...search,
                    filter: `?${info.prev.split("?").pop()}`
                  })
                }
                disabled={info.prev ? false : true}
              >
                Previous Page
              </Button>
              <Button
                onClick={() =>
                  info.next &&
                  setSearch({
                    ...search,
                    filter: `?${info.next.split("?").pop()}`
                  })
                }
                disabled={info.next ? false : true}
              >
                Next Page
              </Button>
            </ButtonGroup>
          </Alert>
        </Col>
      </Row>
      <Row className="character-list">
        {chars.map(char => (
          <CharacterCard key={char.id} char={char} />
        ))}
      </Row>
    </>
  );
}
