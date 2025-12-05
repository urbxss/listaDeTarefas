function adicionarTarefa(){

    // Pega o id do input
    let inputTarefas = document.getElementById("inputTarefas")
    // Atribui o valor colocado no input para tarefas
    let tarefa = inputTarefas.value
    // Pega o id da ul no html
    let listaTarefas = document.getElementById("listaTarefas")
    // Cria uma lista na variável novaTarefa
    let novaTarefa = document.createElement("li")
    // Pega o conteúdo de tarefa e coloca em novaTarefa
    novaTarefa.textContent = tarefa
    // Coloca novaTarefa como filha de listaTarefas
    listaTarefas.appendChild(novaTarefa)
    // Cria uma mensagem
    let mensagem = "Sua tarefa foi adicionada com sucesso!"
    // Pega o id mensagem no html e coloca a mensagem de cima
    document.getElementById("mensagem").textContent = mensagem
    // Limpa o campo do input toda vez que uma tarefa é adicionada
    inputTarefas.value=""
    
}