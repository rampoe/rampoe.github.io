// JS Added By Habib 

/////////////////////////////////////////////////////
let text_animation = gsap.utils.toArray(".has_text_move_anim");

text_animation.forEach(splitTextLine => {
    var delay_value = 0.5
    if (splitTextLine.getAttribute("data-delay")) {
        delay_value = splitTextLine.getAttribute("data-delay");
    }
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: splitTextLine,
            start: 'top 85%',
            duration: 1.5,
            scrub: false,
            markers: false,
            toggleActions: 'play none none none'
        }
    });

    const itemSplitted = new SplitText(splitTextLine, {
        type: "lines"
    });
    gsap.set(splitTextLine, {
        perspective: 400
    });
    itemSplitted.split({
        type: "lines"
    })
    tl.from(itemSplitted.lines, {
        duration: 1,
        delay: delay_value,
        opacity: 0,
        rotationX: -80,
        force3D: true,
        transformOrigin: "top center -50",
        stagger: 0.1
    });
});




// Full Character Setup 
var animation_char_come_items = document.querySelectorAll(".has_char_anim")
animation_char_come_items.forEach((item) => {

    var stagger_value = 0.05
    var translateX_value = 20
    var translateY_value = false
    var onscroll_value = 1
    var data_delay = 0.5
    var ease_value = "power2.out"


    if (item.getAttribute("data-stagger")) {
        stagger_value = item.getAttribute("data-stagger");
    }
    if (item.getAttribute("data-translateX")) {
        translateX_value = item.getAttribute("data-translateX");
    }
    if (item.getAttribute("data-translateY")) {
        translateY_value = item.getAttribute("data-translateY");
    }
    if (item.getAttribute("data-on-scroll")) {
        onscroll_value = item.getAttribute("data-on-scroll");
    }
    if (item.getAttribute("data-delay")) {
        data_delay = item.getAttribute("data-delay");
    }
    if (item.getAttribute("data-ease")) {
        ease_value = item.getAttribute("data-ease");
    }


    if (onscroll_value == 1) {
        if (translateX_value > 0 && !translateY_value) {
            let split_char = new SplitText(item, {
                type: "chars, words"
            });
            gsap.from(split_char.chars, {
                duration: 1,
                delay: data_delay,
                x: translateX_value,
                autoAlpha: 0,
                stagger: stagger_value,
                ease: ease_value,
                scrollTrigger: {
                    trigger: item,
                    start: 'top 85%',
                }
            });
        }
        if (translateY_value > 0 && !translateX_value) {
            let split_char = new SplitText(item, {
                type: "chars, words"
            });
            gsap.from(split_char.chars, {
                duration: 1,
                delay: data_delay,
                y: translateY_value,
                autoAlpha: 0,
                ease: ease_value,
                stagger: stagger_value,
                scrollTrigger: {
                    trigger: item,
                    start: 'top 85%',
                }
            });
        }
        if (translateX_value && translateY_value) {
            let split_char = new SplitText(item, {
                type: "chars, words"
            });
            gsap.from(split_char.chars, {
                duration: 3,
                delay: data_delay,
                y: translateY_value,
                x: translateX_value,
                autoAlpha: 0,
                ease: ease_value,
                stagger: stagger_value,
                scrollTrigger: {
                    trigger: item,
                    start: 'top 85%',
                }
            });
        }
        if (!translateX_value && !translateY_value) {
            let split_char = new SplitText(item, {
                type: "chars, words"
            });
            gsap.from(split_char.chars, {
                duration: 1,
                delay: data_delay,
                x: 50,
                autoAlpha: 0,
                stagger: stagger_value,
                ease: ease_value,
                scrollTrigger: {
                    trigger: item,
                    start: 'top 85%',
                }
            });
        }
    } else {
        if (translateX_value > 0 && !translateY_value) {
            let split_char = new SplitText(item, {
                type: "chars, words"
            });
            gsap.from(split_char.chars, {
                duration: 1,
                delay: data_delay,
                x: translateX_value,
                ease: ease_value,
                autoAlpha: 0,
                stagger: stagger_value
            });
        }
        if (translateY_value > 0 && !translateX_value) {
            let split_char = new SplitText(item, {
                type: "chars, words"
            });
            gsap.from(split_char.chars, {
                duration: 1,
                delay: data_delay,
                y: translateY_value,
                autoAlpha: 0,
                ease: ease_value,
                stagger: stagger_value
            });
        }
        if (translateX_value && translateY_value) {
            let split_char = new SplitText(item, {
                type: "chars, words"
            });
            gsap.from(split_char.chars, {
                duration: 1,
                delay: data_delay,
                y: translateY_value,
                x: translateX_value,
                ease: ease_value,
                autoAlpha: 0,
                stagger: stagger_value
            });
        }
        if (!translateX_value && !translateY_value) {
            let split_char = new SplitText(item, {
                type: "chars, words"
            });
            gsap.from(split_char.chars, {
                duration: 1,
                delay: data_delay,
                ease: ease_value,
                x: 50,
                autoAlpha: 0,
                stagger: stagger_value
            });
        }
    }




});


