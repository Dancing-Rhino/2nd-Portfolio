const active = window.location;
const navlinks = document.querySelectorAll('nav a').
forEach(link=>{
    if(link.href.includes(`${active}`)){
        link.classList.add('active');
    }
})