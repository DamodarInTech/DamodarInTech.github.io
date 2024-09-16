// GSAP animations for smooth section entry
gsap.from("#home", { duration: 1, opacity: 0, y: -100 });
gsap.from("#journey", { duration: 1, opacity: 0, y: -100, delay: 0.5 });
gsap.from("#projects", { duration: 1, opacity: 0, y: -100, delay: 1 });
gsap.from("#contact", { duration: 1, opacity: 0, y: -100, delay: 1.5 });

// ScrollMagic animations for scroll-triggered effects
var controller = new ScrollMagic.Controller();

var journeyScene = new ScrollMagic.Scene({
    triggerElement: "#journey",
    triggerHook: 0.8
})
.setTween(gsap.from("#journey", { duration: 1, opacity: 0, y: 100 }))
.addTo(controller);

var projectsScene = new ScrollMagic.Scene({
    triggerElement: "#projects",
    triggerHook: 0.8
})
.setTween(gsap.from("#projects", { duration: 1, opacity: 0, y: 100 }))
.addTo(controller);

var contactScene = new ScrollMagic.Scene({
    triggerElement: "#contact",
    triggerHook: 0.8
})
.setTween(gsap.from("#contact", { duration: 1, opacity: 0, y: 100 }))
.addTo(controller);
