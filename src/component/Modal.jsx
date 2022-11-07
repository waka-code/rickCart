import { RickContext } from "../contex/Rick_morty";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import a from "../img/l0.png";
import logo from "../img/logo.png";
import { AiFillHeart, AiFillFileUnknown } from "react-icons/ai";
import { FaSkull } from "react-icons/fa";
import cargando from "../img/loading.gif";

export default function Modal() {
  const { name } = useParams();
  const [infoName, setInfoName] = useState([]);
  const { modal, setModal } = useContext(RickContext);
  console.log(infoName);

  const urlRick = `https://rickandmortyapi.com/api/character?name=${name}`;
  async function rickDates() {
    try {
      const res = await fetch(urlRick);
      const da = await res.json();
      setInfoName(da.results);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    rickDates();
  }, [name]);

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <Modalcss>
        {modal && (
          <div className="modal">
            <div className="overlay">
              <img src={`${logo}`} className="logo" />
              <div className="modal-content">
                <div className="p">
                  {infoName == [] && infoName.cod !== "200" ? (
                    <div className="loading">
                      {" "}
                      <img src={cargando} />
                    </div>
                  ) : (
                    <section>
                      <img src={infoName[0]?.image} alt="" />{" "}
                      <div>
                        <ul>Id: {infoName[0]?.id}</ul>
                        <ul>Name: {infoName[0]?.name}</ul>
                        <ul>
                          Status:{" "}
                          {infoName[0]?.status != "Alive" ? (
                            <li style={{ color: "#f83737" }}>
                              <FaSkull />
                              {infoName[0]?.status}
                              <FaSkull />
                            </li>
                          ) : (
                            <li style={{ color: "#48ff00" }}>
                              <AiFillHeart />
                              <AiFillHeart />
                              <AiFillHeart />
                            </li>
                          )}
                        </ul>
                        <ul>Specie: {infoName[0]?.species}</ul>
                        <ul>
                          Gender:{" "}
                          {infoName[0]?.gender == "unknown" ? (
                            <AiFillFileUnknown />
                          ) : (
                            infoName[0]?.gender
                          )}
                        </ul>
                        <ul>Location: {infoName[0]?.location.name}</ul>
                      </div>
                    </section>
                  )}
                </div>
                <button className="close-modal" onClick={toggleModal}>
                  X
                </button>
              </div>
            </div>
          </div>
        )}
      </Modalcss>
    </>
  );
}

const Modalcss = styled.div`
  body.active-modal {
    overflow-y: hidden;
    z-index: 999;
  }

  .modal {
    .overlay {
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      position: fixed;
      background-attachment: fixed;
      background-image: url(${a});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      .logo {
        height: 20vh;
        margin: 25px;
      }
    }
    .modal-content {
      position: absolute;
      top: 50%;
      left: 50%;
      height: auto;
      width: 60%;
      margin: auto;
      transform: translate(-50%, -50%);
      line-height: 1.4;
      padding: 14px 28px;
      border-radius: 3px;
      max-width: 600px;
      min-width: 300px;
      background: #9519b432;
      border: 4px solid #9519b44e;
      border-radius: 10px;
      .p {
        background-color: transparent;
        section {
          display: flex;
          margin: 15px auto;
          align-items: center;
          justify-content: center;
          width: 80%;
          div {
            height: 35vh;
            ul {
              padding: 4.2px;
              background-color: #9519b44e;
              border: 2px solid #9519b44e;
            }
            ul:hover {
              background-color: #45b419ba;
              color: #9519b4;
            }
          }
          img {
            height: 35vh;
            width: auto;
            margin: 5px;
            border-radius: 100%;
          }
        }
      }
    }
    .close-modal {
      position: absolute;
      top: 0px;
      right: 0px;
      padding: 5px 7px;
      border: 2px solid #000000;
      cursor: pointer;
      color: #ffffff;
      background-color: #df2929;
    }
    .close-modal:hover {
      background-color: #000000;
      border: 2px solid #df2929;
      color: #df2929;
    }
  }
  @media (min-width: 2200px) {
    .modal {
      .overlay {
        .modal-content {
          width: 100%;
          .p {
            margin: 15px auto;
            width: auto;
            section {
              width: auto;
              display: flex;
              margin: 15px auto;
              align-items: center;
              justify-content: center;
              flex-direction: column;
              div {
                height: auto;
                width: 100%;
              }
              img {
                height: auto;
                width: auto;
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 2100px) {
    .modal {
      .overlay {
        .modal-content {
          top: 60%;
          width: 100%;
          .p {
            margin: 15px auto;
            width: auto;
            section {
              width: auto;
              display: flex;
              margin: 15px auto;
              align-items: center;
              justify-content: center;
              flex-direction: column;
              div {
                height: auto;
                width: 100%;
              }
              img {
                height: 25vh;
                width: auto;
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 800px) {
    .modal {
      .overlay {
        .logo {
          height: 15vh;
        }
      }
    }
  }
  @media (max-width: 600px) {
    .modal {
      .overlay {
        .logo {
          height: 10vh;
        }
      }
    }
  }
  @media (max-width: 400px) {
    .modal {
      .overlay {
        .logo {
          height: 8vh;
        }
        .modal-content {
          .p {
            section {
              img {
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 250px) {
    .modal {
      .overlay {
        .modal-content {
          .p {
            section {
              img {
                width: 30%;
              }
            }
          }
        }
      }
    }
  }
`;
