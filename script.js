// 변수 pick 선언: .pick를 변수 pick에 삽입
let explain = document.querySelector(".explain");
let moved = false;

window.addEventListener("scroll", function(){
    // 변수 value = 스크롤 수치
    let value = this.window.scrollY;

    // 콘솔에 스크롤 수치인 value 값을 출력
    console.log("scrollY", value);

    // 스크롤 수치가 750 이상이면 = 애니메이션 다시 재생해야할 타이밍 
    if(value > 450){
        // 실행됐던 애니메이션을 다시 되돌리는 unPick이라는 애니메이션 실행
        explain.style.animation = 'unExplain 1s ease-out forwards';
    } else {
        // 스크롤 수치가 750 미만이면(스크롤을 충분히 내렸으면) 애니메이션 pick 다시 시작
        explain.style.animation = "explain 1s ease-out";
    }
})

