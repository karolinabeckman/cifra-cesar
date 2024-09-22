const alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const seletor = document.getElementById('deslocamento')
const texto = document.getElementById('para-criptografar')
const botao = document.getElementById('botao')
const resposta = document.getElementById('resposta')

for(let i = 0; i < alfabeto.length; i++){
  seletor.innerHTML = seletor.innerHTML + `<option value="${i}">${alfabeto[i]}</option>`
}

// -> Adiciona um eventListener no botão para realizar uma ação após o comportamento definido, no caso o click
botao.addEventListener("click", () => {
  let textoParaCriptografar = texto.value
  let deslocamento = +seletor.value //->Coloca o mais na frente para converter para número

  let cifrado = cifrar(textoParaCriptografar, deslocamento)
  resposta.classList.remove('invisivel')
  resposta.innerText = cifrado
})

function cifrar(texto, deslocamento){
  let textoMaiusculo = texto.toUpperCase().split("")
  let textoCriptografado = []

  for(let i = 0; i < textoMaiusculo.length; i++){
    let indiceDaLetra = alfabeto.indexOf(textoMaiusculo[i])
    if (indiceDaLetra >= 0){
      textoCriptografado.push(letraPorIndice(indiceDaLetra+deslocamento))
    } else {
      textoCriptografado.push(textoMaiusculo[i])
    }
  }
  return textoCriptografado.join("")
}

function letraPorIndice(indice){
  let indiceFinal
  if (indice >= 0){
    indiceFinal = indice % alfabeto.length
  } else {
    indiceFinal = alfabeto.length + indice % alfabeto.length
  }
  return alfabeto[indiceFinal]
}



// // //-> Minhas implementações
// const selectLetras = document.querySelector('#deslocamento')
// const alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// // for (let letra of alfabeto){
// //   selectLetras.innerHTML += `<option>${letra}</option>`
// // }

// for (letra of alfabeto){
//   const option = document.createElement('option')
//   option.innerHTML += letra
//   selectLetras.appendChild(option)
// }
