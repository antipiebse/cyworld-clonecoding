let isStarted = false;

let randomToken = () => {
    if (isStarted === false) {
        isStarted = true;
        // 타이머가 작동 중이 아닐 경우
        // token generator
        let auth = document.getElementById("auth");
        let token = String(Math.floor((Math.random() * 1000000))).padStart(6, "0");
        auth.innerText = token;

        // random color
        let colorCode = "#" + Math.round(Math.random() * 0xffffff).toString(16);
        auth.style.color = colorCode;

        // timer
        let time = 180;
        let timer = null;

        timer = setInterval(function () {
            if (time >= 0) {
                let min = String(Math.floor(time / 60));
                let sec = String(time % 60).padStart(2, "0");
                document.getElementById("time").innerText = min + ":" + sec;
                time = time - 1;
            } else {
                document.getElementById("check").disabled = 'disabled';
                isStarted = false;
                clearInterval(timer);
            }
        }, 1000)
    } else {
        // 타이머가 작동 중일 경우
        alert("타이머가 이미 작동 중입니다.");
    }
}

function token() {
    let token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");

}