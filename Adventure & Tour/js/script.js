let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
let closeNavbar = document.querySelector('#nav-close');
let search = document.querySelector('#search-btn');
let closeSearch = document.querySelector('#close-search');
let searchForm = document.querySelector('.search-form');

menu.onclick=()=>{
    navbar.classList.add('active');
}

closeNavbar.onclick=()=>{
    navbar.classList.remove('active');
}

search.onclick=()=>{
    searchForm.classList.add('active');
}

closeSearch.onclick=()=>{
    searchForm.classList.remove('active');
}

window.onscroll=()=>{
    navbar.classList.remove('active');
}