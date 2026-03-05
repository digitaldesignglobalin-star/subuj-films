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










const images = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox-close");
const nextBtn = document.querySelector(".lightbox-next");
const prevBtn = document.querySelector(".lightbox-prev");

let currentIndex = 0;


// OPEN IMAGE
images.forEach((img,index)=>{
  img.onclick = ()=>{
    currentIndex = index;
    showImage();
    lightbox.style.display="flex";
  }
});


// SHOW IMAGE FUNCTION
function showImage(){
  lightboxImg.src = images[currentIndex].src;
}


// NEXT
nextBtn.onclick = ()=>{
  currentIndex++;
  if(currentIndex >= images.length) currentIndex = 0;
  showImage();
};


// PREVIOUS
prevBtn.onclick = ()=>{
  currentIndex--;
  if(currentIndex < 0) currentIndex = images.length-1;
  showImage();
};


// CLOSE BUTTON
closeBtn.onclick = ()=> lightbox.style.display="none";


// CLICK OUTSIDE CLOSE
lightbox.onclick = e=>{
  if(e.target===lightbox) lightbox.style.display="none";
};