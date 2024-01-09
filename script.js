const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function circleMouseFollower() {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
  });
}

function firstPageAdmin() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })
    .to(".boundingelem", {
      y: "0",
      duration: 2,
      ease: Expo.easeInOut,
      delay: -1, //delay with footer
      stagger: 0.2, //bring diff boundingelem is .2 sec delay
    })
    .from("#herofooter", {
      y: "-10",
      opacity: 0,
      duration: 1.5,
      delay: -1,
      ease: Expo.easeInOut,
    });
}
function circleChaptaKaro(){

}

circleMouseFollower();
firstPageAdmin();
circleChaptaKaro();
