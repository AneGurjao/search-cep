let indexCep = 7;

export const searchCep = () => {
  const { value } = document.getElementById("cep");
  let cep = value.replace(/\D/g, "");
  if (cep !== "") {
    consumeCep(cep);
  }
};

export const consumeCep = (cep) => {
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
      let novoCep = replaceNumber(cep, indexCep);
      indexCep--;

      consumeCep(novoCep);
    } else {
      for (const field in result) {
        if (document.getElementById(field)) {
          document.getElementById(field).value = result[field];
        }
      }
    }
  };
};

export const replaceNumber = (numberCep, index) => {
  return replaceAt(numberCep, index, "0");
};

export const replaceAt = (string, index, replace) => {
  return string.substring(0, index) + replace + string.substring(index + 1);
};

export const clearFields = () => {
  document.getElementById("cep").value = "";
  document.getElementById("logradouro").value = "";
  document.getElementById("bairro").value = "";
  document.getElementById("localidade").value = "";
  document.getElementById("uf").value = "";
  indexCep = 7;
};
