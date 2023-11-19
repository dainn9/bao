function CheckThongTin() {
    var email1 = document.getElementById("email1").value;
    var password1 = document.getElementById("password1").value;
    if(email1!="trungkien5564@gmail.com"){
        alert("Email sai, vui lòng kiểm tra lại");
    }else if(password1 != "123"){
        alert("Mật khẩu sai, vui lòng kiểm tra lại");
    }else{
        alert("Đăng nhập thành công");
        window.open("yody.html");
    }
}
function showPass() {
    if (document.getElementById("ShowPassWord").checked == true) {
        document.getElementById("password1").type = "text";
    } else {
        document.getElementById("password1").type = "password";
    }
}