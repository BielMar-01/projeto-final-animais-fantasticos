import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {
  // criar a div contendo informações com o total de animais
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;

    return div;
  }

  // preenche cada animal no DOM
  const numeroGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numeroGrid.appendChild(divAnimal);
  }

  // anima os numeros de cada animal
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }
  // puxa os animais atraves de um arquivo json
  // e cria cada animai usunado o crateAnimal
  async function criarAnimais() {
    try {
      // Featch, espera a resposta e transfoma em JSON
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();

      // apos a transformação de json, ativa as funções
      // para preensher e animar os números
      animaisJSON.forEach((animal) => preencherAnimais(animal));
      animaAnimaisNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  return criarAnimais();
}
