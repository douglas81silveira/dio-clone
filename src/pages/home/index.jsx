import { Button } from "../../components/Button";
import Header from "../../components/Header";

import { Container, TextContent, Title, TitleHightlight } from "./styles";
import banner from "../../assets/banner.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate("/login");
  };

  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHightlight>
              Implemente
              <br />
            </TitleHightlight>
            o seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
          </TextContent>
          <Button
            title="Começar agora"
            variant="secondary"
            type="button"
            onClick={handleClickSignIn}
          ></Button>
        </div>
        <div>
          <img src={banner} alt="Banner" />
        </div>
      </Container>
    </>
  );
};

export default Home;
