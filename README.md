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
    + [Mostrar](#Mostrar)
    + [Crear](#Crear)
    + [Actualizar](#Actualizar)
    + [Eliminar](#Eliminar)
+ [Cursores](#Cursores) 
___
<br><br><br>

# Como empezar
## Iniciar servidor

Para iniciar el servidor primero es necesario una serie de pasos para poder usar los comandos de MongoDB

#### Configurar MongoDB y CMD
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

### Arrancar el servidor
##### shell
```javascript
mongod
```
Esto significa que el servidor ya esta activo:
```javascript
2019-06-15T13:19:01.725-0500 I NETWORK  [initandlisten] waiting for connections on port 27017
```
<br>
Para ingresar los comandos se necesita abir otra terminal de comandos ya que esta esta ocupada con el servidor

Para ingresar todos los comandos tenemos que activar los comandos de MongoDB

##### shell
```javascript
mongo
```
Con esto ya podemos empezar a ingresar comandos

<br>

## Comandos basicos
#### Mostrar las Bases de Datos 
##### Shell
``` javascript
> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
```

#### Crear DB
##### Shell
```javasript
> use Pruebas
switched to db Pruebas
```
    Nota: Si la DB no existe entonces se va ha crear, pero esta no aparecera en la lista de DB hasta que se carguen datos en esta

#### Mostrar Base de Datos en uso
##### Shell
```javascript
> db
Pruebas
```

#### Crear Coleccion de manera implicita / Insertar datos en Coleccion
##### Shell
```javascript
> db.persona.insert({
... "nombre": "Alan",
... "apellido": "Vazquez",
... })
WriteResult({ "nInserted" : 1 }) 
```
    Nota 1: Se pueden insertar varias lineas en la terminal mientras no se cierren los parentesis de la funcion

    Nota 2: En caso de que no exista la Coleccion en la que se quieren insertar datos se crea la Coleccion

#### Crear Coleccion de manera explicita
##### Shell
```javascript
> db.createCollection("productos")
{ "ok" : 1 }
```

#### Mostrar Colecciones
##### Shell
```javascript
> show collections
persona
productos
```

#### Eliminar Coleccion
##### Shell
```javascript
> db.productos.drop()
true
```

#### Eliminar DB
##### Shell
```javascript
> db.dropDatabase()
{ "dropped" : "Pruebas", "ok" : 1 }
```


# CRUD

## Mostrar

## Crear 

## Actualizar

## Eliminar

# Cursores
