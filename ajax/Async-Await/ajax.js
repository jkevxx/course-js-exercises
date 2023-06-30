(() => {
  const $fetchAsync = document.getElementById('fetch-async');
  const $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      let res = await fetch('https://jsonplaceholder.typicode.com/users');
      let data = await res.json();

      // if(!res.ok) throw new Error("Error to request data");
      if (!res.ok) throw { status: res.status, statusText: res.statusText };

      data.forEach((el) => {
        const $li = document.createElement('li');
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $fetchAsync.appendChild($fragment);
    } catch (err) {
      let message = err.statusText || "there's an error";
      $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
    }
  }

  getData();
})();
