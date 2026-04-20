let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

function calcularMediaNotas(listaAtletas) {
    for (let i = 0; i < listaAtletas.length; i++) {
        let atleta = listaAtletas[i];
        
        // 1. Ordenar as notas em ordem crescente
        // Usamos uma função de comparação (a, b) => a - b para garantir a ordem numérica correta
        let notasOrdenadas = atleta.notas.sort((a, b) => a - b);
        
        // 2. Eliminar a maior e a menor nota usando slice
        // O slice(1, 4) pega os índices 1, 2 e 3 (as três notas do meio)
        let notasComputadas = notasOrdenadas.slice(1, 4);
        
        // 3. Calcular a soma das notas restantes usando forEach
        let soma = 0;
        notasComputadas.forEach(nota => {
            soma += nota;
        });
        
        // 4. Calcular a média
        let media = soma / notasComputadas.length;
        
        // 5. Apresentar os resultados conforme a especificação
        console.log(`Atleta: ${atleta.nome}`);
        console.log(`Notas Obtidas: ${atleta.notas}`);
        console.log(`Média Válida: ${media}`);
        console.log(""); // Linha em branco para separar os atletas
    }
}

// Executa a função
calcularMediaNotas(atletas);
