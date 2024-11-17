const removeByClass = (sel) => document.querySelectorAll(sel).forEach(el => el.remove());
const removeChildrenByClass = (sel) => document.querySelector(sel).children.forEach(el => el.remove());

async function createEntity() {
    /*Появление popup окна создания объекта*/
    if (getValue(storageVocabulary.type) === Type.LOCATION.description){
        document.querySelector('.body').insertAdjacentHTML("afterbegin", locationPopup)
    }
    if (getValue(storageVocabulary.type) === Type.COORDINATE.description){
        document.querySelector('.body').insertAdjacentHTML("afterbegin", coordinatePopup)
    }
    if (getValue(storageVocabulary.type) === Type.PERSON.description){
        document.querySelector('.body').insertAdjacentHTML("afterbegin", studentPopup)
        let colors = await getEntities(Type.COLOR.description)
        colors.forEach(value => {
            document.querySelector("#hairColor_input").insertAdjacentHTML("beforeend", '<option>' + value + '</option>')
            document.querySelector("#eyeColor_input").insertAdjacentHTML("beforeend", '<option>' + value + '</option>')
        })
        document.getElementById("user_change_stud").innerHTML = getValue(storageVocabulary.user)
        createLocationElementListener()
    }
    if (getValue(storageVocabulary.type) === Type.GROUP.description) {
        document.querySelector('.body').insertAdjacentHTML("afterbegin", groupPopup)
        document.getElementById("user_change_group").innerHTML = getValue(storageVocabulary.user)
        let formsOfEducation = await getEntities(Type.FORM_OF_EDUCATION.description)
        let semesters = await getEntities(Type.SEMESTER.description)
        semesters.forEach(value => {
            document.querySelector("#semester_input").insertAdjacentHTML("beforeend", '<option>' + value + '</option>')
        })
        formsOfEducation.forEach(value => {
            document.querySelector("#formOfEducation_input").insertAdjacentHTML("beforeend", '<option>' + value + '</option>')
        })
        createCoordinateElementListener()
        createPersonElementListener()
    }
    document.querySelector("#dark_overlay").classList.remove("display_none")
}

function closePopup() {
    /*Закрытие popup окна*/
    if (getValue(storageVocabulary.type) === Type.LOCATION.description){
        document.querySelector('#popup_location').remove()
    }
    if (getValue(storageVocabulary.type) === Type.PERSON.description){
        document.querySelector('#popup_create_stud').remove()
    }
    if (getValue(storageVocabulary.type) === Type.GROUP.description){
        document.querySelector('#popup_create_group').remove()
    }
    if (getValue(storageVocabulary.type) === Type.COORDINATE.description){
        document.querySelector("#popup_coordinate").remove()
    }
    document.querySelector("#dark_overlay").classList.add("display_none")

}

function checkbox_click() {
    /*Появление второстепенных параметров на странице Регистрации для админа*/
    if (document.querySelector("#admin").checked) {
        document.querySelector("#registrationFill").classList.remove("display_none")
    } else {
        document.querySelector("#registrationFill").classList.add("display_none")
    }
}

async function stud_coord_checkbox() {
    if (document.getElementById('stud_coord_checkbox').checked) {
        let locations = await getEntities(Type.LOCATION.description, 1, 10)
        document.getElementById("select_loc_btn").classList.remove("display_none")
        document.getElementById("location_ID_wr").classList.remove("display_none");

        locations.forEach(value => {
            let location = '<div id = ' + value.id + ' class="select_coord_child" onclick="setLocation(this)">\n' +
                '                        <p class="place">' + value.name + '</p>\n' +
                '                        <p class="coord_X">' + value.x + '</p>\n' +
                '                        <p class="coord_Y">' + value.y + '</p>\n' +
                '                        <p class="coord_Y">' + value.id + '</p>\n' +
                '                    </div>'
            document.querySelector("#select_location_list").insertAdjacentHTML("beforeend", location)
        })
    } else {
        document.querySelector("#select_location_list").innerHTML = ''
        document.querySelector("#select_loc_btn").classList.add("display_none")
        document.querySelector("#location_ID_wr").classList.add("display_none");

    }
}

