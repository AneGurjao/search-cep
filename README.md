## Magalu

- Projeto Busca CEP;
- Explicação do Protocolo HTTP;
- responsividade

## Tecnologias utlizadas

- ReactJs;
- Javascript;
- Jest;

## Pré-requisitos

Você precisará dos seguintes itens instalados corretamente em seu computador.

- [Git](http://git-scm.com/) v2+
- [Node.js](http://nodejs.org/) v10.5+ (with NPM v6.1+)
- [Npm](https://https://www.npmjs.com/)

## Instalação

- `git clone git@github.com:AneGurjao/search-cep.git`
- `npm install` para instalar as dependências

## Para Executar

- `npm start` - Inicia o projeto e a página com livereload deve abrir no seu navegador em `localhost: 3000`

## Para Testar

- `npm test` - Testa as funções da busca cep`

Obs: Apesar de conhecer o Jest, possuo pouca experiência com testes unitários, mas acredito que a evolução vem com a
oportunidade de aprendizado.

### Endpoint

Foi utlizada a api do ViaCep, um webservice gratuito que oferece consulta aos cep's de todo Brasil.

- [ViaCep](https://https://viacep.com.br/)

Para validação dos critérios de aceite, utilizei os CEP's

- 02047000
- 05530111
- 05530222

### Protocolo HTTP

No item de Menu `Protocolo HTTP`, está a explicação do que ocorre no processo do protocolo HTTP, client-server.
Utilizei imagens criadas por mim, para explicar de forma visual o processo de comunicação.

## Rotas

Rotas navegáveis

- `http://localhost:3000/
- `http://localhost:3000/protocolo
