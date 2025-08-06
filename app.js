let qrImg = document.querySelector("#qr-image");
let imgBox = document.querySelector(".image-box"); 
let qrText = document.querySelector("#qr-text");
let qrButton = document.querySelector("#qr-button");


qrButton.addEventListener("click",()=> {
    genrateQR();
})


function genrateQR() {


    if (qrText.value.length > 0) {
        qrImg.src ="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +qrText.value;
        imgBox.classList.add("show-img");
    } else {
        qrText.classList.add('error');
       
        setTimeout(() => {
           qrText.classList.remove('error'); 
        }, 1000);
    }
    
}