// Animation Word
let animation_word_anim_items = document.querySelectorAll(".has_word_anim");

animation_word_anim_items.forEach((word_anim_item) => {

    var stagger_value = 0.05
    var translateX_value = false
    var translateY_value = false
    var onscroll_value = 1
    var data_delay = 0.5

    if (word_anim_item.getAttribute("data-stagger")) {
        stagger_value = word_anim_item.getAttribute("data-stagger");
    }
    if (word_anim_item.getAttribute("data-translateX")) {
        translateX_value = word_anim_item.getAttribute("data-translateX");
    }

    if (word_anim_item.getAttribute("data-translateY")) {
        translateY_value = word_anim_item.getAttribute("data-translateY");
    }

    if (word_anim_item.getAttribute("data-on-scroll")) {
        onscroll_value = word_anim_item.getAttribute("data-on-scroll");
    }
    if (word_anim_item.getAttribute("data-delay")) {
        data_delay = word_anim_item.getAttribute("data-delay");
    }

    if (onscroll_value == 1) {
        if (translateX_value && !translateY_value) {
            let split_word = new SplitText(word_anim_item, {
                type: "chars, words"
            })
            gsap.from(split_word.words, {
                duration: 1,
                x: translateX_value,
                autoAlpha: 0,
                stagger: stagger_value,
                delay: data_delay,
                scrollTrigger: {
                    trigger: word_anim_item,
                    start: 'top 90%'
                }
            });
        }

        if (translateY_value && !translateX_value) {
            let split_word = new SplitText(word_anim_item, {
                type: "chars, words"
            })
            gsap.from(split_word.words, {
                duration: 1,
                delay: data_delay,
                y: translateY_value,
                autoAlpha: 0,
                stagger: stagger_value,
                scrollTrigger: {
                    trigger: word_anim_item,
                    start: 'top 90%'
                }
            });
        }

        if (translateY_value && translateX_value) {
            let split_word = new SplitText(word_anim_item, {
                type: "chars, words"
            })
            gsap.from(split_word.words, {
                duration: 1,
                delay: data_delay,
                x: translateX_value,
                y: translateY_value,
                autoAlpha: 0,
                stagger: stagger_value,
                scrollTrigger: {
                    trigger: word_anim_item,
                    start: 'top 90%'
                }
            });
        }

        if (!translateX_value && !translateY_value) {
            let split_word = new SplitText(word_anim_item, {
                type: "chars, words"
            })
            gsap.from(split_word.words, {
                duration: 1,
                delay: data_delay,
                x: 20,
                autoAlpha: 0,
                stagger: stagger_value,
                scrollTrigger: {
                    trigger: word_anim_item,
                    start: 'top 85%',
                }
            });
        }
    } else {
        if (translateX_value > 0 && !translateY_value) {
            let split_word = new SplitText(word_anim_item, {
                type: "chars, words"
            })
            gsap.from(split_word.words, {
                duration: 1,
                delay: data_delay,
                x: translateX_value,
                autoAlpha: 0,
                stagger: stagger_value
            });
        }

        if (translateY_value > 0 && !translateX_value) {
            let split_word = new SplitText(word_anim_item, {
                type: "chars, words"
            })
            gsap.from(split_word.words, {
                duration: 1,
                delay: data_delay,
                y: translateY_value,
                autoAlpha: 0,
                stagger: stagger_value
            });
        }

        if (translateY_value > 0 && translateX_value > 0) {
            let split_word = new SplitText(word_anim_item, {
                type: "chars, words"
            })
            gsap.from(split_word.words, {
                duration: 1,
                delay: data_delay,
                x: translateX_value,
                y: translateY_value,
                autoAlpha: 0,
                stagger: stagger_value
            });
        }

        if (!translateX_value && !translateY_value) {
            let split_word = new SplitText(word_anim_item, {
                type: "chars, words"
            })
            gsap.from(split_word.words, {
                duration: 1,
                delay: data_delay,
                x: 20,
                autoAlpha: 0,
                stagger: stagger_value
            });
        }

    }


});

