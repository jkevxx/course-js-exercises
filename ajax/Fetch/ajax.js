(() => {
  const $fetch = document.getElementById('fetch');
  const $fragment = document.createDocumentFragment();

  fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((data) => {
      data.forEach((el) => {
        const $li = document.createElement('li');
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $fetch.appendChild($fragment);
    })
    .catch((err) => {
      let message = err.statusText || "there's an error";
      $fetch.innerHTML = `Error ${err.status}: ${message}`;
    });
})();
