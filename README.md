App gestora de tareas


Esta App permite el manejo de tareas para multiples usuarios, cada uno de ellos podrá tener acceso privado a un listado de tareas de su autoría y la opción de crear nuevas tareas de manera personalizada.

El siguiente proyecto cuenta con un backend en Laravel 11 y frontend en NextJs 14

Implementa:

- API RESTful
- Autenticación JWT
- Validación de datos desde el backend y frontend
- Migraciones de base de datos
- interfaz de usuario con opciones Read (con páginación) y Create del CRUD
- Manejo de estado global con Redux
- SSR y CSR



Requisitos de ejecución:

Los siguientes en las presentes versiones o superiores:

- PHP 8.2.12
- Composer 2.7.9
- MySQL 8.0.3
- Laravel installer 5.8.5
- Laravel 11.29.0
- Node Js 20.18.0


1. Clonar el proyectro desde GitHub
2. Dirigirse a la carpeta backend en la raiz del proyecto (gestor_tareas_app/backend), copiar el contenido del archivo .env.example y pegarlo en un nuevo archivo .env al interior de la misma carpeta backend y guardar los cambios
3. Abrir una terminal sobre la carpeta backend y correr los siguientes comandos desde la carpeta backend
 - composer install
 - php artisan key:generate  (al mensaje adjunto marcar yes y enter)
 - php artisan migrate --seed y marcar yes al mensaje de creación de la base de datos (en este punto se debe encender una conexión a MySQL segun lo indicado en los programas requisito)
 - php artisan serve 
4. Abrir otra terminal y correr los siguientes comandos desde la carpeta frontend
  - npm install
  - npm run dev
5. Posicionar la siguiente url en el navegador http://127.0.0.1:3000/login (puede ser también http://localhost:3000/login todo dependiendo del mensaje arrojado por el comando npm run)

Se puede ingresar con el usuario:
correo: admin@admin.com
contraseña: password

O puede crear un nuevo usuario en la opción de registro



