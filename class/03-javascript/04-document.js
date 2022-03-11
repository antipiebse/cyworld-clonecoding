let count = 0;
function pressedBtn() {
    if (count%2 ===0) {
        document.getElementById("greeting").innerText = "반갑습니다";
    }
    else {
        document.getElementById("greeting").innerText = "안녕하세요";
    }
    return count++;
}

// token generator
let token = () => {
    let random = String(Math.floor((Math.random() * 1000000))).padStart(6, "0");
    document.getElementById("token").innerText = random;
}

