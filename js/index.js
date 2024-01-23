// navigation bar on scroll effect and scroll progress bar
const navigationBar = document.getElementById('navigation-bar');
const container = document.querySelector("body");
const highlight = document.getElementById("bar-highlight");
const mobileversion = document.getElementById("mobile-version");
const skills = document.getElementById("skills");
const skillactive = document.querySelectorAll("#skills .lower .container .skill-box .skill-bar .skill-per");
const navLinks = document.querySelectorAll('header .middle nav ul li a');
const sections = document.querySelectorAll('section');
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
        skillactive.forEach((element) => {
            element.classList.add("active");
        })
    } else {
        skillactive.forEach((element) => {
            element.classList.remove("active");
        })
    }
    // active class on header link 
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach((links) => {
                links.classList.remove('active');
                document.querySelector('header .middle nav ul li a[href*=' + id + ']').classList.add("active");
            })
        }
    });
}
// navigation bar dark-light mode on click effect 
const darklight = document.getElementById('dark-light');
const phoneNav = document.querySelector('header .middle');
darklight.onclick = () => {
    document.body.classList.toggle("light");
    if (document.body.classList.contains("light")) {
        darklight.classList.replace("fa-sun", "fa-moon");
        localStorage.setItem("mode","light");
    } else {
        darklight.classList.replace("fa-moon", "fa-sun");
        localStorage.setItem("mode","dark");
    }
}
let selectMode = localStorage.getItem("mode");
if(selectMode=="light"){
    document.body.classList.add("light");
}
// Auto update year 
const yearUpdate = document.getElementById("update-year");
yearUpdate.innerHTML = new Date().getFullYear();
// right click disable 
document.oncontextmenu = (element) => {
    element.preventDefault();
}
// Formspree form submission 
const form = document.getElementById("my-form");
async function handleSubmit(event) {
    event.preventDefault();
    let successstatus = document.getElementById("my-form-success");
    let failstatus = document.getElementById("my-form-fail");
    let data = new FormData(event.target);
    let status = document.getElementById("my-form-status");
    let submitbutton = document.getElementById("submit-button");
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            form.reset()
            successstatus.style.display = "block";
            submitbutton.style.display = "none";
            setTimeout(() => {
                successstatus.style.display = "none";
                submitbutton.style.display = "block";
            }, 5000);
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.style.display = "block";
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
                    submitbutton.style.display = "none";
                    setInterval(() => {
                        status.style.display = "none";
                        submitbutton.style.display = "block";
                    }, 5000);
                } else {
                    form.reset()
                    failstatus.style.display = "block";
                    submitbutton.style.display = "none";
                    setTimeout(() => {
                        failstatus.style.display = "none";
                        submitbutton.style.display = "block";
                    }, 5000);
                }
            })
        }
    }).catch(error => {
        failstatus.style.display = "block";
        submitbutton.style.display = "none";
        setTimeout(() => {
            failstatus.style.display = "none";
            submitbutton.style.display = "block";
        }, 5000);
    });
}
form.addEventListener("submit", handleSubmit)