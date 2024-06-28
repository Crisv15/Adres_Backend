# Registro de Adquisiciones
## Instalar dependencias primero
```bash
    npm i
```

## Configurar variables de conexion a la base de datos
- Crear un archivo .env
- Copiar la variable de conexion que esta de ejemplo en el archivo .env.example
- Copiar y pegar la url de conexion a la base de datos mongo, se puede usar esta url temporal
 `mongodb+srv://cristianviasus2001:Gc123456@bdadres.wjwq8yt.mongodb.net/adquisiciones` o una local
 `mongodb://localhost:27017`
```bash
    cp .env.example .env
```

## Correr el proyecto
```bash
    npm run dev
```