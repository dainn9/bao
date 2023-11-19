function CheckThongTin() {
    var name = document.getElementById("HoTen").value;
    var phone = Number(document.getElementById("SoDienThoai").value);
    email = document.getElementById("Email").value;
    var testEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    pass = document.getElementById("PassWord").value;
    var confirmPass = document.getElementById("XacNhanMatKhau").value;
    if (name == "")
        alert("Họ tên sai, vui lòng kiểm tra lại");
    else if (phone == "" || Number.isInteger(phone) == false)
        alert("Số điện thoại sai, vui lòng kiểm tra lại");
    else if (email == "" || testEmail.test(email) == false)
        alert("Email sai, vui lòng kiểm tra lại");
    else if (pass == "" || pass.includes(" ") == true)
        alert("Mật khẩu sai, vui lòng kiểm tra lại");
    else if (confirmPass == "" || confirmPass != pass)
        alert("Mật khẩu không khớp, vui lòng kiểm tra lại");
    else {
        alert("Đăng kí thành công");
        window.open("dangnhap.html");
    }
}
function showPass() {
    if (document.getElementById("ShowPassWord").checked == true) {
        document.getElementById("PassWord").type = "text";
        document.getElementById("XacNhanMatKhau").type = "text";
    } else {
        document.getElementById("PassWord").type = "password";
        document.getElementById("XacNhanMatKhau").type = "password";
    }
}