const NAV_WIDTH_LG = '250px';
const NAV_WIDTH_SM = '50px';
const ref = {};
ref.nav = document.getElementById('nav');
ref.navToggle = document.getElementById('nav-toggle');

//ref.navToggle.addEventListener('click', toggleNavExtend);
    //disables nav:hover for some reason
let navExtended = false;
function toggleNavExtend(){
    if(navExtended) {
        ref.nav.style.width = NAV_WIDTH_SM;
        ref.navToggle.textContent = '>';
    }
    else {
        ref.nav.style.width = NAV_WIDTH_LG;
        ref.navToggle.textContent = '<';
    }
    navExtended = !navExtended;
}