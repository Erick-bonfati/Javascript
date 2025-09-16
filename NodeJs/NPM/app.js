
// Versão de uma dependencia do node

// 2.       1.      0
// major    minor   patch

// Em resumo elas funcionam assim:

// MAJOR - Significa uma mudança geral em várias funções que vão quebrar as funcionalidades com as versões anteriores = 3.0.0
// MINOR - adionar um recurso novo sem atrapalhar as funções que ja existem, mantendo o funcionamento com o major = 2.2.0
// PATCH - apenas para correções de bugs = 2.1.1

// Listar pacotes instalados no node_modules

// npm ls --depth=0 - retorna todas dependencia que temos instaladas, sem expandir paginas dentro das dependencias(visualização fica bagunçada)

// Verificar pacotes desatualizados = npm outdated - exibe pacote, com versão atual - recomendada - e mais recente

// Para atualizar para está versão recomendada: npm update joga tudo para a versão recomendada

// E para instalar qualquer versão - npm install express@(numero-versão) = npm install express@4.0.11 ou express@4.x ( 4.x pega a versão mais recente dentro da versão 4)

// Para desinstalar uma dependencia: npm uninstall express ou npm unistall express webpack(remove mais de um)