////////////////////////////// ///////////////////////
// Has Fade Animation 
////////////////////////////// ///////////////////////

const fadeArray = gsap.utils.toArray(".has_fade_anim")
// gsap.set(fadeArray, {opacity:0})
fadeArray.forEach((item, i) => {

    var fade_direction = "bottom"
    var onscroll_value = 1
    var duration_value = 1.5
    var fade_offset = 50
    var delay_value = 0.5
    var ease_value = "power2.out"

    if (item.getAttribute("data-fade-offset")) {
        fade_offset = item.getAttribute("data-fade-offset");
    }
    if (item.getAttribute("data-duration")) {
        duration_value = item.getAttribute("data-duration");
    }

    if (item.getAttribute("data-fade-from")) {
        fade_direction = item.getAttribute("data-fade-from");
    }
    if (item.getAttribute("data-on-scroll")) {
        onscroll_value = item.getAttribute("data-on-scroll");
    }
    if (item.getAttribute("data-delay")) {
        delay_value = item.getAttribute("data-delay");
    }
    if (item.getAttribute("data-ease")) {
        ease_value = item.getAttribute("data-ease");
    }

    if (onscroll_value == 1) {
        if (fade_direction == "top") {
            gsap.from(item, {
                y: -fade_offset,
                opacity: 0,
                ease: ease_value,
                duration: duration_value,
                delay: delay_value,
                scrollTrigger: {
                    trigger: item,
                    start: 'top 85%',
                }
            })
        }
        if (fade_direction == "left") {
            gsap.from(item, {
                x: -fade_offset,
                opacity: 0,
                ease: ease_value,
                duration: duration_value,
                delay: delay_value,
                scrollTrigger: {
                    trigger: item,
                    start: 'top 85%',
                }
            })
        }
        if (fade_direction == "bottom") {
            gsap.from(item, {
                y: fade_offset,
                opacity: 0,
                ease: ease_value,
                duration: duration_value,
                delay: delay_value,
                scrollTrigger: {
                    trigger: item,
                    start: 'top 85%',
                }
            })
        }
        if (fade_direction == "right") {
            gsap.from(item, {
                x: fade_offset,
                opacity: 0,
                ease: ease_value,
                duration: duration_value,
                delay: delay_value,
                scrollTrigger: {
                    trigger: item,
                    start: 'top 85%',
                }
            })
        }
        if (fade_direction == "in") {
            gsap.from(item, {
                opacity: 0,
                ease: ease_value,
                duration: duration_value,
                delay: delay_value,
                scrollTrigger: {
                    trigger: item,
                    start: 'top 85%',
                }
            })
        }
    }
    else {
        if (fade_direction == "top") {
            gsap.from(item, {
                y: -fade_offset,
                opacity: 0,
                ease: ease_value,
                duration: duration_value,
                delay: delay_value,
            })
        }
        if (fade_direction == "left") {
            gsap.from(item, {
                x: -fade_offset,
                opacity: 0,
                ease: ease_value,
                duration: duration_value,
                delay: delay_value,
            })
        }
        if (fade_direction == "bottom") {
            gsap.from(item, {
                y: fade_offset,
                opacity: 0,
                ease: ease_value,
                duration: duration_value,
                delay: delay_value,
            })
        }
        if (fade_direction == "right") {
            gsap.from(item, {
                x: fade_offset,
                opacity: 0,
                ease: ease_value,
                duration: duration_value,
                delay: delay_value,
            })
        }
        if (fade_direction == "in") {
            gsap.from(item, {
                opacity: 0,
                ease: ease_value,
                duration: duration_value,
                delay: delay_value,
            })
        }
    }



})




