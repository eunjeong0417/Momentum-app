const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const todoInput = todoForm.querySelector("input");
const todoUl = document.getElementById("todo-list");

function paintToDo(inputValue){
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = inputValue;
       /*만든 list태그 안에 input의 값이 들어갈 수 있도록 만든다 */ 
    todoUl.appendChild(li);
    console.log(todoUl);
}

/*createElement로 list 태그와 span 태그를 만들어준다. 그리고 맨 나중에 ul태그에 appendChild로 li태그를 추가해준다. */


function handleTodo (event) {
    event.preventDefault();
    const inputValue = todoInput.value;
    todoInput.value = "";
    paintToDo(inputValue);
}

/*todoInput의 value를 inputValue로 복사한다. 그리고 toddInput의 value를 초기화시킨다. 복사해둔 inputValue는 영향을 받지 않는다. */



todoForm.addEventListener("submit",handleTodo )

/*form태그에 submit이벤트를 걸어준다 */

