let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}










let header = document.querySelector('header');

window.addEventListener('scroll' , () =>{
    header.classList.toggle('shadow' , window.scrollY > 0)
})



    




const expandElements = document.querySelectorAll('.expand-element');

expandElements.forEach(expandElement => {
  expandElement.addEventListener('click', () => {
    expandElementt.forEach(element => {
      element.classList.remove('expanded');
    });
    expandElement.classList.add('expanded');
  });
});



