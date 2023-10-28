const video = document.querySelector("#videoElement");

function startCamera() {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
          video.srcObject = stream;
        })
}
