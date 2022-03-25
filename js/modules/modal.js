export default function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle('ativo');
  }

  function cliqueForaModal(event) {
    if (event.target === this) {
      toggleModal(event);
    }
  }

  if (botaoAbrir && botaoFechar && containerModal) {
    botaoAbrir.addEventListener('click', toggleModal);
    botaoFechar.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', cliqueForaModal);
  }
}

/* Esse condigo faz o mesmo que o de cima porem em cima está sendo contruido com o toggle
  function abrirModal(event) {
      event.preventDefault();
      containerModal.classList.add('ativo');
    }

    function fecharModal(event) {
      event.preventDefault();
      containerModal.classList.remove('ativo');
    }

    function cliqueForaModal(event) {
      if(event.target === this) {
        fecharModal(event);
      }
    }

    botaoAbrir.addEventListener('click', abrirModal);
    botaoFechar.addEventListener('click', fecharModal);
    containerModal.addEventListener('click', cliqueForaModal);
*/
