const perguntas = [
    {
      pergunta: "Qual jogador é conhecido como 'Rei de Copas'?",
      resposta: [
        "D'Alessandro",
        "Andrés D'Alessandro",
        "Andrés Nicolás D'Alessandro",
      ],
      correta: 2,
    },
    {
      pergunta: "Em que ano o Sport Club Internacional conquistou sua primeira Copa Libertadores da América?",
      resposta: [
        "2006",
        "2010",
        "1983",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual foi o técnico que comandou o Internacional na conquista da Copa Libertadores da América em 2006?",
      resposta: [
        "Abel Braga",
        "Tite",
        "Fernandão",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual é o nome do estádio onde o Internacional manda seus jogos?",
      resposta: [
        "Estádio Beira-Rio",
        "Estádio Gigante da Beira-Rio",
        "Estádio José Pinheiro Borda",
      ],
      correta: 0,
    },
    {
      pergunta: "Quantas vezes o Internacional conquistou o Campeonato Brasileiro?",
      resposta: [
        "1 vez",
        "2 vezes",
        "3 vezes",
      ],
      correta: 1,
    },
    {
      pergunta: "Qual jogador do Internacional foi artilheiro do Campeonato Brasileiro em 1979?",
      resposta: [
        "Falcão",
        "Figura",
        "Firmino",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual é o mascote oficial do Sport Club Internacional?",
      resposta: [
        "Sací",
        "Chuleta",
        "Cachorrão",
      ],
      correta: 2,
    },
    {
      pergunta: "Qual é o nome do hino oficial do Internacional?",
      resposta: [
        "O Colorado",
        "Pra cima, Colorado",
        "Nação Colorado",
      ],
      correta: 0,
    },
    {
      pergunta: "Quem é o maior artilheiro da história do Internacional?",
      resposta: [
        "Fernandão",
        "Luiz Fernando Davi",
        "Carlitos",
      ],
      correta: 1,
    },
    {
      pergunta: "Qual é o ano de fundação do Sport Club Internacional?",
      resposta: [
        "1907",
        "1910",
        "1909",
      ],
      correta: 0,
    },
    {
      pergunta: "Quantas vezes o Internacional foi campeão da Copa do Brasil até 2022?",
      resposta: [
        "5 vezes",
        "6 vezes",
        "4 vezes",
      ],
      correta: 1,
    },
    {
      pergunta: "Qual jogador do Internacional foi campeão mundial pela seleção brasileira em 2002?",
      resposta: [
        "Kleber",
        "Ricardinho",
        "Edílson",
      ],
      correta: 2,
    },
    {
      pergunta: "Qual é o jogador com mais partidas disputadas pelo Internacional?",
      resposta: [
        "D'Alessandro",
        "Falcão",
        "Giacomo",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual foi o treinador que conquistou a Recopa Sul-Americana pelo Internacional em 2007?",
      resposta: [
        "Tite",
        "Abel Braga",
        "Fernandão",
      ],
      correta: 1,
    },
    {
      pergunta: "Qual foi o ano da fundação da 'Popular', torcida organizada do Internacional?",
      resposta: [
        "1972",
        "1969",
        "1977",
      ],
      correta: 2,
    },
    {
      pergunta: "Qual jogador do Internacional foi apelidado de 'O craque do século'?",
      resposta: [
        "Falcão",
        "Fernandão",
        "Figura",
      ],
      correta: 0,
    },
    {
      pergunta: "Quantas Libertadores o Internacional já conquistou até 2022?",
      resposta: [
        "1 vez",
        "2 vezes",
        "3 vezes",
      ],
      correta: 0,
    },
    {
      pergunta: "Em qual ano o Internacional conquistou o Mundial de Clubes da FIFA?",
      resposta: [
        "2006",
        "2010",
        "1979",
      ],
      correta: 1,
    },
    {
      pergunta: "Qual foi o primeiro título internacional conquistado pelo Internacional?",
      resposta: [
        "Copa Libertadores da América",
        "Copa Sul-Americana",
        "Copa Rio",
      ],
      correta: 2,
    },
    {
      pergunta: "Quem é o presidente do Internacional atualmente (2022)?",
      resposta: [
        "Marcelo Medeiros",
        "Fernando Carvalho",
        "Vitorio Piffero",
      ],
      correta: 0,
    }
];

const quiz = document.querySelector("#quiz")
const template = document.querySelector("template")

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + "de" + totalDePerguntas

//loop ou laço de repetição, fazendo um item de cada vez.
//no 1 ta clonando o template, no2 ta modificando o h3
for(const item of perguntas) {
 const quizItem = template.content.cloneNode(true)
 quizItem.querySelector('h3').textContent = item.pergunta

//aqui vai fazer a resposta, por meio do quizItem acessamos o dl e dt 
for(let resposta of item.resposta) {
  const dt = quizItem.querySelector('dl dt').cloneNode(true)
  dt.querySelector('span').textContent = resposta
  dt.querySelector('input').setAttribute('name', 'pergunta' + perguntas.indexOf(item))
  dt.querySelector('input').value = item.resposta.indexOf(resposta)
  dt.querySelector('input').onchange = (event) => {
    const estaCorreta = event.target.value == item.correta
   
   corretas.delete(item)
    if(estaCorreta) {
    corretas.add(item)
    }
    mostrarTotal.textContent = corretas.size + "de" + totalDePerguntas 
  }
  //colocado os valores(0 a 9) no value
  //aqui somente o input, para cada linha.
//aqui colocamos as respostas
quizItem.querySelector('dl').appendChild(dt)

}
//aqui removemos o A
quizItem.querySelector('dl dt').remove()
// coloca a pergunta na tela
quiz.appendChild(quizItem)
}