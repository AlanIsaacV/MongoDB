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
        + [Operadores](#Operadores)
            + [Comparacion](#Comparacion)
            + [Logicos](#Logicos)
        + [Filtro de campos](#Filtro-de-campos)
    + [Actualizar](#Actualizar)
    + [Eliminar](#Eliminar)
+ [Cursores](#Cursores) 
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
##### *shell*
```javascript
> db.persona.find()
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

### **Operadores**
#### *Comparacion*
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

#### *Logicos*
+ **$ne** *!=* (Negacion/diferente)

##### *shell*
```javascript
> db.persona.find({nombre: {$ne: "Alan"}}, {_id: 0, nombre: 1})
```
```javascript
{ "nombre" : "Isaac" }
{ "nombre" : "Fernanda" }
```

<br><br>
 
### **Campos a mostrar**
Se especifica un 0 al campo que se quiere excluir
##### *shell*
```javascript
> db.persona.find({}, {_id:0})
```
```javascript
{ "nombre" : "Alan", "edad" : 20 }
{ "nombre" : "Isaac", "edad" : 20, "activo" : true }
{ "nombre" : "Fernanda", "edad" : 21 }
```
Se especifica un 1 para mostrar solo ese valor
##### *shell*
```javascript
> db.persona.find({}, {nombre:1})
```
```javascript
{ "_id" : ObjectId("5d057016581553215508f3bc"), "nombre" : "Alan" }
{ "_id" : ObjectId("5d057354581553215508f3bd"), "nombre" : "Isaac" }
{ "_id" : ObjectId("5d057354581553215508f3be"), "nombre" : "Fernanda" }
```
##### ***Nota 1*** 
    El _id siempre se mostrara al menos que se excluya manualmente


## Actualizar

## Eliminar

# Cursores
