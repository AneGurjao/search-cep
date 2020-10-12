import { Container } from "@material-ui/core";
import React from "react";
import Header from "./header";
import { ReactComponent as Request } from "../img/request.svg";
import { ReactComponent as Response } from "../img/response.svg";

const Protocolo = () => {
  return (
    <>
      <Header />
      <Container>
        <div className="box">
          <p>
            Ao digitar a URL de um site no browser, o Navegador envia uma
            Request do tipo GET, ou seja uma requisição para o Servidor, e o
            mesmo retorna uma resposta para o Navegador.
          </p>
          <p>Mas não é tão simples como parece...</p>
          <p>
            Após o ENTER, o processo de comunicação via
            <strong> Protocolo HTTP </strong> (HyperText Transfer Protocol), faz
            a comunicação cliente-servidor. No caminho da Requisição podem ter
            interferências nessa comunicação. Por isso, existe um Protocolo
            responsável por toda a trajetória do percurso que o client traça até
            chegar ao servidor, o responsável é o <strong> Protocolo IP</strong>{" "}
            (Internet Protocol).
          </p>
          <p>
            Existe também um outro Protocolo chamado <strong> TCP </strong>
            (Transmission Control Protocol), este é o Protocolo responsável por
            definir como os dados trafegam até o servidor, ou seja, o Protocolo
            TCP quebra as informações em vários pacotes de informações, e
            garante que esses pacotes irão chegar até o destino sem perder os
            dados.
          </p>
          <div className="img-protocol">
            <Request />
          </div>
          <p>
            Após a informação chegar até o servidor, o Navegador irá procurar no
            servidor o <strong> DNS</strong>, endereço onde o site está
            hospedado. DNS (Servidor de nome de domínio) é o catálogo de
            endereço para site, ele nada mais é o que nomeia o endereço IP, pois
            este é uma sequência de números que representam o endereço web, e
            para facilitar o DNS foi inventado.
          </p>
          <p>
            Porém no servidor exitem muitos programas rodando e várias portas de
            comunicação.
          </p>
          <p>
            O TCP com os pacotes de dados, chega no servidor e vai em direção à
            porta de comunicação definida no protocolo HTTP, que por padrão a
            porta 80 que é selecionada. Dentros dessas portas existem vários
            programas, que precisam entender HTTP (pois o HTTP é como se fosse
            uma linguagem), pois precisam interpretar a informação vinda do
            Navegador e enviar a resposta.
          </p>
          <p>
            Ao encontrar o endereço IP, o servidor envia uma cópia do site via
            TCP, pois este protege, envia e organiza os pacotes de dados para o
            Navegador, e este "monta" os pacotes, renderizando o site.
          </p>
          <div className="img-protocol">
            <Response />
          </div>
          <p>
            Resumo: o Protocolo HTTP é o Protocolo de comunicação na Requisição
            e Resposta entre cliente e servidor. Durante todo a trajetória da
            comunicação, os Protocolos IP e TCP estarão presentes, o primeiro
            leva a informação até o destino, e o segundo protege os dados nessa
            comunicação.
          </p>
        </div>
      </Container>
    </>
  );
};

export default Protocolo;
