const toRender = [];
const section = document.querySelector('#favorites');

data.forEach((element) => {
  const art = document.createElement('article');
  const img = document.createElement('img');
  const but = document.createElement('button');
  const textBtn = document.createTextNode('Go out ');

  but.appendChild(textBtn);
  img.src = element.image.url;

  art.append(img, but);
  toRender.push(art);
});
section.append(...toRender);

/********/

data.forEach((element) => {
  section.innerHTML += `
      <article>
          <imgsrc="${element.image.url}"id="imgDog3">
          <button>Delete</button>
          <divid="err2">
              <p>There was a mistake, please try later.</p>
          </div>
      </article>`;
});
