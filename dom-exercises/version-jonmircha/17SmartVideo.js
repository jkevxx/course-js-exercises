export default function smartVideo() {
  const videos = document.querySelectorAll('video[data-smart-video]');

  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.play();
      } else {
        entry.target.pause();
      }

      window.addEventListener('visibilitychange', (e) => {
        document.visibilityState === 'visible'
          ? entry.target.play()
          : entry.target.pause();
      });
    });
  };

  const observer = new IntersectionObserver(callback, { threshold: 0.5 });
  videos.forEach((element) => observer.observe(element));
}
