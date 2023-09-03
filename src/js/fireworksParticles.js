const fireworks = document.querySelector(".fireworks");

function fireworkLaunch(event) {
    const firworkType = Math.floor(Math.random() * 6) + 1;
    const firework = document.createElement("div");
    firework.classList.add("firework");
    firework.classList.add(`firework__${firworkType}`);
    firework.style.left = `${event.x}px`;
    firework.style.top = `${event.y}px`;
    fireworks.appendChild(firework);
    setTimeout(() => {
        firework.remove();
    }, 8000);
}

fireworks.addEventListener("click", fireworkLaunch);
fireworks.addEventListener("touch", fireworkLaunch);
