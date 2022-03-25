export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]');
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;

  const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]);

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add('aberto');
  }
}

/*
  const agora = new Date();
  console.log(agora)

  const futuro = new Date('Dec 24 2023 23:59');
  console.log(futuro)

  NEW DATE()
  O construtor Date cria um objeto contendo valores como mês,
  dia, ano, horário e mais. A data é baseada no relógio interno do computador.
  const agora = new Date();
  agora;
  // Semana Mês Dia Ano HH:MM:SS GMT
  agora.getDate() // Dia
  agora.getDay() // Dia da Semana ex: 5 = Fri
  agora.getMonth() // Número dia mês
  agora.getFullYear() // Ano
  agora.getHours() // Hora
  agora.getMinutes() // Minutos
  agora.getTime() // ms desde 1970
  agora.getUTCHours() - 3 // Brasília

  GETTIME()
  O método getTime() mostra o tempo total em milessegundos desde o dia 1 de janeiro de 1970.
  const agora = new Date();
  agora.getTime(); //

  // total de dias desde 1 de janeiro de 1970
  const diasPassados = agora.getTime() / (24 * 60 * 60 * 1000);

  DIAS ATÉ
  Podemos criar um objeto com uma data no futuro, passando uma string com o valor da data.
  const agora = new Date();
  const promocao = new Date('December 24 2018 23:59');

  function converterEmDias(time) {
    return time / (24 * 60 * 60 * 1000);
  }

  const diasAgora = converterEmDias(agora);
  const diasPromocao = converterEmDias(promocao);

  const faltam = diasPromocao - diasAgora;
*/
