const loginForm = document.querySelector("#login-form");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");


function handleClick (event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add("hidden");
    console.log(username);
    greeting.innerText = "hello " + username;
    greeting.classList.remove("hidden");
}


loginForm.addEventListener("submit", handleClick );


/*form태그에 이벤트를 걸어준다.
엔터를 누르거나 버튼이 클릭되면 handleClick이 실행된다.
기본적으로 실행되는 이벤트를 막고 싶다면 preventDefault를 넣어주면 된다*/