const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function circleMouseFollower() {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) 
  
    `;
  });
}

function firstPageAnim() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })
    .to(".boundingelem", {
      y: "0",
      duration: 1.5,
      ease: Expo.easeInOut,
      delay: -0.5, //delay with footer
      stagger: 0.2, //bring diff boundingelem is .2 sec delay
    })
    .from("#herofooter", {
      y: "-10",
      opacity: 0,
      duration: 1.5,
      delay: -0.5,
      ease: Expo.easeInOut,
    });
}


circleMouseFollower();
firstPageAnim();

// for second page animation --- teeno elem ko select karo, teeno mai el mousemove lagao, jab mousemove ho to ye pata karo
//  ki mouse kaha par hai, jiska matlab hai mouse ki x and y position pata karo, ab mouse ki x y position ke badle us image ko
//   show karo and us img ko move karo, move karte waqt rotate karo,and jaise jaise mouse tez chale waise waise rotation bhi 
//   tez ho jaye



// document.querySelectorAll(".elem").forEach(function (elem) {
//     var rotate = 0;
//     var diffrot = 0;

//        elem.addEventListener("mousemove", function (dets) {
// var diff= dets.clientY - elem.getBoundingClientRect().top;
// diffrot=dets.clientX-rotate;
// console.log(elem.getBoundingClientRect())
//      gsap.to(elem.querySelector("img"), {
//         opacity: 1,
//         ease: Power3,
//         top:diff,
//         left:dets.clientX,
//     })
//         });
//     });

    
document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        // top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  });





