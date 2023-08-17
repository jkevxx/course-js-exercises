const $table = document.querySelector('.crud-table');
const $form = document.querySelector('.crud-form');
const $title = document.querySelector('.crud-title');
const $template = document.querySelector('.crud-template').content;
const $fragment = document.createDocumentFragment();

const ajax = (options) => {
  let { url, method, success, error, data } = options;
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('readystatechange', (e) => {
    if (xhr.readyState !== 4) return;
    if (xhr.status >= 200 && xhr.status < 300) {
      let json = JSON.parse(xhr.responseText);
      success(json);
    } else {
      let message = xhr.statusText || "there's an error";
      error(`Error ${shr.status}: ${message}`);
    }
  });

  xhr.open(method || 'GET', url);
  xhr.setRequestHeader('Content-Type', 'application/json; charset=uft-8');
  xhr.send(JSON.stringify(data));
};

const getAll = () => {
  ajax({
    method: 'GET',
    url: 'http://localhost:3004/santos',
    success: (res) => {
      console.log(res);
      res.forEach((el) => {
        $template.querySelector('.name').textContent = el.name;
        $template.querySelector('.constellation').textContent =
          el.constellation;
        $template.querySelector('.edit').dataset.id = el.id;
        $template.querySelector('.edit').dataset.name = el.name;
        $template.querySelector('.edit').dataset.constellation =
          el.constellation;
        $template.querySelector('.delete').dataset.id = el.id;

        let $clone = document.importNode($template, true);
        $fragment.appendChild($clone);
      });

      $table.querySelector('tbody').appendChild($fragment);
    },
    error: (err) => {
      console.log(err);
      $table.insertAdjacentHTML('afterend', `<p><b>${err}</b></p>`);
    },
    data: null,
  });
};

document.addEventListener('DOMContentLoaded', getAll);
