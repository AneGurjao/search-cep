import { Container } from "@material-ui/core";
import React from "react";
import Header from "./header";

const Protocolo = () => {
  return (
    <>
      <Header />
      <Container>
        <div style={{ marginTop: "30px" }}>
          <p>
            Ao digitar a URL de um site no browser, o Navegador envia uma
            Request, ou seja uma requisição para o Servidor, e o mesmo retorna
            uma resposta para o Navegador.
          </p>
        </div>
      </Container>
    </>
  );
};

export default Protocolo;
