function loadingAnimation() {
  var tl = gsap.timeline();

 

  tl.from(".line h1", {
    y: 100,
    stagger: 0.2,
    duration: 0.8,
    delay: 0.5,
  });

  gsap.from(".captainSheild",{
    rotate: 360,
    duration: 6,
    // delay: 1.7,
  })
//   gsap.from(".spideyWeb",{
//     rotate: 90,
//     delay: 2,

//   })

  gsap.from(".spidermanImg",{
    x: 250,
    duration: 2,
    ease: Power4,
    opacity: 0,
    delay: 1.7
  })
  gsap.from(".ironmanImg",{
    x: 250,
    y: -200,
    duration: 2,
    ease: Power4,
    opacity: 0,
    delay: 1.7
  })


  tl.from("#line1-part1, .line h2", {
    opacity: 0,
    onStart: function () {
      var h5timer = document.querySelector("#line1-part1 h5");
      var grow = 0;
      setInterval(function () {
        if (grow < 100) {
          h5timer.innerHTML = grow++;
        } else {
          h5timer.innerHTML = grow;
        }
      }, 40);
    },
  });
  



  tl.to(".line h2", {
    opacity: 1,
    animationName: "anime",
  });


  tl.to("#loader", {
    opacity: 0,
    duration: 0.2,
    delay: 4,
  });

  tl.from("#page1", {
    delay: 0.2,
    y: -1600,
    opacity: 0,
    ease: Power4,
  });

  tl.to("#loader", {
    display: "none",
  });
}

loadingAnimation();
