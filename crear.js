
db.paises.insertMany([    //? inserta multiples valores en una coleccion
    {nombre: "México"},
    {nombre: "EUA"}
])

db.paises.find()	//? muestra todos los documentoss de la coleccion
db.paises.findOne()		//? muestra solo el primer documento de la coleccion
db.paises.find({nombre: "EUA"})		//? muestra todos los documentos que considan con los parametros de la busqueda

//! TODOS LOS RESULTADOS SE PUEDEN ALMACENAR EN VARIABLES [EN RAM] (var <nombre> = ...)
var a = {nombre: "BLANCO"}
var b = {nombre: "D200"}
var c = {nombre: "D400"}
var d = {nombre: "GRIS 300"}
var e = {nombre: "GRIS PANORAMA"}
var f = {nombre: "GRIS PHANTOM"}
var g = {nombre: "NATURAL"}
var h = {nombre: "NEGRO"}
var i = {nombre: "NEGRO NIBA"}
var j = {nombre: "RAT GRAY"}
var k = {nombre: "SMA"}
var l = {nombre: "GRIS OXFORD"}
db.acabados.insert([a, b, c, e, f, g, h, i, j, k, l])	//? pasa las variables declaradas y las almacena en un arreglo; otra manera de insertar multiples documentos (tambien se puede hacer sin tener que pasar mediante variables)


db.supervisores.insertMany([
,{nombre: "ADRIAN"         	,apellido: "PLATA"}
,{nombre: "CESAR"           ,apellido: "CONTRERAS"}
,{nombre: "JUAN CARLOS"     ,apellido: "HERNANDEZ"}
,{nombre: "MANUEL"          ,apellido: "VELAZQUEZ"}
,{nombre: "RICARDO"         ,apellido: "MORALES"}
,{nombre: "SALVADOR"        ,apellido: "GUTIERREZ"}
,{nombre: "VICTOR"          ,apellido: "CONTRERAS"}
,{nombre: "JAIME"           ,apellido: "SANCHEZ GIL"}
,{nombre: "OSCAR"           ,apellido: "OVALLES"}
,{nombre: "JUAN"            ,apellido: "LOREA"}
,{nombre: "DIEGO"           ,apellido: "RAMIREZ"}])

db.supervisores.find({apellido: "CONTRERAS", nombre: {$ne: "VICTOR"}}).pretty() //? {$ne: <valor>} excluye los campos concidentes
//? muestra el formato d la consulta organizado (JSON)

db.supervisores.find().forEach( function(d) {print(d.apellido)}) 	//? recorre la coleccion ejecutando la funcion, es este caso la funcion es imprimir el campo apellido de cada documento, se pueden asignar valores, eliminar
db.supervisores.find().forEach( function(d) {d.apellido = "adios"; db.supervisores.save(d); print(d.nombre + "  " + d.apellido )})

db.paises.update({nombre: "México"}, {nombre: "MEXICO"}) //? actualiza el documento con los valores concidentes; solo actualiza un docuemnto, el primero que encuentre; en caso de que haya mas campos se tiene que especificar con este metodo

db.paises.update({nombre: "México"}, {$set: {nombre: "MEXICO", continente: "AMERICA"}}, {multi: true}) //? $set inidica los campos que se va ha modificar (en caso de que no exista se va ha crear). multi inidca que se van ha modificar todos los documentos que considan con la busqueda (primer parametro)

db.paises.update({nombre: "México"}, {$set: {nombre: "MEXICO", continente: "AMERICA"}})//? usar $unset para eliminar un campo

db.paises.remove({Nombre: "MEXICO"}) //? borra todos los documentos que considan con los parametros de busqueda



