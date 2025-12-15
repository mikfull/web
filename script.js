const messages = [
    "Te amo muchisimo japuta",
    "Muchas gracias por ser como eres",
    "No sabes realmente lo especial que eres",
    "Quiero que seas tu, solo tu",
    "Estare el tiempo que haga falta",
    "Elegirte es algo que sigo haciendo",
    "Mi felicidad lleva tu nombre",
    "Gracias por aparecer en mi vida"


];

function createTextBubble(){
    const bubble = document.createElement("div");
    bubble.className = "text-bubble";
    bubble.innerText = messages[Math.floor(Math.random()*messages.length)];

    const left = Math.random() * 70 + 15; 
    const top = Math.random() * 70 + 15;

    bubble.style.position = "fixed";
    bubble.style.left = `${left}vw`;
    bubble.style.top = `${top}vh`;

    const container = document.getElementById("bubbles-text");
    container.appendChild(bubble);

    setTimeout(() => {
        const rect = bubble.getBoundingClientRect();
        if(rect.right > window.innerWidth){
            const newLeft = window.innerWidth - rect.width - 10; 
            bubble.style.left = `${newLeft}px`; 
        }

        if (rect.bottom > window.innerHeight){
            const newTop = window.innerHeight - rect.height - 10;
            bubble.style.top = `${newTop}px`;
        }

        if(rect.left < 0){
            bubble.style.left = "10px";
        }

        if(rect.top < 0){
            bubble.style.top = "10px";
        }
    },10);


    setTimeout(()=>{
        bubble.remove();
    },90000);

}setInterval(createTextBubble, 400);
