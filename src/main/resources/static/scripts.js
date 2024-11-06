const removeByClass = (sel) => document.querySelectorAll(sel).forEach(el => el.remove());

function clearLogin(){
    /*Очистка поля логин в странице Login*/
        document.getElementById("login_txt").value = "";
}

function clearPassword(){
    /*Очистка поля пароль в странице Login*/
    document.getElementById("password_txt").value = "";
}

async function createEntity(){
    /*Появление popup окна создания объекта*/
    document.getElementById("dark_overlay").classList.remove("display_none")

    let e = document.getElementById("DB");
    let value = e.value;

    if (e.value === "stud"){
        document.getElementById("popup_create_stud").classList.remove("display_none")
        let colors = await getEntities(Type.COLOR.description)
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
        let locations = await getEntities(Type.LOCATION.description)
        document.getElementById("select_loc_btn").classList.remove("display_none")
        document.getElementById("location_ID_wr").classList.remove("display_none");

        locations.forEach(value => {
            let location = '<div id = '+value.id+' class="select_coord_child" onclick="setLocation(this)">\n' +
                '                        <p class="place">'+value.name+'</p>\n' +
                '                        <p class="coord_X">'+value.x+'</p>\n' +
                '                        <p class="coord_Y">'+value.y+'</p>\n' +
                '                        <p class="coord_Y">'+value.id+'</p>\n' +
                '                    </div>'
            document.querySelector("#select_location_list").insertAdjacentHTML("beforeend", location)
        })
    } else {
        document.querySelector("#select_location_list").innerHTML = ''
        document.getElementById("select_loc_btn").classList.add("display_none")
        document.getElementById("location_ID_wr").classList.add("display_none");

    }
}

async function group_coord_checkbox(){
    if (document.getElementById("new_coordinates").checked) {
        document.getElementById("select_loc_btn_group").classList.remove("display_none")
        document.getElementById("location_ID_wr").classList.remove("display_none");


    } else {

        document.getElementById("select_loc_btn_group").classList.add("display_none")
        document.getElementById("location_ID_wr").classList.add("display_none");

    }
}

function setLocation(location){
    /*появления селекта по локации на странице main*/
    let place = location.children[0].textContent;
    let coord_X = location.children[1].textContent;
    let coord_Y = location.children[2].textContent;
    let coord_id = location.children[3].textContent;

    document.querySelector("#locationName_input").value = place;
    document.querySelector("#locationCoordinateX_input").value = coord_X;
    document.querySelector("#locationCoordinateY_input").value = coord_Y;
    document.querySelector("#locationID").value = coord_id;

    document.getElementById("select_location").classList.add("display_none")
    document.getElementById("seagal").style.transform = "rotate(0deg)";
}
async function select_visible(){
    /*Появление галочки для селекта для локации студента*/
    document.getElementById("select_location_wrapper").classList.remove("display_none");
    document.getElementById("select_location").classList.remove("display_none")
    document.getElementById("seagal").style.transform = "rotate(180deg)";
    document.getElementById("location_ID_wr").classList.remove("display_none");
}

async function select_visible_group(){
    /*Появление галочки для селекта для координат группы*/
    document.getElementById("select_location_wrapper_group").classList.remove("display_none");
    document.getElementById("select_location_group").classList.remove("display_none")
    document.getElementById("seagal_group").style.transform = "rotate(180deg)";
    document.getElementById("location_ID_wr_group").classList.remove("display_none");
}

async function select_visible_person(){
    /*Появление галочки для селекта для выбора старосты*/
    document.getElementById("select_location_wrapper_person").classList.remove("display_none");
    document.getElementById("select_location_person").classList.remove("display_none")
    document.getElementById("seagal_person").style.transform = "rotate(180deg)";
    document.getElementById("location_ID_wr_person").classList.remove("display_none");
}

function close_select_coord(){
    /*Закрытие выбора локаций при нажатии во вне селекта*/
    document.getElementById("select_location").classList.add("display_none");
    document.getElementById("seagal").style.transform = "rotate(0deg)";
    document.getElementById("select_location_wrapper").classList.add("display_none");
}
function close_select_coord_group(){
    /*Закрытие выбора локаций при нажатии во вне селекта*/
    document.getElementById("select_location_group").classList.add("display_none");
    document.getElementById("seagal_group").style.transform = "rotate(0deg)";
    document.getElementById("select_location_wrapper_group").classList.add("display_none");
}
function close_select_coord_person(){
    /*Закрытие выбора локаций при нажатии во вне селекта*/
    document.getElementById("select_location_person").classList.add("display_none");
    document.getElementById("seagal_person").style.transform = "rotate(0deg)";
    document.getElementById("select_location_wrapper_person").classList.add("display_none");
}
function clear_location(){
    /*Очистка поля селекта */
    document.getElementById('locationName_input').value = "";
    document.getElementById('locationCoordinateX_input').value = "";
    document.getElementById('locationCoordinateY_input').value = "";
}

function printFirstPage() {
    disablePrevPageBtn()
    setValue(storageVocabulary.page, 1)
    setValue(storageVocabulary.max, 10)

    printTable()
}

function loadMain(){
    document.getElementById("user_name_in_header").innerHTML = getValue(storageVocabulary.user)
}

function nextPage(){
    enablePrevPageBtn()
    /*Функция для пагинации на одну страницу вправо*/
    setValue(storageVocabulary.page, Number(getValue(storageVocabulary.page)) + 1)

    printTable()
}
function prevPage(){
    enableNextPageBtn();
    /*Функция для пагинации на одну страницу влево*/
    setValue(storageVocabulary.page, Number(getValue(storageVocabulary.page)) - 1)
    if (Number(getValue(storageVocabulary.page)) === 1) {
        disablePrevPageBtn()
        return
    }

    printTable()
}

