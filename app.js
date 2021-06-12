const loginForm = document.getElementById("login-form");

const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function handleClick () {
    event.preventDefault();
    const username = loginInput.value;
    console.log(username);    
}

loginButton.addEventListener("click", handleClick);

/*form태그로 input태그 전체를 감싸준경우 엔터를 누르고 input에 입력된 값이 없으면 자동으로 submit이 되기 때문에 버튼에 click이벤트를 주지 않아도 된다 */