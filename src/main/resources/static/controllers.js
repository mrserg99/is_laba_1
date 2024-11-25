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
 * @param newObject
 * @param type - Person, Group, Coordinate, Location
 */
async function create(newObject, type) {
    let url = "/repository/create/"+type
    return await postRequest(url, {}, toJson(newObject))
}

async function getEntities(type, page, max, sortedBy, isAsc) {
    let param = []
    let url = "/repository/get/" + type

    if (typeof page === "number" && page > 0){
        param.push(new URLSearchParams({
            page: (Number(page) - 1)
        }))
    }
    if (typeof max === "number" && max > 0){
        param.push(new URLSearchParams({
            max: max
        }))
    }
    if (typeof sortedBy === "string" && !isBlank(sortedBy) && !isEmpty(sortedBy)) {
        param.push(new URLSearchParams({
            sortedBy: sortedBy
        }))
    }
    if(typeof isAsc === "boolean") {
        param.push(new URLSearchParams({
            isAsc: isAsc
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

async function findById(type, id){
    let url = "/repository/find/" + type + "/" + id
    return await getRequest(url)
}

function deleteRow(id, type) {
    let url = "/repository/delete/" + type
    let param = new URLSearchParams({
        id: id
    })

    url += "?" + param
    return deleteRequest(url)
}


function del_stud(){
    /* Удаляет объект студент*/
}

function del_group(){
    /*Удаляет объект группу*/
}

function exit(){

}
