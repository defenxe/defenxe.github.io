let explain = document.querySelector(".explain");
let moved = false;

// popup
var target = document.querySelectorAll('.btn_open');
var btnPopClose = document.querySelectorAll('.pop_wrap .btn_close');
var targetID;


window.addEventListener("scroll", function(){
    
    let value = this.window.scrollY;

    
    console.log("scrollY", value);

    
    if(value > 450){
        
        explain.style.animation = 'unExplain 1s ease-out forwards';
    } else {
        
        explain.style.animation = "explain 1s ease-out";
    }
})

// popup: for문으로 target 개수(popup open 버튼 개수)만큼 실행
for(var i =0; i < target.length; i++){
    target[i].addEventListener('click', function(){
        targetID = this.getAttribute('href');
        document.querySelector(targetID).style.display = 'block';
    });
}
for(var j=0; j < target.length; j++){
    btnPopClose[j].addEventListener('click', function(){
        this.parentNode.parentNode.style.display = 'none';
    });
}
