#  Análisis Snake con Estructura de Datos (Cola) 🐍

En este proyecto explico el funcionamiento del código del juego de Snake implementado en JavaScript, utilizando la estructura de datos **Cola** para gestionar el crecimiento de la serpiente.

## 📌 Introducción

El juego de Snake se basa en mover una serpiente dentro de un tablero, evitando colisiones consigo misma y con los bordes de la pantalla. Cada vez que la serpiente consume una comida, aumenta su longitud, lo que se implementa utilizando una estructura de datos tipo **Cola (FIFO - First In, First Out)**.

## 📌 Explicación de las Variables Principales

### 1️⃣ Configuración del entorno
- `canvas`: Obtiene el elemento donde se renderiza el juego.
- `ctx`: Contexto 2D utilizado para dibujar la serpiente y la comida.
- `box`: Tamaño de cada celda en el tablero.

### 2️⃣ Estructura de datos: la serpiente (Cola)
- `snake`: Representa la serpiente como un conjunto de posiciones en el tablero.
- La serpiente sigue un comportamiento de **cola**: la cabeza se añade al frente y la cola se elimina al moverse.

### 3️⃣ Dirección del movimiento
- `direction`: Variable que almacena la dirección de movimiento.
- Se actualiza cuando el jugador presiona una tecla de dirección.

### 4️⃣ Generación de comida aleatoria
- `food`: Posición aleatoria de la comida dentro del tablero.
- Se evita que la comida aparezca sobre la serpiente.

### 5️⃣ Control de dirección con el teclado
- Se detectan eventos del teclado para cambiar la dirección de la serpiente.
- Se previene que la serpiente haga un giro de **180° instantáneo**.

### 6️⃣ Lógica de movimiento y crecimiento
- Se calcula la nueva posición de la cabeza de la serpiente según la dirección.
- Si la nueva posición coincide con la comida, la serpiente crece (no se elimina la última parte).

### 7️⃣ Colisiones y fin del juego
- Si la serpiente choca con los bordes o consigo misma, el juego termina.

### 8️⃣ Dibujado y actualización del juego
- Se borra la pantalla y se redibuja la serpiente y la comida en cada actualización.
- Se actualiza el puntaje con el número de partes de la serpiente.

## 

Gracias!
