document.querySelector("body").style.overflow = "hidden"

let squares = document.querySelector(".squares");

for(i=0; i<10; i++){
    
    let li = document.createElement("li");
    
    const random = (min, max) => Math.random() * (min - max) + max;

    let size = Math.floor(random(10, 120));
    let position = random(1, 99);
    let delay = random(5, 0.1);
    let duration = random(3, 12);
    
    li.style.width = `${size}px`;
    li.style.height = `${size}px`;
    li.style.bottom = `-${size}px`;

    li.style.left = `${position}%`;

    li.style.animationDelay = `${delay}s`;
    li.style.animationDuration = `${duration}s`
    li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`


    li.style.position = `${position}vw`
    squares.appendChild(li)
    squares.classList.add("up")
}



let container = document.querySelector(".container")

document.querySelector("button").addEventListener("click", event =>{
    event.preventDefault()

    const fields = [...document.querySelectorAll("input")]

    fields.forEach(element => {

        if (element.value === "") {
            container.classList.add("validate")
        }
    })

    const validate = document.querySelector(".validate")
    console.log(validate);
    if (validate) {
        validate.addEventListener("animationend", event =>{
            if (event.animationName === "nono") {
                container.classList.remove("validate")

            }
        })
    }else{
        container.classList.add("down")
    }

});


container.addEventListener("animationstart", () => {
    document.querySelector("body").style.overflow = "hidden"
})
container.addEventListener("animationend", (event) => {
     if (event.animationName === "down") {
         container.style.display = "none";
     }
})