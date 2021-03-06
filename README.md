# ApiPersonajes v0.0.3
API crear tus Personajes favoritos y puntualos con amigos. Toda la data y manipulación create, edit, delete, update. Creado en Nodejs, Express, MondoDB, socket.io. 
App creado usando el API, creado personajes y puntuandolos en tiempo real con JS, AJAX.

##Descarga/Clone
Para usarlo primero lo bajamos de github a nuestro computador
```
https://github.com/joelengt/apipersonajes.git
```
##Instalación
Para iniciar debes tener instalado [NodeJS](https://nodejs.org/en/), [MongoDB](https://www.mongodb.org/downloads), en tu Sistema Operativo. Al tener todo, nos ubicamos en la carpeta donde guardamos la app, mediante la terminal/consola. Una vez alli ejecutar:
```
npm install
```
Con este comando bajamos todas las depentencias y modulos de la app.

##Iniciar/Start
Nuestra App usa mongoDB, con un modulo mongoose. Necesita conectarse localmente en su sistema operativo.
En una consola nueva ejecutar 
```
mongod
```
*Dependiendo a los permisos de acceso path al instalar mongodb en su ordenador, puede ejecutarlo donde desee, o en donde lo instalo.

Luego, en nuestra primera consola, cuando todo descargo:
```
npm start
``````
Con esto ya aplicación correra automaticamente en el puerto 4000:
```
http://localhost:4000
```
En todo caso puede correrlo en otro puerto:
```
PORT=4391 node index.js
```
##Desarrollo
El API esta en forma de Model, View, Controller, Routes, con Express.
La  Aplicación aun esta en desarrollo, a nuevas funcionabilidades

##Permisos
MIT

Copyright (c) 2016 Joel Gonzales Tipismana

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
