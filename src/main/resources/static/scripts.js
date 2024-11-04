const removeByClass = (sel) => document.querySelectorAll(sel).forEach(el => el.remove());

function clear_login(){
    /*Очистка поля логин в странице Login*/
        document.getElementById("login_txt").value = "";
}

function clear_password(){
    /*Очистка поля пароль в странице Login*/
    document.getElementById("password_txt").value = "";
}

async function create_obj(){
    /*Появление popup окна создания объекта*/
    document.getElementById("dark_overlay").classList.remove("display_none")

    let e = document.getElementById("DB");
    let value = e.value;

    if (e.value === "stud"){
        document.getElementById("popup_create_stud").classList.remove("display_none")
        let colors = await getEntity(Type.COLOR.description)
        colors.forEach(value => {
            document.querySelector("#hairColor_input").insertAdjacentHTML("beforeend", '<option>'+value+'</option>')
            document.querySelector("#eyeColor_input").insertAdjacentHTML("beforeend", '<option>'+value+'</option>')
        })
        document.getElementById("user_change_stud").innerHTML = getValue(storageVocabulary.user)
    }
    if (e.value === "group"){
        document.getElementById("popup_create_group").classList.remove("display_none")
        document.getElementById("user_change_group").innerHTML = getValue(storageVocabulary.user)
    }
}

function close_popup(){
    /*Закрытие popup окна*/

    var e = document.getElementById("DB");
    var value = e.value;

    if (e.value === "stud"){
        document.getElementById("popup_create_stud").classList.add("display_none")
    }
    if (e.value === "group"){
        document.getElementById("popup_create_group").classList.add("display_none")
    }
    document.getElementById("dark_overlay").classList.add("display_none")

}
function clear_name(){
    /*Очистка поля имя на странице Main*/
    document.getElementById("name_txt").value = "";
}
function clear_soname(){
    /*Очистка поля фамилия на странице Main*/
    document.getElementById("soname_txt").value = "";
}
function clear_mail(){
    /*Очистка поля почта на странице Main*/
    document.getElementById("mail_txt").value = "";
}

function checkbox_click(){
    /*Появление второстепенных параметров на странице Регистрации для админа*/
    if(document.getElementById("admin").checked){
        document.getElementById("registrationFill").classList.remove("display_none")
    }else{
        document.getElementById("registrationFill").classList.add("display_none")
    }
}

async function stud_coord_checkbox(){
    if (document.getElementById('stud_coord_checkbox').checked) {
        let locations = await getEntity(Type.LOCATION.description)
        document.getElementById("select_loc_btn").classList.remove("display_none")
        document.getElementById("location_ID_wr").classList.remove("display_none");

        locations.forEach(value => {
            let location = '<div id = '+value.id+' class="select_coord_child" onclick="setLocation(this)">\n' +
                '                        <p class="place">'+value.name+'</p>\n' +
                '                        <p class="coord_X">'+value.x+'</p>\n' +
                '                        <p class="coord_Y">'+value.y+'</p>\n' +
                '                    </div>'
            document.querySelector("#select_location_list").insertAdjacentHTML("beforeend", location)
        })
    } else {
        document.querySelector("#select_location_list").innerHTML = ''
        document.getElementById("select_loc_btn").classList.add("display_none")
        document.getElementById("location_ID_wr").classList.add("display_none");

    }
}

function setLocation(location){
    /*появления селекта по локации на странице main*/
    let place = location.children[0].textContent;
    let coord_X = location.children[1].textContent;
    let coord_Y = location.children[2].textContent;

    document.getElementById('locationName_input').value = place;
    document.getElementById('locationCoordinateX_input').value = coord_X;
    document.getElementById('locationCoordinateY_input').value = coord_Y;

    document.getElementById("select_location").classList.add("display_none")
    document.getElementById("seagal").style.transform = "rotate(0deg)";
    document.getElementById("location_ID_wr").classList.add("display_none")
}
async function select_visible(){
    /*Появление галочки для селекта*/
    document.getElementById("select_location_wrapper").classList.remove("display_none");
    document.getElementById("select_location").classList.remove("display_none")
    document.getElementById("seagal").style.transform = "rotate(180deg)";
    document.getElementById("location_ID_wr").classList.remove("display_none");

}

function close_select_coord(){
    /*Закрытие выбора локаций при нажатии во вне селекта*/
    document.getElementById("select_location").classList.add("display_none");
    document.getElementById("seagal").style.transform = "rotate(0deg)";
    document.getElementById("select_location_wrapper").classList.add("display_none");
}
function clear_location(){
    /*Очистка поля селекта */
    document.getElementById('locationName_input').value = "";
    document.getElementById('locationCoordinateX_input').value = "";
    document.getElementById('locationCoordinateY_input').value = "";
}

async function tables_check() {
    var e = document.getElementById("DB");
    var value = e.value;

    if (e.value === "stud") {
        document.getElementById("table_stud").classList.remove("display_none")
        document.getElementById("table_group").classList.add("display_none")
        let persons = await getEntity(Type.PERSON.description)
        persons.forEach(value => {
            let person = createPersonRowByTemplate(value)
            document.querySelector("#table_stud").insertAdjacentHTML("beforeend", person)
        })

    }
    if (e.value === "group") {
        removeByClass(".person_tab")
        document.getElementById("table_group").classList.remove("display_none")
        document.getElementById("table_stud").classList.add("display_none")
    }
}

function loadMain(){
    document.getElementById("user_name_in_header").innerHTML = getValue(storageVocabulary.user)
}

function pagination_one_right(){
    /*Функция для пагинации на одну страницу вправо*/

}
function pagination_one_left(){
    /*Функция для пагинации на одну страницу влево*/

}
function pagination_all_right(){
    /*Функция для пагинации на последнюю справа страницу*/

}
function pagination_all_left(){
    /*Функция для пагинации на первую слева страницу*/

}
function sort_up(value){
alert(value+" UP")
 /* отсортировать от меньшего к большему*/

}
function sort_down(value){
    alert(value+" Down")
    /* отсортировать от большего к меньшему*/
}