////////////////////////////// ///////////////////////
// Has Text Reveal Animation 
////////////////////////////// ///////////////////////

const anim_reveal = document.querySelectorAll(".has_text_reveal_anim");

anim_reveal.forEach(areveal => {

    var duration_value = 1.5
    var onscroll_value = 1
    var stagger_value = 0.02
    var data_delay = 0.05

    if (areveal.getAttribute("data-duration")) {
        duration_value = areveal.getAttribute("data-duration");
    }
    if (areveal.getAttribute("data-on-scroll")) {
        onscroll_value = areveal.getAttribute("data-on-scroll");
    }
    if (areveal.getAttribute("data-stagger")) {
        stagger_value = areveal.getAttribute("data-stagger");
    }
    if (areveal.getAttribute("data-delay")) {
        data_delay = areveal.getAttribute("data-delay");
    }



    areveal.split = new SplitText(areveal, {
        type: "lines,words,chars",
        linesClass: "anim-reveal-line"
    });

    if (onscroll_value == 1) {
        areveal.anim = gsap.from(areveal.split.chars, {
            scrollTrigger: {
                trigger: areveal,
                start: 'top 85%',
            },
            duration: duration_value,
            delay: data_delay,
            ease: "circ.out",
            y: 80,
            stagger: stagger_value,
            opacity: 0,
        });
    } else {
        areveal.anim = gsap.from(areveal.split.chars, {
            duration: duration_value,
            delay: data_delay,
            ease: "circ.out",
            y: 80,
            stagger: stagger_value,
            opacity: 0,
        });
    }

});


// All Buttons  
let btn_cirle = gsap.utils.toArray(".btn-wrapper")
let regular_buttons = gsap.utils.toArray(".has_btn_anim")
var all_buttons = btn_cirle.concat(regular_buttons)
all_buttons.forEach((btn) => {
    if (!(btn.classList.contains("hero__button"))) {
        gsap.from(btn, {
            scrollTrigger: {
                trigger: btn,
                start: 'top 85%',
                markers: false,
            },
            opacity: 0,
            y: -70,
            ease: "bounce",
            duration: 1.5,
        })
    }
})



let device_width = window.innerWidth;

// Product Designer Portfolio Animation 
/////////////////////////////////////////////////////   
let pd_btn_list = gsap.utils.toArray(".has_pdlist_btn_animation button");

gsap.set(pd_btn_list, { opacity: 0, x: 35 })
gsap.to(pd_btn_list, {
    scrollTrigger: {
        trigger: ".has_pdlist_btn_animation",
        start: 'top 85%',
    },
    opacity: 1,
    x: 0,
    duration: 2,
    ease: "power4.out",
    stagger: 0.3,
    rotation: 0
})


