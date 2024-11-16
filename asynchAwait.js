const baseUrl = "https://jsonplaceholder.typicode.com"
// const getUsers = () => {
//     fetch(`${baseUrl}/users`)
//     // recup la reponse
//     .then((response) => {
//         return response.json()
//     })
//     // recup les données
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((error) => {
//         console.log(error, "Erreur serveur")
//     })
// }
// getUsers()
// node javascript/asynchAwait.js

const getComments = async() => {
    const response = await fetch(`${baseUrl}/comments`)
    const data = await response.json()
    console.log(data)
}
getComments()