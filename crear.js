db.paises.insertMany([      //? inserta multiples valores en una coleccion
    {nombre: "México"},
    {nombre: "EUA"}
])

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
db.acabados.insert([a, b, c, e, f, g, h, i, j, k, l])       //? pasa las variables declaradas y las almacena en un arreglo; otra manera de insertar multiples documentos (tambien se puede hacer sin tener que pasar mediante variables)

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