let animation__feature2 = gsap.utils.toArray(".has_pdportfolio_animation .pdesigner-portfolio__item")
if (device_width < 100) {
    animation__feature2.forEach((item, i) => {
        gsap.set(item, { opacity: 0, scale: 0.9 })
        let featured2Timeline = gsap.timeline({
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
            }
        })
        featured2Timeline.to(item, {
            opacity: 1,
            scale: 10,
            duration: 1.5,
            ease: "bounce"
        })
    })
}
else {
    gsap.set(".has_pdportfolio_animation .pdesigner-portfolio__item", { opacity: 0, scale: 1.15, rotation: 2 })
    gsap.to(".has_pdportfolio_animation .pdesigner-portfolio__item", {
        scrollTrigger: {
            trigger: ".has_pdportfolio_animation .pdesigner-portfolio__item",
            start: "top center+=200"
        },
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: "bounce",
        stagger: 0.2,
        rotation: 0
    })
}
/////////////////////////////////////////////////////


// Extra JS added for testing 



// 27. Text Animation
let splitTextLines = gsap.utils.toArray(".text-anim p");

splitTextLines.forEach(splitTextLine => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: splitTextLine,
            start: 'top 85%',
            duration: 2,
            end: 'bottom 60%',
            scrub: false,
            markers: false,
            toggleActions: 'play none none none'
        }
    });

    const itemSplitted = new SplitText(splitTextLine, { type: "lines" });
    gsap.set(splitTextLine, { perspective: 400 });
    itemSplitted.split({ type: "lines" })
    tl.from(itemSplitted.lines, { duration: 1, delay: 0.5, opacity: 0, rotationX: -80, force3D: true, transformOrigin: "top center -50", stagger: 0.1 });
});
/////////////////////////////////////////////////////



/////////////////////////////////////////////////////
// 44. Workflow Slider Animation 2 |  fade_bottom
gsap.set(".brand__logo", { y: 30, opacity: 0 });

if (device_width < 1023) {
    const fadeArray = gsap.utils.toArray(".brand__logo")
    fadeArray.forEach((item, i) => {
        let fadeTl = gsap.timeline({
            scrollTrigger: {
                trigger: item,
                start: 'top 95%',
            }
        })
        fadeTl.to(item, {
            y: 0,
            opacity: 1
        })
    })
}
else {
    gsap.to(".brand__logo", {
        scrollTrigger: {
            trigger: ".brand__logo",
            start: 'top 95%',
        },
        y: 0,
        opacity: 1,
        stagger: {
            each: 0.15
        }
    })
}
/////////////////////////////////////////////////////




//   Footer Animation 

// gsap.from(".pdesigner-contact__area", {
//     y: -500,
//     scrollTrigger: {
//         trigger: ".pdesigner-blog__area",
//         start: "bottom bottom",
//         scrub: true,
//     }
// })

// gsap.from(".footer__area-2", {
//     y: -500,
//     scrollTrigger: {
//         trigger: ".pdesigner-blog__area",
//         start: "bottom bottom",
//         scrub: true,
//     }
// })


// Text Invert With Scroll 
const split = new SplitText(".text_invert", { type: "lines" });

split.lines.forEach((target) => {
    gsap.to(target, {
        backgroundPositionX: 0,
        ease: "none",
        scrollTrigger: {
            trigger: target,
            scrub: 1,
            start: 'top 85%',
            end: "bottom center",
        }
    });
});





////////////////////////////////////////////////
// Scroll Iimage extent
try {
    let scroll_images = document.querySelectorAll(".scroll__image-wrap")
    let scroll_images_inner = document.querySelectorAll(".scroll__image-inner")

    scroll_images.forEach((item, i) => {
        let imageTl_8 = gsap.timeline({
            scrollTrigger: {
                trigger: item,
                start: "top top+=90",
                pin: true,
                markers: false,
                scrub: 1,
                pinSpacing: false,
                end: "bottom bottom+=150",
            }
        });
        imageTl_8.to(scroll_images_inner[i], {
            width: "100%",
            borderRadius: "0px"
        });
    })
} catch (error) {
    console.log("Item Not found")
}




