/*Crie uma aplicação capaz de receber informações de um atleta, bem como calcular parâmetros e exibi-los para o usuário.

Introdução

Os organizadores da competição realizada durante o projeto anterior gostaram muito da sua solução proposta e do seu perfil de desenvolvimento. Com isso, eles resolveram fazer uma nova encomenda utilizando a linguagem JavaScript, onde você deverá criar um software capaz de receber informações dos atletas e exibir a categoria, IMC, média calculada e demais informações capturadas.

Especificações

Você deverá criar uma classe Atleta para concentrar os atributos e métodos dos atletas.

A classe deverá receber os seguintes atributos:

nome
idade
peso
altura
notas
A classe deverá possuir os seguintes métodos:

calculaCategoria(), para calcular a categoria do atleta;
calculaIMC(), para calcular o IMC do atleta;
calculaMediaValida(), para calcular a média válida do atleta.
obtemNomeAtleta(), que retorna o nome do atleta
obtemIdadeAtleta(), que retorna a idade do atleta
obtemPesoAtleta(), que retorna o peso do atleta
obtemNotasAtleta(), que retorna as notas do atleta
obtemCategoria(), que retorna a categoria do atleta
obtemIMC(), que retorna o IMC do atleta
obtemMediaValida(), que retorna a média válida do atleta
Utilize as seguintes regras:

1. Para calcular a categoria

Infantil: 9 a 11 anos
Juvenil: 12 e 13 anos
Intermediário: 14 e 15 anos
Adulto: 16 a 30 anos
Sem categoria: demais idades
2. Para calcular o IMC

Fórmula: imc = peso / (altura x altura)
3. Para calcular a média válida

Método: Utilize o metodologia abordada no Projeto de Certificação 1.
Exemplo de entrada

// Declara o atleta
const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);
Exemplo de saída

Nome: Cesar Abascal
Idade: 30
Peso: 80
Altura: 1.7
Notas: 10,9.34,8.42,10,7.88
Categoria: Adulto
IMC: 27.68166089965398
Média válida: 9,25333333
Entrega

Você deverá criar um repositório na sua conta do GitHub chamado dados-atletas e adicionar na branch main/master um arquivo dados-atletas.js contendo a solução do projeto. Configure o repositório como público e insira o link para ele no campo Link da solução. Lembre-se de adicionar o link completo, começando com https://. Ele será parecido com isto:

https://github.com/nomedeusuario/notas-atletas
👉🏻 Dica 1: Para testar o seu projeto de certificação antes de enviá-lo, você pode abrir qualquer atividade do DEVstart, limpar o campo de digitação e inserir o código do seu projeto. Verifique a saída no console do DEVstart para se certificar de que seu projeto está funcionando corretamente.

👉🏻 Dica 2: Você pode procurar por "Como criar um arquivo readme.md" no Google e aprender uma habilidade nova. Assim, você pode criar um arquivo readme.md contendo toda a explicação sobre o seu projeto e como executá-lo. Isso será um diferencial muito interessante para o seu projeto que chamará a atenção de futuros recrutadores.*/
// dados-atletas.js

class Atleta {
  constructor(nome, idade, peso, altura, notas) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas;
    // cálculos iniciais (opcionais)
    this.categoria = this.calculaCategoria();
    this.imc = this.calculaIMC();
    this.mediaValida = this.calculaMediaValida();
  }

  calculaCategoria() {
    const idade = this.idade;
    if (idade >= 9 && idade <= 11) return "Infantil";
    if (idade === 12 || idade === 13) return "Juvenil";
    if (idade === 14 || idade === 15) return "Intermediário";
    if (idade >= 16 && idade <= 30) return "Adulto";
    return "Sem categoria";
  }

  calculaIMC() {
    // IMC = peso / (altura * altura)
    if (!this.altura || this.altura <= 0) return NaN;
    return this.peso / (this.altura * this.altura);
  }

  calculaMediaValida() {
    // copia e ordena as notas em ordem crescente
    const notasOrdenadas = [...this.notas].sort((a, b) => a - b);
    // pega as três notas do meio (elimina menor e maior)
    const notasComputadas = notasOrdenadas.slice(1, 4);
    // soma e calcula média
    const soma = notasComputadas.reduce((acc, n) => acc + n, 0);
    return soma / notasComputadas.length;
  }

  // getters simples
  obtemNomeAtleta() {
    return this.nome;
  }

  obtemIdadeAtleta() {
    return this.idade;
  }

  obtemPesoAtleta() {
    return this.peso;
  }

  obtemAlturaAtleta() {
    return this.altura;
  }

  obtemNotasAtleta() {
    return this.notas;
  }

  obtemCategoria() {
    // recalcula caso a idade tenha mudado
    this.categoria = this.calculaCategoria();
    return this.categoria;
  }

  obtemIMC() {
    this.imc = this.calculaIMC();
    return this.imc;
  }

  obtemMediaValida() {
    this.mediaValida = this.calculaMediaValida();
    return this.mediaValida;
  }
}

// Exemplo de uso com a entrada do enunciado
const atleta = new Atleta(
  "Cesar Abascal",
  30,
  80,
  1.70,
  [10, 9.34, 8.42, 10, 7.88]
);

// Exibindo os dados conforme solicitado
console.log(`Nome: ${atleta.obtemNomeAtleta()}`);
console.log(`Idade: ${atleta.obtemIdadeAtleta()}`);
console.log(`Peso: ${atleta.obtemPesoAtleta()}`);
console.log(`Altura: ${atleta.obtemAlturaAtleta()}`);
console.log(`Notas: ${atleta.obtemNotasAtleta().join(",")}`);
console.log(`Categoria: ${atleta.obtemCategoria()}`);
console.log(`IMC: ${atleta.obtemIMC()}`);
// média com 8 casas decimais (opcional). Remova toFixed se preferir o número bruto.
console.log(`Média válida: ${atleta.obtemMediaValida().toFixed(8)}`);

// Se quiser testar com vários atletas:
// const atletas = [ new Atleta(...), new Atleta(... ) ]
// atletas.forEach(a => { ...exibe... });
