
function nutcong()
{
    let soa=parseInt(document.getElementById ('a').value);
    let sob=parseInt(document.getElementById ('b').value);
    let tong=soa+sob;
    alert('Tổng là:' +tong);
}

function nuttru()
{
    let soa=parseInt(document.getElementById ('a').value);
    let sob=parseInt(document.getElementById ('b').value);
    let hieu=soa-sob;
    alert('Hiệu là:' +hieu);
}

function nutnhan()
{
    let soa=parseInt(document.getElementById ('a').value);
    let sob=parseInt(document.getElementById ('b').value);
    let tich=soa*sob;
    alert('Tích là:' +tich);
}

function nutchia()
{
    let soa=parseInt(document.getElementById ('a').value);
    let sob=parseInt(document.getElementById ('b').value);
    if (sob===0)
    {
        alert("Không thể chia cho 0");

    }
    let thuong=soa/sob;
    alert('Thương là:' +thuong);
}