async function group_coord_checkbox() {
    if (document.getElementById("new_coordinates").checked) {
        document.getElementById("select_loc_btn_group").classList.remove("display_none")
        document.getElementById("location_ID_wr").classList.remove("display_none");
        document.getElementById("input_id_group").classList.remove("display_none")

        let coordinates = await getEntities(Type.COORDINATE.description, 1, 10)
        coordinates.forEach(value => {
            let coordinate = '<div id = ' + value.id + ' class="select_coord_child" onclick="setCoordinate(this)">\n' +
                '                        <p class="coord_X">' + value.x + '</p>\n' +
                '                        <p class="coord_Y">' + value.y + '</p>\n' +
                '                        <p class="coord_Y">' + value.id + '</p>\n' +
                '                    </div>'
            document.querySelector("#select_location_list_group").insertAdjacentHTML("beforeend", coordinate)
        })

    } else {
        document.getElementById("input_id_group").classList.add("display_none")

        document.querySelector("#select_loc_btn_group").classList.add("display_none")
        document.querySelector("#location_ID_wr").classList.add("display_none");

    }
}

function setLocation(location) {
    /*появления селекта по локации на странице main*/
    let place = location.children[0].textContent;
    let coord_X = location.children[1].textContent;
    let coord_Y = location.children[2].textContent;
    let coord_id = location.children[3].textContent;

    document.querySelector("#locationName_input").value = place;
    document.querySelector("#locationCoordinateX_input").value = coord_X;
    document.querySelector("#locationCoordinateY_input").value = coord_Y;
    document.querySelector("#locationID").value = coord_id;

    document.querySelector("#select_location").classList.add("display_none")
    document.querySelector("#seagal").style.transform = "rotate(0deg)";
}

function setPerson(person) {
    let name = person.children[0].textContent;
    let id = person.children[1].textContent;

    document.querySelector("#person_input").value = name
    document.querySelector("#person_id").value = id

    document.querySelector("#select_location_wrapper_person").classList.add("display_none");
    document.querySelector("#select_location_person").classList.add("display_none")
    document.querySelector("#seagal_person").style.transform = "rotate(0deg)";
}

function setCoordinate(coordinate) {
    let x = coordinate.children[0].textContent;
    let y = coordinate.children[1].textContent;
    let id = coordinate.children[2].textContent;

    document.querySelector("#coordinateX_input").value = x
    document.querySelector("#coordinateY_input").value = y
    document.querySelector("#coordinateID_input").value = id

    document.querySelector("#select_location_wrapper_group").classList.add("display_none")
    document.querySelector("#seagal_group").style.transform = "rotate(0deg)";
}

async function select_visible() {
    /*Появление галочки для селекта для локации студента*/
    document.getElementById("select_location_wrapper").classList.remove("display_none");
    document.getElementById("select_location").classList.remove("display_none")
    document.getElementById("seagal").style.transform = "rotate(180deg)";
    document.getElementById("location_ID_wr").classList.remove("display_none");
}

async function select_visible_group() {
    /*Появление галочки для селекта для координат группы*/
    document.getElementById("select_location_wrapper_group").classList.remove("display_none");
    document.getElementById("select_location_group").classList.remove("display_none")
    document.getElementById("seagal_group").style.transform = "rotate(180deg)";
}

async function select_visible_person() {
    /*Появление галочки для селекта для выбора старосты*/
    document.querySelector("#select_location_wrapper_person").classList.remove("display_none");
    document.querySelector("#select_location_person").classList.remove("display_none")
    document.querySelector("#seagal_person").style.transform = "rotate(180deg)";

    let persons = await getEntities(Type.PERSON.description, 1, 10)

    persons.forEach(value => {
        let person = '<div id = ' + value.id + ' class="select_coord_child" onclick="setPerson(this)">\n' +
            '                        <p class="place">' + value.name + '</p>\n' +
            '                        <p class="coord_X">' + value.id + '</p>\n' +
            '                    </div>'
        document.querySelector("#select_location_list_person").insertAdjacentHTML("beforeend", person)
    })
}

