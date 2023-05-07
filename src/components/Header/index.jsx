import React from "react";
import { useNavigate } from "react-router-dom";

import {
  BuscarInputContainer,
  Row,
  Container,
  Input,
  Menu,
  MenuRight,
  Wrapper,
  UserPicture,
} from "./styles";
import { Button } from "../Button";
import logo from "../../assets/logo-dio.svg";

const Header = ({ autenticado }) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <Row>
          <img
            className="logo"
            src={logo}
            alt="Logo da dio"
            onClick={() => navigate("/")}
          />
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/106452799?v=4" />
          ) : (
            <>
              <MenuRight href="#" onClick={() => navigate("/")}>
                Home
              </MenuRight>
              <Button title="Entrar" onClick={() => navigate("/login")} />
              <Button title="Cadastrar" onClick={() => navigate("/register")} />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Header;
