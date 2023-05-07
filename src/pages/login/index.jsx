import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { api } from "../../services/api";

import Header from "../../components/Header";
import {
  Container,
  Title,
  Column,
  CriarText,
  EsqueciText,
  SubtitleLogin,
  Row,
  TitleLogin,
  Wrapper,
} from "./styles";
import Input from "../../components/Input";
import { Button } from "../../components/Button";
import { MdEmail, MdLock } from "react-icons/md";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email("E-mail inválido!").required("Campo obrigatório"),
  password: yup
    .string()
    .min("3", "No mínimo 3 caracteres!")
    .required("Campo obrigatório"),
});

const Login = () => {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate("/feed");
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (formData) => {
    try {
      const { data } = await api.get(
        `users?email=${formData.email}&senha=${formData.password}`
      );
      if (data.length === 1) {
        navigate("/feed");
      } else {
        alert("Email ou senha inválido!");
      }
    } catch {
      alert("Houve um erro, tente novamente!");
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="email"
                control={control}
                placeholder="E-mail"
                errorMessage={errors?.email?.message}
                leftIcon={<MdEmail />}
              />
              <Input
                name="password"
                control={control}
                placeholder="Senha"
                errorMessage={errors?.password?.message}
                leftIcon={<MdLock />}
                type="password"
              />
              <Button
                title="Entrar"
                variant="secondary"
                // onClick={handleClickSignIn}
                type="submit"
              />
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export default Login;
