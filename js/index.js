function validateForm() {
    const nama = document.forms['messageForm']['fullname'].value;
    const mail = document.forms['messageForm']['userEmail'].value;
    const slct = document.forms['messageForm']['select'].value;

    if (nama == "" || mail == "" ) {
        document.getElementById("errorName").innerHTML = " *Nama tidak boleh kosong"
        document.getElementById("errorEmail").innerHTML = " *Email tidak boleh kosong"
        document.getElementById("errorSelect").innerHTML = "*Kamu belum memilih opsi"

        return false;
    }
}