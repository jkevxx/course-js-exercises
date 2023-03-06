export default function responsiveMedia(
  id,
  mediaQuery,
  mobileContent,
  desktopContent
) {
  let breakpoint = window.matchMedia(mediaQuery);

  const responsive = (e) => {
    if (e.matches) {
      document.getElementById(id).innerHTML = desktopContent;
    } else {
      document.getElementById(id).innerHTML = mobileContent;
    }
    // console.log(breakpoint);
    // console.log(e.matches);
  };

  breakpoint.addEventListener("change", responsive);
  responsive(breakpoint);
}
