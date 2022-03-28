
let squares = document.querySelector(".squares");

for(i=0; i<10; i++){
    
    let li = document.createElement("li");

    const random = (max, min) => Math.random() * (max - min) + min;

    let size = random(120, 20) ;
    let position = random(99, 1);
    let delay = random(5, 0.1);
    let duration = random(12, 3);
    
    li.style.width = `${size}px`;
    li.style.height = `${size}px`;
    li.style.bottom = `-${size}px`;

    li.style.left = `${position}%`;
    li.style.animationDelay = `${delay}s`;
    li.style.animationDuration = `${duration}s`
    li.style.animationTimingFunction = `cubic-bezier(${Math.random()})`


    li.style.position = `${position}vw`
    squares.appendChild(li)
    squares.classList.add("up")
}




