import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import Header from "../../components/Header";
import {
  Column,
  Container,
  LoginText,
  Row,
  SubtitleRegister,
  Title,
  TitleRegister,
  Wrapper,
} from "./styles";
import Input from "../../components/Input";
import { Button } from "../../components/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { api } from "../../services/api";
import { HttpStatusCode } from "axios";

const schema = yup.object({
  nome: yup.string().required("Campo obrigatório."),
  email: yup.string().email("E-mail inválido!").required("Campo obrigatório."),
  password: yup
    .string()
    .min("3", "No mínimo 3 caracteres!")
    .required("Campo obrigatório"),
});

const Register = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (formData) => {
    const { data } = await api.get(`users?email=${formData.email}`);
    if (data.length > 0) {
      alert("E-mail já cadastrado!");
    } else {
      await api
        .post("users", formData)
        .then((response) => {
          if (
            response.status === HttpStatusCode.Ok ||
            response.status === HttpStatusCode.Created
          ) {
            alert(`${formData.email} cadastrado com sucesso!`);
            navigate("/feed");
          }
        })
        .catch((err) => alert(`Erro: ${err}`));
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
            <TitleRegister>Comece agora grátis</TitleRegister>
            <SubtitleRegister>
              Crie sua conta e make the change._
            </SubtitleRegister>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="nome"
                placeholder="Nome completo"
                control={control}
                errorMessage={errors?.nome?.message}
                leftIcon={<MdPerson />}
              />
              <Input
                name="email"
                placeholder="E-mail"
                control={control}
                errorMessage={errors?.email?.message}
                leftIcon={<MdEmail />}
              />
              <Input
                name="password"
                placeholder="Password"
                control={control}
                errorMessage={errors?.password?.message}
                leftIcon={<MdLock />}
              />
              <Button
                title="Criar minha conta"
                variant="secondary"
                type="submit"
              />
            </form>
            <Row>
              Já tenho conta.&nbsp;
              <LoginText onClick={() => navigate("/login")}>
                Fazer login
              </LoginText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export default Register;
