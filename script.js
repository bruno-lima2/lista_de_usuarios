const adicionar = document.querySelector(".adicionar");
const campoNome = document.querySelector(".campo_nome");
const campoEmail = document.querySelector(".campo_email");
const campoCelular = document.querySelector(".campo_celular");
const valores = document.querySelector(".valores");
const feedback = document.createElement("div");
function criarCampo() {
  const campo = document.createElement("div");
  campo.classList.add("campo");
  valores.appendChild(campo);
  const labelNome = document.createElement("div")
  const labelEmail = document.createElement("div")
  const labelCelular = document.createElement("div")
  labelNome.textContent = "Nome: "
  labelEmail.textContent = "Email: "
  labelCelular.textContent = "Celular: "
  labelNome.style.fontWeight = "bold"
  labelEmail.style.fontWeight = "bold"
  labelCelular.style.fontWeight = "bold"
  campo.appendChild(labelNome)
  campo.appendChild(labelEmail)
  campo.appendChild(labelCelular)
  limparDados()
}
function feedbackErro() {
  feedback.textContent = "Preencha todos os campos";
  feedback.classList.add("invalid-feedback", "feedback");
  valores.appendChild(feedback);
}
function limparDados() {
  campoNome.value = ""
  campoEmail.value = ""
  campoCelular.value = ""
}
adicionar.addEventListener("click", () => {
  feedback.remove()
  if (campoNome.value && campoEmail.value && campoCelular.value) {
    criarCampo();
  } else {
    feedbackErro();
  }
});
