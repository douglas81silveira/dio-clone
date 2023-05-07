import React from "react";
import { Container, Column, Title, TitleHighlight } from "./styles";

import Header from "../../components/Header";
import Card from "../../components/Card";
import UserInfo from "../../components/UserInfo";

const Feed = () => {
  return (
    <>
      <Header autenticado={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
          <UserInfo
            percentual={35}
            nome="Douglas"
            image="https://avatars.githubusercontent.com/u/106452799?v=4"
          />
          <UserInfo
            percentual={35}
            nome="Douglas"
            image="https://avatars.githubusercontent.com/u/106452799?v=4"
          />
          <UserInfo
            percentual={35}
            nome="Douglas"
            image="https://avatars.githubusercontent.com/u/106452799?v=4"
          />
        </Column>
      </Container>
    </>
  );
};

export default Feed;
