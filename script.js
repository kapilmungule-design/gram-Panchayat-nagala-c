// ==========================
// MOBILE MENU
// ==========================

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("show");

    if(menu.classList.contains("show")){
        menuBtn.innerHTML = '<i class="fas fa-times"></i>';
    }else{
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// Menu item click hone par menu close

document.querySelectorAll(".menu a").forEach(link => {

    link.addEventListener("click", ()=>{

        menu.classList.remove("show");
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';

    });

});


// ==========================
// IMAGE SLIDER
// ==========================

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide=>slide.classList.remove("active"));

    slides[index].classList.add("active");

}

function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    showSlide(currentSlide);

}

setInterval(nextSlide,4000);


// ==========================
// SCROLL TO TOP BUTTON
// ==========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


// ==========================
// CARD ANIMATION
// ==========================

const cards = document.querySelectorAll(".card, .scheme, .member");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:0.2
});

cards.forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(30px)";
    card.style.transition="0.6s";

    observer.observe(card);

});


// ==========================
// HEADER SHADOW
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        header.style.boxShadow="0 5px 20px rgba(0,0,0,.25)";

    }else{

        header.style.boxShadow="0 2px 10px rgba(0,0,0,.15)";

    }

});


// ==========================
// NEW BADGE BLINK
// ==========================

setInterval(()=>{

    document.querySelectorAll(".new").forEach(badge=>{

        badge.style.opacity =
        badge.style.opacity=="0.4" ? "1" : "0.4";

    });

},700);



// ===========================
// SEARCH
// ===========================

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function(){

    let filter = this.value.toLowerCase();

    let items = document.querySelectorAll(
        ".card, .scheme, .meeting, .member"
    );

    items.forEach(item=>{

        let text = item.innerText.toLowerCase();

        if(text.includes(filter)){

            item.style.display="block";

        }else{

            item.style.display="none";

        }

    });

});


const navLinks=document.querySelectorAll(".bottom-nav a");

navLinks.forEach(link=>{

link.addEventListener("click",function(){

navLinks.forEach(item=>item.classList.remove("active"));

this.classList.add("active");

});

});


// ================= SETTINGS PANEL =================


function openSettings(){

document.getElementById("settingsPanel")
.style.right="0";

}



function closeSettings(){

document.getElementById("settingsPanel")
.style.right="-320px";

}





// ================= DARK MODE =================


let darkToggle =
document.getElementById("darkToggle");



if(localStorage.getItem("darkMode")=="on"){

document.body.classList.add("dark");

if(darkToggle)
darkToggle.checked=true;

}



if(darkToggle){

darkToggle.addEventListener("change",function(){


if(this.checked){


document.body.classList.add("dark");

localStorage.setItem(
"darkMode",
"on"
);


}

else{


document.body.classList.remove("dark");

localStorage.setItem(
"darkMode",
"off"
);


}


});


}






// ================= LANGUAGE =================


function changeLanguage(lang){


localStorage.setItem(
"language",
lang
);



if(lang=="hi"){


translateHindi();


}


else if(lang=="mr"){


translateMarathi();


}


else{


location.reload();


}



}






function translateHindi(){


let text={


"Gram Panchayat":"ग्राम पंचायत",

"Schemes":"योजनाएं",

"Meetings":"बैठक",

"Members":"सदस्य",

"Contact":"संपर्क",

"Home":"होम",

"Development Work":"विकास कार्य",

"Programs":"कार्यक्रम",

"Tax Services":"कर सेवा",

"Permissions":"अनुमति"


};



document.querySelectorAll("*")
.forEach(el=>{


if(text[el.innerText]){

el.innerText=text[el.innerText];

}


});


}







function translateMarathi(){


let text={


"Gram Panchayat":"ग्राम पंचायत",

"Schemes":"योजना",

"Meetings":"सभा",

"Members":"सदस्य",

"Contact":"संपर्क",

"Home":"मुख्यपृष्ठ",

"Development Work":"विकास कामे",

"Programs":"कार्यक्रम",

"Tax Services":"कर सेवा",

"Permissions":"परवानगी"


};



document.querySelectorAll("*")
.forEach(el=>{


if(text[el.innerText]){

el.innerText=text[el.innerText];

}


});


}





