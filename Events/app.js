// Bad way
// const secondBtn = document.querySelector(".second-btn");
// secondBtn.onclick = () =>{
//     console.log("hellow")
// }

//great way
const best = document.querySelector('.best');
best.addEventListener("click",()=>{
    console.log("good")
})