function getValuesForm() {
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const address = document.getElementById('address').value;
  const email = document.getElementById('email').value;

  return {
    name,
    age,
    address,
    email,
  };
}

function validateForm() {
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const address = document.getElementById('address').value;
  const email = document.getElementById('email').value;

  if (name === '') {
    alert('Name is required');
    return false;
  }

  if (age < 1 || age === '') {
    alert('Age is required');
    return false;
  }
  if (address === '') {
    alert('Address is required');
    return false;
  }

  if (email === '') {
    alert('Email is required');
    return false;
  } else if (!email.includes('@')) {
    alert('Invalid email address');
    return false;
  }
  return true;
}

// show data from local storage
function showData() {
  let peopleList;
  if (localStorage.getItem('peopleList') === null) {
    peopleList = [];
  } else {
    peopleList = JSON.parse(localStorage.getItem('peopleList'));
  }

  let html = '';

  peopleList.forEach((person, index) => {
    html += `
    <tr>
      <td>${person.name}</td>
      <td>${person.age}</td>
      <td>${person.address}</td>
      <td>${person.email}</td>
      <td><button class="btn btn-warning" onclick="updateData(${index})">Update</button></td>
      <td><button class="btn btn-danger" onclick="deleteData(${index})">Delete</button></td>
    </tr>
    `;
  });

  document.querySelector('#crudTable tbody').innerHTML = html;
}

// Loads All data from local storage when document or page loaded
document.onload = showData();

// Add to local storage
function AppData() {
  if (validateForm()) {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;

    let peopleList;
    if (localStorage.getItem('peopleList') === null) {
      peopleList = [];
    } else {
      peopleList = JSON.parse(localStorage.getItem('peopleList'));
    }

    peopleList.push({ name: name, age: age, address: address, email: email });

    localStorage.setItem('peopleList', JSON.stringify(peopleList));
    showData();
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('address').value = '';
    document.getElementById('email').value = '';
  }
}

// delete data from local storage
function deleteData(index) {
  let peopleList;
  if (localStorage.getItem('peopleList') === null) {
    peopleList = [];
  } else {
    peopleList = JSON.parse(localStorage.getItem('peopleList'));
  }

  peopleList.splice(index, 1);
  localStorage.setItem('peopleList', JSON.stringify(peopleList));
  showData();
}

function updateData(index) {
  document.getElementById('submit').style.display = 'none';
  document.getElementById('update').style.display = 'block';
  const updateBtn = document.querySelector('#update');

  let peopleList;
  if (localStorage.getItem('peopleList') === null) {
    peopleList = [];
  } else {
    peopleList = JSON.parse(localStorage.getItem('peopleList'));
  }

  document.getElementById('name').value = peopleList[index].name;
  document.getElementById('age').value = peopleList[index].age;
  document.getElementById('address').value = peopleList[index].address;
  document.getElementById('email').value = peopleList[index].email;

  // document.querySelector('#update').onclick = function () {
  //   console.log(validateForm());

  //   if (validateForm()) {
  //     peopleList[index].name = document.getElementById('name').value;
  //     peopleList[index].age = document.getElementById('age').value;
  //     peopleList[index].address = document.getElementById('address').value;
  //     peopleList[index].email = document.getElementById('email').value;

  //     localStorage.setItem('peopleList', JSON.stringify(peopleList));

  //     showData();
  //     document.getElementById('name').value = '';
  //     document.getElementById('age').value = '';
  //     document.getElementById('address').value = '';
  //     document.getElementById('email').value = '';
  //     document.getElementById('submit').style.display = 'block';
  //     document.getElementById('update').style.display = 'none';
  //   }
  // };

  updateBtn.addEventListener('click', function btnClicked() {
    if (validateForm()) {
      peopleList[index].name = document.getElementById('name').value;
      peopleList[index].age = document.getElementById('age').value;
      peopleList[index].address = document.getElementById('address').value;
      peopleList[index].email = document.getElementById('email').value;

      localStorage.setItem('peopleList', JSON.stringify(peopleList));

      showData();
      document.getElementById('name').value = '';
      document.getElementById('age').value = '';
      document.getElementById('address').value = '';
      document.getElementById('email').value = '';
      document.getElementById('submit').style.display = 'block';
      document.getElementById('update').style.display = 'none';
    }
    removeClickEvent();
    function removeClickEvent() {
      updateBtn.removeEventListener('click', btnClicked);
    }
  });
}
