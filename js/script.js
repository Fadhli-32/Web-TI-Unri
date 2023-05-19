// let nav = document.querySelector("nav");
// let navulli = document.querySelector("nav ul li");
// let navullia = document.querySelector("nav ul li a");
// let search = document.querySelector(".search");
// function skrol(){
// 	console.log(nav)
// 	window.addEventListener("scroll", () => {
		
// 		if(window.scrollY >= 10){
// 			nav.classList.add('pink');
// 			navulli.classList.add('pink');
// 			navullia.classList.add('pink');
// 			search.classList.add('pink');
// 		}else{
// 			nav.classList.remove('pink');
// 			navulli.classList.remove('pink');
// 			navullia.classList.remove('pink');
// 			search.classList.remove('pink');
// 		}
// 	});
// }
// skrol();





// const nav = document.querySelectorAll('.bungkus');

// window.addEventListener("scroll", () => {
// 	if(window.scrollY >= 10){
		
// 		for(let i = 0;i<nav.length;i++){
// 			nav.classList.add('pink');
// 		}
// 	}else{
// 		for(let i = 0;i<nav.length;i++){
// 			nav.classList.remove('pink');
// 		}
// 	}
// });



$(window).scroll(function(){
		
  if($(window).scrollTop()){
    // document.getElementById("scrollmenu").style.position = "fixed";
      $("nav,nav ul, nav ul li, nav ul li a, .search, .logounri2, .navbar2, .flexbasis1, .flexbasis2, .aktif, .sub-item, .tombol-search").addClass("pink");
  }else{
    // $("nav, scrollmenu").style.position = "relative";
      $("nav,nav ul, nav ul li, nav ul li a, .search, .logounri2, .navbar2, .flexbasis1, .flexbasis2, .aktif, .sub-item, .tombol-search").removeClass("pink");
  }
})



// $(window).scroll(function(){
  
//   if($(window).scrollTop()){
//     // document.getElementById("scrollmenu").style.position = "fixed";
//       $("nav,.ul, .li, nav ul li a, .search, .logounri2, .navbar2").addClass("pink");
//   }else{
//     // $("nav, scrollmenu").style.position = "relative";
//       $("nav,.ul, .li, nav ul li a, .search, .logounri2, .navbar2").removeClass("pink");
//   }
// })
// function onScroll () {
//     window.addEventListener("scroll", () => {
//         headerSticky.classList.add("pink")
//     })
// }

// onScroll()

// const topHeaderToggle = document.getElementsByClassName("top-menu-toggler")[0];
// const topHeaderMobile = document.getElementsByClassName("navbar-top-mobile")[0];
// const topHeaderMobile = document.getElementsByClassName("navbar-top-mobile")[0];
// topHeaderMobile.style.display = "none";
// 	topHeaderToggle.addEventListener("click", () => {
// 		if (topHeaderMobile.style.display === "none") {
// 			topHeaderMobile.style.display = "block";
// 		} else {
// 			topHeaderMobile.style.display = "none";
// 		}
// 		// console.log(topHeaderMobile.style.display);
// 	});

// const topHeader = document.getElementsByClassName("navbar-top")[0];
// const banner = document.getElementsByClassName("banner-kontainer")[0];

// const topHeaderToggle = document.getElementsByClassName("top-menu-toggler")[0];
// const topHeaderMobile = document.getElementsByClassName("navbar-top-mobile")[0];

// const btmHeaderToggle = document.getElementsByClassName("btm-menu-toggler")[0];
// const btmHeaderMobile = document.getElementsByClassName("navbar-btm-menu")[0];

// function handleHeader() {
// 	let windowWidth = 0;

// 	let onresize = function () {
// 		windowWidth = document.body.clientWidth;
// 		if (windowWidth < 993) {
//             btmHeaderMobile.style.display = "none";
//         } else {
//             btmHeaderMobile.style.display = "block";
//         }
// 	};
// 	window.addEventListener("resize", onresize);

// 	document.addEventListener("scroll", () => {
// 		const distanceFromTop =
// 			window.pageYOffset ||
// 			(
// 				document.documentElement ||
// 				document.body.parentNode ||
// 				document.body
// 			).scrollTop;

// 		// console.log(distanceFromTop)
// 		if (distanceFromTop > 80) {
// 			topHeader.style.display = "none";
// 			banner.classList.add("flex-row");
// 			banner.classList.remove("flex-column");
// 		} else {
// 			topHeader.style.display = "flex";
// 			banner.classList.remove("flex-row");
// 			banner.classList.add("flex-column");
// 		}
// 	});

//     onresize()

// 	topHeaderMobile.style.display = "none";
// 	topHeaderToggle.addEventListener("click", () => {
// 		if (topHeaderMobile.style.display === "none") {
// 			topHeaderMobile.style.display = "block";
// 		} else {
// 			topHeaderMobile.style.display = "none";
// 		}
// 		// console.log(topHeaderMobile.style.display);
// 	});

// 	btmHeaderToggle.addEventListener("click", () => {
// 		if (btmHeaderMobile.style.display === "none") {
// 			btmHeaderMobile.style.display = "block";
// 		} else {
// 			btmHeaderMobile.style.display = "none";
// 		}
// 		// console.log(btmHeaderMobile.style.display);
// 	});
// }

// handleHeader();

const search = document.querySelector('.searching');
const search1 = document.querySelector('.close-search');
const search3 = document.querySelector('.search');
const search4 = document.querySelector('.tombol-search');
const search6 = document.querySelector('.tombol-search-item');
const search5 = document.querySelector('.tombolsearch');
const search7 = document.querySelector('.tombol-search1');

function searchbar(){

search.addEventListener('click', ()=>{
  search1.style.display = 'inline';
  search3.style.display = 'none';
  search4.style.display = 'block';
  search5.style.display = 'block';
  search6.style.display = 'block';
  search7.style.display = 'block';
})

search1.addEventListener('click', ()=>{
  search3.style.display = 'inline';
  search1.style.display = 'none';
  search4.style.display = 'none';
  search5.style.display = 'none';
  search6.style.display = 'none';
  search7.style.display = 'none';
})
}
searchbar()









const mainMenu = document.getElementsByClassName('mobile-menu')[0];
const closeMenu = document.getElementsByClassName('closeMenu')[0];
const openMenu = document.getElementsByClassName('openMenu')[0];
const menu = document.getElementsByClassName('rsub-menu')[0];
const menu2 = document.getElementsByClassName('rsub-menu')[1];
const menu3 = document.getElementsByClassName('rsub-menu')[2];
const menu4 = document.getElementsByClassName('rsub-menu')[3];

function handleSidebar() {
openMenu.addEventListener('click', () => {
  closeMenu.style.display = 'block';
  openMenu.style.display = 'none';
  mainMenu.style.top = '60px';
})
closeMenu.addEventListener('click', () => {
  mainMenu.style.top = '-100%';
  openMenu.style.display = 'block';
  closeMenu.style.display = 'none';
  menu.style.display = 'none';
  menu2.style.display = 'none';
  menu3.style.display = 'none';
  menu4.style.display = 'none';
})
}

handleSidebar()

$(document).ready(function(){
$(".nav-3").click(function(){
  $(this).next(".rsub-menu").slideToggle();
})
})

