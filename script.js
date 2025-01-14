const localStorageName = "lista-de-tarefas";

function validarExistente() {
  let values = JSON.parse(localStorage.getItem(localStorageName) || "[]");
  let inputValue = document.getElementById("inputTarefas").value;
  let existente = values.find((x) => x.name == inputValue);
  return !existente ? false : true;
}
function novaTarefa() {
  let input = document.getElementById("inputTarefas");
  input.style.border = "";

  if (!input.value) {
    input.style.border = "solid 1px red";
    alert("Digite uma tarefa");
  } else if (validarExistente()) {
    input.style.border = "1px solid green";
    alert("Essa tarefa já existe");
  } else {
    let values = JSON.parse(localStorage.getItem(localStorageName) || "[]");
    values.push({
      name: input.value,
    });
    localStorage.setItem(localStorageName, JSON.stringify(values));
    mostrarTarefas();
  }
  input.value = "";
}

function mostrarTarefas() {
  let values = JSON.parse(localStorage.getItem(localStorageName) || "[]");
  let lista = document.getElementById("lista");
  lista.innerHTML = "";
  for (let i = 0; i < values.length; i++) {
    lista.innerHTML += `<li>${values[i]["name"]}<button id="apagarTarefa" onclick='removerTarefa("${values[i]["name"]}")'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
<path d="M 21 0 C 19.354545 0 18 1.3545455 18 3 L 18 5 L 10.15625 5 A 1.0001 1.0001 0 0 0 9.8378906 5 L 8 5 A 1.0001 1.0001 0 1 0 8 7 L 9.0859375 7 L 12.705078 47.5 L 12.707031 47.509766 C 12.857262 48.862232 13.981872 50 15.400391 50 L 34.599609 50 C 36.018128 50 37.142691 48.862266 37.292969 47.509766 L 37.294922 47.5 L 40.914062 7 L 42 7 A 1.0001 1.0001 0 1 0 42 5 L 40.173828 5 A 1.0001 1.0001 0 0 0 39.841797 5 L 32 5 L 32 3 C 32 1.3545455 30.645455 0 29 0 L 21 0 z M 21 2 L 29 2 C 29.554545 2 30 2.4454545 30 3 L 30 5 L 20 5 L 20 3 C 20 2.4454545 20.445455 2 21 2 z M 11.09375 7 L 18.832031 7 A 1.0001 1.0001 0 0 0 19.158203 7 L 30.832031 7 A 1.0001 1.0001 0 0 0 31.158203 7 L 38.90625 7 L 35.306641 47.289062 C 35.256918 47.736563 34.981091 48 34.599609 48 L 15.400391 48 C 15.018909 48 14.743082 47.736563 14.693359 47.289062 L 11.09375 7 z M 18.984375 9.9863281 A 1.0001 1.0001 0 0 0 18 11 L 18 44 A 1.0001 1.0001 0 1 0 20 44 L 20 11 A 1.0001 1.0001 0 0 0 18.984375 9.9863281 z M 24.984375 9.9863281 A 1.0001 1.0001 0 0 0 24 11 L 24 44 A 1.0001 1.0001 0 1 0 26 44 L 26 11 A 1.0001 1.0001 0 0 0 24.984375 9.9863281 z M 30.984375 9.9863281 A 1.0001 1.0001 0 0 0 30 11 L 30 44 A 1.0001 1.0001 0 1 0 32 44 L 32 11 A 1.0001 1.0001 0 0 0 30.984375 9.9863281 z"></path>
</svg></button></li>`;
  }
}

function removerTarefa(data) {
  let values = JSON.parse(localStorage.getItem(localStorageName) || "[]");
  let index = values.findIndex((x) => x.name == data);
  values.splice(index, 1);
  localStorage.setItem(localStorageName, JSON.stringify(values));
  mostrarTarefas();
}

mostrarTarefas();
