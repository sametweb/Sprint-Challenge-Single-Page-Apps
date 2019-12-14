import React from "react";

export default function CharacterCard({ char }) {
  return (
    <div>
      <h3>{char.name}</h3>
      <span>{char.species}</span>
    </div>
  );
}
