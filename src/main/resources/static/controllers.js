
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
    let isAdmin = document.getElementById("admin").checked
    let responsePromise = await getRequest("/authorization/registration?" + new URLSearchParams({
        isAdmin: isAdmin
    }), {
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

function add_stroks(){

    document.getElementById("table_wrapper1").innerHTML = "<tr>\n" +
        "        <td class=\"var_tab\"  id=\"2_std_id\">263879</td>\n" +
        "        <td class=\"var_tab\" >P3311</td>\n" +
        "        <td class=\"var_tab\" >22</td>\n" +
        "        <td class=\"var_tab\" >22</td>\n" +
        "        <td class=\"var_tab\" >22</td>\n" +
        "        <td class=\"var_tab\" >2</td>\n" +
        "        <td class=\"var_tab\" >2</td>\n" +
        "        <td class=\"var_tab\" >12</td>\n" +
        "        <td class=\"var_tab\" >19/09/2024 12:24:11</td>\n" +
        "        <td class=\"var_tab\" >очная</td>\n" +
        "        <td class=\"var_tab\" >KOT3CHKa</td>\n" +
        "        <td class=\"var_tab\" >4.5</td>\n" +
        "        <td class=\"var_tab\" >Лебедева А.И.</td>\n" +
        "        <td class=\"var_tab\" >6</td>\n" +
        "        <td class=\"var_tab\" ><button class=\"change button_dark\" onclick=\"change(2)\">Изменить</button></td>\n" +
        "        <td class=\"var_tab\" >\n" +
        "            <button class=\"del button_dark popup_del_btn\">\n" +
        "                <img class=\"rubbish\" src=\"./pics/Mask%20group.png\" alt=\"\">\n" +
        "            </button>\n" +
        "        </td>\n" +
        "    </tr>"
    document.getElementById("table_wrapper2").innerHTML = "<tr>\n" +
        "        <td class=\"var_tab\"  id=\"2_std_id\">263879</td>\n" +
        "        <td class=\"var_tab\" >P3311</td>\n" +
        "        <td class=\"var_tab\" >22</td>\n" +
        "        <td class=\"var_tab\" >22</td>\n" +
        "        <td class=\"var_tab\" >22</td>\n" +
        "        <td class=\"var_tab\" >2</td>\n" +
        "        <td class=\"var_tab\" >2</td>\n" +
        "        <td class=\"var_tab\" >12</td>\n" +
        "        <td class=\"var_tab\" >19/09/2024 12:24:11</td>\n" +
        "        <td class=\"var_tab\" >очная</td>\n" +
        "        <td class=\"var_tab\" >KOT3CHKa</td>\n" +
        "        <td class=\"var_tab\" >4.5</td>\n" +
        "        <td class=\"var_tab\" >Лебедева А.И.</td>\n" +
        "        <td class=\"var_tab\" >6</td>\n" +
        "        <td class=\"var_tab\" ><button class=\"change button_dark\" onclick=\"change(2)\">Изменить</button></td>\n" +
        "        <td class=\"var_tab\" >\n" +
        "            <button class=\"del button_dark popup_del_btn\">\n" +
        "                <img class=\"rubbish\" src=\"./pics/Mask%20group.png\" alt=\"\">\n" +
        "            </button>\n" +
        "        </td>\n" +
        "    </tr>"


}

function exit(){

}