db.paises.find()		//? muestra todos los documentoss de la coleccion
db.paises.findOne()		//? muestra solo el primer documento de la coleccion
db.paises.find({nombre: "EUA"})		//? muestra todos los documentos que considan con los parametros de la busqueda

db.supervisores.find({apellido: "CONTRERAS", nombre: {$ne: "VICTOR"}}).pretty()		//? {$ne: <valor>} excluye los campos concidentes
//? muestra el formato d la consulta organizado (JSON)