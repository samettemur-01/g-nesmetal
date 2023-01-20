let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
}





var menuToggle = document.querySelector("#menu-icon");
var menu = document.querySelector(".navbar");

menuToggle.addEventListener("click", function() {
  menu.classList.toggle("open");
});





let header = document.querySelector('header');

window.addEventListener('scroll' , () =>{
    header.classList.toggle('shadow' , window.scrollY > 0)
})



    
const expandElement = document.querySelector('.expand-element');
expandElement.addEventListener('click', () => {
  expandElement.classList.toggle('expanded');
});

const expandElementt = document.querySelector('.expand-elementt');
expandElementt.addEventListener('click', () => {
  expandElementt.classList.toggle('expanded');
});

const expandElementtt = document.querySelector('.expand-elementtt');
expandElementtt.addEventListener('click', () => {
  expandElementtt .classList.toggle('expanded');
});



const expandElements = document.querySelectorAll('.expand-element');

expandElements.forEach(expandElement => {
  expandElement.addEventListener('click', () => {
    expandElementt.forEach(element => {
      element.classList.remove('expanded');
    });
    expandElement.classList.add('expanded');
  });
});



