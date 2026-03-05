// Smooth scroll 
// -------- BUTTERY SMOOTH SCROLL (FINAL) --------









const menuToggle = document.getElementById('menuToggle');
  const sideNav = document.getElementById('sideNav');
  const overlay = document.getElementById('offcanvasOverlay');
  const closeNav = document.getElementById('closeNav');

  menuToggle.addEventListener('click', () => {
    sideNav.classList.add('active');
    overlay.classList.add('active');
    menuToggle.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  closeNav.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  function closeMenu() {
    sideNav.classList.remove('active');
    overlay.classList.remove('active');
    menuToggle.classList.remove('active');
    document.body.style.overflow = '';
  }


  






// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Button hover effect enhancement
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Navbar link hover animation
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Page load animation trigger
document.addEventListener('DOMContentLoaded', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});





// ================================




document.querySelectorAll(".hover-video-card").forEach(card => {
  const video = card.querySelector("video");

  card.addEventListener("mouseenter", () => {
    video.currentTime = 0;
    video.play().catch(() => {});
  });

  card.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });
});






// ===================================



// scrollable what do we offer section 
document.querySelectorAll('.slider-wrapper').forEach((slider) => {
  const track = slider.querySelector('.slider-track');
  const isReverse = slider.closest('.services-slider')?.classList.contains('reverse');

  let isDown = false;
  let startX;
  let scrollLeft;
  let autoScrollSpeed = 0.6;
  let autoScroll;

  // ---------- SET INITIAL POSITION (KEY FIX) ----------
  requestAnimationFrame(() => {
    if (isReverse) {
      slider.scrollLeft = track.scrollWidth / 2;
    }
  });

  // ---------- DRAG ----------
  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('mouseup', () => isDown = false);
  slider.addEventListener('mouseleave', () => isDown = false);

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    slider.scrollLeft = scrollLeft - (e.pageX - startX);
  });

  // ---------- TOUCH ----------
  slider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].pageX;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('touchmove', (e) => {
    slider.scrollLeft = scrollLeft - (e.touches[0].pageX - startX);
  });

  // ---------- INFINITE SCROLL ----------
  function infiniteScroll() {

  const max = track.scrollWidth / 2;

  // moving RIGHT → LEFT
  if (slider.scrollLeft >= max) {
    slider.scrollLeft = 1;
  }

  // moving LEFT → RIGHT
  if (slider.scrollLeft <= 0) {
    slider.scrollLeft = max - 1;
  }

}

  slider.addEventListener('scroll', infiniteScroll);

  // ---------- AUTO SCROLL ----------
  function startAutoScroll() {
    autoScroll = setInterval(() => {
      if (isReverse) {
        // 👉 MOVE RIGHT
        slider.scrollLeft -= autoScrollSpeed;
      } else {
        // 👉 MOVE LEFT
        slider.scrollLeft += autoScrollSpeed;
      }
    }, 16);
  }

  function stopAutoScroll() {
    clearInterval(autoScroll);
  }

  startAutoScroll();

  slider.addEventListener('mouseenter', stopAutoScroll);
  slider.addEventListener('mouseleave', startAutoScroll);
  slider.addEventListener('touchstart', stopAutoScroll);
  slider.addEventListener('touchend', startAutoScroll);
});













// insta liek story section 
/* ---------- DATA ---------- */
/* Replace images with yours */


const users = [

{
name:"Promith Chatterjee",
role:"Negative Lead character",
img:"../assets/resized images/Untitled design (19).png",
channel:"Zee Bangla",
serial:"ANANDI(2026)",
character:"Negative Lead character",
casted:"SFTS [Arpita]"
},

{
name:"Chirag",
role:" Child Lead - Character : Chirag",
img:"../assets/resized images/Untitled design (14).png",
channel:"Zee Bangla",
serial:"BESH KORECHI PREM",
character:"Child Lead - Character : Chirag",
casted:"SFTS [Arpita]"
},

{
name:"Kaushiki Basu ",
role:" Nagative Lead ( Urmi)",
img:"../assets/resized images/Untitled design (16).png",
channel:"Star Jalsha",
serial:"GANGA",
character:"Nagative Lead ( Urmi)",
casted:"SFTS [Arpita]"
},

{
name:"Priya Sharma",
role:"Lead Heroine",
img:"../assets/resized images/Untitled design (15).png",
channel:"Sony",
serial:"Code World",
character:"Lead Heroine",
casted:"Dream Casting"
},
{
name:"Ratnapriya Das",
role:"Lead Heroine Female",
img:"../assets/resized images/Untitled design (18).png",
channel:"Star Jalsha",
serial:"URAN(2023)",
character:"Lead Heroine Female",
casted:" SFTS [Neelabjya]"
},

{
name:"Joyeeta Sanyal",
role:"Hero's Sister",
img:"../assets/resized images/Untitled design (20).png",
channel:"Star Jalsha",
serial:"DUI SALIKH(2024)",
character:"Hero's Sister",
casted:"SFTS"
}

];

let current=0;
let auto;


/* CREATE STORIES */

const storyBar=document.getElementById("storyBar");

users.forEach((u,i)=>{
const div=document.createElement("div");
div.className="story";
div.innerHTML=`<img src="${u.img}">`;

div.onclick=()=>{
current=i;
update();
restartAuto();   // pause + restart autoplay
};

storyBar.appendChild(div);
});


/* UPDATE */

function update(){

const img=document.getElementById("bigImg");

/* start fade out */
img.classList.add("fade");

/* wait then change */
setTimeout(()=>{

const u = users[current];

img.src = u.img;

document.getElementById("name").innerText = u.name;
document.getElementById("role").innerText = u.role;

/* ⭐ ADD THESE LINES */
document.getElementById("channel").innerText = u.channel || "";
document.getElementById("serial").innerText = u.serial || "";
document.getElementById("character").innerText = u.character || "";
document.getElementById("casted").innerText = u.casted || "";

img.classList.remove("fade");

},250);

document.querySelectorAll(".story").forEach((s,i)=>{
s.classList.toggle("active",i===current);
});

}

update();


/* NEXT / PREV */

function next(){
current=(current+1)%users.length;
update();
restartAuto();
}

function prev(){
current=(current-1+users.length)%users.length;
update();
restartAuto();
}


/* ---------- AUTO MOVE ---------- */

function startAuto(){
auto=setInterval(()=>{
current=(current+1)%users.length;
update();
},3500);
}

function restartAuto(){
clearInterval(auto);
startAuto();
}

startAuto();

