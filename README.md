# Momentum-app
자바스크립트로 Momentum app을 만들어보는 토이 프로젝트

- 랜덤 이미지 변경
  Math.random() 함수를 사용해서 이미지 파일을 랜덤으로 보여줄 수 있도록 만들었습니다.
  
  - 시간은 setInterval 함수로 만들었고 1초 마다 시간이 업데이트될 수 있도록 만들었습니다.

- 로그인을 하면 localstorage에 저장되어 페이지가 리렌더링될 때에는 로그인창이 없는 새로운 화면이 나타날 수 있도록 만들었습니다.
- localstorage에 저장하는 기능은 localStorage.setItem("username"); 
- localstorage에서 불러오는 기능은 localStorage.getItem("username"); 
