const alunos = ['Bruno', 'Lucas', 'João', 'Marcelo'];
const aluno2 = alunos.map(function(itemAtual) {
    return {
        nome: itemAtual,
        nota: Math.round(Math.random(0, 10) * 10)
    }
})

const notaMaior = aluno2.filter(function(itemAtual) {
    return itemAtual.nota >= 6
})

console.log(notaMaior)