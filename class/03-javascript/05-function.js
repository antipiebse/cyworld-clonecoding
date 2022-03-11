let randomToken = () => {
    let token = String(Math.floor((Math.random() * 1000000))).padStart(6, "0");
    document.getElementById("auth").innerText = token;
    
    let colorCode= "#" + Math.round(Math.random() * 0xffffff).toString(16);
    document.getElementById("auth").style.color = colorCode;
}

