const adicionar = document.querySelector(".adicionar");
const campoNome = document.querySelector(".campo_nome");
const campoEmail = document.querySelector(".campo_email");
const campoCelular = document.querySelector(".campo_celular");
const valores = document.querySelector(".valores");
const feedback = document.createElement("div");
function feedbackErro() {
  feedback.textContent = "Preencha todos os campos";
  feedback.classList.add("invalid-feedback", "feedback");
  valores.appendChild(feedback);
  campoNome.classList.add();
}
function exibirNome(campo) {
  const nome = document.createElement("div");
  const nomeLabel = document.createElement("span");
  nomeLabel.textContent = "Nome: ";
  nomeLabel.style.fontWeight = "bold";
  const nomeValor = document.createElement("span");
  nomeValor.textContent = campoNome.value;
  campo.appendChild(nome);
  nome.appendChild(nomeLabel);
  nome.appendChild(nomeValor);
}
function exibirEmail(campo) {
  const email = document.createElement("div");
  const emailLabel = document.createElement("span");
  emailLabel.textContent = "Email: ";
  emailLabel.style.fontWeight = "bold";
  const emailValor = document.createElement("span");
  emailValor.textContent = campoEmail.value;
  campo.appendChild(email);
  email.appendChild(emailLabel);
  email.appendChild(emailValor);
}
function exibirCelular(campo) {
  const celular = document.createElement("div");
  const celularLabel = document.createElement("span");
  celularLabel.textContent = "Celular: ";
  celularLabel.style.fontWeight = "bold";
  const celularValor = document.createElement("span");
  celularValor.textContent = campoCelular.value;
  campo.appendChild(celular);
  celular.appendChild(celularLabel);
  celular.appendChild(celularValor);
  apagarValores();
}
function apagarValores() {
  campoNome.value = "";
  campoEmail.value = "";
  campoCelular.value = "";
}
adicionar.addEventListener("click", () => {
  if (campoNome.value && campoEmail.value && campoCelular.value) {
    const campo = document.createElement("div");
    campo.classList.add("campo");
    valores.appendChild(campo)
    exibirNome(campo);
    exibirEmail(campo);
    exibirCelular(campo);
    feedback.remove();
  } else if (!valores.firstElementChild) {
    feedbackErro();
  }
});
