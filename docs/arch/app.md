# Podcast Menager

### Descrição
* Um app no formato do Netflix, aonde possa centralizar diferentes episodios separados por categorias.

### Domínio
* Podcasts feitos em vídeo.

### Features
- Listar os epísodios dos podcasts em sessões de categorias.
    - [saúde, bodybuilder, mentalidade, humor]
- Filtrar epísodios por nome de podcasts.


## Especificando a Regra de Negócio.

#### Feature:

Listar os epísodios dos podcasts em sessões de categorias.

### Como vou listar os episodios(Ideia inicial):

GET: retornando lista de episodios ⬇️
- Vou retornar em uma api rest (json)
    - O Podcast
    - O episodio
    - Imagem de capa.
    - Link.
    - categorias.

response:

```js
[

    {
        podcastName: "flow",
        episode: "CBUM - Flow #319",
        videoId: "pQSuQmUfS30",
        cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
        category: ["saúde", "esporte","bodybuilder"]
    },

    {
        podcastName: "flow",
        episode: "RUBENS BARRICHELLO - Flow #339",
        videoId: "4KDGTdi0V4I",
        cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
        category: ["saúde", "esporte", "bodybuilder"]
    },

]
```

GET: retornando lista de episodios  baseado em um parametro enviado pelo cliente do nome do podcast ⬇️