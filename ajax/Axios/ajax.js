// (() => {
//   const $axios = document.getElementById('axios');
//   const $fragment = document.createDocumentFragment();

//   axios
//     .get('https://jsonplaceholder.typicode.com/users')
//     .then((res) => {
//       console.log(res);
//       let json = res.data;
//       json.forEach((el) => {
//         const $li = document.createElement('li');
//         $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
//         $fragment.appendChild($li);
//       });

//       $axios.appendChild($fragment);
//     })
//     .catch((err) => {
//       console.log(err.response);
//       let message = err.response.statusText || "there's an error";
//       $axios.innerHTML = `Error ${err.response.status}: ${message}`;
//     });
// })();
(() => {
  const $axios = document.getElementById('axios');
  const $fragment = document.createDocumentFragment();

  const getData = async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      const json = await res.data;

      json.forEach((el) => {
        const $li = document.createElement('li');
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $axios.appendChild($fragment);
    } catch (err) {
      console.log(err.response);
      let message = err.response.statusText || "there's an error";
      $axios.innerHTML = `Error ${err.response.status}: ${message}`;
    }
  };

  getData();
})();
