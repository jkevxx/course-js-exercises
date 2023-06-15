export default function storyteller() {
  const $speechSelect = document.getElementById('speech-select');
  const $speechTextarea = document.getElementById('speech-text');
  const $speechBtn = document.getElementById('speech-btn');
  const speechMessage = new SpeechSynthesisUtterance();

  let voices = [];

  document.addEventListener('DOMContentLoaded', (e) => {
    window.speechSynthesis.getVoices();
    // console.log(window.speechSynthesis);

    voices = window.speechSynthesis.getVoices();
    // console.log(voices);

    voices.forEach((voice) => {
      const $option = document.createElement('option');
      $option.value = voice.name;
      $option.textContent = `${voice.name} - ${voice.lang}`;
      $speechSelect.appendChild($option);
    });

    // window.speechSynthesis.addEventListener('voiceschanged', (e) => {
    //   console.log('hi');
    // });
  });

  document.addEventListener('change', (e) => {
    if (e.target === $speechSelect) {
      speechMessage.voice = voices.find(
        (voice) => voice.name === e.target.value
      );
    }
  });

  document.addEventListener('click', (e) => {
    if (e.target === $speechBtn) {
      speechMessage.text = $speechTextarea.value;
      window.speechSynthesis.speak(speechMessage);
    }
  });
}
