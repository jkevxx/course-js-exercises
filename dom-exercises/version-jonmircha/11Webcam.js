export default function webcam(id) {
  const $video = document.getElementById(id);

  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        console.log(stream);
        $video.srcObject = stream;
        $video.play();
      })
      .catch((err) => {
        $video.insertAdjacentHTML(
          'beforebegin',
          `<p>The following error happened: <b>${err}</b> </p>`
        );
        console.log(`the following error happened: ${err} `);
      });
  }
}
