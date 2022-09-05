document.oncopy = (event) => {
  event.preventDefault();
  event.clipboardData.setData("text/plain", "You've been hacked");
};
