import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => setChars(res.data.results))
      .catch(err => console.log(err));
  }, []);

  return (
    <section className="character-list">
      {chars.map(char => (
        <CharacterCard char={char} />
      ))}
    </section>
  );
}