function close_select_coord() {
    /*Закрытие выбора локаций при нажатии во вне селекта*/
    document.getElementById("select_location").classList.add("display_none");
    document.getElementById("seagal").style.transform = "rotate(0deg)";
    document.getElementById("select_location_wrapper").classList.add("display_none");
}

function close_select_coord_group() {
    /*Закрытие выбора локаций при нажатии во вне селекта*/
    document.getElementById("select_location_group").classList.add("display_none");
    document.getElementById("seagal_group").style.transform = "rotate(0deg)";
    document.getElementById("select_location_wrapper_group").classList.add("display_none");
}

function close_select_coord_person() {
    /*Закрытие выбора локаций при нажатии во вне селекта*/
    document.getElementById("select_location_person").classList.add("display_none");
    document.getElementById("seagal_person").style.transform = "rotate(0deg)";
    document.getElementById("select_location_wrapper_person").classList.add("display_none");
}

function printFirstPage() {
    disablePrevPageBtn()
    enableNextPageBtn()
    setValue(storageVocabulary.page, 1)
    setValue(storageVocabulary.max, 10)

    printTable()
}

function loadMain() {
    document.getElementById("user_name_in_header").innerHTML = getValue(storageVocabulary.user)

    printFirstPage()
}

function nextPage() {
    enablePrevPageBtn()
    /*Функция для пагинации на одну страницу вправо*/
    setValue(storageVocabulary.page, Number(getValue(storageVocabulary.page)) + 1)

    printTable()
}

function prevPage() {
    enableNextPageBtn();
    /*Функция для пагинации на одну страницу влево*/
    setValue(storageVocabulary.page, Number(getValue(storageVocabulary.page)) - 1)
    printTable()

    if (Number(getValue(storageVocabulary.page)) === 1) {
        disablePrevPageBtn()
    }
}

function enableNextPageBtn() {
    document.querySelector("#next_page").classList.remove("disable_pagination")
    document.querySelector("#next_page").classList.add("active_pagination")
    document.querySelector("#next_page").setAttribute("onclick", "nextPage()");

}

function enablePrevPageBtn() {
    document.querySelector("#prev_page").classList.remove("disable_pagination")
    document.querySelector("#prev_page").classList.add("active_pagination")
    document.querySelector("#prev_page").setAttribute("onclick", "prevPage()");

}

function disableNextPageBtn() {
    document.querySelector("#next_page").classList.add("disable_pagination")
    document.querySelector("#next_page").classList.remove("active_pagination")
    document.querySelector("#next_page").setAttribute("onclick", null);
}

function disablePrevPageBtn() {
    document.querySelector("#prev_page").classList.add("disable_pagination")
    document.querySelector("#prev_page").classList.remove("active_pagination")
    document.querySelector("#prev_page").setAttribute("onclick", null);
}

