// export serve para tornar funções, variáveis ou classes disponíveis em outros arquivos.

// Pode ser de dois tipos:

// Named export (nomeado)

// math.js
export function soma(a, b) { return a + b }
export const PI = 3.14


// Default export (padrão)

// math.js
export default function multiplica(a, b) { return a * b }

// Import

// import serve para trazer algo exportado de outro arquivo.

// Importando named exports (usa chaves { }):

import { soma, PI } from './math.js'


// Importando default export (sem chaves):

import multiplica from './math.js'


// Pode misturar:

import multiplica, { soma, PI } from './math.js'



// PARA EXPORTAR TUDO 

function soma(a, b) { return a + b }
function sub(a, b) { return a - b }
const PI = 3.14

export { soma, sub, PI }

// Nas duas formas, você pode depois importar tudo com:
import * as math from './math.js