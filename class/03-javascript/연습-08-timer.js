// 3초가 지나면 log가 찍히는 함수
setTimeout(function (){
    console.log("3초가 지났습니다")    
},3000);

// 1초가 지날 때마다 log가 찍히는 함수
setInterval(function(){
    console.log("1초가 지났습니다.");
}
    ,1000)

// // 1초마다 알람이 뜨는 함수
// let time = 10;
// setInterval(function(){
//     if (time >= 0){
//         console.log(time);
//         time = time - 1;}
// },1000);

// 3분 타이머 실습
let time = 180;
setInterval(function(){
    if (time >= 0){
        const min = String(Math.floor(time/60)).padStart(2, "0"); 
        const sec = String(time % 60).padStart(2, "0");
        console.log(min + ":" + sec);
        time = time - 1;
    }
}, 1000)



