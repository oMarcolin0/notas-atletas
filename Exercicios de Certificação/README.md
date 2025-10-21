# 🏅 Notas dos Atletas

Este projeto foi desenvolvido como parte de um desafio de programação em JavaScript.  
O objetivo é criar uma aplicação capaz de **receber o nome e as notas de atletas**,  
**calcular a média válida** (descartando a maior e a menor nota) e exibir o resultado.

---

## 📘 Descrição do problema

Em uma competição de ginástica artística, cada atleta recebe 5 notas de jurados.  
A média válida é calculada **ignorando a maior e a menor nota**,  
e considerando apenas as três notas intermediárias.

---

## ⚙️ Lógica do programa

- Cada atleta é representado por um objeto com:
  - `nome`: nome do atleta  
  - `notas`: array contendo 5 notas

- O programa:
  1. Ordena as notas em ordem crescente.
  2. Remove a menor e a maior nota.
  3. Calcula a média das três notas restantes.
  4. Exibe o nome, as notas originais e a média válida.

---

## 💻 Código principal

O código está no arquivo [`notas-atletas.js`](./notas-atletas.js).

Exemplo de saída:

