import React from "react";
import { useState, useEffect } from "react";
import { createContext } from "react";

export const RickContext = createContext();

export function Rick_MortyProvider(props) {
  const [data, setData] = useState([]);
  const [btnPage, setBtnPage] = useState(1);
  const [search, setSearch] = useState([]);
  const [modal, setModal] = useState(false);

  const urlRick = `https://rickandmortyapi.com/api/character?page=${btnPage}`;
  async function rickDate() {
    try {
      const res = await fetch(urlRick);
      const dat = await res.json();
      setData(dat.results);
      setSearch(dat.results);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      rickDate();
    }, 150);
  }, [btnPage]);

  return (
    <>
      <RickContext.Provider
        value={{
          data,
          setBtnPage,
          btnPage,
          setSearch,
          search,
          setModal,
          modal,
        }}
      >
        {props.children}
      </RickContext.Provider>
    </>
  );
}
