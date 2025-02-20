## Configuracion

1. clonar el repositorio.
   ```bash
   git clone https://github.com/Estebanfonseca/prueba_tecnica_3dves.git
   ```
2. el proyecto consta de 2 carpetas:
    -carpeta con la aplicacion "/api_leelo_todo" 
    -carpeta con la solucion del desafio de codewars "/codewars"

3. para iniciar la aplicacion navegue a la carpeta que lo contiene
    ```bash
   cd api_leelo_todo/
   ```
4. Instalar dependencias usando yarn,npm o pnpm.
    **tener en cuenta si se usa un gestor diferente borrar el archivo lock.json y el node_modules  antes de instalar con su gestor de preferencia**
   ```bash
   yarn install
   npm install
   pnpm install
   ```
5. levantar el servidor usando yarn,npm o pnpm.
   ```bash
   yarn run start
   npm run start
   pnpm run start
   ```
6. la aplicacion cuenta con integracion swagger tan pronto acceda a la url se encontrara con la documentacion de la aplicacion puede interactuar con la aplicacion desde swagger o si lo prefiere con postman u otro sofware similiar guiandoce de la documentacion antes mencianada
   ```bash
    http://localhost:3000
   ```
7. la aplicacion cuenta con una base de datos previamente cargada de algunos datos para que empiece a jugar con la Api de igual forma puede agregar mas datos para ver su funcionalidad  completa


