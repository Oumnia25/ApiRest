# 📚 API REST de Autores y Libros

Este proyecto es una API REST construida con **Node.js**, **Express** y **MongoDB (Atlas)** utilizando **Mongoose**. Permite gestionar autores y sus libros mediante operaciones CRUD completas, incluyendo relaciones entre colecciones.

---

## 🚀 Tecnologias

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Dotenv
- Nodemon

---

## 📁 Estructura del proyecto

```
/controllers       // Lógica de los endpoints
/models            // Modelos de datos (Autor y Libro)
/routes            // Rutas de la API
/seeds             // Semilla con datos iniciales
.env               // Variables de entorno
index.js           // Punto de entrada del servidor
```

---

## 📦 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/Oumnia25/ApiRest.git
cd ApiRest
```

2. Instala las dependencias:

```bash
npm install
```

3. Crea un archivo `.env` en la raíz del proyecto:

```env
MONGO_URL=mongodb+srv://oumniaechatbi12:H2IbjLunyheC7ClA@book.bqk3lyg.mongodb.net/?retryWrites=true&w=majority&appName=book
PORT=3000
```

4. Inicia el servidor:

```bash
npm run dev
```

---

## 🧪 Cargar datos de ejemplo (semilla)

Para cargar autores y libros de ejemplo en tu base de datos:

```bash
node seeds/seed.js
```

---

## 🔗 Endpoints

### 📘 Libros

| Método | Ruta          | Descripción                      |
| ------ | ------------- | -------------------------------- |
| GET    | `/libros`     | Obtiene todos los libros.        |
| GET    | `/libros/:id` | Obtiene un libro por su ID.      |
| POST   | `/libros`     | Crea un nuevo libro.             |
| PUT    | `/libros/:id` | Actualiza los datos de un libro. |
| DELETE | `/libros/:id` | Elimina un libro por su ID.      |

---

### 🧑‍💼 Autores

| Método | Ruta           | Descripción                                                                                                  |
| ------ | -------------- | ------------------------------------------------------------------------------------------------------------ |
| GET    | `/autores`     | Obtiene todos los autores con sus libros relacionados.                                                       |
| GET    | `/autores/:id` | Obtiene un autor por su ID con los libros relacionados.                                                      |
| POST   | `/autores`     | Crea un nuevo autor.                                                                                         |
| PUT    | `/autores/:id` | Actualiza un autor. Si se añaden libros, se agregan **sin borrar** los anteriores y **evitando duplicados**. |
| DELETE | `/autores/:id` | Elimina un autor por su ID.                                                                                  |

---

## 🛡️ Reglas especiales

- Al **actualizar** un autor:
  - No se eliminan los libros ya existentes en el array.
  - No se permiten duplicados en el array de libros.

---

## ✍️ Autor

Este proyecto ha sido desarrollado por Oumnia Echatbi
