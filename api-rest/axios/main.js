const $table = document.querySelector('.crud-table');
const $form = document.querySelector('.crud-form');
const $title = document.querySelector('.crud-title');
const $template = document.querySelector('.crud-template').content;
const $fragment = document.createDocumentFragment();

const getAll = async () => {
  try {
    let res = await axios.get('http://localhost:3004/santos');
    let data = await res.data;
    console.log(data);

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

// SEND Info
document.addEventListener('submit', async (e) => {
  if (e.target === $form) {
    e.preventDefault();

    if (!e.target.id.value) {
      // Create - POST
      try {
        let options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
          body: JSON.stringify({
            name: e.target.name.value,
            constellation: e.target.constellation.value,
          }),
        };
        let res = await fetch('http://localhost:3004/santos', options);
        let data = await res.json();

        if (!res.ok) throw { status: res.status, statusText: res.statusText };
        location.reload();
        $form.reset();
      } catch (error) {
        let message = err.statusText || "there's an error";
        $form.insertAdjacentHTML(
          'afterend',
          `<p><b>Error ${err.status}: ${message}</b></p>`
        );
      }
    } else {
      // Update - PUT
      try {
        let options = {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
          body: JSON.stringify({
            name: e.target.name.value,
            constellation: e.target.constellation.value,
          }),
        };
        let res = await fetch(
          `http://localhost:3004/santos/${e.target.id.value}`,
          options
        );
        let data = await res.json();

        if (!res.ok) throw { status: res.status, statusText: res.statusText };
        location.reload();
        $form.reset();
      } catch (error) {
        let message = err.statusText || "there's an error";
        $form.insertAdjacentHTML(
          'afterend',
          `<p><b>Error ${err.status}: ${message}</b></p>`
        );
      }
    }
  }
});

document.addEventListener('click', async (e) => {
  if (e.target.matches('.edit')) {
    $title.textContent = 'Edit Santo';
    $form.name.value = e.target.dataset.name;
    $form.constellation.value = e.target.dataset.constellation;
    $form.id.value = e.target.dataset.id;
  }

  if (e.target.matches('.delete')) {
    let isDelete = confirm(`Are you sure to delete id ${e.target.dataset.id}?`);
    if (isDelete) {
      // Delete - DELETE
      try {
        let options = {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
        };
        let res = await fetch(
          `http://localhost:3004/santos/${e.target.dataset.id}`,
          options
        );
        if (!res.ok) throw { status: res.status, statusText: res.statusText };
        location.reload();
        $form.reset();
      } catch (error) {
        let message = err.statusText || "there's an error";
        alert(`Error ${err.status}: ${message}`);
      }
    }
  }
});
