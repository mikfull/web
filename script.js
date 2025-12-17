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

function createTextBubble() {
    const bubble = document.createElement("div");
    bubble.className = "text-bubble";
    bubble.innerText = messages[Math.floor(Math.random() * messages.length)];

    const container = document.getElementById("bubbles-text");
    container.appendChild(bubble);

    // Ajustes para asegurar que no se salgan de la pantalla en móvil
    // Usamos window.innerWidth - 200 (ancho aprox burbuja) para que no nazca cortada a la derecha
    const maxLeft = window.innerWidth - 160; 
    const left = Math.random() * Math.max(0, maxLeft); 
    
    // Altura aleatoria pero evitando la parte superior extrema e inferior extrema
    const top = Math.random() * (window.innerHeight - 100) + 50;

    bubble.style.left = `${left}px`;
    bubble.style.top = `${top}px`;

    // Eliminamos la burbuja cuando termine la animación
    setTimeout(() => {
        bubble.remove();
    }, 10000); // Coincide con la duración de la animación CSS
}

// Detectar si es móvil para ajustar la velocidad
const isMobile = window.innerWidth < 768;

// En móvil (menos de 768px) salen cada 1800ms, en PC cada 600ms
// Esto evita que la pantalla del móvil se llene y no puedas leer nada
const intervalTime = isMobile ? 1800 : 600;

setInterval(createTextBubble, intervalTime);
