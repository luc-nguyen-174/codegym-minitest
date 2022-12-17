function count() {
    let begin=document.getElementById ("begin").value;
    let start =document.getElementById ("begin").value;
    let n = document.getElementById("txt").value;
    let count = 0;
    let array= Array();
    let i=0;
    while (count < n) {
        if (start % 3 === 0) {
            array[i]=start;
            i++;
            document.getElementById ("prnt").innerHTML="Chuỗi " + n +" số chia hết cho 3 bắt đầu từ "+begin +" là: " + array.join(", ");
            count++;
        }
        start++;
    }
}