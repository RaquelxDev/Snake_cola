const canvas = document.getElementById('snakeCanvas');
const ctx = canvas.getContext('2d');
const box = 20; // Tamaño de cada celda en el tablero

// Inicialización de la serpiente con una sola parte
let snake = [{ x: 9 * box, y: 9 * box }];
let direction = 'RIGHT';

// Función para generar una nueva posición de comida sin que caiga dentro de la serpiente
function generateFood() {
    let newFood;
    do {
        newFood = {
            x: Math.floor(Math.random() * 20) * box,
            y: Math.floor(Math.random() * 20) * box
        };
    } while (collision(newFood, snake));
    return newFood;
}

let food = generateFood();

document.addEventListener('keydown', directionControl);

// Control de dirección con las teclas de flecha
function directionControl(event) {
    if (event.keyCode === 37 && direction !== 'RIGHT') direction = 'LEFT';
    if (event.keyCode === 38 && direction !== 'DOWN') direction = 'UP';
    if (event.keyCode === 39 && direction !== 'LEFT') direction = 'RIGHT';
    if (event.keyCode === 40 && direction !== 'UP') direction = 'DOWN';
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujar la serpiente
    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = (i === 0) ? 'green' : 'lightgreen';
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
        ctx.strokeStyle = 'darkgreen';
        ctx.strokeRect(snake[i].x, snake[i].y, box, box);
    }

    // Dibujar la comida
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, box, box);

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // Mover la cabeza de la serpiente en la dirección seleccionada
    if (direction === 'LEFT') snakeX -= box;
    if (direction === 'UP') snakeY -= box;
    if (direction === 'RIGHT') snakeX += box;
    if (direction === 'DOWN') snakeY += box;

    // Verificar si la serpiente ha comido la comida
    if (snakeX === food.x && snakeY === food.y) {
        food = generateFood(); // Generar nueva comida en una ubicación válida
        // Añadir efecto de flash al fondo por un momento
        canvas.style.backgroundColor = '#ffcccb';
        setTimeout(() => canvas.style.backgroundColor = 'white', 100);
    } else {
        snake.pop(); // Eliminar la última parte del cuerpo si no comió
    }

    const newHead = { x: snakeX, y: snakeY };

    // Verificar colisión con paredes o consigo misma
    if (snakeX < 0 || snakeY < 0 || snakeX >= canvas.width || snakeY >= canvas.height || collision(newHead, snake)) {
        clearInterval(game);
        alert('Game Over!');
    }

    snake.unshift(newHead); // Agregar nueva cabeza a la serpiente

    // Mostrar puntaje en pantalla
    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    ctx.fillText('Score: ' + (snake.length - 1), 10, 20);
}

// Función para detectar colisión con el propio cuerpo
function collision(head, array) {
    for (let i = 0; i < array.length; i++) {
        if (head.x === array[i].x && head.y === array[i].y) {
            return true;
        }
    }
    return false;
}

// Iniciar el juego con una actualización cada 100ms
let game = setInterval(draw, 100);
