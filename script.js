const squares = document.querySelector('.squares')

for (let i = 0; i < 20; i++) {

    let li = document.createElement("li")

    const random = (max,min) => Math.random()*(max - min) + min;

    let size = Math.floor(random(120, 40));
    let position = random(99, 1);
    let delay = random(5, 0.1);
    let duration = random(12, 6);

    li.style.width = `${size}px`;
    li.style.height = `${size}px`;
    li.style.bottom = `-${size}px`;
    li.style.left = `${position}%`;

    document.querySelector("body").style.overflow = "hidden"


    li.style.animationDelay = `${delay}s`;
    li.style.animationDuration = `${duration}s`
    li.style.animationFillMode = `cubic-bezier(${Math.random}, ${Math.random}, ${Math.random}, ${Math.random})`

    squares.appendChild(li)    
}