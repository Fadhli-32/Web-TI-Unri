const headerSticky = document.querySelector("nav, label, span, nav ul li, nav ul li a, .search")

$(window).scroll(function(){
      
    if($(window).scrollTop()){
      // document.getElementById("scrollmenu").style.position = "fixed";
        $("nav, label, span, nav ul li, nav ul li a, .search").addClass("pink");
    }else{
      // $("nav, scrollmenu").style.position = "relative";
        $("nav, label, span, nav ul li, nav ul li a, .search").removeClass("pink");
    }
})
const topHeaderToggle = document.getElementsByClassName("navbar1")[0];
const topHeaderMobile = document.getElementsByClassName("navbar2")[0];

topHeaderMobile.style.display = "none";
	topHeaderToggle.addEventListener("click", () => {
		if (topHeaderMobile.style.display === "none") {
			topHeaderMobile.style.display = "block";
		} else {
			topHeaderMobile.style.display = "none";
		}
		// console.log(topHeaderMobile.style.display);
	});

// function onScroll () {
//     window.addEventListener("scroll", () => {
//         headerSticky.classList.add("pink")
//     })
// }

// onScroll()

