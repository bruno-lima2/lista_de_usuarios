const campoNome = document.querySelector(".campo_nome");
const nome = document.querySelector(".nome");
const feedbackNome = document.createElement("div");
const campoEmail = document.querySelector(".campo_email");
const email = document.querySelector(".email");
const feedbackEmail = document.createElement("div");
const campoCelular = document.querySelector(".campo_celular");
const celular = document.querySelector(".celular");
const feedbackCelular = document.createElement("div");
const adicionar = document.querySelector(".adicionar");
const campos = document.querySelector(".campos");
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
function limparValores() {
  nome.value = "";
  email.value = "";
  celular.value = "";
}
function criarCampo() {
  const usuario = {
    nome: nome.value,
    email: email.value,
    celular: celular.value,
  };
  usuarios.push(usuario);
  salvarDados();
  const campo = document.createElement("div");
  campo.classList.add("campo");
  campos.appendChild(campo);
  const container = document.createElement("div");
  campo.appendChild(container);
  botaoRemover(campo, usuario);
  adicionarValores(container, "Nome: ", nome.value);
  adicionarValores(container, "Email: ", email.value);
  adicionarValores(container, "Celular: ", celular.value);
}
function botaoRemover(campo, usuario) {
  const remover = document.createElement("button");
  remover.classList.add("btn", "btn-danger", "remover");
  remover.textContent = "X";
  campo.appendChild(remover);
  remover.addEventListener("click", () => {
    campo.remove();
    usuarios = usuarios.filter(
      (u) =>
        !(
          u.nome === usuario.nome &&
          u.email === usuario.email &&
          u.celular === usuario.celular
        ),
    );
    salvarDados();
  });
}
function adicionarValores(container, label, valor) {
  const wrapper = document.createElement("div");
  container.appendChild(wrapper);
  const labelAdicionado = document.createElement("span");
  labelAdicionado.textContent = label;
  labelAdicionado.style.fontWeight = "bold";
  wrapper.appendChild(labelAdicionado);
  const valorAdicionado = document.createElement("span");
  valorAdicionado.textContent = valor;
  wrapper.appendChild(valorAdicionado);
}
function validacaoNome() {
  if (nome.value.trim().length < 3) {
    feedbackNome.textContent = "O nome é inválido";
    feedbackNome.classList.add("invalid-feedback", "feedback");
    campoNome.appendChild(feedbackNome);
    return false;
  } else {
    feedbackNome.remove();
    return true;
  }
}
nome.addEventListener("blur", validacaoNome);
function validacaoEmail() {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(email.value)) {
    feedbackEmail.textContent = "O email é inválido";
    feedbackEmail.classList.add("invalid-feedback", "feedback");
    campoEmail.appendChild(feedbackEmail);
    return false;
  } else {
    feedbackEmail.remove();
    return true;
  }
}
email.addEventListener("blur", validacaoEmail);
function mascaraCelular() {
  celular.addEventListener("input", () => {
    celular.value = celular.value.replace(/\D/g, "").slice(0, 11);
    let valor = celular.value.replace(/\D/g, "").slice(0, 11);
    let numeros = valor;
    if (valor.length > 0) {
      numeros = `(${valor.slice(0, 2)}`;
    }
    if (valor.length > 2) {
      numeros = `(${valor.slice(0, 2)}) ${valor.slice(2, 3)}`;
    }
    if (valor.length > 3) {
      numeros = `(${valor.slice(0, 2)}) ${valor.slice(2, 3)} ${valor.slice(3, 7)}`;
    }
    if (valor.length > 7) {
      numeros = `(${valor.slice(0, 2)}) ${valor.slice(2, 3)} ${valor.slice(3, 7)}-${valor.slice(7, 11)}`;
    }
    celular.value = numeros;
  });
}
mascaraCelular();
function validacaoCelular() {
  if (celular.value.replace(/\D/g, "").length !== 11) {
    feedbackCelular.textContent = "O número de celular é inválido";
    feedbackCelular.classList.add("invalid-feedback", "feedback");
    campoCelular.appendChild(feedbackCelular);
    return false;
  } else {
    feedbackCelular.remove();
    return true;
  }
}
celular.addEventListener("blur", validacaoCelular);
function salvarDados() {
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
}
function carregarDados() {
  usuarios.forEach((usuario) => {
    const campo = document.createElement("div");
    campo.classList.add("campo");
    campos.appendChild(campo);
    const container = document.createElement("div");
    campo.appendChild(container);
    botaoRemover(campo, usuario);
    adicionarValores(container, "Nome: ", usuario.nome);
    adicionarValores(container, "Email: ", usuario.email);
    adicionarValores(container, "Celular: ", usuario.celular);
  });
}
carregarDados();
adicionar.addEventListener("click", () => {
  const nomeOk = validacaoNome();
  const emailOk = validacaoEmail();
  const celularOk = validacaoCelular();
  if (nomeOk && emailOk && celularOk) {
    feedbackEmail.remove();
    feedbackCelular.remove();
    criarCampo();
    limparValores();
  }
});
