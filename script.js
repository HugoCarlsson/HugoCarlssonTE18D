const body = document.querySelector("body")

const tl = new TimelineMax

tl.fromTo(body, 1.5, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut},);