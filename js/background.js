const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
]
/*이미지 배열을 만들때는 파일명과 동일하게 해주면 된다. */



const randomImg = (images[Math.floor(Math.random() * images.length)]);

/*자바스크립트에서 생성해서 html에 추가해준다 */

const chosenImg = document.createElement("img");
chosenImg.classList.add("bgimage");



chosenImg.src = `img/${randomImg}`;

document.body.appendChild(chosenImg)