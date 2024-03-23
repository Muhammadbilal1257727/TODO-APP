
function renderTodo(){
    div.innerHTML = ' '
    for(let i=0; i < array.length; i++){
        div.innerHTML += `
        <div class="text-center  text-white" id="todos">
        <div>
        <h1>${array[i]}</h1>
        </div>
        <div>
        <button type="button" onclick="edittodo(${i})" class="btn btn-primary mt-3">Edit</button>
        <button type="button" onclick="deletetodo(${i})"  class="btn btn-warning mt-3">Delete</button>
        </div>
       </div>
        `
      }
}



const input = document.querySelector('#exampleInputEmail1')
const div = document.querySelector("#todos")
const array =[]
  
  function addlist(){   
  array.push (input.value)
  renderTodo()
  console.log(array)

  
}

function edittodo(index){
    const updatedVal = prompt('enter updated value');
    array.splice(index , 1 , updatedVal);
    renderTodo()
}
function deletetodo(index){
    array.splice(index, 1);
    renderTodo()
}