export default function userDeviceInfo(id) {
  // console.log(navigator.userAgent);
  const $id = document.getElementById(id);
  const isMobile = {
    android: () => navigator.userAgent.match(/android/i),
    ios: () => navigator.userAgent.match(/iphone|ipad|ipod/i),
    windows: () => navigator.userAgent.match(/windows phone/i),
    any: function () {
      return this.android() || this.ios() || this.windows();
    },
  };

  const isDesktop = {
    linux: () => navigator.userAgent.match(/linux/i),
    mac: () => navigator.userAgent.match(/mac/i),
    windows: () => navigator.userAgent.match(/windows nt/i),
    any: function () {
      return this.linux() || this.mac() || this.windows();
    },
  };

  const isBrowser = {
    chrome: () => navigator.userAgent.match(/chrome/i),
    safari: () => navigator.userAgent.match(/safari/i),
    firefox: () => navigator.userAgent.match(/firefox/i),
    opera: () => navigator.userAgent.match(/opera/i),
    ie: () => navigator.userAgent.match(/msie|eimobile/i),
    edge: () => navigator.userAgent.match(/edge/),
    any: function () {
      return (
        this.chrome() ||
        this.safari() ||
        this.firefox() ||
        this.opera() ||
        this.ie() ||
        this.edge()
      );
    },
  };

  $id.innerHTML = `
  <ul>
    <li>User Agent <b>${navigator.userAgent}</b></li>
    <li>Platform: <b>${
      isMobile.any() ? isMobile.any() : isDesktop.any()
    }</b></li>
    <li>Browser: <b>${isBrowser.any()}</b></li>
  </ul>
  `;

  if (isBrowser.chrome()) {
    $id.innerHTML += `<p>This content only can see in chrome</p>`;
  }

  if (isBrowser.firefox()) {
    $id.innerHTML += `<p>This content only can see in Firefox</p>`;
  }

  if (isMobile.android()) {
    window.location.href = 'https://jonmircha.com';
  }
}
