export default function searchFilters(input, selector) {
  document.addEventListener('keyup', (e) => {
    if (e.target.matches(input)) {
      // console.log(e.key);

      if (e.key === 'Escape') e.target.value = '';

      document
        .querySelectorAll(selector)
        .forEach((item) =>
          item.textContent.toLowerCase().includes(e.target.value)
            ? item.classList.remove('filter')
            : item.classList.add('filter')
        );
    }
  });
}
