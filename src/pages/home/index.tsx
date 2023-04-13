import { Container, LoginForm } from "./styles";
import Head from "next/head";
import Image from "next/image";

import logoImg from "../../../public/logo.svg";
import { Input } from "@/components/Input";

export default function Home() {
    return (
      <>
        <Head>
            <title>Home | Pizzaria</title>
        </Head>

        <Container>
          <Image src={logoImg} alt="Logo Sujeito Pizzaria" />
        </Container>
        <LoginForm>
          <Input 
            placeholder="Difite seu email"
            type="text"
          />
          
          <Input 
            placeholder="Digite sua senha"
            type="password"
          />
        </LoginForm>
      </>
    )
  };
  