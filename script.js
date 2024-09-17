// GSAP animations for smooth section entry
gsap.from("#home", { duration: 1, opacity: 0, y: -100 });
gsap.from("#experience", { duration: 1, opacity: 0, y: -100, delay: 0.5 });
gsap.from("#education", { duration: 1, opacity: 0, y: -100, delay: 1 });
gsap.from("#skills", { duration: 1, opacity: 0, y: -100, delay: 1.5 });
gsap.from("#projects", { duration: 1, opacity: 0, y: -100, delay: 2 });
gsap.from("#contact", { duration: 1, opacity: 0, y: -100, delay: 2.5 });

// ScrollMagic animations for scroll-triggered effects
var controller = new ScrollMagic.Controller();

var experienceScene = new ScrollMagic.Scene({
    triggerElement: "#experience",
    triggerHook: 0.8
})
.setTween(gsap.from("#experience", { duration: 1, opacity: 0, y: 100 }))
.addTo(controller);

var educationScene = new ScrollMagic.Scene({
    triggerElement: "#education",
    triggerHook: 0.8
})
.setTween(gsap.from("#education", { duration: 1, opacity: 0, y: 100 }))
.addTo(controller);

var skillsScene = new ScrollMagic.Scene({
    triggerElement: "#skills",
    triggerHook: 0.8
})
.setTween(gsap.from("#skills", { duration: 1, opacity: 0, y: 100 }))
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
