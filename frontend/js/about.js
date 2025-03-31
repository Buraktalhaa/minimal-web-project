const myName = document.querySelector("h1#myName")

console.log(myName)


myName.addEventListener("mouseenter" , () => {
    console.log("Ustunde")
    myName.classList.toggle("bg-light")
    document.body.classList.add("bg-dark" , "bg-opacity-50")
});


myName.addEventListener("mouseout" , () => {
    console.log("Disarda")
    myName.classList.toggle("bg-light")
    document.body.classList.remove("bg-dark" , "bg-opacity-50")
})
