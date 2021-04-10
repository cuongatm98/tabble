// viet cac ma javascript

// nhom doan code xu ly convert tien thanh 1 nhom
function convert() {
    // code

    // lay gia tri tu o input
    let amount = document.getElementById('amount').value;

    //lay gia tri tu o select thong option duoc chon
    let from = document.getElementById('from').value;
    let to = document.getElementById('to').value;

    //tinh toan
    result = amount * to / from;

    //Thay đổi nội dung thẻ h2
    document.getElementById('result').innerHTML = result

}