/////////////////////////////////////////////////////  
// Fashion Designer Blog
let fashion_blogs = gsap.utils.toArray(".dancer__blog-item")
if (device_width < 1023) {
    fashion_blogs.forEach((item, i) => {
        gsap.set(item, { opacity: 0, y: 60 })
        let featured2Timeline = gsap.timeline({
            scrollTrigger: {
                trigger: item,
                start: "top center+=200"
            }
        })
        featured2Timeline.to(item, {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power4.out"
        })
    })
}
else {
    gsap.set(".dancer__blog-item", { opacity: 0, y: 40 })
    gsap.to(".dancer__blog-item", {
        scrollTrigger: {
            trigger: ".dancer__blog-item",
            start: "top center+=200"
        },
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.2
    })
}

/////////////////////////////////////////////////////  
// fade Multiple Items


let fade_items = gsap.utils.toArray(".has_fade_items_anim")
if (device_width < 1023) {
    fade_items.forEach((item, i) => {
        gsap.set(item, { opacity: 0, y: 60 })
        let featured2Timeline = gsap.timeline({
            scrollTrigger: {
                trigger: item,
                start: "top center+=200"
            }
        })
        featured2Timeline.to(item, {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power4.out"
        })
    })
}
else {
    gsap.set(".has_fade_items_anim", { opacity: 0, y: 40 })
    gsap.to(".has_fade_items_anim", {
        scrollTrigger: {
            trigger: ".has_fade_items_anim",
            start: "top center+=200"
        },
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.2
    })
}

/////////////////////////////////////////////////////  
// fade Multiple Items


let product_items_fade_anim = gsap.utils.toArray(".product_items_fade_anim")
if (device_width < 1023) {
    fade_items.forEach((item, i) => {
        gsap.set(item, { opacity: 0, y: 60 })
        let featured2Timeline = gsap.timeline({
            scrollTrigger: {
                trigger: item,
                start: "top center+=200"
            }
        })
        featured2Timeline.to(item, {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power4.out"
        })
    })
}
else {
    gsap.set(".product_items_fade_anim", { opacity: 0, y: 40 })
    gsap.to(".product_items_fade_anim", {
        scrollTrigger: {
            trigger: ".product_items_fade_anim",
            start: "top center+=200"
        },
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.2
    })
}


/////////////////////////////////////////////////////  
// Writer Jurnal Animation

let jurnal_fade_animation = gsap.utils.toArray(".jurnal_fade_animation")
if (device_width < 1023) {
    fade_items.forEach((item, i) => {
        gsap.set(item, { opacity: 0, y: 60 })
        let featured2Timeline = gsap.timeline({
            scrollTrigger: {
                trigger: item,
                start: "top center+=200"
            }
        })
        featured2Timeline.to(item, {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power4.out"
        })
    })
}
else {
    gsap.set(".jurnal_fade_animation", { opacity: 0, y: 40 })
    gsap.to(".jurnal_fade_animation", {
        scrollTrigger: {
            trigger: ".jurnal_fade_animation",
            start: "top center+=200"
        },
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.2
    })
}
/////////////////////////////////////////////////////  
// Writer Jurnal Animation

let product_fade_animation = gsap.utils.toArray(".product_fade_animation")
if (device_width < 1023) {
    fade_items.forEach((item, i) => {
        gsap.set(item, { opacity: 0, y: 60 })
        let featured2Timeline = gsap.timeline({
            scrollTrigger: {
                trigger: item,
                start: "top center+=200"
            }
        })
        featured2Timeline.to(item, {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power4.out"
        })
    })
}
else {
    gsap.set(".product_fade_animation", { opacity: 0, y: 40 })
    gsap.to(".product_fade_animation", {
        scrollTrigger: {
            trigger: ".product_fade_animation",
            start: "top center+=200"
        },
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.2
    })
}




