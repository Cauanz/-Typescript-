const inputText = document.getElementById("textInput") as HTMLInputElement;
const submitButton = document.getElementById("submitButton") as HTMLButtonElement;
const form = document.querySelector("form") as HTMLFormElement;
const taskList = document.getElementById("taskList") as HTMLElement;
const removeButton = document.getElementsByClassName('removeButton') as HTMLCollectionOf<HTMLButtonElement>;
const finishButton = document.getElementsByClassName('finishButton')


let tasks: string[] = [];

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask()
  updateState()
})

Array.from(removeButton).forEach(button => {
  button.addEventListener("click", (e) => {
    let element = e.target.parentNode instanceof Element;
    if(element){
      let attribute = element?.getAttribute("data-task");
      console.log(attribute)
    }
    //TODO Chamar função de apagar passando data-task(ID)
  })
});


function updateState(){
  for (let i = 0; i < tasks.length; i++) {
    if(!taskList?.querySelector(`li[data-task="${tasks[i]}"]`)){
      let newTask = document.createElement("li");

      // let div = document.createElement("div");

      let removeButton = document.createElement("button");
      removeButton.classList.add("removeButton");
      removeButton.textContent = "Remover"

      let finishButton = document.createElement("button");
      finishButton.classList.add("finishButton");
      finishButton.textContent = "Concluir"
      
      newTask.textContent = tasks[i];
      newTask.setAttribute("data-task", tasks[i]);
      
      newTask.appendChild(removeButton)
      newTask.appendChild(finishButton);
      // div.appendChild(newTask)

      taskList?.appendChild(newTask);
    }
  }
}

function addTask(){
  tasks.push(inputText?.value);
}


function removeTask(itemId){
}


function finishTask(){
  //FUNÇÃO PARA MARCAR TASK COMO CONCLUIDA TAMBÉM CHAMADA PELO BOTÃO DENTRO DA TASK
}