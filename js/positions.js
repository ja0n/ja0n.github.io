function getWindowsElements() {
  return Array.from(document.querySelectorAll('main > *'));
}

function dumpPositions() {
  return getWindowsElements().map(el => el.getAttribute('style'));
}

function loadPositions(positions) {
  getWindowsElements().forEach(
    (el, index) => el.setAttribute('style', positions[index])
  );
}