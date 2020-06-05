const slider = document.querySelector(".slider")
const header = document.querySelector("header")
const tl = new TimelineMax


      tl.fromTo(slider, 1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut},);

      tl.fromTo(
          header,
          1,
          {y: "-100%"}, {y: "0%", ease: Power2.easeInOut}, "-=1"
      );
      