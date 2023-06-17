// navigation bar on scroll effect and scroll progress bar
const navigationBar = document.getElementById('navigation-bar');
const container = document.querySelector("body");
const highlight = document.getElementById("bar-highlight");
// windows scroll function 
window.onscroll = () => {
    // scroll effect navbar
    if (scrollY > 80) {
        navigationBar.style.backgroundColor = "#400000";
    }
    else {
        navigationBar.style.backgroundColor = "var(--header-bgcolor)";
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
        html.classList.add("active");
        css.classList.add("active");
        js.classList.add("active");
        php.classList.add("active");
        excel.classList.add("active");
        mysql.classList.add("active");
        reactjs.classList.add("active");
        nodejs.classList.add("active");
        nextjs.classList.add("active");
        flutter.classList.add("active");
        communication.classList.add("active");
        projectmanagement.classList.add("active");
        teamsupport.classList.add("active");
        creativity.classList.add("active");
    } else {
        html.classList.remove("active");
        css.classList.remove("active");
        js.classList.remove("active");
        php.classList.remove("active");
        excel.classList.remove("active");
        mysql.classList.remove("active");
        reactjs.classList.remove("active");
        nodejs.classList.remove("active");
        nextjs.classList.remove("active");
        flutter.classList.remove("active");
        communication.classList.remove("active");
        projectmanagement.classList.remove("active");
        teamsupport.classList.remove("active");
        creativity.classList.remove("active");
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
//
const html = document.querySelector(".html");
const css = document.querySelector(".css");
const js = document.querySelector(".js");
const php = document.querySelector(".php");
const excel = document.querySelector(".excel");
const reactjs = document.querySelector(".reactjs");
const nextjs = document.querySelector(".nextjs");
const nodejs = document.querySelector(".nodejs");
const communication = document.querySelector(".communication");
const flutter = document.querySelector(".flutter");
const projectmanagement = document.querySelector(".project-management");
const creativity = document.querySelector(".creativity");
const teamsupport = document.querySelector(".team-support");
const mysql = document.querySelector(".mysql");