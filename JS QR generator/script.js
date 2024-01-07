let imageBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImg");
let qrInput = document.getElementById("qrInput");

function generateQR() {
  if (qrInput.value.length > 0) {
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrInput.value;
    imageBox.classList.add("show-qr");
  } else {
    qrInput.classList.add("error");
    setTimeout(() => {
      qrInput.classList.remove("error");
    }, 1000);
  }
}
