// let vezesDeCepNaoEncontrado = 0;
var fetch = require("node-fetch-polyfill");

export const searchCep = () => {
  const { value } = document.getElementById("cep");
  let cep = value.replace(/\D/g, "");

  if (cep !== "") {
    consomeCep(cep);
  }
};

export const consomeCep = (cep) => {
  const options = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };

  fetch(`https://viacep.com.br/ws/${cep}/json/`, options)
    .then((res) => res.json().then((data) => showData(data)))
    .catch((e) => alert("Formato de cep inválido"));

  const showData = (result) => {
    if (result.erro === true) {
      alert("Cep não encontrado");
    } else {
      for (const field in result) {
        if (document.getElementById(field)) {
          document.getElementById(field).value = result[field];
        }
      }
    }
  };
};

export const clearFields = () => {
  document.getElementById("cep").value = "";
  document.getElementById("logradouro").value = "";
  document.getElementById("bairro").value = "";
  document.getElementById("localidade").value = "";
  document.getElementById("uf").value = "";
};
