import { Button, Container } from "@material-ui/core";
import React from "react";
import { searchCep, clearFields } from "../scripts/getCep";
import Header from "./header";

function Form() {
  return (
    <>
      <Header />
      <Container>
        <div className="box">
          <h1 className="Title">Consulte seu Cep</h1>
          <p className="obs-search">
            Após digitar o cep, aperte a tecla TAB ou clique em outro campo, e o
            endereço será completado.
          </p>
          <form>
            <div className="form-group">
              <label>cep</label>
              <input
                type="text"
                name="cep"
                id="cep"
                maxLength="8"
                onBlur={searchCep}
              />
            </div>
            <div className="form-group">
              <label>rua</label>
              <input className="form-control" type="text" id="logradouro" />
            </div>
            <div className="form-group">
              <label>bairro</label>
              <input className="form-control" type="text" id="bairro" />
            </div>
            <div className="form-group">
              <label>cidade</label>
              <input className="form-control" type="text" id="localidade" />
            </div>
            <div className="form-group">
              <label>estado</label>
              <input className="form-control" type="text" id="uf" />
            </div>
          </form>
          <Button
            variant="outlined"
            className="btn-clear"
            onClick={clearFields}
          >
            Limpar campos
          </Button>
        </div>
      </Container>
    </>
  );
}

export default Form;
