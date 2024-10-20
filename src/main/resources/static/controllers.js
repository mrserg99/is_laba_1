
async function login(){
    /*Метод на кнопке войти на странице Логин */
    let user = document.getElementById("login_txt").value
    let password = document.getElementById("password_txt").value
    let responsePromise = await getRequest("/authorization/login", {
        'Authorization': 'Basic ' + textToBase64(user + ':' + password)
    }).then(response => {
        return response.ok
    })

    if (responsePromise === true) {
        window.location.href = 'main.html'
    } else {
        document.getElementById('error_message').innerHTML = "Неверный логин и пароль";
    }
}

async function registration(){
    /*Метод на кнопке войти на странице Логин */
    let user = document.getElementById("login_txt").value
    let password = document.getElementById("password_txt").value
    let responsePromise = await getRequest("/authorization/login", {
        'Authorization': 'Basic ' + textToBase64(user + ':' + password)
    }).then(response => {
        return response.ok
    })

    if (responsePromise === true) {
        window.location.href = 'main.html'
    } else {
        document.getElementById('error_message').innerHTML = "Такой логин уже существует";
    }
}

function del_stud(){
    /* Удаляет объект студент*/
}

function del_group(){
    /*Удаляет объект группу*/
}