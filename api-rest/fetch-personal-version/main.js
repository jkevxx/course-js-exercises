const $form = document.querySelector('.crud-form');
const $title = document.querySelector('.crud-title');
const $table = document.querySelector('.crud-table');
const $info = document.querySelector('.info-table');
const $template = document.querySelector('.crud-template').content;
const $fragment = document.createDocumentFragment();

fetch('http://localhost:3004/santos')
  .then((res) => res.json())
  .then((data) => {
    data.forEach((el) => {
      const $tr = document.createElement('tr');

      $tr.innerHTML = `
      <td class="name">${el.name}</td>
      <td class="constellation">${el.constellation}</td>
      <td>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
      </td>
      `;
      $fragment.appendChild($tr);
    });
    $info.appendChild($fragment);
  });
