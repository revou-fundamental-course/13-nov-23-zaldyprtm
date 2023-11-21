function validate() {
    let x = document.forms['messageForm']['fname'].value; 
    bton = document.getElementById('kirim')
    if (x == "")    {
        document.getElementById('eror').innerHTML = "jangan kosong"
        return false;
    }
}