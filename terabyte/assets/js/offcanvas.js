// Functionality to control the overflow property of the body tag
// when the offcanvas button is clicked, hiding the scrollbar,
// and restoring it when the close button is clicked.

let bodytag = document.querySelector('body');
let closeBtn = document.querySelector('.close-offcanvas');
let offcanvasBtn = document.querySelector('.open-offcanvas');
if (offcanvasBtn) {
  offcanvasBtn.addEventListener('click', () => {
    bodytag.style.overflow = "auto"
    if (bodytag.style.overflow = "auto") {
      bodytag.style.overflow = "hidden"
    }
  })
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      bodytag.style.overflow = "auto"
    })
  }
}

// offcanvas 2 Started  -------------------------------------
function showCanvas2() {
  var canvas2 = gsap.timeline();

  canvas2.to(".offcanvas__area-2", {
    top: "0",
    duration: 0.5,
    opacity: 1,
    borderRadius: "0 0 0 0",
  });

  canvas2.to(".offcanvas__left-2", {
    duration: 0.8,
    left: 0,
    opacity: 1,
    visibility: "visible",
    ease: "bounce",
  });

  // Part 2
  canvas2.to(
    ".offcanvas__right-2",
    {
      duration: 1.2,
      left: 0,
      opacity: 1,
      visibility: "visible",
      ease: "bounce",
    },
    "-=0.7"
  );

  // Offcanvas Menu
  canvas2.to(
    ".offcanvas__menu-2 ul li",
    {
      opacity: 1,
      bottom: 0,
      stagger: 0.08,
    },
    "-=0.5"
  );
}

// offcanvas 2 Hide Started  -------------------------------------
function hideCanvas2() {
  var canvas2 = gsap.timeline();
  // Offcanvas Menu

  canvas2.to(".offcanvas__menu-2 ul li", {
    opacity: 0,
    bottom: -60,
    stagger: 0.08,
  });

  // Part 2
  canvas2.to(
    ".offcanvas__right-2",
    {
      duration: 1.2,
      left: -50,
      opacity: 0,
      visibility: "hidden",
    },
    "-=0.7"
  );

  canvas2.to(
    ".offcanvas__left-2",
    {
      duration: 0.8,
      left: -50,
      opacity: 0,
      visibility: "hidden",
    },
    "-=.7"
  );

  canvas2.to(
    ".offcanvas__area-2",
    {
      top: "-100%",
      duration: 0.5,
      opacity: 0,
      borderRadius: "0 0 1000px 1000px",
    },
    "-=.7"
  );
}

// offcanvas 3 js code -------------------------------------
function showCanvas3() {
  var canvas3 = gsap.timeline();

  canvas3.to(".offcanvas-3__area", {
    left: 0,
    visibility: "visible",
    duration: 0.8,
    opacity: 1,
    rotationY: 0,
    perspective: 0,
  });

  // Menu Item
  canvas3.to(
    ".offcanvas-3__menu ul li",
    {
      opacity: 1,
      top: 0,
      stagger: 0.05,
      duration: 1,
      rotationX: 0,
    },
    "-=0.1"
  );
  // Meta
  canvas3.to(
    ".offcanvas-3__meta",
    {
      top: 0,
      visibility: "visible",
      duration: 0.8,
      opacity: 1,
    },
    "-=0.5"
  );

  // Social
  canvas3.to(
    ".offcanvas-3__social",
    {
      top: 0,
      visibility: "visible",
      duration: 0.8,
      opacity: 1,
    },
    "-=0.5"
  );
}

// offcanvas 3 Hide  -------------------------------------
function hideCanvas3() {
  var canvas3 = gsap.timeline();

  canvas3.to(".offcanvas-3__area", {
    duration: 0.8,
    rotationY: -90,
    opacity: 0,
  });
  canvas3.to(".offcanvas-3__area", {
    visibility: "hidden",
    duration: 0.1,
    rotationY: 50,
    left: 0,
    rotationX: 0,
  });

  // Menu Item
  canvas3.to(".offcanvas-3__menu ul li", {
    opacity: 0,
    top: -100,
    stagger: 0.01,
    duration: 0.1,
    rotationX: 50,
  });

  // Meta
  canvas3.to(
    ".offcanvas-3__meta",
    {
      top: -30,
      visibility: "hidden",
      duration: 0.8,
      opacity: 1,
    },
    "-=0.5"
  );

  // Social
  canvas3.to(
    ".offcanvas-3__social",
    {
      top: -30,
      visibility: "hidden",
      duration: 0.8,
      opacity: 1,
    },
    "-=0.5"
  );
}

