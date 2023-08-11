/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');


/*===== Menu Show =====*/
/* Validate if constant exists */
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/*===== Hide Show =====*/
/* Validate if constant exists */
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*=============== IMAGE GALLERY ===============*/
function imgGallery() {
    const mainImg = document.querySelector('.details__img'),
        smallImg = document.querySelectorAll('.details__small-img');

        smallImg.forEach((img) => {
            img.addEventListener('click', function() {
                mainImg.src = this.src
            })
        })
}

imgGallery();

/*=============== SWIPER CATEGORIES ===============*/
var swiperCategories = new Swiper(".categories__container", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        350: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 24,
        },
        1400: {
            slidesPerView: 6,
            spaceBetween: 24,
        },
    },
  });
/*=============== SWIPER PRODUCTS ===============*/
var swiperProducts = new Swiper(".new__container", {
    spaceBetween: 24,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
    },
  });

/*=============== PRODUCTS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[content]');

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.target);
            tabContents.forEach((tabContent) => {
                tabContent.classList.remove('active-tab');
            });

            target.classList.add('active-tab');

            tabs.forEach((tab) => {
                tab.classList.remove('active-tab');
            });

            tab.classList.add('active-tab');
        });

    });


/*=============== PAGINATION ===============*/
let thisPageDashboard = 1;
let limitDashboard = 8;
let listDashboard = document.querySelectorAll('#dashboard .product__item');

function loadItemDashboard(){
    let beginGetDashboard = limitDashboard * (thisPageDashboard - 1);
    let endGetDashboard = limitDashboard * thisPageDashboard - 1;
    listDashboard.forEach((product__item, keyDashboard)=>{
        if(keyDashboard >= beginGetDashboard && keyDashboard <= endGetDashboard){
            product__item.style.display = 'block';
        }else{
            product__item.style.display = 'none';
        }
    })
    paginationDashboard();
}
loadItemDashboard();
function paginationDashboard(){
    let countDashboard = Math.ceil(listDashboard.length / limitDashboard);
    document.querySelector('#dashboard .pagination').innerHTML = '';

    if(thisPageDashboard != 1){
        let prevDashboard = document.createElement('li');
        prevDashboard.className = 'pagination__link',
        prevDashboard.innerText = 'PREV';
        prevDashboard.setAttribute('onclick', "changePageDashboard(" + (thisPageDashboard - 1) + ")");
        document.querySelector('#dashboard .pagination').appendChild(prevDashboard);
    }

    for(i = 1; i <= countDashboard; i++){
        let newPageDashboard = document.createElement('li');
        newPageDashboard.className = 'pagination__link',
        newPageDashboard.innerText = i;
        if(i == thisPageDashboard){
            newPageDashboard.classList.add('active');
        }
        newPageDashboard.setAttribute('onclick', "changePageDashboard(" + i + ")");
        document.querySelector('#dashboard .pagination').appendChild(newPageDashboard);
    }

    if(thisPageDashboard != countDashboard){
        let nextDashboard = document.createElement('li');
        nextDashboard.className = 'pagination__link';
        nextDashboard.innerText = 'NEXT';
        nextDashboard.setAttribute('onclick', "changePageDashboard(" + (thisPageDashboard + 1) + ")");
        document.querySelector('#dashboard .pagination').appendChild(nextDashboard);
    }
}
function changePageDashboard(i){
    thisPageDashboard = i;
    loadItemDashboard();
}

let thisPageBags = 1;
let limitBags = 8;
let listBags = document.querySelectorAll('#update-profile .product__item');

function loadItemBags(){
    let beginGetBags = limitBags * (thisPageBags - 1);
    let endGetBags = limitBags * thisPageBags - 1;
    listBags.forEach((product__item, keyBags)=>{
        if(keyBags >= beginGetBags && keyBags <= endGetBags){
            product__item.style.display = 'block';
        }else{
            product__item.style.display = 'none';
        }
    })
    paginationBags();
}
loadItemBags();
function paginationBags(){
    let countBags = Math.ceil(listBags.length / limitBags);
    document.querySelector('#update-profile .pagination').innerHTML = '';

    if(thisPageBags != 1){
        let prevBags = document.createElement('li');
        prevBags.className = 'pagination__link',
        prevBags.innerText = 'PREV';
        prevBags.setAttribute('onclick', "changePageBags(" + (thisPageBags - 1) + ")");
        document.querySelector('#update-profile .pagination').appendChild(prevBags);
    }

    for(i = 1; i <= countBags; i++){
        let newPageBags = document.createElement('li');
        newPageBags.className = 'pagination__link',
        newPageBags.innerText = i;
        if(i == thisPageBags){
            newPageBags.classList.add('active');
        }
        newPageBags.setAttribute('onclick', "changePageBags(" + i + ")");
        document.querySelector('#update-profile .pagination').appendChild(newPageBags);
    }

    if(thisPageBags != countBags){
        let nextBags = document.createElement('li');
        nextBags.className = 'pagination__link';
        nextBags.innerText = 'NEXT';
        nextBags.setAttribute('onclick', "changePageBags(" + (thisPageBags + 1) + ")");
        document.querySelector('#update-profile .pagination').appendChild(nextBags);
    }
}
function changePageBags(i){
    thisPageBags = i;
    loadItemBags();
}


let thisPageOrders = 1;
let limitOrders = 8;
let listOrders = document.querySelectorAll('#orders .product__item');

