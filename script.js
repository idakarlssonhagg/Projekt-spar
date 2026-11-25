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
  { start: 46, end: 62, name: "sage" }
];

if (video) {
  video.addEventListener("timeupdate", () => {
    const currentTime = video.currentTime;

    console.log("Videons tid:", currentTime);

    colorTimings.forEach((color) => {
      const button = document.querySelector(
        `.color-options .${color.name}`
      );

      if (button) {
        button.classList.toggle(
          "active",
          currentTime >= color.start && currentTime < color.end
        );
      }
    });
  });
} else {
  console.log("Hittar inte videon!");
}