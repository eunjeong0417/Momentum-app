const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-form-input");
const todoUl = document.getElementById("todo-list");
const toDo = [];


function handleButton (event) {
    todoUl.removeChild(event.target.parentElement);
}

/*event가 발생한 버튼의 parentElement인 list태그를 가져온다
event.target.parentElement 는 곧 list태그.
ul태그에서 list태그를 삭제시켜준다 */

function saveTodos () {
    localStorage.setItem("todos", JSON.stringify(toDo) );
}

    /*JSON.stringify()를 사용하면 ()안에 배열을 string으로 만들어준다. 그래서 string으로 만들고 싶은 배열을 ()안에 넣는다 */

function paintToDo(inputValue){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = inputValue;
    const button = document.createElement("button");
    button.innerText = "delete";

    button.addEventListener("click", handleButton);


    li.appendChild(span)
    li.appendChild(button)
    todoUl.appendChild(li);
    console.log(todoUl);

    toDo.push(inputValue);
    saveTodos();
    /*localStorage에는 배열을 저장할 수 없고 텍스트만 저장할 수 있다 */
}

/*만든 list태그 안에 input의 값이 들어갈 수 있도록 만든다 */ 

/*createElement로 list 태그와 span 태그를 만들어준다. 그리고 맨 나중에 ul태그에 appendChild로 li태그를 추가해준다. */


function handleTodo (event) {
    event.preventDefault();
    const inputValue = todoInput.value;
    todoInput.value = "";
    paintToDo(inputValue);
}

/*todoInput의 value를 inputValue로 복사한다. 그리고 toddInput의 value를 초기화시킨다. 복사해둔 inputValue는 영향을 받지 않는다. */



localStorage.getItem("storage");

todoForm.addEventListener("submit", handleTodo );


/*form태그에 submit이벤트를 걸어준다 */



