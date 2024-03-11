var tablinks = document.getElementsByClassName("slide");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("slide-active");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("slide-active");
    document.getElementById(tabname).classList.add("active-tab");
}
const mybutton = document.getElementById("btn-back-to-top");
const scrollFunction = () => {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.classList.remove("hidden");
    } else {
        mybutton.classList.add("hidden");
    }
}; 
const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
mybutton.addEventListener("click", backToTop);
window.addEventListener("scroll", scrollFunction);
var projects = document.getElementsByClassName("extra");
var btn = document.getElementsByClassName("see-more");
var toggle = 0;
function see_more() {
    if (toggle == 1) {
        for (project of projects) {
            project.classList.add("hidden");
        }
        btn[0].innerHTML = "See More";
        toggle = 0;
        return;
    }
    else {
        for (project of projects) {
            project.classList.remove("hidden");
        }
        btn[0].innerHTML = "See Less";
        toggle = 1;
        return;
    }
}
