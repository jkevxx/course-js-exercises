const $table = document.querySelector('.crud-table');
const $form = document.querySelector('.crud-form');
const $title = document.querySelector('.crud-title');
const $template = document.querySelector('.crud-template').content;
const $fragment = document.createDocumentFragment();

const getAll = async () => {
  try {
    let res = await fetch('http://localhost:3004/santos');
    let data = await res.json();

    if (!res.ok) throw { status: res.status, statusText: res.statusText };

    data.forEach((el) => {
      $template.querySelector('.name').textContent = el.name;
      $template.querySelector('.constellation').textContent = el.constellation;
      $template.querySelector('.edit').dataset.id = el.id;
      $template.querySelector('.edit').dataset.name = el.name;
      $template.querySelector('.edit').dataset.constellation = el.constellation;
      $template.querySelector('.delete').dataset.id = el.id;

      let $clone = document.importNode($template, true);
      $fragment.appendChild($clone);
    });
    $table.querySelector('tbody').appendChild($fragment);
  } catch (err) {
    let message = err.statusText || "there's an error";
    $table.insertAdjacentHTML(
      'afterend',
      `<p><b>Error ${err.status}: ${message}</b></p>`
    );
  }
};

document.addEventListener('DOMContentLoaded', getAll);
