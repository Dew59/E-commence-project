let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let numberspan = document.getElementById("numberspan");
numberspan.innerText = Number("");

plus.addEventListener("click", addition);
function addition() {
    numberspan.innerText++;
};
minus.addEventListener("click", substract);
function substract() {
    numberspan.innerText--;
};

let menu = document.getElementById("menu");
let navMenu = document.getElementById("hambugermenus");
menu.addEventListener("click", displayMenu);
function displayMenu() {
    navMenu.style.display = "flex";
};//mobile hamburger menu;

let cancel = document.getElementById("cancel");
cancel.addEventListener("click", closeMenu);
function closeMenu() {
    navMenu.style.display = "none";
};//mobile hamburger menu cancel(X);

let addcartbtn = document.getElementById("submit");
let cartbox = document.getElementById("cartbox");
let cartdisplaydiv = document.getElementById("cartdisplaydiv");
let checkoutbtn = document.getElementById("checkout");
let cartnum = document.getElementById("cartnum");
let cartnum2 = document.getElementById("cartnum2");
let statux = document.getElementById("status");

addcartbtn.addEventListener("click", displaycartcontent);
function displaycartcontent() {
    cartdisplaydiv.style.visibility = "visible";
    checkoutbtn.style.visibility = "visible";
    statux.style.display = "none";
    cartnum.style.display = "block";
    cartnum2.style.display = "block"
};//add to cart btn function;

let cartimg = document.querySelectorAll(".cart");
cartimg.forEach(cart => {
    cart.addEventListener("click", displaycartbox);
    function displaycartbox(params) {
        if (cartbox.style.display === "none") {
            cartbox.style.display = `flex`;
        } else {
            cartbox.style.display = `none`;
        }
    };
});//cart image function;


checkoutbtn.addEventListener("click", clearcart);
function clearcart() {
    cartdisplaydiv.style.visibility = `hidden`;
    checkoutbtn.style.visibility = `hidden`;
    cartnum.style.display = `none`;
    statux.style.display = `block`;
};//checkout btn function


let previous = document.getElementById("control1");
let next = document.getElementById("control2");
let picturewrap = document.getElementById("picturewrap");
let images = document.querySelectorAll(".image");

let slidenum = 1;
let length = images.length;

next.addEventListener("click", swipe);
function swipe(params) {
    if (slidenum < length) {
        picturewrap.style.transform = `translateX(-${slidenum * 100}vw)`;
        slidenum++
    } else {
        picturewrap.style.transform = `translateX(0vw)`;
        slidenum = 1
    }

};//right image carousel

previous.addEventListener("click", swipeprev);
function swipeprev() {
    if (slidenum > 1) {
        picturewrap.style.transform = `translateX(-${(slidenum - 1) * 100}vw)`;
        slidenum--;
    } else {
        picturewrap.style.transform = `tanslateX(-${(slidenum) * 100}vw)`;
        slidenum = length
    }
};//left image carousel


let previous2 = document.getElementById("prev");
let next2 = document.getElementById("next");
let slidediv = document.getElementById("slide");

next2.addEventListener("click", swipe2);
function swipe2() {
    if (slidenum < length) {
        slidediv.style.transform = `translateX(-${slidenum * 350}px)`;
        slidenum++
    } else {
        slidediv.style.transform = `translateX(0px)`;
        slidenum = 1
    }
};

previous2.addEventListener("click", swipeprev2);
function swipeprev2() {
    if (slidenum > 1) {
        slidediv.style.transform = `translateX(-${(slidenum - 2) * 350}px)`;
        slidenum--;
    } else {
        slidediv.style.transform = `tanslateX(-${(length - 1) * 350}px)`;
        slidenum = length
    }
};

let previewContainer = document.getElementById("previewcontainer")
picturewrap.addEventListener("click", displayPreview);
let mediaQuery = window.matchMedia("(max-width: 765px)");
function displayPreview() {
    if (mediaQuery.matches) {
        previewContainer.style.display = `none`;
    } else {
        previewContainer.style.display = `flex`;
    }
};

