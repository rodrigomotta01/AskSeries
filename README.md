# AskSeries

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![TMDB](https://img.shields.io/badge/TMDB-01B4E4?style=for-the-badge\&logo=themoviedatabase\&logoColor=white)](https://www.themoviedb.org/)

Aplicação web para descoberta de séries baseada nas preferências do usuário, utilizando a API do The Movie Database (TMDB).

**Acesse:** https://rodrigomotta01.github.io/AskSeries

---

## Screenshots

<div align="center">
  <img src="https://github.com/user-attachments/assets/071efb5c-beae-484c-9c58-6bc3e777ec40" width="48%" />
  <img src="https://github.com/user-attachments/assets/e033adff-2420-4b3a-9e3f-ebc222be6fea" width="48%" />
  <img src="https://github.com/user-attachments/assets/880b297a-9e10-4f21-99a9-e5c47e530fb4" width="48%" />

</div>

---

## Funcionalidades

* Seleção de gênero da série
* Filtro por ano de lançamento
* Filtro automático por quantidade mínima de votos
* Filtro por plataformas de streaming
* Seleção automática de região para disponibilidade
* Sorteio de séries com base nos filtros escolhidos
* Exibição de informações da série sorteada
* Exibição de poster, título e sinopse
* Consulta de dados diretamente pela API do TMDB
* Interface dinâmica utilizando manipulação do DOM

---

## Stack e tecnologias

* JavaScript (ES6+)
* HTML5
* CSS3
* Fetch API
* TMDB API
* GitHub Pages

---

## Arquitetura resumida

**Frontend**

* Interface construída com HTML e CSS
* JavaScript responsável pela lógica da aplicação
* Manipulação dinâmica do DOM
* Gerenciamento dos filtros selecionados pelo usuário

**TMDB API**

* Consulta de séries utilizando filtros
* Busca de gêneros e plataformas
* Obtenção dos dados da série selecionada

---

## Estrutura do projeto

```text
.
├── index.html
├── style.css
├── app.js
├── README.md
└── assets/
    └── ...
```

---

## Como funciona

O usuário começa selecionando os parâmetros desejados para a busca.

A aplicação utiliza esses parâmetros para montar uma requisição para a API do TMDB através do endpoint de descoberta de séries (`discover/tv`).

A partir dos resultados retornados, uma série é escolhida aleatoriamente.

```text
┌──────────────────────────┐
│ Preferências do usuário  │
└────────────┬─────────────┘
             ↓
┌──────────────────────────┐
│    Filtros da busca      │
└────────────┬─────────────┘
             ↓
┌──────────────────────────┐
│       TMDB API           │
└────────────┬─────────────┘
             ↓
┌──────────────────────────┐
│    Lista de séries       │
└────────────┬─────────────┘
             ↓
┌──────────────────────────┐
│    Sorteio aleatório     │
└────────────┬─────────────┘
             ↓
┌──────────────────────────┐
│    Série escolhida       │
└──────────────────────────┘
```

---

## Integração com a API

O projeto utiliza a API do [The Movie Database (TMDB)](https://www.themoviedb.org/) para obter os dados das séries.

Entre os parâmetros utilizados estão:

* `with_genres`
* `first_air_date_year`
* `vote_average.gte`
* `vote_count.gte`
* `with_watch_providers`
* `watch_region`
* `include_null_first_air_dates`

---

## Objetivo do projeto

O AskSeries foi desenvolvido como um projeto de estudo de JavaScript, com foco em:

* Consumo de APIs REST
* `fetch` e programação assíncrona
* `async/await`
* Manipulação do DOM
* Eventos
* Arrow functions
* Arrays e métodos como `find`, `filter` e `map`
* `Set`
* Manipulação de objetos e JSON
* Construção de interfaces com JavaScript puro
* Integração com APIs externas
