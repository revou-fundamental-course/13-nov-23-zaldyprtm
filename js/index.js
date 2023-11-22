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

let slideIndex = 1;
showSlides(slindeIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('image-slide');
 
    if(n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    
    slides[slideIndex-1].style.display = "block";

}
