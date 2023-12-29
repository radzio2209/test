"use client"; //wykonanie po stronie klienta

import { ReactElement, ReactNode, useEffect, useState } from "react";

type ResultType = {
  name: string;
  url: string;
};

function ResultsList(props: any) {
  props.results;
  const query = props.query;

  return <p></p>;
}

function Window(props: { children: ReactElement[] }) {
  return <div className="window">{props.children}</div>;
}

/**
 * Ta funkcja....
 * data:
 */
export default function SearchForm() {
  const [placeholder, setPlaceholder] = useState<string>("");
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<ResultType[]>([]);

  useEffect(() => {
    // fetch data
    fetch("/api/search?q=" + query).then(async (server_response) => {
      const data = await server_response.json(); //async, await przeczytaj o tym!!!
      // Tutaj pobieramy dane z zapytania i zapisujemy je do stanu
    });

    // Validation
  }, [query]);

  const changeQuery = (event: any): void => {
    const text = event.target.value;
    setQuery(text);
  };

  return (
    <div className="searchform">
      <p>Aktualne zapytanie: {query}</p>
      <input type="text" placeholder={placeholder} onChange={changeQuery} />
      <ResultsList results={results} query={query} />

      {query === "1" && (
        <Window>
          <p>Jestem Dzieckiem</p>
          <p>Jestem Dzieckiem</p>
          <p>Jestem Dzieckiem</p>
          <p>Jestem Dzieckiem</p>
          <p>Jestem Dzieckiem</p>
        </Window>
      )}
      
    </div>
  );
}

//ustaw duplikowanie Ctrl + D
