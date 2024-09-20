// GSAP animations for smooth section entry  
gsap.from("#about", { duration: 1, opacity: 0, y: -100 });
gsap.from("#experience", { duration: 1, opacity: 0, y: -100, delay: 0.5 });
gsap.from("#education", { duration: 1, opacity: 0, y: -100, delay: 1 });
gsap.from("#skills", { duration: 1, opacity: 0, y: -100, delay: 1.5 });
gsap.from("#projects", { duration: 1, opacity: 0, y: -100, delay: 2 });
gsap.from("#contact", { duration: 1, opacity: 0, y: -100, delay: 2.5 });

// ScrollMagic animations for scroll-triggered effects (using 'fromTo' to control animation)
var controller = new ScrollMagic.Controller();

var experienceScene = new ScrollMagic.Scene({
    triggerElement: "#experience",
    triggerHook: 0.8
})
.setTween(gsap.fromTo("#experience", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 }))
.addTo(controller);

var educationScene = new ScrollMagic.Scene({
    triggerElement: "#education",
    triggerHook: 0.8
})
.setTween(gsap.fromTo("#education", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 }))
.addTo(controller);

var skillsScene = new ScrollMagic.Scene({
    triggerElement: "#skills",
    triggerHook: 0.8
})
.setTween(gsap.fromTo("#skills", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 }))
.addTo(controller);

var projectsScene = new ScrollMagic.Scene({
    triggerElement: "#projects",
    triggerHook: 0.8
})
.setTween(gsap.fromTo("#projects", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 }))
.addTo(controller);

var contactScene = new ScrollMagic.Scene({
    triggerElement: "#contact",
    triggerHook: 0.8
})
.setTween(gsap.fromTo("#contact", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 }))
.addTo(controller);
