function checkValidation() {

    const email = document.getElementById('email').value;
    const pw1 = document.getElementById('password1').value;
    const pw2 = document.getElementById('password2').value;
    
    // email과 pw1,pw2가 모두 빈 값이 아닐 때
    // mybutton을 활성화하고, 배경색상을 노란색으로 변경
    // 그렇지 않을 때 (else)
    // mybutton을 비활성화하고, 배경색상을 삭제

    if(email !== "" && pw1 !== "" && pw2 !== "") {
        document.getElementById('mybutton').disabled = false;
        document.getElementById('mybutton').setAttribute('style','background-color: yellow');
    } else {
        document.getElementById('mybutton').disabled = true;
        document.getElementById('mybutton').setAttribute('style','background-color: none');

    }

}   