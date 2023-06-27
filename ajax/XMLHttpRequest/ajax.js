(() => {
  const xhr = new XMLHttpRequest();
  const $xhr = document.getElementById('xhr');
  const $fragment = document.createDocumentFragment();

  xhr.addEventListener('readystatechange', (e) => {
    if (xhr.readyState !== 4) return;
    // console.log(xhr);

    if (xhr.status >= 200 && xhr.status < 300) {
      console.log('successfully');

      let json = JSON.parse(xhr.responseText);
      // console.log(json);

      json.forEach((el) => {
        const $li = document.createElement('li');
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $xhr.appendChild($fragment);
    } else {
      console.log('error');
      let message = xhr.statusText || "there's an error";
      $xhr.innerHTML = `Error ${shr.status}: ${message}`;
    }
  });

  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

  xhr.send();
})();
