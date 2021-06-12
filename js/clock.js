const clock = document.querySelector("#clock");

function getClock () {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

/*padStart함수는 string 타입의 데이터를 보다 길게 만들어야할 때 사용한다. 원하는 길이를 충족하지 않으면 앞쪽에 문자를 추가해서 원하는 길이를 맞춰주는 기능.

위의 getClock함수에서는 시간이 숫자이기 때문에 앞에 String으로 감싸서 문자열로 만들어준 뒤 padStart함수를 적용한다*/

getClock();
/*setInterval(getClock, 1000);*/
/*setInterval함수를 사용하지 않으면 한번만 시간이 출력된다 */

/*setInterval(hello, 5000); 먼저 호출하고자 하는 함수명 hello를 쓰고 원하는 시간 간격을 쓴다

setTimeout(hello, 5000);*/