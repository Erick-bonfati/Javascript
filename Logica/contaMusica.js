

const artista1 = 100
const artista2 = 300
const artista3 = 30
const artista4 = 22
const artista5 = 103
const artista6 = 607
const artista7 = 312
const artista8 = 65

const artistas = [artista1, artista2, artista3, artista4, artista5, artista6, artista7, artista8];

// Ordenar do maior para o menor
artistas.sort((a, b) => b - a);

console.log(artistas);
// Saída: [607, 312, 300, 103, 100, 65, 30, 22]

