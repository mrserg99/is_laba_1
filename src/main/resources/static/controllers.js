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


function del_stud(){
    /* Удаляет объект студент*/
}

function del_group(){
    /*Удаляет объект группу*/
}

function exit(){

}
