function cntButton() {
    let n=document.getElementById("inNumber").value;
    let giaithua = 1;
    for (let i = 1; i <= n; i++) {
        giaithua *= i;
    }
    document.getElementById("result").innerHTML ="Gia thua cua " + n + " la " + giaithua;
}