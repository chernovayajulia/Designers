function menuOpen() {
    let hamburger = document.querySelector('#hamburger');
    let nav = document.querySelector('#nav')
    hamburger.onclick = function() {
        hamburger.classList.toggle('_active');
        nav.classList.toggle('_active');
    }
    let navlinks = document.querySelectorAll('#nav a');
    navlinks.forEach(function(navlink){
        navlink.onclick = function(){
            hamburger.classList.remove('_active');
            nav.classList.remove('_active')
        }
    })
}
menuOpen();