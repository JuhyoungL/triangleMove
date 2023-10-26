const leftUp = document.querySelector(".leftUp");
const leftDown = document.querySelector(".leftDown");
const rightUp = document.querySelector(".rightUp");
const rightDown = document.querySelector(".rightDown");

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
let documentHeight = document.querySelector("html").scrollHeight - windowHeight;

leftUp.style.top = `${windowHeight / 2.5}px`;
leftUp.style.left = `${windowWidth / 5}px`;

leftDown.style.top = `${windowHeight / 1.3}px`;
leftDown.style.left = `${windowWidth / 3}px`;

rightUp.style.top = `${windowHeight / 0.8}px`;
rightUp.style.left = `${windowWidth / 1.4}px`;

rightDown.style.top = `${windowHeight / 9}px`;
rightDown.style.left = `${windowWidth / 1.4}px`;

window.addEventListener("resize", ()=>{
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    documentHeight = document.body.scrollHeight;

    leftUp.style.top = `${windowHeight / 2.5}px`;
    leftUp.style.left = `${windowWidth / 5}px`;
    
    leftDown.style.top = `${windowHeight / 1.3}px`;
    leftDown.style.left = `${windowWidth / 3}px`;
    
    rightUp.style.top = `${windowHeight / 0.8}px`;
    rightUp.style.left = `${windowWidth / 1.4}px`;
    
    rightDown.style.top = `${windowHeight / 9}px`;
    rightDown.style.left = `${windowWidth / 1.4}px`;
});


// lenis libß

const lenis = new Lenis()

lenis.on('scroll', (e) => {
    const scrollY = this.scrollY;
    const percentY = percent(scrollY, documentHeight);
    
    leftUp.style.top = `${(windowHeight / 2.5) - percentY * 7}px`;
    leftUp.style.left = `${(windowWidth / 5) - percentY * 7}px`;
    
    leftDown.style.top = `${(windowHeight / 1.3) + percentY * 12}px`;
    leftDown.style.left = `${(windowWidth / 3) - percentY * 12}px`;
    
    rightUp.style.top = `${(windowHeight / 0.8) - percentY * 8}px`;
    rightUp.style.left = `${(windowWidth / 1.4) + percentY * 8}px`;
    
    rightDown.style.top = `${(windowHeight / 9) + percentY * 20}px`;
    rightDown.style.left = `${(windowWidth / 1.4) + percentY * 20}px`;
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)





//percent
const percent = (a,b)=>{
    return a/b*100;
};



// window.addEventListener("scroll", () => {
//     scrollNum = window.scrollY;
//     documentHeight = document.body.scrollHeight - window.innerHeight;

//     per = percent(scrollNum, documentHeight);

//     depthWrap.querySelector("span").innerText = scrollNum.toFixed(0);
//     progressBar.style.width = per + "%";

//     submarine.style.transform = `translateX(${per}%)`;
//     octopus.style.transform = `translateY(${-per / 3}%)`;
// });