async function printTable() {
    let e = document.getElementById("DB");

    if (e.value === "stud") {
        removeByClass(".person_tab")
        setValue(storageVocabulary.type, Type.PERSON.description)
        document.querySelector("#table_stud").classList.remove("display_none")
        document.querySelector("#table_group").classList.add("display_none")
        document.querySelector("#table_location").classList.add("display_none")
        document.querySelector("#table_coordinate").classList.add("display_none")
        let persons = await getEntities(Type.PERSON.description, Number(getValue(storageVocabulary.page)), Number(getValue(storageVocabulary.max)))
        persons.forEach(value => {
            let person = createPersonRowByTemplate(value)
            document.querySelector("#table_stud").insertAdjacentHTML("beforeend", person)
        })
        if (persons.length < Number(getValue(storageVocabulary.max))) {
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
        let groups = await getEntities(Type.GROUP.description, Number(getValue(storageVocabulary.page)), Number(getValue(storageVocabulary.max)))
        groups.forEach(value => {
            let group = createStudyGroupRowByTemplate(value)
            document.querySelector("#table_group").insertAdjacentHTML("beforeend", group)
        })
        if (groups.length < Number(getValue(storageVocabulary.max))) {
            disableNextPageBtn();
        }
    }
    if (e.value == "location") {
        removeByClass(".location_tab")
        setValue(storageVocabulary.type, Type.LOCATION.description)
        document.querySelector("#table_location").classList.remove("display_none")
        document.querySelector("#table_coordinate").classList.add("display_none")
        document.querySelector("#table_group").classList.add("display_none")
        document.querySelector("#table_stud").classList.add("display_none")
        let locations = await getEntities(Type.LOCATION.description, Number(getValue(storageVocabulary.page)), Number(getValue(storageVocabulary.max)))
        locations.forEach(value => {
            let location = createLocationRowByTemplate(value)
            document.querySelector("#table_location").insertAdjacentHTML("beforeend", location)
        })
        if (locations.length < Number(getValue(storageVocabulary.max))) {

            disableNextPageBtn();
        }
    }
    if (e.value == "coordinate") {
        removeByClass(".coordinate_tab")
        setValue(storageVocabulary.type, Type.COORDINATE.description)
        document.querySelector("#table_location").classList.add("display_none")
        document.querySelector("#table_coordinate").classList.remove("display_none")
        document.querySelector("#table_group").classList.add("display_none")
        document.querySelector("#table_stud").classList.add("display_none")
        let coordinates = await getEntities(Type.COORDINATE.description, Number(getValue(storageVocabulary.page)), Number(getValue(storageVocabulary.max)))
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

function sort_up(value) {
    alert(value + " UP")
    /* отсортировать от меньшего к большему*/

}

function sort_down(value) {
    alert(value + " Down")
    /* отсортировать от большего к меньшему*/
}

function approve_application(btn) {
    /*Одобрить заявку на становление админом*/
    btn.classList.add("disabled_button")
}

function cancel_application(btn) {
    /*отменить заявку на становление админом*/
    btn.classList.add("disabled_button")
}

function change(raw, type) {
    /*Появление popup окна изменение объекта*/
    createEntity()

    let id = raw.children[0].innerHTML
    if (type === Type.PERSON) {
        let result = findById(type.description, id)
        result.then(async res => {
            if (res.ok){
                document.querySelector("#stud_coord_checkbox").checked = true
                select_visible()
                let body = await res.json()
                document.querySelector("#FIO_input").value = body.FIO
                document.querySelector("#eyeColor_input").value = body.eyeColor
                document.querySelector("#hairColor_input").value = body.hairColor
                document.querySelector("#locationID").value = body.location.id
                document.querySelector("#locationName_input").value = body.location.name
                document.querySelector("#locationCoordinateX_input").value = body.location.x
                document.querySelector("#locationCoordinateY_input").value = body.location.y
                document.querySelector("#birthday_input").value = body.birthday
                document.querySelector("#height_input").value = body.height
                document.querySelector("#weight_input").value = body.weight
            }
        })
    }
    if (type === Type.GROUP) {
        document.querySelector("#name_input").value = children[1].innerHTML
        document.querySelector("#coordinateID_input").value = children[2].innerHTML
        document.querySelector("#coordinateX_input").value = children[3].innerHTML
        document.querySelector("#coordinateY_input").value = children[4].innerHTML
        document.querySelector("#numberOfStudents_input").value = children[5].innerHTML
        document.querySelector("#numberOfExpelled_input").value = children[6].innerHTML
        document.querySelector("#numberOfTransferred_input").value = children[7].innerHTML
        document.querySelector("#shouldBeExpelled_input").value = children[8].innerHTML
        document.querySelector("#formOfEducation_input").value = children[9].innerHTML
        document.querySelector("#averageMark_input").value = children[10].innerHTML
        document.querySelector("#person_input").value = children[11].innerHTML
        document.querySelector("#semester_input").value = children[12].innerHTML
    }
}

function show_filter_popup(){


}
