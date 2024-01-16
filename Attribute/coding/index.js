// href
// value 
// type
// getAttribute(attrName)
// setAttribute(attrName, value)

// const a = document.querySelector('a')
const input = document.querySelector('input')

// console.log(input.type)
// console.log(input.value)

// getAttribute(AttrName)
console.log(input.getAttribute("type"));
console.log(input.getAttribute("placeholder"));

//setAttribute(attrName, value)
input.setAttribute("placeholder","password")
input.setAttribute("type", "password")