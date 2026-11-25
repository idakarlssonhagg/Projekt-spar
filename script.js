
if (window.location.hash === '#footer') {
  history.replaceState(null, "", window.location.pathname + window.location.search);
  window.scrollTo(0, 0);
}

const video = document.querySelector(".shoe-video video");

const colorTimings = [
  { start: 0, end: 8, name: "moss-green" },
  { start: 8, end: 21, name: "earth-clay" },
  { start: 21, end: 34, name: "stone" },
  { start: 34, end: 46, name: "graphite" },
  { start: 46, end: 59, name: "sage" },
  { start: 59, end: Infinity, name: "moss-green" }
];

if (video) {
  function updateActiveColor() {
    const currentTime = video.currentTime;

    const activeColor = colorTimings.find((color) => {
      return currentTime >= color.start && currentTime < color.end;
    });

    document.querySelectorAll(".color-options .color").forEach((button) => {
      button.classList.remove("active");
    });

    if (activeColor) {
      const button = document.querySelector(
        `.color-options .${activeColor.name}`
      );

      if (button) {
        button.classList.add("active");
      }
    }
  }

  video.addEventListener("timeupdate", updateActiveColor);
  video.addEventListener("seeked", updateActiveColor);
  video.addEventListener("loadedmetadata", updateActiveColor);
}