function loadItemOrders(){
    let beginGetOrders = limitOrders * (thisPageOrders - 1);
    let endGetOrders = limitOrders * thisPageOrders - 1;
    listOrders.forEach((product__item, keyOrders)=>{
        if(keyOrders >= beginGetOrders && keyOrders <= endGetOrders){
            product__item.style.display = 'block';
        }else{
            product__item.style.display = 'none';
        }
    })
    paginationOrders();
}
loadItemOrders();
function paginationOrders(){
    let countOrders = Math.ceil(listOrders.length / limitOrders);
    document.querySelector('#orders .pagination').innerHTML = '';

    if(thisPageOrders != 1){
        let prevOrders = document.createElement('li');
        prevOrders.className = 'pagination__link',
        prevOrders.innerText = 'PREV';
        prevOrders.setAttribute('onclick', "changePageOrders(" + (thisPageOrders - 1) + ")");
        document.querySelector('#orders .pagination').appendChild(prevOrders);
    }

    for(i = 1; i <= countOrders; i++){
        let newPageOrders = document.createElement('li');
        newPageOrders.className = 'pagination__link',
        newPageOrders.innerText = i;
        if(i == thisPageOrders){
            newPageOrders.classList.add('active');
        }
        newPageOrders.setAttribute('onclick', "changePageOrders(" + i + ")");
        document.querySelector('#orders .pagination').appendChild(newPageOrders);
    }

    if(thisPageOrders != countOrders){
        let nextOrders = document.createElement('li');
        nextOrders.className = 'pagination__link';
        nextOrders.innerText = 'NEXT';
        nextOrders.setAttribute('onclick', "changePageOrders(" + (thisPageOrders + 1) + ")");
        document.querySelector('#orders .pagination').appendChild(nextOrders);
    }
}
function changePageOrders(i){
    thisPageOrders = i;
    loadItemOrders();
}

let thisPageAddress = 1;
let limitAddress = 8;
let listAddress = document.querySelectorAll('#address .product__item');

function loadItemAddress(){
    let beginGetAddress = limitAddress * (thisPageAddress - 1);
    let endGetAddress = limitAddress * thisPageAddress - 1;
    listAddress.forEach((product__item, keyAddress)=>{
        if(keyAddress >= beginGetAddress && keyAddress <= endGetAddress){
            product__item.style.display = 'block';
        }else{
            product__item.style.display = 'none';
        }
    })
    paginationAddress();
}
loadItemAddress();
function paginationAddress(){
    let countAddress = Math.ceil(listAddress.length / limitAddress);
    document.querySelector('#address .pagination').innerHTML = '';

    if(thisPageAddress != 1){
        let prevAddress = document.createElement('li');
        prevAddress.className = 'pagination__link',
        prevAddress.innerText = 'PREV';
        prevAddress.setAttribute('onclick', "changePageAddress(" + (thisPageAddress - 1) + ")");
        document.querySelector('#address .pagination').appendChild(prevAddress);
    }

    for(i = 1; i <= countAddress; i++){
        let newPageAddress = document.createElement('li');
        newPageAddress.className = 'pagination__link',
        newPageAddress.innerText = i;
        if(i == thisPageAddress){
            newPageAddress.classList.add('active');
        }
        newPageAddress.setAttribute('onclick', "changePageAddress(" + i + ")");
        document.querySelector('#address .pagination').appendChild(newPageAddress);
    }

    if(thisPageAddress != countAddress){
        let nextAddress = document.createElement('li');
        nextAddress.className = 'pagination__link';
        nextAddress.innerText = 'NEXT';
        nextAddress.setAttribute('onclick', "changePageAddress(" + (thisPageAddress + 1) + ")");
        document.querySelector('#address .pagination').appendChild(nextAddress);
    }
}
function changePageAddress(i){
    thisPageAddress = i;
    loadItemAddress();
}

let thisPagePassword = 1;
let limitPassword = 8;
let listPassword = document.querySelectorAll('#change-password .product__item');

function loadItemPassword(){
    let beginGetPassword = limitPassword * (thisPagePassword - 1);
    let endGetPassword = limitPassword * thisPagePassword - 1;
    listPassword.forEach((product__item, keyPassword)=>{
        if(keyPassword >= beginGetPassword && keyPassword <= endGetPassword){
            product__item.style.display = 'block';
        }else{
            product__item.style.display = 'none';
        }
    })
    paginationPassword();
}
loadItemPassword();
function paginationPassword(){
    let countPassword = Math.ceil(listPassword.length / limitPassword);
    document.querySelector('#change-password .pagination').innerHTML = '';

    if(thisPagePassword != 1){
        let prevPassword = document.createElement('li');
        prevPassword.className = 'pagination__link',
        prevPassword.innerText = 'PREV';
        prevPassword.setAttribute('onclick', "changePagePassword(" + (thisPagePassword - 1) + ")");
        document.querySelector('#change-password .pagination').appendChild(prevPassword);
    }

    for(i = 1; i <= countPassword; i++){
        let newPagePassword = document.createElement('li');
        newPagePassword.className = 'pagination__link',
        newPagePassword.innerText = i;
        if(i == thisPagePassword){
            newPagePassword.classList.add('active');
        }
        newPagePassword.setAttribute('onclick', "changePagePassword(" + i + ")");
        document.querySelector('#change-password .pagination').appendChild(newPagePassword);
    }

    if(thisPagePassword != countPassword){
        let nextPassword = document.createElement('li');
        nextPassword.className = 'pagination__link';
        nextPassword.innerText = 'NEXT';
        nextPassword.setAttribute('onclick', "changePagePassword(" + (thisPagePassword + 1) + ")");
        document.querySelector('#change-password .pagination').appendChild(nextPassword);
    }
}
function changePagePassword(i){
    thisPagePassword = i;
    loadItemPassword();
}