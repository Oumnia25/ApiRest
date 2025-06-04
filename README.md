# Proyecto Backend: Autores y Libros

Este proyecto consiste en una API REST desarrollada con Node.js, Express y MongoDB para gestionar autores y sus libros relacionados.

## Tecnologías utilizadas

- Node.js
- Express
- MongoDB Atlas
- Mongoose
- dotenv

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Oumnia25/ApiRest.git
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Crea un archivo `.env` con tu URL de conexión de MongoDB:
   ```env
   DB_URL=mongodb+srv://<usuario>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority
   ```

4. Inicia el servidor:
   ```bash
   npm run dev
   ```

## Endpoints

### Autores

- `GET /autores`: Devuelve todos los autores con sus libros.
- `GET /autores/:id`: Devuelve un autor por su ID.
- `POST /autores`: Crea un nuevo autor.
- `PUT /autores/:id`: Actualiza un autor por ID (sin borrar datos relacionados y sin duplicados).
- `DELETE /autores/:id`: Elimina un autor.

### Libros

- `GET /libros`: Devuelve todos los libros.
- `GET /libros/:id`: Devuelve un libro por su ID.
- `POST /libros`: Crea un nuevo libro.
- `PUT /libros/:id`: Actualiza un libro por ID.
- `DELETE /libros/:id`: Elimina un libro.

## Semilla

Para cargar datos de ejemplo, ejecuta el archivo `seed.js`. La conexión a MongoDB se cerrará correctamente incluso si ocurre un error.

```bash
node seed.js
```

## Buenas prácticas aplicadas

- Conexión a la base de datos sin `req`, `res`, ni `next`.
- Nodemon no se importa en el código (solo se usa como dependencia de desarrollo).
- El archivo `.env` está protegido en `.gitignore`.
- En el README se muestra una URL de ejemplo, no la real.
- El código sigue una estructura coherente con sangrado y estilo consistentes.
- En las actualizaciones de arrays (como los libros de un autor), se evitan duplicados y no se borran datos anteriores.

---

Proyecto realizado por Oumnia Echatbi Dehak
