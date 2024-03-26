const localStorageName = 'lista-de-tarefas'

function validarExistente() {
    let values = JSON.parse(localStorage.getItem(localStorageName) || "[]")
    let inputValue = document.getElementById('inputTarefas').value
    let existente = values.find(x => x.name == inputValue)
    return !existente ? false : true
}
function novaTarefa() {
    let input = document.getElementById('inputTarefas')
    input.style.border = ''
    
    if (!input.value) {
        input.style.border = 'solid 1px red'
        alert('Digite uma tarefa')
    } 
    else if (validarExistente()) {
        input.style.border = '1px solid green'
        alert('Essa tarefa já existe')
    }
    else {
        let values = JSON.parse(localStorage.getItem(localStorageName) || "[]")
        values.push({
            name: input.value
        })
        localStorage.setItem(localStorageName,JSON.stringify(values))
        mostrarTarefas()
    }
    input.value = ''
}

function mostrarTarefas() {
    let values = JSON.parse(localStorage.getItem(localStorageName) || "[]")
    let lista = document.getElementById('lista')
    lista.innerHTML = ''
    for (let i = 0; i < values.length; i++) {
        lista.innerHTML += `<li>${values[i]['name']}<button id="apagarTarefa" onclick='removerTarefa("${values[i]['name']}")'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16"><path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/></svg></button></li>`
    }
}

function removerTarefa(data) {
    let values = JSON.parse(localStorage.getItem(localStorageName) || "[]")
    let index = values.findIndex(x => x.name == data)
    values.splice(index,1)
    localStorage.setItem(localStorageName,JSON.stringify(values))
    mostrarTarefas()
}

mostrarTarefas()