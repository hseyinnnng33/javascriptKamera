const video = document.querySelector("#videoElement");
const btn = document.querySelector(".fotoCek")
const canvas = document.querySelector("#canvas")
const canvas1 = document.querySelector("#canvas1")

function startCamera() {

    // tarayıcının kullanıcıdan kamera ve mikrofon gibi cihazlara erişim izni talep etmesini sağlar.
    navigator.mediaDevices.getUserMedia(
        // kameraya erişim izni alınırken sadece video akışına izin verilmesini belirtir.
        { video: true }
    )
    // izin verildiğinde yani kullanıcı kameraya erişim izni verdiğinde çalışan bir fonksiyondur.
    .then(function (stream) {

        // tarayıcıdan gelen akışı video elementine atar
        video.srcObject = stream;
    })
}

startCamera()

btn.addEventListener("click", function(){
    canvas1.getContext('2d').drawImage(video, 0, 0, canvas1.width, canvas1.height);
})

setInterval(function(){
    canvas.getContext('2d').drawImage(video, 0, 0, canvas1.width, canvas1.height);
}, 1);