// Developer Blog Items 
let dev_blogs_animation = gsap.utils.toArray(".fade_dev_blog_items_anim")
if (device_width < 1023) {
    dev_blogs_animation.forEach((item, i) => {
        gsap.set(item, { opacity: 0, y: 60 })
        let featured2Timeline = gsap.timeline({
            scrollTrigger: {
                trigger: item,
                start: "top center+=200"
            }
        })
        featured2Timeline.to(item, {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power4.out"
        })
    })
}
else {
    gsap.set(".fade_dev_blog_items_anim", { opacity: 0, y: 40 })
    gsap.to(".fade_dev_blog_items_anim", {
        scrollTrigger: {
            trigger: ".fade_dev_blog_items_anim",
            start: "top center+=200"
        },
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.2
    })
}


// Animated Icon zoom, rotate  
var icon_lists = gsap.utils.toArray(".animated_icon")
icon_lists.forEach((icon) => {
    let animation_type = icon.getAttribute("data-animation")

    var duration = 2
    var scale_value = 1.5
    var repeat_value = -1

    if (icon.getAttribute("data-duration")) {
        duration = icon.getAttribute("data-duration")
    }

    if (icon.getAttribute("data-scale")) {
        scale_value = icon.getAttribute("data-scale")
    }

    if (icon.getAttribute("data-repeat")) {
        repeat_value = icon.getAttribute("data-repeat")
    }

    // Zooming Effect
    if (animation_type == "zoom") {
        gsap.to(icon, {
            scale: scale_value,
            duration: duration,
            repeat: repeat_value,
            yoyo: true,
            ease: "power2.out"

        })
    }

    // Rotate Effect 
    if (animation_type == "rotate") {
        gsap.to(icon, {
            rotation: 350,
            duration: duration,
            repeat: repeat_value,
            // yoyo:true, 
            ease: Linear.easeNone

        })
    }
});


// Artist gallery
var artist_galarys = document.querySelectorAll(".artist__gallary");
var counter = 0

artist_galarys.forEach((gallary) => {
    gsap.to(gallary, {
        scrollTrigger: {
            trigger: gallary,
            pin: gallary,
            pinSpacing: false,
            start: "top counter",
            delay: 1
        }
    });
});


// Photographer Galary Image
var photo_gallary = document.querySelectorAll(".img_anim_group_scale img")
gsap.set(".img_anim_group_scale img", {
    scale: 0.7
})
photo_gallary.forEach((gallary) => {
    gsap.to(gallary, {
        scrollTrigger: {
            trigger: gallary,
            start: "top 90%",
            scrub: true
        },
        scale: 1,
    });
});



// Interior Hero Text 
// gsap.to(".intDesigner-hero__titlewrap", {
//     scrollTrigger: {
//         trigger: ".intDesigner-hero__area",
//         pin: ".intDesigner-hero__titlewrap",
//         pinSpacing: false,
//         start: "top top",
//         end: "bottom 89",
//         delay: 1,
//         color: "#333",
//     }
// });


// Photographer Galary Image
var has_image_zoom = document.querySelectorAll(".has_image_zoom img")
has_image_zoom.forEach((image_zoom) => {
    gsap.to(image_zoom, {
        scrollTrigger: {
            trigger: image_zoom,
            start: "top top",
            scrub: true
        },
        scale: 1.15,
    });
});

// Sidebar Position Sticky JS
gsap.to(".resume-main__sidebar", {
    scrollTrigger: {
        trigger: ".resume-maincontent_area",
        start: "top top",
        end: "bottom botttom",
        pin: ".resume-main__sidebar",
        pinSpacing: false,
    },
});

// Main Header position Sticky JS
gsap.to(".resume-header__wrapper", {
    scrollTrigger: {
        trigger: ".body-wrapper",
        start: "top top",
        end: "bottom bottom",
        pin: ".resume-header__wrapper",
        pinSpacing: false,
    },
});