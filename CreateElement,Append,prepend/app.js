//createElement()
//appendChild()
// append()
// PictureInPictureWindow()
// insertBefore()

/*insertAdjacentElement
'beforebegin'
'afterend'
'beforeend'
'afterend'
'element'
*/

//removeChild()
// remove() 

//=========================

//creating Element
// const h1 = document.createElement("h1")
// const body = document.body
// h1.textContent = "Good Bye ";
// h1.classList.add("greetings");
// body.appendChild(h1)
// --------------------------
//insertBefore 
// const ul = document.querySelector('ul')

// const newLi = document.createElement("li")
// newLi.innerText = "I'm li tag"
// ul.appendChild(newLi)

// const firstLi = document.querySelector("li")
// ------------------------------------
// //selector.insertBefore(what, where)
// ul.insertBefore(newLi, firstLi)
// ==============================
// insertAdjacent
// const firstP = document.querySelector("p")
// const i = document.createElement("i")
// i.innerText = "I'm Italics"
// i.style.color = "skyblue"
// firstP.insertAdjacentElement("beforebegin", i) 
// firstP.insertAdjacentElement("afterbegin", i)
// firstP.insertAdjacentElement("beforeend", i)
// firstP.insertAdjacentElement("afterend", i)
// ----------------------------------
//append
// let section = document.querySelector('section')
// const i = document.createElement("i")
// i.innerText = "I'm Italics"
// i.style.color = "skyblue"

// const span = document.createElement("span")
// span.innerText = "I'm italics"
// span.style.color = "crimson"

// section.append(i, span)
// section.prepend(i, span)

// ------------------------------
// removeChild
const newList = document.querySelector('.new-list')
const fourth = document.querySelector('.fourth')
newList.removeChild(fourth)
newList.remove()