function enableNextPageBtn() {
    document.querySelector("#next_page").classList.remove("disable_pagination")
    document.querySelector("#next_page").classList.add("active_pagination")
}

function enablePrevPageBtn() {
    document.querySelector("#prev_page").classList.remove("disable_pagination")
    document.querySelector("#prev_page").classList.add("active_pagination")
}
function disableNextPageBtn() {
    document.querySelector("#next_page").classList.add("disable_pagination")
    document.querySelector("#next_page").classList.remove("active_pagination")
}

function disablePrevPageBtn() {
    document.querySelector("#prev_page").classList.add("disable_pagination")
    document.querySelector("#prev_page").classList.remove("active_pagination")
}

async function printTable(){
    let e = document.getElementById("DB");

    if (e.value === "stud") {
        removeByClass(".person_tab")
        setValue(storageVocabulary.type, Type.PERSON.description)
        document.querySelector("#table_stud").classList.remove("display_none")
        document.querySelector("#table_group").classList.add("display_none")
        document.querySelector("#table_location").classList.add("display_none")
        document.querySelector("#table_coordinate").classList.add("display_none")
        let persons = await getEntities(Type.PERSON.description)
        persons.forEach(value => {
            let person = createPersonRowByTemplate(value)
            document.querySelector("#table_stud").insertAdjacentHTML("beforeend", person)
        })
        if (persons.length + 1 < Number(getValue(storageVocabulary.max))) {
            disableNextPageBtn();
        }
    }

    if (e.value === "group") {
        removeByClass(".group_tab")
        setValue(storageVocabulary.type, Type.GROUP.description)
        document.querySelector("#table_location").classList.add("display_none")
        document.querySelector("#table_coordinate").classList.add("display_none")
        document.querySelector("#table_group").classList.remove("display_none")
        document.querySelector("#table_stud").classList.add("display_none")
        let groups = await getEntities(Type.GROUP.description)
        groups.forEach(value => {
            let group = createStudyGroupRowByTemplate(value)
            document.querySelector("#table_group").insertAdjacentHTML("beforeend", group)
        })
        if (groups.length < Number(getValue(storageVocabulary.max))) {
            disableNextPageBtn();
        }
    }
    if(e.value == "location"){
        removeByClass(".location_tab")
        setValue(storageVocabulary.type, Type.LOCATION.description)
        document.querySelector("#table_location").classList.remove("display_none")
        document.querySelector("#table_coordinate").classList.add("display_none")
        document.querySelector("#table_group").classList.add("display_none")
        document.querySelector("#table_stud").classList.add("display_none")
        let locations = await getEntities(Type.LOCATION.description)
        locations.forEach(value => {
            let location = createLocationRowByTemplate(value)
            document.querySelector("#table_location").insertAdjacentHTML("beforeend", location)
        })
        if (locations.length < Number(getValue(storageVocabulary.max))) {

            disableNextPageBtn();
        }
    }
    if(e.value == "coordinate"){
        removeByClass(".coordinate_tab")
        setValue(storageVocabulary.type, Type.COORDINATE.description)
        document.querySelector("#table_location").classList.add("display_none")
        document.querySelector("#table_coordinate").classList.remove("display_none")
        document.querySelector("#table_group").classList.add("display_none")
        document.querySelector("#table_stud").classList.add("display_none")
        let coordinates = await getEntities(Type.COORDINATE.description)
        coordinates.forEach(value => {
            let coordinate = createCoordinateRowByTemplate(value)
            document.querySelector("#table_coordinate").insertAdjacentHTML("beforeend", coordinate)
        })
        if (coordinates.length < Number(getValue(storageVocabulary.max))) {
            disableNextPageBtn();
        }
    }

    document.querySelector("#pagination_numb").innerHTML = getValue(storageVocabulary.page)
}

function sort_up(value){
alert(value+" UP")
 /* отсортировать от меньшего к большему*/

}
function sort_down(value){
    alert(value+" Down")
    /* отсортировать от большего к меньшему*/
}

function clear_count_group(){
    /*Очистка поля кол-во студентов*/
    document.getElementById('numberOfStudents_input').value = "";
}
function clear_avr_mark(){
    /*Очистка поля средняя оценка*/
    document.getElementById('averageMark_input').value = "";
}
function clear_count_transferred(){
    /*Очистка поля переведенных студентов*/
    document.getElementById('numberOfTransferred_input').value = "";
}

function clear_numb_expelled(){
    /*Очистка поля кол-во отчисленных*/
    document.getElementById('numberOfExpelled_input').value = "";
}

function clear_name_group(){
    /*Очистка поля название*/
    document.getElementById('name_input').value = "";
}

function clear_form_edu(){
    /*Очистка поля форма обучения*/
    document.getElementById('formOfEducation_input').value = "";
}

function clear_fut_expelled(){
    /*Очистка поля будут исключены*/
    document.getElementById('shouldBeExpelled_input').value = "";
}

function clear_coord(){
    /*Очистка поля координаты*/
    document.getElementById('coordinateID_input').value = "";
    document.getElementById('coordinateY_input').value = "";
    document.getElementById('coordinateX_input').value = "";
}

function clear_star(){
    /*Очистка поля староста*/
    document.getElementById('person_input').value = "";
    document.getElementById('person_id').value = "";
}

function clear_birth_day(){
    /*Очистка дня рождения*/
    document.getElementById('birthday_input').value = "";
}

function clear_FIO(){
    /*Очистка дня рождения*/
    document.getElementById('FIO_input').value = "";
}

function clear_height(){
    /*Очистка Роста*/
    document.getElementById('height_input').value = "";
}

function clear_weight(){
    /*Очистка веса*/
    document.getElementById('weight_input').value = "";
}