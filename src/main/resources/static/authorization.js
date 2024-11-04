async function login(){
    /*Метод на кнопке войти на странице Логин */
    /*дизейблим кнопку*/
    document.getElementById("enter").classList.add("disabled_button")
    document.getElementById("enter").classList.remove("button_dark")

    let user = document.getElementById("login_txt").value
    let password = document.getElementById("password_txt").value

    let result = await loginRequest(user, password)

    if (result.ok === true) {
        setValue(storageVocabulary.user, user)
        let isAdmin = result.text()
        setValue(storageVocabulary.isAdmin, Boolean(isAdmin))
        window.location.href = 'main.html'
    } else {
        /*раздизейбливаем кнопку*/
        document.getElementById("enter").classList.add("button_dark")
        document.getElementById("enter").classList.remove("disabled_button")

        document.getElementById('error_message').innerHTML = "Неверный логин и пароль";
    }
}

async function registration() {
    /*Метод на кнопке войти на странице Логин */
    /*дизейблим кнопку*/
    document.getElementById("enter").classList.add("disabled_button")
    document.getElementById("enter").classList.remove("button_dark")

    let isAdmin = document.getElementById("admin").checked
    let user = document.getElementById("login_txt").value
    let password = document.getElementById("password_txt").value

    let result = await registrationRequest(isAdmin, user, password)
    /*дизаблим*/
    if (result === true) {
        window.location.href = 'login.html'
    } else {
        /*раздизейбливаем кнопку*/
        document.getElementById("enter").classList.add("button_dark")
        document.getElementById("enter").classList.remove("disabled_button")


        document.getElementById('error_message').innerHTML = "Такой логин уже существует";
    }
}