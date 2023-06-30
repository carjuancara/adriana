#
#
# Adriana e-commerce

![Tienda de ropa](./client/src/assets/adriana.jpg)

## Tienda de ropa & accesorios

>Adriana: es una tipica tienda de ropa y accesorios de moda la cual empezara a vender online

___

Para este proyecto, se hara una SPA, desarrollando tanto la BD, BACK-END y FRONT-END, la pagina contara con:

1. Registro de Usuarios
2. Pasarela de pagos
3. Un servicio para guardar fotos y videos online **CLOUDINARY**
4. Busqueda de articulos por nombre
    * podra buscar el nombre parcialmente
5. Filtrado Alfabetico 
    * A-Z 
    * Z-A
6. Favoritos
    * Agregar productos y quitarlos
7. Carrito de Compras
8. Auntenticacion de Terceros
    * Google
    * Facebook
    * Email
9. DashBoar Users
    * dara la posibilidad de modificar sus datos
    * mostrar un historial de compras realizadas en el sitio
10. DashBoard Admin
    * Agregar nuevos articulos
    * Actualizar los datos de los articulos
    * Asignar/quitar descuentos
    * Dar permiso de moderador a otro usuario
    * Ver grafico de articulos más vendidos
    * Ver grafico de ventas por clientes
    * Ver grafico de ventas por modo de pago
 


## BD
    Para la DB utilizare una base de datos relacional y un ORM
#
* DB relacional: Postgres
* ORM : Sequelize

![Base de datos](./client/src/assets/D.E.R.%20Adriana.png)

___

#
## BACK-END

 Para el BACK-END utilizare *EXPRESS*

 ## Las rutas disponibles tendrán *CRUD* sobre

 * Sales 
 * Reason-change
 * Brand
 * Users
 * Provider
 * Tax-conditions
 * Articles

---


 ## **RUTA /SALES**                                     
 
 | HTML            |      RUTA        | DESCRIPCION                    |    
 |:----------------|:-----------------|:-------------------------------|    
 | POST            | /sales           | **Registra** una venta         |    
 | GET             | /sales/:id       | **Trae** una venta especifica  |    
 | GET             | /sales           | **Trae** todas las ventas      |    
 | DELETE          | /sales/:id       | **Borra** una venta            |    
 
 
 ___

 ## **RUTA /reasonchange**

 | HTML   |      RUTA        | DESCRIPCION                             |
 |:-------|:-----------------|:----------------------------------------|
 | POST   | /reasonchange    | **Registra** una razon para cambio      |
 | GET    | /reasonchange/:id| **Trae** una razon de cambio especifica |
 | GET    | /reasonchange    | **Trae** todas las razones de cambios   |
 | DELETE | /reasonchange/:id| **Borra** una razon                     |
 | PUT    | /reasonchange/:id| **Actualiza** las razones de cambios    |
 

 
---
## **RUTA /brand**


 | HTML    |      RUTA   | DESCRIPCION                   |
 |:--------|:------------|:------------------------------|
 | POST    | /brand      | **Registra** una nueva marca  |
 | GET     | /brand/:id  | **Trae** una marca especifica |
 | GET     | /brand      | **Trae** todas las marcas     |
 | DELETE  | /brand/:id  | **Borra** una marca           |
 | PUT     | /brand/:id  | **Actualiza** una marca       |
 
 

---

## **RUTA /users**

 | HTML    |      RUTA    | DESCRIPCION                    |
 |:--------|:-------------|:-------------------------------|
 | POST    | /users       | **Registra** un nuevo usuario  |
 | GET     | /users/:id   | **Trae** un nuevo usuario      |
 | GET     | /users       | **Trae** todos los usuarios    |
 | DELETE  | /users/:id   | **Borra** un usuario           |
 | PUT     | /users/:id   | **Actualiza** un usuario       |
 
 

---

 ## **RUTA /provider**

 | HTML     |      RUTA        | DESCRIPCION                        |
 |:---------|:-----------------|:-----------------------------------|
 | POST     | /provider        | **Registra** un nuevo proveedor    |
 | GET      | /provider/:id    | **Trae** un proveedor              |
 | GET      | /provider        | **Trae** todos los un proveedor    |
 | DELETE   | /provider/:id    | **Borra** un proveedor             |
 | PUT      | /provider/:id    | **Actualiza** un proveedor         |


---

 ## **RUTA /tax**
 | HTML     |      RUTA   | DESCRIPCION                               |
 |:---------|:------------|:------------------------------------------|
 | POST     | /tax        | **Registra** una nueva condicion fiscal   |
 | GET      | /tax/:id    | **Trae** una condicion fiscal             |
 | GET      | /tax        | **Trae** todas las condiciones fiscales   |
 | DELETE   | /tax/:id    | **Borra** una condicion fiscal            |
 | PUT      | /tax/:id    | **Actualiza** una condicion fiscal        |
 

---

 ## **RUTA /articles**
 | HTML    |      RUTA        | DESCRIPCION                                                         |
 |:--------|:-----------------|:--------------------------------------------------------------------|
 | POST    | /articles        | **Registra** un nuevo articulo                                      |
 | GET     | /articles/:id    | **Trae** un articulo                                                |
 | GET     | /articles        | **Trae** todos los articulos                                        |
 | GET     | /articles/:name  | **Trae** los articulos que coincidan parcialmente en su descripcion |
 | GET     | /articles/:orden | **Trae** los articulos ordenados asc o desc                         |
 | DELETE  | /articles/:id    | **Borra** un articulo                                               |
 | PUT     | /articles/:id    | **Actualiza** un articulo                                           |
 
---

## **RUTA /payment**
 | HTML    |      RUTA        | DESCRIPCION                                                               |
 |:--------|:-----------------|:--------------------------------------------------------------------------|
 | POST    | /payment        | **Registra** un nuevo método de pago                                       |
 | GET     | /payment/:id    | **Trae** un método de pago                                                 |
 | GET     | /payment        | **Trae** todos los métodos de pagos                                        |
 | DELETE  | /payment/:id    | **Borra** un método de pago                                                |
 | PUT     | /payment/:id    | **Actualiza** un método de pagos                                           |

---

## **RUTA /creditnote**
 | HTML    |      RUTA        | DESCRIPCION                                                               |
 |:--------|:-----------------|:--------------------------------------------------------------------------|
 | POST    | /creditnote        | **Registra** una nueva nota de credito                                  |
 | GET     | /creditnote/:id    | **Trae** una nota de credito                                            |
 | GET     | /creditnote        | **Trae** todos las nota de credito                                      |
 | DELETE  | /creditnote/:id    | **Borra** una nota de credito                                           |
 | PUT     | /creditnote/:id    | **Actualiza** una nota de credito                                       |

---
 ## Borrado lógico
    Para esto las tablas poseen el atributo ACTIVE, en la cual se cambia a FALSE para que no este disponible ¡NO BORRA LOS REGISTROS!

 ## La tabla *Company*
 Esta solo **tendrá un solo registro** en el cual tendrá toda la info de la empresa, para poder ser utilizada donde sea necesaria, esta **solo podra ser actualizada** por el administrador
 
 ## La tabla *Roles*
 Esta solo contiene 3 registros con:
 * admin
 * moderator
 * user 
 
 Los cuales permitiran el acceso y permisos a determinadas rutas
 
 ## La tabla *Sales_detail*
 Aqui se guardan los detalles de las ventas 