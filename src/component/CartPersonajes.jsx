import React from "react";
import { useContext } from "react";
import { RickContext } from "../contex/Rick_morty";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { FaSkull } from "react-icons/fa";
import "../App.css";
import cargando from "../img/loading.gif";

function CartPersonajes() {
  const { search, setModal, modal, data } = useContext(RickContext);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <RickyMorty>
      {data == false ? (
        <div className="loading">
          {" "}
          <img src={cargando} />
        </div>
      ) : (
        <div className="CartPersonaje">
          {search == "" ? (
            <h1>Date not found..</h1>
          ) : (
            search.map((morty) => {
              return (
                <NavLink
                  key={morty.id}
                  className="cartlink"
                  onClick={toggleModal}
                  to={`/InfoRick/${morty.name}`}
                >
                  <div className="Cart">
                    <section className="infoRick">
                      <h4 className="name">{morty.name}</h4>
                      <div>
                        {morty.status != "Alive" ? (
                          <FaSkull />
                        ) : (
                          <AiFillHeart />
                        )}
                      </div>
                    </section>
                    <section>
                      <img src={morty.image} alt={morty.name} />
                    </section>
                    <section className="infoRick">
                      <h5>{morty.species}</h5>
                      <h5>{morty.gender}</h5>
                    </section>
                  </div>
                </NavLink>
              );
            })
          )}
        </div>
      )}
    </RickyMorty>
  );
}

const RickyMorty = styled.div`
  .loading {
    height: 100vh;
    img {
      margin: 50px;
    }
  }
  .cartlink {
    text-decoration: none;
  }
  .CartPersonaje {
    h1 {
      color: #1c9b11cc;
      height: 100vh;
    }
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    grid-auto-rows: minmax(100px, auto);
    margin: 15px;
    padding: 15px;
    border: 2px solid #1c9b11cc;
    border-radius: 10px;
    .Cart {
      border: 2px solid #1c9b11cc;
      cursor: pointer;
      width: 80%;
      margin: 0 auto;
      transition: all 0.4s ease-in;
      section {
        display: flex;
        justify-content: space-between;
        padding: 5px;
        img {
          height: auto;
          width: 100%;
        }
      }
      .infoRick {
        background-color: #00000050;
        h4 {
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        h5 {
          background-color: transparent;
        }
      }
    }
    .Cart:hover {
      transform: scale(1.05);
      box-shadow: 5px 5px 10px #1c9b11cc;
    }
  }

  @media (min-width: 2200px) {
    .CartPersonaje {
      .cartlink {
        height: 100vh;
      }
      .Cart {
        width: 90%;
      }
    }
  }
  @media (max-width: 2200px) {
    .CartPersonaje {
      .cartlink {
        height: 100vh;
      }
    }
  }
  @media (max-width: 1500px) {
    .CartPersonaje {
      .cartlink {
        height: auto;
      }
    }
  }

  @media (max-width: 1000px) {
    .CartPersonaje {
      grid-template-columns: repeat(3, 1fr);
      .Cart {
        width: 85%;
      }
    }
  }

  @media (max-width: 650px) {
    .CartPersonaje {
      grid-template-columns: repeat(2, 1fr);
      .Cart {
        width: 90%;
        section {
          img {
            height: 30vh;
          }
        }
      }
    }
  }
  @media (max-width: 500px) {
    .CartPersonaje {
      grid-template-columns: repeat(1, 1fr);
      .Cart {
        width: 100%;
        section {
          img {
            height: auto;
          }
        }
      }
    }
  }
  @media (max-width: 250px) {
    .CartPersonaje {
      grid-template-columns: repeat(1, 1fr);
      .Cart {
        width: 60%;
        margin: 0 auto;
        section {
          img {
            height: auto;
          }
        }
      }
    }
  }
`;

export default CartPersonajes;
