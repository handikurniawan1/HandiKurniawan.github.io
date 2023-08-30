//clearing form
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")){
        form.reset();
    }
}

//burger
const navSlide = () => {
    const burger = document.querySelector(".burger")
    const navLists = document.querySelector("nav")

    burger.addEventListener("click", ()=>{
        navLists.classList.toggle("nav-active")
        burger.classList.toggle("toggle-burger")
    });

};
navSlide();