let exit = document.getElementById("close");
exit.addEventListener("click", exitPreviewCont);
function exitPreviewCont() {
    previewContainer.style.display = `none`
};


let thumbnail1 = document.querySelector(".one");
let thumbnail2 = document.querySelector(".two");
let thumbnail3 = document.querySelector(".three");
let thumbnail4 = document.querySelector(".four");
thumbnail1.addEventListener("click", () => {
    picturewrap.style.transform = `translateX(-${slidenum * 0}vw)`;
    // picturewrap.innerHTML = `<img src="image/image-product-1.jpg" alt="first product image" class="first image">`;
    thumbnail1.classList.add("active");
    thumbnail2.classList.remove("active");
    thumbnail3.classList.remove("active");
    thumbnail4.classList.remove("active");
});

thumbnail2.addEventListener("click", () => {
    picturewrap.style.transform = `translateX(-${slidenum * 29.5}vw)`;
    // picturewrap.innerHTML = `<img src="image/image-product-2.jpg" alt="second product image" class="second image">`;
    thumbnail2.classList.add("active");
    thumbnail1.classList.remove("active");
    thumbnail3.classList.remove("active");
    thumbnail4.classList.remove("active");
});

thumbnail3.addEventListener("click", () => {
    picturewrap.style.transform = `translateX(-${slidenum * 58.9}vw)`;
    // picturewrap.innerHTML = `<img src="image/image-product-3.jpg" alt="third product image" class="third image">`;
    thumbnail3.classList.add("active");
    thumbnail1.classList.remove("active");
    thumbnail2.classList.remove("active");
    thumbnail4.classList.remove("active");
});

thumbnail4.addEventListener("click", () => {
    picturewrap.style.transform = `translateX(-${slidenum * 88.5}vw)`;
    // picturewrap.innerHTML = `<img src="image/image-product-4.jpg" alt="fourth product image" class="fourth image">`;
    thumbnail4.classList.add("active");
    thumbnail1.classList.remove("active");
    thumbnail2.classList.remove("active");
    thumbnail3.classList.remove("active");
});


let thumbnail5 = document.querySelector(".five");
let thumbnail6 = document.querySelector(".six");
let thumbnail7 = document.querySelector(".seven");
let thumbnail8 = document.querySelector(".eight");
thumbnail5.addEventListener("click", () => {
    slidediv.style.transform = `translateX(-${slidenum * 1}px)`;
    // slidediv.innerHTML = `<img src="image/image-product-1.jpg" alt="" class="imagess">`;
    thumbnail5.classList.add("active");
    thumbnail6.classList.remove("active");
    thumbnail7.classList.remove("active");
    thumbnail8.classList.remove("active");
});

thumbnail6.addEventListener("click", () => {
    slidediv.style.transform = `translateX(-${slidenum * 350}px)`;
    // slidediv.innerHTML = `<img src="image/image-product-2.jpg" alt="" class="imagess">`;
    thumbnail6.classList.add("active");
    thumbnail5.classList.remove("active");
    thumbnail7.classList.remove("active");
    thumbnail8.classList.remove("active");
});

thumbnail7.addEventListener("click", () => {
    slidediv.style.transform = `translateX(-${slidenum * 700}px)`;
    // slidediv.innerHTML = `<img src="image/image-product-3.jpg" alt="" class="imagess">`;
    thumbnail7.classList.add("active");
    thumbnail6.classList.remove("active");
    thumbnail5.classList.remove("active");
    thumbnail8.classList.remove("active");
});

thumbnail8.addEventListener("click", () => {
    slidediv.style.transform = `translateX(-${slidenum * 1050}px)`;
    // slidediv.innerHTML = `<img src="image/image-product-4.jpg" alt="" class="imagess">`;
    thumbnail8.classList.add("active");
    thumbnail5.classList.remove("active");
    thumbnail6.classList.remove("active");
    thumbnail7.classList.remove("active");
});
console.log(slidenum);