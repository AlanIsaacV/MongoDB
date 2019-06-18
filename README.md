Guia de **MongoDB** _Usos y comandos_
=======================
INDICE 
------
+ [Como empezar](#Como-empezar) 
    + [Iniciar servidor - **mongod | mongo**](#Iniciar-servidor)
        + [Cofigurar teminal](#Configurar-MongoDB-y-CMD)
    + [Comandos basicos](#Comandos-basicos)
        + [Mostrar DBs - **show dbs**](#Mostrar-las-Bases-de-Datos)
        + [Crear DB - **use {db}**](#Crear-DB)
        + [Mostrar DBs en uso- **db**](#Mostrar-Base-de-Datos-en-uso)
        + [Crear Coleccion (Implicito) - **.insert( )**](#Crear-coleccion-de-manera-implicita-/-Insertar-datos-en-Coleccion)
        + [Crear Coleccion (Explicito) - **createCollection( )**](#Crear-coleccion-de-manera-explicita)
        + [Mostrar Colecciones - **show collections**](#Mostrar-Colecciones)
        + [Eliminar Coleccion - **.drop( )**](#Eliminar-coleccion)
        + [Eliminar DB - **.dropDatabase( )**](#Eliminar-DB)
+ [CRUD](#crud)
    + [Crear](#Crear)
        + [Un documento - **.insert( )**](#Un-documento)
        + [Varios documentos - **.insert( )**](#Varios-documentos)
        + [Arreglos - **.insert( )**](#Arreglos)
    + [Mostrar](#Mostrar)
        + [Todos - **.find( )**](#Todos)
        + [Solo uno - **.findOne( )**](#Solo-uno)
        + [Parametro de busqueda - **.find( _{ }_ )**](#parametro-de-busqueda)
        + [Filtro de campos - **.find( { }, _{ }_ )**](#Filtro-de-campos)
        + [*Cursores* - **.find( )**](#cursores)
            + [Formato - **.pretty( )**](#Formato)
            + [forEach - **.forEach( )**](#forEach)
            + [count - **.count( )**](#count)
            + [sort - **.sort( )**](#sort)
            + [limit - **.limit( )**](#limit)
            + [skip - **.skip( )**](#skip)
            + [count vs size **.size( )**](#count-vs-size)
        + [Arreglos](#Arreglos---find)
            + [slice - **.find( { }, _{ }_ )**](#slice)
            + [in - **.find( _{ }_, { } )**](#in)
    + [Actualizar](#Actualizar)
        + [save - **.save( )**](#save)
        + [update - **.update( )**](#update)
        + [Arreglos - **.update( { }, _{ }_ )**](#Arreglos)
            + [Agregar - **$push: _{ }_**](#Agregar---update)
                + [push - **$push: _{ }_**](#push) 
                + [each - **$each: [ ]**](#each)
                + [position - **$position**](#position)
                + [sort - **$sort**](#sort)
            + [Eliminar](#Eliminar---update-(arreglos))
                + [pull - **$pull: {}**](#pull)
    + [Eliminar](#Eliminar)
        + [remove - **.remove( )**](#remove)
+ [Funciones](#Funciones) 
    + [Varibles](#Variables)
    + [Operadores](#Operadores)
        + [Comparacion](#Comparacion)
        + [Logicos](#Logicos)
    + [Bucles](#Bucles)
        + [for](#for)
+ [Avanzado](#Avanzado)
    + [Grupos - **aggregate( _[ ]_ )**](#Group)
        + [Agrupacion - **$group _{ }_**](#Agrupacion)
        + [Repeticion de grupos - **$sum : 1**](#Repeticion-de-grupos)
        + [Suma de campos - **$sum:_{ }_**](#suma-de-campos-por-grupo)
        + [promedio - **$avg: _{ }_**](#Promedio-de-grupos)
+ [Expresiones regulares - **.find ( _{ }_ )**](#Expresiones-regulares)
    + [Like - ***/ /***](#'Like')
        + [Cualquier zona - ***/ /***](#Cualquier-zona)
        + [Al final - **/  _$_/**](#Al-final)
        + [Al inicio - **/_^_ /**](#Al-inicio)

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
###### *shell*
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

###### *shell*
```javascript
mongo
```
Con esto ya podemos empezar a ingresar comandos

<br><br><br><br>

## Comandos basicos
### **Mostrar las Bases de Datos**
###### *shell*
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
###### *shell*
```javasript
> use Pruebas
```
```javasript
switched to db Pruebas
```
___
###### ***Nota 1***
    Si la DB no existe entonces se va ha crear, pero esta no aparecera en la lista de DB hasta que se carguen datos en esta
___

<br><br>

### **Mostrar Base de Datos en uso**
###### *shell*
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

###### *shell*
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
###### ***Nota 1***
    Se pueden insertar varias lineas en la terminal mientras no se cierren los parentesis de la funcion
###### ***Nota 2***
    En caso de que no exista la Coleccion en la que se quieren insertar datos se crea la Coleccion
___

<br><br>

### **Crear Coleccion de manera explicita**
_db.createCollection("_**nombreColeccion**_")_
###### *shell*
```javascript
> db.createCollection("productos")
```
```javascript
{ "ok" : 1 }
```

<br><br>

### **Mostrar Colecciones**
###### *shell*
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
###### *shell*
```javascript
> db.productos.drop()
```
```javascript
true
```

<br><br>
 
### **Eliminar DB**
###### *shell*
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
###### *shell*
```javascript
> db.persona.insert({ nombre: "Alan", edad: 20 })
```
```javascript
WriteResult({ "nInserted" : 1 })
```
___
###### ***Nota 1***
    Se pueden omitir las comillas en los nombres de los campos.

###### ***Nota 2***
    MongoDB inserta un id por defaul cuando este se omite
        "_id": ObjectId("<<Hash>>")
    En caso de que se tenga un id personalizado para el documento es preferible usar el del documento.
    se tiene que especificar como {"_id": <<Valor_Unico>>}
###### ***Nota 3***
    Se pueden insertar diferentes campos en la misma coleccion
        Cada documento puede tener sus propios campos distintos sin necesidad de alterar a los demas, como en caso de SQL
___

<br><br>
 
### **Varios documentos**
_db._**nombreColeccion**_.insert ( [ {_ 
**documento1**_},_
_{_ **documento2** _},_ 
_{_ **...** _} ] )_
###### *shell*
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

<br><br>
### **Arreglos - update**
_db._**nombreColeccion**_.insert ( {_
**nombreArreglo** _: [_ **valor1, valor2, ...** _] } )_
###### *shell*
```javascript
> db.prueba.insert([
... {nombre: "test 1", miArreglo: [1, 5, 7, 9] },
... {nombre: "test 2", miArreglo: [8, 4, 3] }
... ] )
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
###### *shell*
```javascript
> db.persona.find()
```
```javascript
{ "_id" : ObjectId("5d057016581553215508f3bc"), "nombre" : "Alan", "edad" : 20 }
{ "_id" : ObjectId("5d057354581553215508f3bd"), "nombre" : "Isaac", "edad" : 20, "activo" : true }
{ "_id" : ObjectId("5d057354581553215508f3be"), "nombre" : "Fernanda", "edad" : 21 }
```

<br><br>

### **Solo uno**
_db._**nombreColeccion**_.findOne()_
###### *shell*
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
###### *shell*
_db._**nombreColeccion**_.find( {_ **parametrosBusqueda** _} )_

```javascript
> db.persona.find({edad:20})
```
```javascript
{ "_id" : ObjectId("5d057016581553215508f3bc"), "nombre" : "Alan", "edad" : 20 }
{ "_id" : ObjectId("5d057354581553215508f3bd"), "nombre" : "Isaac", "edad" : 20, "activo" : true }
```

###### ***Nota 1***
    Se pueden insertar los parametros que se desee dentro de los mismo corchetes separando por ","

<br><br>
 
### **Filtro de campos**
_db._**nombreColeccion**_.find(_
_{_ **parametrosBusqueda** _},_ 
_{_ **campo1** _:_ **1**_,_ **campo2** _:_ **0**_,_ **...** _} )_


_Se especifica un **0** o **false** para excluir el valor_

_Se especifica un **1** o **true** para mostrar el valor_

###### *shell*
```javascript
> db.persona.find({}, {_id:0})
```
```javascript
{ "nombre" : "Alan", "edad" : 20 }
{ "nombre" : "Isaac", "edad" : 20, "activo" : true }
{ "nombre" : "Fernanda", "edad" : 21 }
```
###### *shell*
```javascript
> db.persona.find({}, {nombre:1})
```
```javascript
{ "_id" : ObjectId("5d057016581553215508f3bc"), "nombre" : "Alan" }
{ "_id" : ObjectId("5d057354581553215508f3bd"), "nombre" : "Isaac" }
{ "_id" : ObjectId("5d057354581553215508f3be"), "nombre" : "Fernanda" }
```
___
###### ***Nota 1*** 
    El _id siempre se mostrara al menos que se excluya manualmente
___

<br><br>

### **Cursores**
#### **Formato**
_db._**nombreColeccion**_.find().pretty()_
###### *shell*
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

#### **forEach** 
_db._**nombreColeccion**_.find.().forEach(_
**bloqueDeFunciones**
_)_

    Recorre la lista de documentos de una coleccion

###### *shell*
```javascript
> db.cicloFor.find().forEach(
... function(d){ print( d.valor ) }
... )
```
```javascript
0                     
1
2
3
...
100
```

<br>

#### **count** 
_db._**nombreColeccion**_.find.().count()_
###### *shell*
```javascript
> db.cicloFor.find().count()
```
```javascript
101
```

<br>

#### **sort** 
_db._**nombreColeccion**_.find.().sort(_ 
_{_ **campoOrdenar** _:_ **[1/-1]** _} )_
###### *shell*
```javascript
> db.orden.insert([
... {valor: "f"},
... {valor: "c"},
... {valor: "a"},
... {valor: "ab"},
... {valor: "aa"}
... ])
```
```javascript
BulkWriteResult({
        "writeErrors" : [ ],
        "writeConcernErrors" : [ ],
        "nInserted" : 5,
        "nUpserted" : 0,
        "nMatched" : 0,
        "nModified" : 0,
        "nRemoved" : 0,
        "upserted" : [ ]
})
```
###### *shell*
```javascript
> db.orden.find({},{_id: 0}).sort({valor:1})
```
```javascript
{ "valor" : "a" }
{ "valor" : "aa" }
{ "valor" : "ab" }
{ "valor" : "c" }
{ "valor" : "f" }
```
###### *shell*
```javascript
> db.orden.find({},{_id: 0}).sort({valor:-1})
```
```javascript
{ "valor" : "f" }
{ "valor" : "c" }
{ "valor" : "ab" }
{ "valor" : "aa" }
{ "valor" : "a" }
```
___
###### ***Nota 1***
    Indicar el valor en el campo segun el orden deseado:
         1 = ascendente
        -1 = descendente 
___

<br>

#### **limit**
_db._**nombreColeccion**_.find.().limit(_ **numeroValoresMostrar** _)_
###### *shell*
```javascript
> db.prueba.find({},{_id:0}).limit(5)
```
```javascript
{ "valor" : 1 }
{ "valor" : 2 }
{ "valor" : 3 }
{ "valor" : 4 }
{ "valor" : 5 }
```

<br>

#### **skip**
_db._**nombreColeccion**_.find.().skip(_ **numeroValoresOmitir** _)_
###### *shell*
```javascript
> db.prueba.find({},{_id:0}).skip(10).limit(5)
```
```javascript
{ "valor" : 11 }
{ "valor" : 12 }
{ "valor" : 13 }
{ "valor" : 14 }
{ "valor" : 15 }
```

<br>

#### **count vs size**
_db._**nombreColeccion**_.find.( ).skip(_ **numeroValoresOmitidos** _).size( )_
###### *shell*
```javascript
> db.prueba.find({},{_id:0}).sort({valor:1}).skip(10).size()
```
```javascript
90
```
###### *shell*
```javascript
> db.prueba.find({},{_id:0}).skip(10).count()
```
```javascript
100
```
###### ***Nota 1***
    count: Devuelve el numero total de documentos encontrados dentro el metodo find()
    size: Devuelve el numero de documentos restantes dentro del skip [size = count - skip]

<br><br>

### **Arreglos - find**
#### **slice** 
_db._**nombreColeccion**_find( { },_
_{_ **nombreArreglo** _:_ _{$slice :_ **numeroElementos** _} } )_ 

###### *shell*
```javascript
> db.prueba.find({},{_id:false}).pretty()
```
```javascript
{
        "miArreglo" : [
                "C#",
                "JavaScript",
                "Python",
                "Visual Basic",
                "Java"
        ]
}
```
###### *shell*
```javascript
> db.prueba.find({},{_id:false, miArreglo: {$slice: 3}})
```
```javascript
{ "miArreglo" : [ "C#", "JavaScript", "Python" ] }
```
###### *shell*
```javascript
> db.prueba.find({},{_id:false, miArreglo: {$slice: -3}})
```
```javascript
{ "miArreglo" : [ "Python", "Visual Basic", "Java" ] }
```
###### *shell*
```javascript
> db.prueba.find({},{_id:false, miArreglo: {$slice: [1, 3]}})
```
```javascript
{ "miArreglo" : [ "JavaScript", "Python", "Visual Basic" ] }
```

<br><br>

#### **in** 
_db._**nombreColeccion**_.find(_
_{ **nombreArreglo** _: { $in : [_ **valoresBusqueda** _] } )_ 

Para negra la busqueda, excluir las concidencias usar:
    $nin

###### *shell*
```javascript
> db.prueba.find({},{_id:false}).pretty()
```
```javascript
{
        "miArreglo" : [
                "C#",
                "JavaScript",
                "Python",
                "Visual Basic",
                "Java"
        ]
}
```
###### *shell*
```javascript
> db.prueba.find({miArreglo: {$in: ["C#", "SQL"]} }, {_id: false} )
```
```javascript
{ "miArreglo" : [ "C#", "JavaScript", "Python", "Visual Basic", "Java" ] }
```

###### ***Nota 1***
    Solo es necesario una concidencia de todos los parametros de busqueda para que este retorne el documento

<br><br><br><br>

## Actualizar
### **Save**
_db._**nombreColeccion**_.save(_
_{_ **_id o documento**  _},_ 
_{_ **campoNombre** _:_ **nuevoValor** _} )_

###### *shell* 
```javascript
> db.persona.save( { "_id" : ObjectId("5d057016581553215508f3bc") }, { edad : 30 })
```
```javascript
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
```
___
###### ***Nota 1***
    Se debe indicar el campo "_id" porque sino se va ha crear un nuevo documento.
    No basta con que los campos de busqueda sean unicos
###### ***Nota 2***
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

    $unset: Elimina los campos que concidan con el valor indicado

    multi: Inidica que se van ha modificar todos los documentos que concidan con los campos de la busqueda en caso de que su valor sea "true".
    Sino se especifica el valor por default es "false" por lo que solo se modificara el primer documento que se encuentre

###### *shell*
```javascript
> db.persona.update({nombre: "Fernanda"}, {edad: 23, activo: true})
```
```javascript
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
```

<br><br>

### **Arreglos**
#### **Agregar - update**
##### **push**
_db._**nombreColeccion**_.update(_ 

_{_ **valoresBusqueda** _},_

_{ $push : {_ **valoresAñadir** _} )_

<br>

_db._**nombreColeccion**_.update( { },_

_{_ _$addToSet : {_ **valoresAñadir** _} )_
###### *shell*
```javascript
> db.prueba.find({}, {_id:0})
```
```javascript
{ "nombre" : "test , "miArreglo" : [ 8, 4, 3] }
```
###### *shell*
```javascript
> db.prueba.update( {}, {$addToSet: {miArreglo: 2} })
```
```javascript
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
```
###### *shell*
```javascript
> db.prueba.find({}, {_id:0})
```
```javascript
{ "nombre" : "test 1", "miArreglo" : [ 8, 4, 3, 2] }
```

<br>

###### *shell*
```javascript
> db.prueba.update( {}, {$addToSet: {miArreglo: [6, 0]} })
```
```javascript
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
```
###### *shell*
```javascript
> db.prueba.find({}, {_id:0})
```
```javascript
{ "nombre" : "test 1", "miArreglo" : [ 8, 4, 3, 2, [ 6, 0 ] ] }
```

###### ***Nota 1***
    Si el elemento ya existe dentro del Array este ya no se volvera ha agregar.
    $push: permite agregar elementos existentes en el array

<br><br>

##### **each**
_db._**nombreColeccion**_.update( { },_
_{ $push : {_ **nombreArreglo** _:_
_{ $each : [_ **valor1, valor2, ...**  _]_
_} )_
###### *shell*
```javascript
> db.prueba.find({}, {_id:0})
```
```javascript
{ "nombre" : "test 1", "miArreglo" : [ 8, 4, 3 ] }
```
###### *shell*
```javascript
> db.prueba.update( {},
... {$push: { miArreglo :
... {$each: [2, 3, 6] }
... } } )
```
```javascript
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
```
###### *shell*
```javascript
> db.prueba.find({}, {_id:0})
```
```javascript
{ "nombre" : "test 1", "miArreglo" : [ 8, 4, 3, 2, 3, 6 ] }
```

###### ***Nota 1***
    En lugar de usar $push tambien se peuede utilizar $addToSet

<br><br>
##### **position**
_db._**nombreColeccion**_.update( { },_
_{ $push : {_ **nombreArreglo** _:_
_{ $position :_ **indiceArreglo**
_} )_
###### *shell*
```javascript
> db.prueba.find({}, {_id:0})
```
```javascript
{ "nombre" : "test 1", "miArreglo" : [ 8, 4, 3 ] }
```
###### *shell*
```javascript
> db.prueba.update( {},
... {$push: { miArreglo :
... {$each: [2, 3, 6], $position: 1}
... } } )
```
```javascript
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
```
###### *shell*
```javascript
> db.prueba.find({}, {_id:0})
```
```javascript
{ "nombre" : "test 1", "miArreglo" : [ 8, 2, 3, 6, 4, 3 ] }
```

###### ***Nota 1***
    El metodo $position solo esta disponible con $push

<br><br>
##### **sort**
_db._**nombreColeccion**_.update( { },_
_{ $push : {_ **nombreArreglo** _:_
_{ $sort :_ **[1/-1]**
_} )_
###### *shell*
```javascript
> db.prueba.find({}, {_id:0})
```
```javascript
{ "nombre" : "test 1", "miArreglo" : [ 8, 4, 3 ] }
```
###### *shell*
```javascript
> db.prueba.update( {},
... {$push: { miArreglo :
... {$each: [2, 3, 6], $sort: 1}
... } } )
```
```javascript
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
```
###### *shell*
```javascript
> db.prueba.find({}, {_id:0})
```
```javascript
{ "nombre" : "test 1", "miArreglo" : [ 2, 3, 3, 4, 6, 8 ] }
```

###### ***Nota 1***
    Este metodo se puede usar para ordenar el arreglo sino se le pasa ningun valor

<br><br>

#### **Eliminar - update (arreglos)**
##### **pull** 
_db._**nombreColeccion**_.update( { },_
_{ $pull : {_ **nombreArreglo** _:_ **valorArreglo** _)_

_db._**nombreColeccion**_.update( { },_
_{ $pullAll : {_ **nombreArreglo** _: [_ **valor1, valor2, ...** _] )_
###### *shell*
```javascript
> var arreglo = new Array();
> var tamanoArray = 20;
> for (i = 1; i <= tamanoArray; i++){
...     arreglo.push(Math.round(Math.random()*100));
... }
> db.prueba.insert({nombre: "test 1", miArreglo: arreglo} )
```
```javascript
WriteResult({ "nInserted" : 1 })
```
###### *shell*
```javascript
> db.prueba.find()
```
```javascript
{ "_id" : ObjectId("5d08006569eac3f57c534494"), "nombre" : "test 1", "miArreglo" : [ 36, 80, 47, 14, 9 ] }
```
###### *shell*
```javascript
> db.prueba.find({}, {_id:0})
```
```javascript
{ "_id" : ObjectId("5d0801d069eac3f57c534495"), "nombre" : "test 1", "miArreglo" : [ 36, 80, 47, 14, 9, 69, 92, 21, 22, 65, 4, 36, 9, 22, 34, 23, 59, 97, 33, 92 ] }
```
###### *shell*
```javascript
> db.prueba.find({}, {_id:0})
```
```javascript
{ "_id" : ObjectId("5d0801d069eac3f57c534495"), "nombre" : "test 1", "miArreglo" : [ 36, 80, 47, 14, 9, 69, 92, 21, 22, 65, 4, 36, 9, 22, 34, 23, 59, 97, 33, 92 ] }
```
###### *shell*
```javascript
> db.prueba.update({}, {$pull: {miArreglo: {$gte: 50} } } )
```
```javascript
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
```
###### *shell*
```javascript
> db.prueba.find({}, {_id: 0} )
```
```javascript
{ "nombre" : "test 1", "miArreglo" : [ 36, 47, 14, 9, 21, 22, 4, 36, 9, 22, 34, 23, 33 ] }
```

###### ***Nota 1***
    Para eliminar varios valores manualmente se utiliza:
    $pullAll: [valor1, valor2, ...]

<br><br>




<br><br><br><br>

## Eliminar
### **Remove**

_db._**nombreColeccion**_.remove( {_ **camposBusqueda** _} )_

    A diferencia de la funcion update() la funcion remove() elimina todos los documentos que concidan con sus parametros de busqueda
###### *shell*
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

<br><br><br><br>

## Operadores
### **Comparacion**
+ **$gt**  *>*  (greater than)
+ **$gte** *>=* (greater than equals)
+ **$lt**  *<*  (less than)
+ **$lte** *<=* (less than equals)
###### *shell*
```javascript
> db.persona.find({edad: {$gt: 20}}, {_id: 0})
```
```javascript
{ "nombre" : "Fernanda", "edad" : 21 }
```

<br>

### **Logicos**
+ **$ne** *!=* (Negacion/diferente)

###### *shell*
```javascript
> db.persona.find({nombre: {$ne: "Alan"}}, {_id: 0, nombre: 1})
```
```javascript
{ "nombre" : "Isaac" }
{ "nombre" : "Fernanda" }
```




<br><br><br><br>

## Bucles
### **for** 
_for(_ **varContador** _;_ **limiteCiclo** _;_ **aumento/decremento**_) {_ **funciones** _}_

###### *shell*
```javascript
> for(i = 0; i <= 100; i++){
... db.cicloFor.insert({valor: i})
... }
```
```javascript
WriteResult({ "nInserted" : 1 })
```

Esto inserta valores del 0 al 100 en la coleccion **cicloFor**

<br><br><br><br><br><br><br><br>


# Avanzado
## aggregate
### **group**
#### **Agrupacion**
_db._**nombreColeccion**_.aggregate( [ {_
    _$group : "_ **nombreCampoAgrupar** _"} ] )_

###### *shell* 
```javascript
> db.peliculas.insert([
... {categoria: "accion", nombre: "2 Guns", valor: 100},
... {categoria: "accion", nombre: "Ant-Man", valor: 50},
... {categoria: "accion", nombre: "Avatar 3", valor: 150},
... {categoria: "Ciencia Ficcion", nombre: "Alien", valor: 200},
... {categoria: "Comedia", nombre: "The Adventure", valor: 300},
... {categoria: "Comedia", nombre: "Agua y Sal", valor: 250}
])
```
```javascript
BulkWriteResult({
        "writeErrors" : [ ],
        "writeConcernErrors" : [ ],
        "nInserted" : 6,
        "nUpserted" : 0,
        "nMatched" : 0,
        "nModified" : 0,
        "nRemoved" : 0,
        "upserted" : [ ]
})
```
###### *shell* 
```javascript
> db.peliculas.aggregate( [ {$group : {_id: "$categoria"} } ] )
```
```javascript
{ "_id" : "Comedia" }
{ "_id" : "Ciencia Ficcion" }
{ "_id" : "accion" }
```
<br>

#### **Repeticion de grupos**
###### *shell* 
```javascript
> db.peliculas.aggregate( [ {$group : {_id: "$categoria", "repetidos": {$sum: 1}} } ] )
```
```javascript
{ "_id" : "Comedia", "repetidos" : 2 }
{ "_id" : "Ciencia Ficcion", "repetidos" : 1 }
{ "_id" : "accion", "repetidos" : 3 }
```
<br>

#### **Suma de campos por grupo**
###### *shell* 
```javascript
> db.peliculas.aggregate( [ {$group : {_id: "$categoria", "repetidos": {$sum: 1}, "sumaValor": {$sum: "$valor" } } } ] )
```
```javascript
{ "_id" : "Comedia", "repetidos" : 2, "sumaValor" : 550 }
{ "_id" : "Ciencia Ficcion", "repetidos" : 1, "sumaValor" : 200 }
{ "_id" : "accion", "repetidos" : 3, "sumaValor" : 300 }
```
<br>

#### **Promedio de grupos**
###### *shell* 
```javascript
> db.peliculas.aggregate( [ {$group : {
..._id: "$categoria", 
..."repetidos": {$sum: 1}, 
..."sumaValor": {$sum: "$valor" }, 
...promedioValor: {$avg: "$valor"} 
...} } ] )
```
```javascript
{ "_id" : "Comedia", "repetidos" : 2, "sumaValor" : 550 }
{ "_id" : "Ciencia Ficcion", "repetidos" : 1, "sumaValor" : 200 }
{ "_id" : "accion", "repetidos" : 3, "sumaValor" : 300 }
```
<br><br><br><br>

## Expresiones regulares
### **'Like'**
###### *shell*
```javascript
> db.prueba.insert ([
... {correo: "alan@gmail.com"},
... {correo: "alan@outlook.com"},
... {correo: "test@live.mx"}
... ])
```
```javascript
BulkWriteResult({
        "writeErrors" : [ ],
        "writeConcernErrors" : [ ],
        "nInserted" : 3,
        "nUpserted" : 0,
        "nMatched" : 0,
        "nModified" : 0,
        "nRemoved" : 0,
        "upserted" : [ ]
})
```
<br>

#### **Cualquier zona**
__/__ *texto*  __/__ 

Busca contenido ingresado en ***cualquier*** parte del texto

###### *shell*
```javascript
> db.prueba.find({correo: /@g/})
```
```javascript
{ "_id" : ObjectId("5d08ec22ad79d8f46660eef4"), "correo" : "alan@gmail.com" }
```

<br>

#### **Al final**
__/__ *texto*__$ /__ 

Busca contenido ingresado al ***final*** del texto
###### *shell*
```javascript
> db.prueba.find({correo: /mx$/})
```
```javascript
{ "_id" : ObjectId("5d08ec22ad79d8f46660eef6"), "correo" : "test@live.mx" }
```

<br>

#### **Al inicio**
__/ ^__ *texto* __/__ 

busca contenido ingresado al ***inicio*** parte del texto
###### *shell*
```javascript
> db.prueba.find({correo: /^a/})
```
```javascript
{ "_id" : ObjectId("5d08ec22ad79d8f46660eef4"), "correo" : "alan@gmail.com" }
{ "_id" : ObjectId("5d08ec22ad79d8f46660eef5"), "correo" : "alan@outlook.com" }
```

<br><br><br><br>


