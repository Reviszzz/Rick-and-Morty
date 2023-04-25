import { useEffect, useState } from "react";
import Character from "./Character";
import BuscarPersonaje from "./BuscarPersonaje";

function Pagination({
  currentPage,
  totalPages,
  onNextPageClick,
  onPrevPageClick,
}) {
  return (
    <div className="d-flex justify-content-between align-items-center">
      {currentPage > 1 && (
        <button className="btn btn-primary btn-sm" onClick={onPrevPageClick}>
          Página anterior
        </button>
      )}
      {currentPage < totalPages && (
        <button className="btn btn-primary btn-sm" onClick={onNextPageClick}>
          Siguiente página
        </button>
      )}
    </div>
  );
}

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoding] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  useEffect(() => {
    async function fetchCharacters() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${currentPage}`
      );
      const data = await response.json();
      setLoding(false);
      setCharacters(data.results);
      setTotalPages(data.info.pages);
    }

    fetchCharacters();
  }, [currentPage]);

  function handleNextPageClick() {
    setCurrentPage(currentPage + 1);
  }

  function handlePrevPageClick() {
    setCurrentPage(currentPage - 1);
  }

  return (
    <div className="container">
      <BuscarPersonaje />

      {totalPages && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onNextPageClick={handleNextPageClick}
          onPrevPageClick={handlePrevPageClick}
        />
      )}
      <div>
        {loading ? (
          <h1 className="text-center">Loading...</h1>
        ) : (
          <div className="row">
            {characters.map((character) => (
              <div className="col-md-4" key={character.id}>
                <Character character={character} />
              </div>
            ))}
          </div>
        )}
      </div>

      {totalPages && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onNextPageClick={handleNextPageClick}
          onPrevPageClick={handlePrevPageClick}
        />
      )}
    </div>
  );
}

export default CharacterList;
