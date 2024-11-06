async function loginRequest(user, password){
    /*Метод на кнопке войти на странице Логин */
    return await getRequest("/authorization/login", {
        'Authorization': 'Basic ' + textToBase64(user + ':' + password)
    })
}

async function registrationRequest(isAdmin, user, password){
    return await getRequest("/authorization/registration?" + new URLSearchParams({
        isAdmin: isAdmin
    }), {
        'Authorization': 'Basic ' + textToBase64(user + ':' + password)
    })
}

/**
 * @param {Person} person
 * @param type - Person, Group, Coordinate, Location
 */
async function create(person, type) {
    let url = "/repository/create/"+type
    return await postRequest(url, {}, toJson(person))
}

async function getEntities(type) {
    let param = []
    let url = "/repository/get/" + type

    if (typeof Number(getValue(storageVocabulary.page)) === "number" && Number(getValue(storageVocabulary.page)) > 0){
        param.push(new URLSearchParams({
            page: (Number(getValue(storageVocabulary.page)) - 1)
        }))
    }
    if (typeof Number(getValue(storageVocabulary.max)) === "number" && Number(getValue(storageVocabulary.max)) > 0){
        param.push(new URLSearchParams({
            max: getValue(storageVocabulary.max)
        }))
    }
    if (param.length > 0) {
        url += "?" + param.join("&")
    }
    let result = await getRequest(url)

    if (result.ok) {
        return await result.json()
    }
}


function del_stud(){
    /* Удаляет объект студент*/
}

function del_group(){
    /*Удаляет объект группу*/
}

function exit(){

}
