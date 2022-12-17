let i = 0;
let array = Array();

function addElementToArray()   /*function nhap cac phan tu moi vao mang*/ {
    array[i] = parseInt(document.getElementById("inputValue").value);
    document.getElementById("result1").innerHTML = ("Giá trị " + array[i] + " đã được thêm vào mảng ở vị trí " + i);
    i++;
    console.log(array);
}

function devisibleBy5() {
    document.getElementById("result1").innerHTML =("<hr>"+"Các giá trị đã thêm vào mảng là "+array);
    let sum = 0;
    let i = 0;
    while (i < array.length) {
        if (array[i] % 5 === 0) {
            sum += array[i];
        }
        i++;
    }
    document.getElementById("result2").innerHTML =("Tổng các số chia hết cho 5 trong chuỗi vừa nhập là: "+sum);
}
