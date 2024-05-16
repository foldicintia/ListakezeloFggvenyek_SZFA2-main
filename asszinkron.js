export function getAdat(vegpont, callback){
    fetch(vegpont, {method: "GET"})
    .then((response)=>(response.json))
    .then((data)=>(console.log(data)))
    .catch((error)=>(console.error))
}
export function postAdat(vegpont, adat, callback){
    fetch(vegpont, 
    {
        method: "GET",
        body: JSON.stringify(adat)  // objektumlistat atalakitjuk szoveges JSON-né
    })
    .then((response)=>(response.json))
    .then((data)=>(console.log(data)))
    .catch((error)=>(console.error))
}
export function deleteAdat(vegpont, adat, callback){
    fetch(vegpont,"/"+id,
    {
        method: "DELETE",
    })
    .then((response)=>(response.json))
    .then((data)=>(console.log(data)))
    .catch((error)=>(console.error))
}