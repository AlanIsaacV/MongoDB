MongoDB Usos y comandos
=======================
INDICE 
------
+ [Como empezar](#Como-empezar) 
    + [Iniciar servidor](#Iniciar-servidor)
        + [Cofigurar teminal](#Configurar-MongoDB-y-CMD)
    + [Comandos basicos](#Comandos-basicos)
        + [Mostrar DBs](#Mostrar-las-Bases-de-Datos)
        + [Crear DB](#Crear-DB)
        + [Mostrar DBs en uso](#Mostrar-Base-de-Datos-en-uso)
        + [Crear Coleccion (Implicito)](#Crear-coleccion-de-manera-implicita-/-Insertar-datos-en-Coleccion)
        + [Crear Coleccion (Explicito)](#Crear-coleccion-de-manera-explicita)
        + [Mostrar Colecciones](#Mostrar-Colecciones)
        + [Eliminar Coleccion](#Eliminar-coleccion)
        + [Eliminar DB](#Eliminar-DB)
+ [CRUD](#crud)
    + [Crear](#Crear)
        + [Un documento](#Un-documento)
        + [Varios documentos](#Varios-documentos)
    + [Mostrar](#Mostrar)
        + [Todos](#Todos)
        + [Formato](#Formato)
        + [Solo uno](#Solo-uno)
        + [Parametro de busqueda](#parametro-de-busqueda)
        + [Filtro de campos](#Filtro-de-campos)
    + [Actualizar](#Actualizar)
    + [Eliminar](#Eliminar)
+ [Funciones](#Funciones) 
    + [Varibles](#Variables)
    + [Operadores](#Operadores)
        + [Comparacion](#Comparacion)
        + [Logicos](#Logicos)





___
<br><br><br>

# Como empezar
## Iniciar servidor

Para iniciar el servidor primero es necesario una serie de pasos para poder usar los comandos de MongoDB

### **Configurar MongoDB y CMD**
1. Configurar MongoDb para su uso 
    1. Ir a la unidad ***c:***
    1. crear carpetas: ***data/db***
1. Configurar el cmd para usar comandos de MondoDB
    1. Copiar la ruta bin en la carpeta de instalacion de MongoDB
        + Default ***C:\Program Files\MongoDB\Server\4.0\bin***
    1. Seguir la ruta ***panel de control > Sistema y seguridad > Sistema***
    1. Entrar a ***Configuracion Avanzada del Sistema***
        1. ***Variables de Entorno > Nuevo***
        1. *Nombre:* **MongoDB** | *Valor:* ***Ruta de carpeta bin***

Si todo salio bien ya puedes acceder a los comandos de MongoDb desde el CMD

<br><br>

### **Arrancar el servidor**
##### *shell*
```javascript
mongod
```
```javascript
2019-06-15T13:19:01.725-0500 I NETWORK  [initandlisten] waiting for connections on port 27017
```
Esto significa que el servidor ya esta activo

<br>

Para ingresar los comandos se necesita abir otra terminal de comandos ya que esta esta ocupada con el servidor

Para ingresar todos los comandos tenemos que activar los comandos de MongoDB

##### *shell*
```javascript
mongo
```
Con esto ya podemos empezar a ingresar comandos

<br><br><br><br>

## Comandos basicos
### **Mostrar las Bases de Datos**
##### *shell*
``` javascript
> show dbs
```
``` javascript
admin   0.000GB
config  0.000GB
local   0.000GB
```
<br><br>

### **Crear DB**
##### *shell*
```javasript
> use Pruebas
```
```javasript
switched to db Pruebas
```
___
##### ***Nota***
    Si la DB no existe entonces se va ha crear, pero esta no aparecera en la lista de DB hasta que se carguen datos en esta
___

<br><br>

### **Mostrar Base de Datos en uso**
##### *shell*
```javascript
> db
```
```javascript
Pruebas
```

<br><br>

### **Crear Coleccion de manera implicita / Insertar datos en Coleccion**

*db*.__coleccion__.*insert*( { **documento** })

*db.*__nombreColeccion__.*insert([{* **documento1** _}, {_ **documento2** _},_ **...**_])_

##### *shell*
```javascript
> db.persona.insert({
... "nombre": "Alan",
... "apellido": "Vazquez",
... })
```
```javascript
WriteResult({ "nInserted" : 1 }) 
```
___
##### ***Nota 1***
    Se pueden insertar varias lineas en la terminal mientras no se cierren los parentesis de la funcion
##### ***Nota 2***
    En caso de que no exista la Coleccion en la que se quieren insertar datos se crea la Coleccion
___

<br><br>

### **Crear Coleccion de manera explicita**
_db.createCollection("_**nombreColeccion**_")_
##### *shell*
```javascript
> db.createCollection("productos")
```
```javascript
{ "ok" : 1 }
```

<br><br>

### **Mostrar Colecciones**
##### *shell*
```javascript
> show collections
```
```javascript
persona
productos
```

<br><br>
 
### **Eliminar Coleccion**
_db._**nombreColeccion**_.drop()_
##### *shell*
```javascript
> db.productos.drop()
```
```javascript
true
```

<br><br>
 
### **Eliminar DB**
##### *shell*
```javascript
> db.dropDatabase()
```
```javascript
{ "dropped" : "Pruebas", "ok" : 1 }
```

<br><br><br><br><br><br><br><br>
 
# CRUD
## Crear 
### **Un documento**
_db._**nomreColeccion**_.insert({_ **nombreValor** _:_ **valor**_,_ **...**_})_
##### *shell*
```javascript
> db.persona.insert({ nombre: "Alan", edad: 20 })
```
```javascript
WriteResult({ "nInserted" : 1 })
```
___
##### ***Nota 1***
    Se pueden omitir las comillas en los nombres de los campos.

##### ***Nota 2***
    MongoDB inserta un id por defaul cuando este se omite
        "_id": ObjectId("<<Hash>>")
    En caso de que se tenga un id personalizado para el documento es preferible usar el del documento.
    se tiene que especificar como {"_id": <<Valor_Unico>>}
##### ***Nota 3***
    Se pueden insertar diferentes campos en la misma coleccion
        Cada documento puede tener sus propios campos distintos sin necesidad de alterar a los demas, como en caso de SQL
___

<br><br>
 
### **Varios documentos**
_db._**nombreColeccion**_.insert ( [ {_ 
**documento1**_},_
_{_ **documento2** _},_ 
_{_ **...** _} ] )_
##### *shell*
```javascript
> db.persona.insert([
... {
... nombre: "Isaac",
... edad: 20,
... activo: true
... },
... {nombre: "Fernanda",
... edad: 21
... }])
```
```javascript
BulkWriteResult({
        "writeErrors" : [ ],
        "writeConcernErrors" : [ ],
        "nInserted" : 2,
        "nUpserted" : 0,
        "nMatched" : 0,
        "nModified" : 0,
        "nRemoved" : 0,
        "upserted" : [ ]
})
```

<br><br><br><br>

## Mostrar
### **Todos**
_db._**nombreColeccion**_.find()_
##### *shell*
```javascript
> db.persona.find()
```
```javascript
{ "_id" : ObjectId("5d057016581553215508f3bc"), "nombre" : "Alan", "edad" : 20 }
{ "_id" : ObjectId("5d057354581553215508f3bd"), "nombre" : "Isaac", "edad" : 20, "activo" : true }
{ "_id" : ObjectId("5d057354581553215508f3be"), "nombre" : "Fernanda", "edad" : 21 }
```

<br><br>

### **Formato**
_db._**nombreColeccion**_.find().pretty()_
##### *shell*
```javascript
> db.persona.find().pretty()
```
```javascript
{
        "_id" : ObjectId("5d057016581553215508f3bc"),
        "nombre" : "Alan",
        "edad" : 20
}
{
        "_id" : ObjectId("5d057354581553215508f3bd"),
        "nombre" : "Isaac",
        "edad" : 20,
        "activo" : true
}
{
        "_id" : ObjectId("5d057354581553215508f3be"),
        "nombre" : "Fernanda",
        "edad" : 21
}
```

<br><br>

### **Solo uno**
_db._**nombreColeccion**_.findOne()_
##### *shell*
```javascript
> db.persona.findOne()
```
```javascript
{
        "_id" : ObjectId("5d057016581553215508f3bc"),
        "nombre" : "Alan",
        "edad" : 20
}
```

<br><br>

### **Parametro de busqueda**
##### *shell*
_db._**nombreColeccion**_.find( {_ **parametrosBusqueda** _} )_

```javascript
> db.persona.find({edad:20})
```
```javascript
{ "_id" : ObjectId("5d057016581553215508f3bc"), "nombre" : "Alan", "edad" : 20 }
{ "_id" : ObjectId("5d057354581553215508f3bd"), "nombre" : "Isaac", "edad" : 20, "activo" : true }
```

##### ***Nota 1***
    Se pueden insertar los parametros que se desee dentro de los mismo corchetes separando por ","

<br><br>
 
### **Campos a mostrar**
_db._**nombreColeccion**_.find(_
_{_ **parametrosBusqueda** _},_ 
_{_ **campo1** _:_ **1**_,_ **campo2** _:_ **0**_,_ **...** _} )_


_Se especifica un 0 para excluir el valor_

_Se especifica un 1 para mostrar el valor_

##### *shell*
```javascript
> db.persona.find({}, {_id:0})
```
```javascript
{ "nombre" : "Alan", "edad" : 20 }
{ "nombre" : "Isaac", "edad" : 20, "activo" : true }
{ "nombre" : "Fernanda", "edad" : 21 }
```
##### *shell*
```javascript
> db.persona.find({}, {nombre:1})
```
```javascript
{ "_id" : ObjectId("5d057016581553215508f3bc"), "nombre" : "Alan" }
{ "_id" : ObjectId("5d057354581553215508f3bd"), "nombre" : "Isaac" }
{ "_id" : ObjectId("5d057354581553215508f3be"), "nombre" : "Fernanda" }
```
___
##### ***Nota 1*** 
    El _id siempre se mostrara al menos que se excluya manualmente
___

<br><br><br><br>

## Actualizar
### **Save**
_db._**nombreColeccion**_.save(_
_{_ **_id o documento**  _},_ 
_{_ **campoNombre** _:_ **nuevoValor** _} )_

##### *shell* 
```javascript
> db.persona.save( { "_id" : ObjectId("5d057016581553215508f3bc") }, { edad : 30 })
```
```javascript
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
```
___
##### ***Nota 1***
    Se debe indicar el campo "_id" porque sino se va ha crear un nuevo documento.
    No basta con que los campos de busqueda sean unicos
##### ***Nota 2***
    En caso de que el campo ha actualizar no exista este se va ha agregar
___

<br><br>

### **Update**
_db._**nombreColeccion**_.update(_ 

_{_ **valoresBusqueda** _},_

_{_ ***$set :*** **{ valoresModificar**_,_ **ValoresCrear },** 
    ***$unset :*** **{campoEliminar : valorEliminar}** _},_

_{  multi:_ **boolean** _} )_

    $set: Establece que solo es campo se va ha modificar o crear. 
    Sino se coloca esta expresion se tendra que ingresar el documento completo

    $unset: 

    multi: Inidica que se van ha modificar todos los documentos que concidan con los campos de la busqueda en caso de que su valor sea "true".
    Sino se especifica el valor por default es "false" por lo que solo se modificara el primer documento que se encuentre

##### *shell*
```javascript
> db.persona.update({nombre: "Fernanda"}, {edad: 23, activo: true})
```
```javascript
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
```

<br><br><br><br>

## Eliminar
### **Remove**

_db._**nombreColeccion**_.remove( {_ **camposBusqueda** _} )_

    A diferencia de la funcion update() la funcion remove() elimina todos los documentos que concidan con sus parametros de busqueda
##### *shell*
```javascript
> db.persona.remove({ "_id" : ObjectId("5d057016581553215508f3bc") })
```
```javascript
WriteResult({ "nRemoved" : 1 })
```

<br><br><br><br><br><br><br><br>

# Funciones
## Variables
_var_ **nombreVariable** _=_ **script, funcion, documento, etc**

_Se puede asgnar un script a una variable y usarla cuando sea oportuno, como una funcion de una buqueda en especifico_

#### *shell* 
```javascript
> var test = db.persona.findOne({nombre: "Alan"})
``` 
#### *shell* 
```javascript
> test
```
```javascript
{
        "_id" : ObjectId("5d057016581553215508f3bc"),
        "nombre" : "Alan",
        "edad" : 20
}
```
#### *shell* 
```javascript
> test.edad
```
```javascript
20
```
___
#### ***Nota 1***
    Se puede especificar el .edad debido a que hace uso de la funcion findOne().
    Gracias a eso se puede acceder a los campos del resultado de la busqueda
    Igualmente si se accede a un atributo que no existe este se crea
___

<br><br>

## Operadores
### **Comparacion**
+ **$gt**  *>*  (greater than)
+ **$gte** *>=* (greater than equals)
+ **$lt**  *<*  (less than)
+ **$lte** *<=* (less than equals)
##### *shell*
```javascript
> db.persona.find({edad: {$gt: 20}}, {_id: 0})
```
```javascript
{ "nombre" : "Fernanda", "edad" : 21 }
```

<br>

### **Logicos**
+ **$ne** *!=* (Negacion/diferente)

##### *shell*
```javascript
> db.persona.find({nombre: {$ne: "Alan"}}, {_id: 0, nombre: 1})
```
```javascript
{ "nombre" : "Isaac" }
{ "nombre" : "Fernanda" }
```


