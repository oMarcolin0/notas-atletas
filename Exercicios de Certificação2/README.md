# 🏅 Dados dos Atletas

Este projeto implementa uma classe `Atleta` em JavaScript que recebe informações de um atleta
(nome, idade, peso, altura e notas), calcula sua categoria, IMC e a média válida das notas
(descartando a maior e a menor), e exibe os resultados no console.

---

## 📌 Regras implementadas

### Categorias por idade
- Infantil: 9 a 11 anos  
- Juvenil: 12 e 13 anos  
- Intermediário: 14 e 15 anos  
- Adulto: 16 a 30 anos  
- Sem categoria: demais idades

### IMC
`IMC = peso / (altura * altura)`

### Média válida
Ordena as 5 notas, descarta a menor e a maior, e calcula a média das 3 notas restantes.

---

## 🧾 Arquivos
- `dados-atletas.js` — implementação da classe `Atleta` e exemplo de uso.
- `README.md` — este arquivo.

---

## 🚀 Como executar

### Requisitos
- Node.js instalado (opcional: você pode também rodar direto no console do navegador).

### Executando com Node.js
1. Abra o terminal na pasta do projeto:
```bash
node dados-atletas.js
