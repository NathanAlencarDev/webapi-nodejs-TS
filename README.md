# 🎧 Podcast Manager

Um app no formato Netflix, desenvolvido para centralizar episódios de podcasts em vídeo, organizados por categorias. Ideal para usuários que consomem podcasts visuais e desejam uma experiência mais intuitiva de navegação e descoberta de conteúdo.



## 📌 Descrição

O **Podcast Manager** oferece uma API que permite listar episódios de podcasts em sessões categorizadas como:

* 🧠 Mentalidade
* 🏋️ Bodybuilder
* 😂 Humor
* ❤️ Saúde

Além disso, é possível filtrar episódios por nome de podcast.

---

🧱 Tecnologias Utilizadas

Node.js

TypeScript

HTTP nativo (sem frameworks como Express)

tsx – Utilitário para rodar TypeScript com suporte a --env-file e watch mode

tsup – Empacotador para projetos TypeScript

@types/node – Tipagens do Node.js para uso com TypeScript

---

## 🚀 Funcionalidades

* **Listar episódios por categorias**
* **Filtrar episódios por nome do podcast**
* Retorna:

  * Nome do podcast
  * Nome do episódio
  * Thumbnail (imagem de capa)
  * Link do vídeo
  * Categorias relacionadas

---

## 📥 Exemplo de Resposta da API

### `GET /episodes`

```json
[
  {
    "podcastName": "flow",
    "episode": "CBUM - Flow #319",
    "videoId": "pQSuQmUfS30",
    "cover": "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=pQSuQmUfS30",
    "category": ["saúde", "esporte", "bodybuilder"]
  },
  {
    "podcastName": "flow",
    "episode": "RUBENS BARRICHELLO - Flow #339",
    "videoId": "4KDGTdi0V4I",
    "cover": "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=pQSuQmUfS30",
    "category": ["saúde", "esporte", "bodybuilder"]
  }
]
```

### `GET /episodes?name=flow`

Retorna episódios apenas do podcast "flow".

---

## 🧠 Regras de Negócio

* Cada episódio pode conter uma ou mais categorias.
* A listagem deve sempre agrupar os episódios por categoria.
* A filtragem por nome de podcast deve ser feita via **QueryString**.

---

## 🛠 Estrutura do Projeto

### Roteamento Principal (`app.ts`)

```ts
if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
    await getListEpisodes(request, response); 
}

if (request.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
    await getFilterEpisodes(request, response);
}
```

* `/episodes`: Lista todos os episódios
* `/episodes?name=flow`: Filtra por nome de podcast


---

## 📄 Como rodar o projeto

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor:

```bash
npm start
```

3. Faça requisições:

* `GET http://localhost:PORT/episodes`
* `GET http://localhost:PORT/episodes?name=flow`

---

## 📌 Futuras Melhorias

* Adicionar paginação
* Interface gráfica (front-end)
* Autenticação e perfil do usuário
* Integração com banco de dados

