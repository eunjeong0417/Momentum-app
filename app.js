const loginForm = document.querySelector("#login-form");
const link = document.querySelector("a");

const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");


function handleClick (event) {
    event.preventDefault();
    console.log(loginInput.value);
}

function handleLink (event) {
    console.log(event);
    alert('hello');
}

loginForm.addEventListener("submit", handleClick );
link.addEventListener("click", handleLink)

/*form태그에 이벤트를 걸어준다.
엔터를 누르거나 버튼이 클릭되면 handleClick이 실행된다.
기본적으로 실행되는 이벤트를 막고 싶다면 preventDefault를 넣어주면 된다*/