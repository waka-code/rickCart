import "./App.css";
import logo from "./img/logo.png";
import CartPersonajes from "./component/CartPersonajes";
import Button from "./component/Button";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Modal from "./component/Modal";
import { AiFillCopyrightCircle } from "react-icons/ai";
import styled from "styled-components";

function App() {
  return (
    <AppCss>
      <div className="App" style={{ textAlign: "center", userSelect: "none" }}>
        <img className="logoApp" src={logo} />
        <Button />
        <BrowserRouter>
          <CartPersonajes />
          <Routes>
            <Route path="/infoRick/:name" element={<Modal />} />
          </Routes>
        </BrowserRouter>
        <footer>
          <AiFillCopyrightCircle /> Wakacode/Creador <AiFillCopyrightCircle />
        </footer>
      </div>
    </AppCss>
  );
}

const AppCss = styled.div`
  .logoApp {
    height: 20vh;
  }
  @media (max-width: 700px) {
    .logoApp {
      height: 15vh;
    }
  }
  @media only screen and (max-width: 550px) and (min-width: 100px) {
    .logoApp {
      height: 10vh;
    }
  }
  @media only screen and (max-width: 400px) {
    .logoApp {
      height: 8vh;
    }
  }
`;
export default App;
