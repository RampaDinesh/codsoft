
let content = document.querySelectorAll(".js-content");
let observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
        entry.target.classList.toggle('animate',entry.isIntersecting);
    });
},{threshold:0.60});

content.forEach((c)=>{
    observer.observe(c);
})