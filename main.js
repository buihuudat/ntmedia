var textWrapper = document.querySelector(".home__content p");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: false })
  .add({
    targets: ".home__content p .letter",
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 10,
    delay: (el, i) => 150 * (i + 1),
  })
  .add({
    targets: ".ml3",
    opacity: 0,
    duration: 10000,
    easing: "easeOutExpo",
    delay: 1000,
  });

const sr = ScrollReveal({ distance: "60px", duration: 2800, reset: 0 });
sr.reveal(".overview__content__image--img", {
  duration: 1000,
  delay: 100,
  origin: "top",
});
