const $table = document.querySelector('.crud-table');
const $form = document.querySelector('.crud-form');
const $title = document.querySelector('.crud-title');
const $template = document.querySelector('.crud-template').content;
const $fragment = document.createDocumentFragment();

// Request method
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
      error(`Error ${xhr.status}: ${message}`);
    }
  });

  xhr.open(method || 'GET', url);
  xhr.setRequestHeader('Content-Type', 'application/json; charset=uft-8');
  xhr.send(JSON.stringify(data));
};

// Get Info
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

// SENT Info
document.addEventListener('submit', (e) => {
  if (e.target === $form) {
    e.preventDefault();

    if (!e.target.id.value) {
      // Create - POST
      ajax({
        url: 'http://localhost:3004/santos',
        method: 'POST',
        success: (res) => {
          location.reload();
          $form.reset();
        },
        error: (err) => {
          $form.insertAdjacentHTML('afterend', `<p><b>${err}</b></p>`);
        },
        data: {
          name: e.target.name.value,
          constellation: e.target.constellation.value,
        },
      });
    } else {
      // Update - PUT
      ajax({
        url: `http://localhost:3004/santos/${e.target.id.value}`,
        method: 'PUT',
        success: (res) => {
          location.reload();
          $form.reset();
        },
        error: (err) => {
          $form.insertAdjacentHTML('afterend', `<p><b>${err}</b></p>`);
        },
        data: {
          name: e.target.name.value,
          constellation: e.target.constellation.value,
        },
      });
    }
  }
});

// Buttons
document.addEventListener('click', (e) => {
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
      ajax({
        url: `http://localhost:3004/santos/${e.target.dataset.id}`,
        method: 'DELETE',
        success: (res) => {
          location.reload();
          $form.reset();
        },
        error: (err) => {
          alert(err);
        },
      });
    }
  }
});
