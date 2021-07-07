# BurgerQueen 
### Progressive Web Application -PWA

Made by <a href="https://github.com/mairelis-montilla" target="_blank"></strong>Mairelis Montilla</a> & <a href="https://github.com/miluskapajuelo" target="_blank"></strong>Miluska Pajuelo</a>

Link: <a href="https://queen-58726.web.app/" target="_blank"></strong>Burger Queen</a>


## Table of Contents
* [Goals and Philosofy](#Goals-and-Philosofy)
* [Definition of product](#Definition-of-product)
* [Prototype in Figma](#Prototype-in-Figma)
* [Test](#Test)
* [Performance](#Performance)
* [Offline](#Offline)
    
## Goals and Philosofy
A growing small burger restaurant needs a system through which they can take orders using a tablet, and send them to the kitchen to be prepared neatly and efficiently.

Our client has asked us to develop the interface User that integrates with an API

This project is a Progressive Web Application made with Angular such as Framework, SASS, Material Angular, Typescript, REST API also this app works offline and has a 92% in SEO ([Performance](#Performance))

In addition, the client has given us a link to the  <a href="https://laboratoria.github.io/burger-queen-api/" target="_blank"></strong>documentation</a> that specifies the expected behavior of the HTTP API that you should consume. There you can find all the details of the endpoints, such as what parameters they expect, what they should respond, etc.
## Definition of product
In this section we are going to see the characteristics of each part of this application and how each role interact with application.

Roles: ["manager", "chef", "waiter"]


### Log in

  In this section, the user must log in to enter the application, this part is very important because   according to the role he has,  he will have **access** to certain views and functionalities.

  And receive understandable error messages, depending on what the error is with the information entered.
  
  Credentials:
  
  rol admin   email: admin@bq.com password: admin001 
  rol chef/waiter   email: server@bq.com password: server001 

Vertical view:

<a href="https://imgbb.com/"><img src="https://i.ibb.co/5KTjVCL/login-Vertical.png" alt="login-Vertical" border="0"></a>

Horizontal view:

<a href="https://imgbb.com/"><img src="https://i.ibb.co/mcNmm8j/login.png" alt="login" border="0"></a>
### Menu
  In this section: 

  **Waiter** can take a client's order select an option ([Menu](#Menu)), make a note of the customer's name,  add  & delete products to the order, see summary and the total of the purchase and send order to kitchen   (save in a database).

  <a href="https://imgbb.com/"><img src="https://i.ibb.co/PxWDfyM/menu.png" alt="menu" border="0"></a>

### Order

  In this section: 

  - Pending
    In this part, **chef** can see the ordered orders as they are made, mark the orders that have been  filled and are ready to be served and see the time it took to prepare the order from when it arrived   until it was marked as completed. 

    <a href="https://imgbb.com/"><img src="https://i.ibb.co/Wfq8WV6/order-Pending.png" alt="order-Pending" border="0"></a>

  - Ready
    In this part, **waiter** can see ready-to-serve order list and mark orders that have been delivered.

    <a href="https://imgbb.com/"><img src="https://i.ibb.co/26t6Zx6/order-Ready.png" alt="order-Ready" border="0"></a>

### Managment
  In this section:
  - Manage products: **manager** can see product list, add products, delete products and update product data.

  <a href="https://imgbb.com/"><img src="https://i.ibb.co/tmXNNny/manage-Product.png" alt="manage-Product" border="0"></a>
  
  - Manage people: **manager** can see list of workers, add workers, delete workers and update worker data.
  
  <a href="https://imgbb.com/"><img src="https://i.ibb.co/dWd2kg7/manage-User.png" alt="manage-User" border="0"></a>
## Prototype in Figma

* Tablet view

<a href="https://ibb.co/C8bHDWN"><img src="https://i.ibb.co/r0xwNvT/prototipo-Figma.png" alt="prototipo-Figma" border="0"></a>

## Test

Technologies used to test: Karma, Jasmine

| File      | % Stmts   |  % Branch  | % Funcs  | % Lines  |    
|-----------|-----------|------------|----------|----------|
| All files |   88.19   |    72.37   |   82.48  |   87.31  |  


<a href="https://ibb.co/VM7rCGL"><img src="https://i.ibb.co/bNSqvV6/test.png" alt="test" border="0"></a>
## Performance

<a href="https://ibb.co/X8xX2GQ"><img src="https://i.ibb.co/SrwNsZj/performance-App.png" alt="performance-App" border="0"></a>

## Offline performance

<a href="https://ibb.co/LvDjLx2"><img src="https://i.ibb.co/3k56DpL/service-Worker.png" alt="service-Worker" border="0"></a>


-------------------------------------------------------------------------------------------

## 1. Resumen del proyecto

Esta vez tenemos un proyecto 100% por encargo. Si bien siempre puedes (y debes)
hacer sugerencias de mejoras y/o cambios, muchas veces trabajarás en proyectos
en los que primero hay que asegurarse de cumplir con lo requerido.

![burger-queen](https://user-images.githubusercontent.com/110297/42118136-996b4a52-7bc6-11e8-8a03-ada078754715.jpg)

Esta es la información que tenemos dxl clientx:

> Somos **Burguer Queen**, una cadena de comida 24hrs.
>
> Nuestra propuesta de servicio 24hrs ha tenido muy buena acogida y, para
> seguir creciendo, necesitamos un sistema que nos ayude a tomar los pedidos de
> nuestrxs clientxs.
>
> Tenemos 2 menús: uno muy sencillo para el desayuno:
>
> | Ítem                      |Precio $|
> |---------------------------|------|
> | Café americano            |    5 |
> | Café con leche            |    7 |
> | Sandwich de jamón y queso |   10 |
> | Jugo de frutas natural    |    7 |
>
> Y otro menú para el resto del día:
>
> | Ítem                      |Precio|
> |---------------------------|------|
> |**Hamburguesas**           |   **$**   |
> |Hamburguesa simple         |    10|
> |Hamburguesa doble          |    15|
> |**Acompañamientos**        |   **$**   |
> |Papas fritas               |     5|
> |Aros de cebolla            |     5|
> |**Para tomar**             |   **$**   |
> |Agua 500ml                 |     5|
> |Agua 750ml                 |     7|
> |Bebida/gaseosa 500ml       |     7|
> |Bebida/gaseosa 750ml       |     10|
>
> Nuestrxs clientxs son bastante indecisos, por lo que es muy común que cambien
> el pedido varias veces antes de finalizarlo.

La interfaz debe mostrar los dos menús (desayuno y resto del día), cada uno
con todos sus _productos_. La usuaria debe poder ir eligiendo qué _productos_
agregar y la interfaz debe ir mostrando el _resumen del pedido_ con el
costo total.

![out](https://user-images.githubusercontent.com/110297/45984241-b8b51c00-c025-11e8-8fa4-a390016bee9d.gif)

Además la clienta nos ha dado un [link a la documentación](https://laboratoria.github.io/burger-queen-api/)
que especifica el comportamiento esperado de la API HTTP que deberás consumir.
Ahí puedes encontrar todos los detalles de los _endpoints_, como por ejemplo
qué parámetros esperan, qué deben responder, etc.

## 2. Objetivos de aprendizaje

El objetivo principal de es aprender a construir una _interfaz web_ usando
el _framework_ elegido (React, Angular o Vue). Todos estos frameworks de
Front-end tratan de solucionar el mismo problema: **cómo mantener la interfaz
y el estado sincronizados**. Así que esta experiencia espera familiarizarte con
el concepto de _estado de pantalla_, y como cada cambio sobre el estado se va
a ir reflejando en la interfaz (por ejemplo, cada vez que agregamos un _producto_
a un _pedido_, la interfaz debe actualizar la lista del pedido y el total).

### HTML y CSS

* [ ] [Uso de HTML semántico.](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
* [ ] Uso de selectores de CSS.
* [ ] [Uso de flexbox en CSS.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [ ] [Uso de Media Queries.](https://developer.mozilla.org/es/docs/CSS/Media_queries)

### Testing

* [ ] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)
* [ ] [Testeo asíncrono.](https://jestjs.io/docs/es-ES/asynchronous)
* [ ] Uso de Mocks manuales.

### Estructura del código y guía de estilo

* [ ] Organizar y dividir el código en módulos (Modularización)
* [ ] Uso de identificadores descriptivos (Nomenclatura | Semántica)
* [ ] Uso de linter (ESLINT)

### Git y GitHub

* [ ] Uso de comandos de git (add | commit | pull | status | push)
* [ ] Manejo de repositorios de GitHub (clone | fork | gh-pages)
* [ ] Colaboración en Github (branches | pull requests | |tags)
* [ ] Organización en Github (projects | issues | labels | milestones)

### HTTP

* [ ] [Request, Response.](https://developer.mozilla.org/es/docs/Web/HTTP/Messages)
* [ ] Headers.
* [ ] Body.
* [ ] [Verbos HTTP.](https://developer.mozilla.org/es/docs/Web/HTTP/Methods)
* [ ] [Codigos de status de HTTP.](https://dev.to/khaosdoctor/the-complete-guide-to-status-codes-for-meaningful-rest-apis-1-5c5)
* [ ] Encodings y `JSON`.
* [ ] [CORS.](https://developer.mozilla.org/es/docs/Web/HTTP/Access_control_CORS)

### Angular

* [ ] [Components & templates.](https://angular.io/guide/architecture-components#introduction-to-components)
* [ ] [Directivas estructurales (ngIf / ngFor)](https://angular.io/guide/template-syntax#built-in-structural-directives)
* [ ] [@Input | @Ouput](https://angular.io/guide/component-interaction#component-interaction)
* [ ] [Creación y uso de servicios.](https://angular.io/guide/architecture-services#providing-services)
* [ ] [Manejos de rutas.](https://angular.io/guide/router)
* [ ] [Creación y uso Observables.](https://angular.io/guide/observables-in-angular)
* [ ] [Uso de HttpClient.](https://angular.io/guide/http)
* [ ] [Estilos de componentes (ngStyle / ngClass)](https://angular.io/guide/template-syntax#built-in-directives)

### React

* [ ] [`JSX`](https://es.reactjs.org/docs/introducing-jsx.html)
* [ ] [Componentes `class` y componentes `function`](https://es.reactjs.org/docs/components-and-props.html#function-and-class-components)
* [ ] `props`
* [ ] [Eventos en React.](https://es.reactjs.org/docs/handling-events.html)
* [ ] [Listas y keys.](https://es.reactjs.org/docs/lists-and-keys.html)
* [ ] [Renderizado condicional.](https://es.reactjs.org/docs/conditional-rendering.html)
* [ ] [Elevación de estados.](https://es.reactjs.org/docs/lifting-state-up.html)
* [ ] [`hooks`](https://es.reactjs.org/docs/hooks-intro.html)
* [ ] [`CSS` modules.](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet)
* [ ] [React Router.](https://reacttraining.com/react-router/web)

### Vue

* [ ] [Instancia de Vue.js.](https://es.vuejs.org/v2/guide/instance.html)
* [ ] [Datos y métodos.](https://es.vuejs.org/v2/guide/instance.html#Datos-y-Metodos)
* [ ] [Uso y creación de Componentes.](https://vuejs.org/v2/guide/components.html)
* [ ] [Props.](https://es.vuejs.org/v2/guide/components.html#Pasando-datos-a-componentes-secundarios-con-Props)
* [ ] Directivas ([v-bind](https://es.vuejs.org/v2/api/#v-bind) | [v-model](https://es.vuejs.org/v2/guide/forms.html))
* [ ] Renderizado condicional ([v-if](https://es.vuejs.org/v2/guide/conditional.html#v-if)
 | [v-else](https://es.vuejs.org/v2/guide/conditional.html#v-else))
* [ ] Iteraciones ([v-for](https://es.vuejs.org/v2/guide/list.html#Mapeando-una-matriz-a-elementos-con-v-for))
* [ ] Eventos ([v-on](https://es.vuejs.org/v2/guide/events.html))
* [ ] [Propiedades Computadas y Observadores.](https://es.vuejs.org/v2/guide/computed.html)
* [ ] [Router.](https://router.vuejs.org/guide/#html)
* [ ] [Clases y Estilos.](https://es.vuejs.org/v2/guide/class-and-style.html)

### UX

* [ ] Diseñar la aplicación pensando y entendiendo al usuario.
* [ ] Crear prototipos para obtener feedback e iterar.
* [ ] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)
* [ ] Planear y ejecutar tests de usabilidad.

***

## 3. Consideraciones

Este proyecto se debe "resolver" de a pares. Recuerda que deberas de consumir una
API que desarrollaran tus compañeras, sin embargo no debes esperar a que esta API
este terminada para empezar a codear, puedes utilizar herramientas
como [nock](https://github.com/nock/nock), [json-server](https://www.npmjs.com/package/json-server)
o [mockoon](https://mockoon.com) para mockear la API.

Trabaja en una historia hasta terminarla antes de pasar a la siguiente. Trabaja
hasta la historia que puedas en el tiempo especificado.

La lógica del proyecto debe estar implementada completamente en JavaScript
(ES6+), HTML y CSS y empaquetada de manera automatizada.

En este proyecto Sí está permitido usar librerías o frameworks
(debes elegir entre [React](https://reactjs.org/) o
[Angular](https://angular.io/)).

La aplicación debe ser un _Single Page App_. Los pedidos los tomaremos desde una
_tablet_, pero **no queremos una app nativa**, sino una web app que sea
**mobile-first**.

Necesitamos pensar bien en el aspecto UX de de quienes van a tomar los pedidos,
 el tamaño y aspecto de los botones, la visibilidad del estado actual del
 pedido, etc.

La aplicación desplegada debe tener 80% o más el las puntuaciones de
Performance, Progressive Web App, Accessibility y Best Practices de Lighthouse.

La aplicación debe hacer uso de `npm-scripts` y contar con scripts `start`,
`test`, `build` y `deploy`, que se encarguen de arrancar, correr las pruebas,
empaquetar y desplegar la aplicación respectivamente.

Los tests unitarios deben cubrir un mínimo del 90% de _statements_, _functions_,
_lines_ y _branches_.

Por otro lado, deberás definir la estructura de carpetas y archivos que consideres
necesaria. Puedes guiarte de las convenciones del _framework_ elegido. Por ende,
los _tests_ y el _setup_ necesario para ejecutarlos, serán hechos por ti.

## 4. Criterios de aceptación del proyecto

### Definición del producto

El [_Product Owner_](https://www.youtube.com/watch?v=r2hU7MVIzxs&t=202s)
nos presenta este _backlog_ que es el resultado de su trabajo con el clientx
hasta hoy.

***

#### [Historia de usuario 1] Mesero/a debe poder ingresar al sistema, si el admin ya le ha asignado credenciales

Yo como meserx quiero poder ingresar al sistema de pedidos.

##### Criterios de aceptación

Lo que debe ocurrir para que se satisfagan las necesidades del usuario.

* Acceder a una pantalla de login.
* Ingresar email y contraseña.
* Recibir mensajes de error comprensibles, dependiendo de cuál es el error
  con la información ingresada.
* Ingresar al sistema de pedidos si las crendenciales son correctas.

##### Definición de terminado

Lo acordado que debe ocurrir para decir que la historia está terminada.

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

#### [Historia de usuario 2] Mesero/a debe poder tomar pedido de cliente/a

Yo como meserx quiero tomar el pedido de unx clientx para no depender de mi mala
memoria, para saber cuánto cobrar, y enviarlo a la cocina para evitar errores y
que se puedan ir preparando en orden.

##### Criterios de aceptación

Lo que debe ocurrir para que se satisfagan las necesidades del usuario

* Anotar nombre de clientx.
* Agregar productos al pedido.
* Eliminar productos.
* Ver resumen y el total de la compra.
* Enviar pedido a cocina (guardar en alguna base de datos).
* Se ve y funciona bien en una _tablet_

##### Definición de terminado

Lo acordado que debe ocurrir para decir que la historia está terminada.

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

#### [Historia de usuario 3] Jefe de cocina debe ver los pedidos

Yo como jefx de cocina quiero ver los pedidos de lxs clientxs en orden y
marcar cuáles están listos para saber qué se debe cocinar y avisar a lxs meserxs
que un pedido está listo para servirlo a un clientx.

##### Criterios de aceptación

* Ver los pedidos ordenados según se van haciendo.
* Marcar los pedidos que se han preparado y están listos para servirse.
* Ver el tiempo que tomó prepara el pedido desde que llegó hasta que se
  marcó como completado.

##### Definición de terminado

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

#### [Historia de usuario 4] Meserx debe ver pedidos listos para servir

Yo como meserx quiero ver los pedidos que están preparados para entregarlos
rápidamente a lxs clientxs que las hicieron.

##### Criterios de aceptación

* Ver listado de pedido listos para servir.
* Marcar pedidos que han sido entregados.

##### Definición de terminado

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).
* Los datos se deben mantener íntegros, incluso después de que un pedido ha
  terminado. Todo esto para poder tener estadísticas en el futuro.

***

#### [Historia de usuario 5] Administrador(a) de tienda debe administrar a sus trabajadorxs

Yo como administrador(a) de tienda quiero gestionar a los usuarios de
la plataforma para mantener actualizado la informacion de mis trabajadorxs.

##### Criterios de aceptación

* Ver listado de trabajadorxs.
* Agregar trabajadorxs.
* Eliminar trabajadoxs.
* Actualizar datos de trabajadorxs.

##### Definición de terminado

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

#### [Historia de usuario 6] Administrador(a) de tienda debe administrar a sus productos

Yo como administrador(a) de tienda quiero gestionar los productos
para mantener actualizado el menú.

##### Criterios de aceptación

* Ver listado de productos.
* Agregar productos.
* Eliminar productos.
* Actualizar datos de productos.

##### Definición de terminado

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

## 5. Pistas / Tips

### Frameworks / libraries

* [React](https://reactjs.org/)
* [Angular](https://angular.io/)

### Herramientas

* [npm-scripts](https://docs.npmjs.com/misc/scripts)
* [Babel](https://babeljs.io/)
* [webpack](https://webpack.js.org/)
* [json-server](https://www.npmjs.com/package/json-server)
* [mockoon](https://mockoon.com)
* [nock](https://github.com/nock/nock)

### PWA

* [Tu primera Progressive Web App - Google developers](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/?hl=es)
* [Progressive Web Apps - codigofacilito.com](https://codigofacilito.com/articulos/progressive-apps)
* [Usando Service Workers - MDN](https://developer.mozilla.org/es/docs/Web/API/Service_Worker_API/Using_Service_Workers)