// offcanvas 4 js code -------------------------------------
function showCanvas4() {
  var canvas4 = gsap.timeline();

  canvas4.to(".offcanvas-4__area", {
    top: 0,
    visibility: "visible",
    duration: 0.8,
    opacity: 1,
    rotationX: 0,
    perspective: 0,
  });

  canvas4.to(".offcanvas-4__menu ul li", {
    visibility: "visible",
    duration: 0.8,
    opacity: 1,
    rotationX: 0,
    perspective: 0,
    stagger: 0.05,
    top: 0,
  });

  // Can Vas Image
  canvas4.to(
    ".offcanvas-4__thumb",
    {
      left: 0,
      visibility: "visible",
      duration: 0.8,
      opacity: 1,
    },
    "-=0.8"
  );
  // Canvas Meta
  canvas4.to(
    ".offcanvas-4__meta",
    {
      left: 0,
      visibility: "visible",
      duration: 0.8,
      opacity: 1,
    },
    "-=1"
  );
}

// offcanvas hide  4 js code \\\\\\\\\\\\\\ \\\\\\\\\\\\\\\\\\\\\\\
function hideCanvas4() {
  var canvas4 = gsap.timeline();

  canvas4.to(".offcanvas-4__area", {
    top: "-20%",
    duration: 0.8,
    rotationX: 25,
    perspective: 359,
    opacity: 0,
  });

  canvas4.to(".offcanvas-4__area", {
    visibility: "hidden",
    duration: 0.8,
  });

  // Menu Item
  canvas4.to(
    ".offcanvas-4__menu ul li",
    {
      visibility: "visible",
      duration: 0.8,
      opacity: 0,
      rotationX: 90,
      perspective: 350,
      stagger: 0.05,
      top: "-10px",
    },
    "-=.5"
  );

  // Image
  canvas4.to(
    ".offcanvas-4__thumb",
    {
      left: "50px",
      duration: 0.8,
      opacity: 0,
      visibility: "hidden",
    },
    "-=0.5"
  );
  // Meta
  canvas4.to(
    ".offcanvas-4__meta",
    {
      left: "-50px",
      duration: 0.8,
      opacity: 0,
      visibility: "hidden",
    },
    "-=1"
  );
}

// offcanvas 6 js code -------------------------------------
function showCanvas6() {
  var canvas6 = gsap.timeline();

  gsap.to(".offcanvas-6__menu-wrapper", {
    left: 0,
    visibility: "visible",
    duration: 1,
    opacity: 1,
    rotationY: 0,
    perspective: 0,
  });
  gsap.to(".offcanvas-6__meta-wrapper", {
    left: 0,
    visibility: "visible",
    duration: 1,
    opacity: 1,
    rotationY: 0,
    perspective: 0,
  });

  // Menu Item
  canvas6.to(".offcanvas-6__menu ul li", {
    opacity: 1,
    left: 0,
    stagger: 0.15,
    duration: 1.5,
    ease: "bounce",
    delay: 1,
  });
  // Second Level
  canvas6.to(
    ".second_level_canvas",
    {
      opacity: 1,
      scale: 1,
      duration: 1,
    },
    "=-1.7"
  );
  // Social Title
  canvas6.to(
    ".offcanvas-6__social-title",
    {
      opacity: 1,
      left: 0,
      duration: 1,
    },
    "=-1"
  );
  // Social Item
  canvas6.to(
    ".offcanvas-6__social-links a",
    {
      opacity: 1,
      scale: 1,
      stagger: 0.1,
      left: 0,
      ease: "bounce",
    },
    "=-0.5"
  );
}

// Menu Hiding
function hideCanvas6() {
  var canvas6 = gsap.timeline();

  // Menu Item
  canvas6.to(".offcanvas-6__menu ul li", {
    opacity: 0,
    left: -200,
    stagger: 0.2,
    ease: "linear",
  });
  //   Second Level
  canvas6.to(
    ".second_level_canvas",
    {
      opacity: 0,
      scale: 0.8,
      duration: 1,
    },
    "=-1"
  );

  // Social Title
  canvas6.to(
    ".offcanvas-6__social-title",
    {
      opacity: 0,
      left: -50,
      duration: 1,
    },
    "=-1"
  );

  // Social Item
  canvas6.to(
    ".offcanvas-6__social-links a",
    {
      opacity: 0,
      scale: 0.8,
      stagger: 0.1,
    },
    "=-1"
  );

  canvas6.to(".offcanvas-6__menu-wrapper", {
    left: "-100%",
    duration: 1,
    opacity: 0,
    rotationY: 25,
    perspective: 359,
  });
  canvas6.to(
    ".offcanvas-6__meta-wrapper",
    {
      left: "100%",
      duration: 1,
      opacity: 0,

      rotationY: -25,
      perspective: 359,
    },
    "=-1"
  );
  canvas6.to("#offcanvas6", {
    visibility: "hidden",
  });
}
