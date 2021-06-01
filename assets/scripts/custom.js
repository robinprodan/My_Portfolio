galleryItems = document.querySelectorAll(".gallery-item"),
totalGalleryItem = galleryItems.length;

const lightbox = document.querySelector(".lightbox"),
lightboxImg = lightbox.querySelector(".lightbox-img");
lightboxClose = lightbox.querySelector(".lightbox-close");

let itemIndex=0;
for(let i=0; i<totalGalleryItem;i++)
{
  galleryItems[i].addEventListener("click", function(){
    itemIndex=i;
    changeItem();
    toggleLightbox();
  })
}
function nextItem(){
if(itemIndex ===  totalGalleryItem-1){
  itemIndex = 0;
}
else{
  itemIndex++;
}
changeItem();
}
function prevItem(){
  if(itemIndex === 0){
    itemIndex = totalGalleryItem -1;
  }
  else{
    itemIndex--;
  }
  changeItem();
  }
function toggleLightbox(){
  lightbox.classList.toggle("open");
}
function changeItem(){
  imgSrc = galleryItems[itemIndex].querySelector(".gallery-img img").getAttribute("src")
lightboxImg.src =  imgSrc;

}
//close lightbox
lightbox.addEventListener("click", function(event){
  if(event.target === lightboxClose || event.target === lightbox){
    toggleLightbox();
  }
})
// Aside Navbar
const nav = document.querySelector(".nav"),
navList = nav.querySelectorAll("li"),
totalNavList = navList.length;
allSection = document.querySelectorAll(".section"),
totalSection = allSection.length

for(let i=0; i<totalNavList ; i++){
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function(){
    // Remove Back Section Class
      removeBackSectionClass();

    for(let i=0; i<totalSection; i++){
      allSection[i].classList.remove("back-section")
    }
    for(let j=0; j<totalNavList;j++){
      if(navList[j].querySelector("a").classList.contains("active")){
        // add back section class
        addBackSectionClass(j);
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
if(window.innerWidth < 1200){
  asideSectionTogglerBtn();
}
  })
}
function addBackSectionClass(num){
  allSection[num].classList.add("back-section");
}
function removeBackSectionClass(){
  for(let i=0; i<totalSection; i++){
    allSection[i].classList.remove("back-section")
  }
}
function showSection(element){
for(let i=0; i<totalSection; i++){
  allSection[i].classList.remove("active")
}
   const target = element.getAttribute("href").split("#")[1];
   document.querySelector("#"+target).classList.add("active")
}
function updateNav(element){
  for(let i=0; i<totalNavList;i++){
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
      navList[i].querySelector("a").classList.add("active");
    }
  }
}
document.querySelector(".hire-me").addEventListener("click",function(){
  const sectionIndex = this.getAttribute("data-section-index");
  showSection(this);
  updateNav(this);
  removeBackSectionClass();
  addBackSectionClass(sectionIndex);
})
const navTogglerBtn = document.querySelector(".nav-toggler"),
aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click",asideSectionTogglerBtn)

function asideSectionTogglerBtn(){
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for(let i=0; i<totalSection; i++){
    allSection[i].classList.toggle("open")
  }
}
