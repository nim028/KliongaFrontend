import React from "react";

export default function GlobalSearch() {
  return (
    <div className="min-h-screen p-4">
      {/* <h1>Recherche</h1> */}
      <div className="join my-4 ">
        <button form="search" type="submit" className="btn join-item">
          Ecole
        </button>
        <button form="search" type="submit" className="btn join-item">
          Eleve
        </button>
        <button form="search" type="submit" className="btn join-item">
          Parent
        </button>
        <button form="search" type="submit" className="btn join-item">
          Enseignant
        </button>
      </div>
    </div>
  );
}
