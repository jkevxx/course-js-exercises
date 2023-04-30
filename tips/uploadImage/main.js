const inputFile = document.getElementById('file');

inputFile.addEventListener('change', () => {
  const file = document.getElementById('file').files;
  console.log(file);
  if (file.length > 0) {
    const fileReader = new FileReader();

    fileReader.onload = function (e) {
      document.getElementById('preview').setAttribute('src', e.target.result);
    };
    fileReader.readAsDataURL(file[0]);
  }
});

// const previewImage = () => {
// const file = document.getElementById('file').files;
// console.log(file);
// if (file.length > 0) {
//   const fileReader = new FileReader();

//   fileReader.onload = function (e) {
//     document.getElementById('preview').setAttribute('src', e.target.result);
//   };
//   fileReader.readAsDataURL(file[0]);
// }
// };
