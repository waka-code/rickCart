import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { RickContext } from "../contex/Rick_morty";
import { FcSearch } from "react-icons/fc";
import {
  FiChevronsLeft,
  FiChevronsRight,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

function Button() {
  const { setBtnPage, btnPage, setSearch, data } = useContext(RickContext);
  const Next = async () => {
    if (btnPage === 826) {
      alert("Last page");
    } else {
      setBtnPage(btnPage + 1);
    }
  };

  const Back = async () => {
    if (btnPage <= 1) {
      alert("Please click on next");
    } else {
      setBtnPage(btnPage - 1);
    }
  };

  const Next10 = async () => {
    if (btnPage === 826) {
      alert("Last page");
    } else {
      setBtnPage(btnPage + 5);
    }
  };

  const Back10 = async () => {
    if (btnPage <= 1) {
      alert("Please click on next");
    } else {
      setBtnPage(btnPage - 5);
    }
  };

  const filterSearch = (search, e) => {
    const filterData = data.filter((searchRick) => 
      searchRick.name.includes(search.charAt(0).toUpperCase())
    );
    setSearch(filterData);
  };

  return (
    <>
      <ButtonCss>
        <form>
          <FcSearch className="iconForm" />
          <input
            type="text"
            placeholder="Name Personage"
            required
            onChange={(e) => filterSearch(e.target.value)}
          />
        </form>
        <button onClick={Back10} className="iconForm">
          <FiChevronsLeft />
        </button>
        <button onClick={Back} className="iconForm">
          <FiChevronLeft />
        </button>
        <button onClick={Next} className="iconForm">
          <FiChevronRight />
        </button>
        <button onClick={Next10} className="iconForm">
          <FiChevronsRight />
        </button>
        <br />
        {
          <div className="page">
            <span>{btnPage}-826</span>
          </div>
        }
      </ButtonCss>
    </>
  );
}
const ButtonCss = styled.div`
  border: 2px solid #1c9b11cc;
  margin: 15px;
  border-radius: 10px;
  .iconForm {
    font-size: 25px;
  }
  form {
    background-color: #1d9b11e2;
    width: 40%;
    margin: 10px auto;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 2px;

    input {
      height: 5vh;
      width: 95%;
      border: none;
      background-color: #1d9b1175;
      color: #4e2181;
      outline: none;
      padding: 10px;
      font-size: 20px;
    }
  }
  button {
    width: 6%;
    height: 5vh;
    border: 2px solid green;
    margin: 10px;
    padding: 0 auto;
    background-color: #6324aa;
    color: #1d9b11;
    cursor: pointer;
    transition: all 0.5s ease-in;
    border-radius: 10px;
    user-select: none;
  }
  button:hover {
    transform: scale(0.9);
    background-color: #1c9b11cc;
    border: 2px solid #6324aa;
    color: #6324aa;
  }
  .page {
    width: 10%;
    font-size: 18px;
    margin: 5px auto;
    border: 2px solid #1d9b11;
    background-color: #6324aa;
    border-radius: 7px;
    padding: 5px;
    span {
      color: #ffffff;
    }
  }

  @media (max-width: 1000px) {
    form {
      width: 60%;
    }
    button {
      width: 8%;
    }
    .page {
      width: 15%;
    }
  }

  @media (max-width: 650px) {
    form {
      width: 80%;
    }
    button {
      width: 10%;
    }
    .page {
      width: 20%;
    }
  }

  @media (max-width: 500px) {
    form {
      width: 90%;
    }
    button {
      width: 15%;
    }
    .page {
      width: 25%;
    }
  }
`;

export default Button;
