import { Button, Container } from "@material-ui/core";
import React from "react";
import { searchCep, clearFields } from "../scripts/getCep";
import Header from "./header";

function Form() {
  return (
    <>
      <Header />
      <Container>
        <h1 className="Title">Consulte seu Cep</h1>
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
        <Button variant="contained" className="btn-clear" onClick={clearFields}>
          Limpar campos
        </Button>
      </Container>
    </>
  );
}

export default Form;
