// navigation bar on scroll effect and scroll progress bar
const navigationBar = document.getElementById('navigation-bar');
const container = document.querySelector("body");
const highlight = document.getElementById("bar-highlight");
const mobileversion = document.getElementById("mobile-version");
const skills = document.getElementById("skills");
const skillactive = document.querySelectorAll("#skills .lower .container .skill-box .skill-bar .skill-per");
// windows scroll function 
window.onscroll = () => {
    // scroll effect navbar
    if (scrollY > 80) {
        navigationBar.style.backgroundColor = "var(--second-bg-color)";
        mobileversion.style.backgroundColor = "var(--second-bg-color)";
    }
    else {
        navigationBar.style.backgroundColor = "var(--bg-color)";
        mobileversion.style.backgroundColor = "var(--bg-color)";
    }
    // scroll progress bar
    let cheight = container.offsetHeight - window.innerHeight;
    let cpos = container.getBoundingClientRect();
    let diff = cheight + cpos.top;
    let progress = diff / cheight * 100;
    let csswidth = Math.floor(100 - progress);
    highlight.style.width = csswidth + "%";
    // scroll skill bar 
    // if (skills.getBoundingClientRect().top + skills.getBoundingClientRect().height < window.innerHeight) {
    if (skills.getBoundingClientRect().top < window.innerHeight) {
        skillactive.forEach((element)=>{
            element.classList.add("active");
        })
    } else {
        skillactive.forEach((element)=>{
            element.classList.remove("active");
        })
    }
}
// navigation bar on click effect 
const darklight = document.getElementById('dark-light');
const phoneNav = document.querySelector('header .middle');
darklight.onclick = () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        darklight.classList.replace("fa-moon", "fa-sun");
    } else {
        darklight.classList.add("fa-moon");
    }
}
// Auto update year 
const yearUpdate = document.getElementById("update-year");
yearUpdate.innerHTML = new Date().getFullYear();
// right click disable 
document.oncontextmenu = (element) => {
    element.preventDefault();
}