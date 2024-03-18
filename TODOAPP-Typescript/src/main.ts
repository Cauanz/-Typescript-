
const inputText = document.getElementById("textInput");
const submitButton = document.getElementById("submitButton");
const form = document.querySelector("form")
const taskList = document.getElementById("taskList");


let tasks = [];



form?.addEventListener("submit", () => {
  addTask()
  //TODO - chamar função, não sei se passo os valores como parametro ou só chamo a função como se ela fosse o eventListener fazendo tudo dentro dela
})

function addTask(value){

  let newTask = document.createElement("li");
  newTask 
  //TODO - Continuar aqui, criando task, para adicionar na array de tasks, talvez fazer localStorage também
}


function removeTask(){
  //FUNÇÃO PARA REMOVER, CHAMADA PELO BOTÃO DENTRO DA TASK
}


function finishTask(){
  //FUNÇÃO PARA MARCAR TASK COMO CONCLUIDA TAMBÉM CHAMADA PELO BOTÃO DENTRO DA TASK
}