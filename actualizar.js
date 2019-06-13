db.paises.update({nombre: "México"}, {nombre: "MEXICO"})        //? actualiza el documento con los valores concidentes; solo actualiza un docuemnto, el primero que encuentre; en caso de que haya mas campos se tiene que especificar con este metodo

db.paises.update({nombre: "México"}, {$set: {nombre: "MEXICO", continente: "AMERICA"}}, {multi: true})      //? $set inidica los campos que se va ha modificar (en caso de que no exista se va ha crear). multi inidca que se van ha modificar todos los documentos que considan con la busqueda (primer parametro)

db.paises.update({nombre: "México"}, {$set: {nombre: "MEXICO", continente: "AMERICA"}})     //? usar $unset para eliminar un campo
