const groupPopup = '<div id="popup_create_group" class="popup">\n' +
    '    <div class="popup_first_line">\n' +
    '        <div class="popup_first_line_wrapper">\n' +
    '            <h2 class="popup_title" id="popup_group_title">Создаем группу</h2>\n' +
    '            <p class="popup_date">19/03/2024 12:24:11</p>\n' +
    '            <button class="popup_del_btn button_dark" onclick="del_group()">\n' +
    '                <img class="rubbish" src="./pics/Mask%20group.png" alt="">\n' +
    '            </button>\n' +
    '        </div>\n' +
    '        <button class="popup_close" onclick="closePopup(this.parentElement.parentElement.id)">\n' +
    '            <img src="./pics/Frame%20202.png" alt="">\n' +
    '        </button>\n' +
    '    </div>\n' +
    '    <div class="popup_second_line">\n' +
    '        <p class="popup_second_line_author">Автор</p>\n' +
    '        <p id="user_change_group" class="popup_second_line_nameAuthor"></p>\n' +
    '    </div>\n' +
    '    <div class="popup_third_line">\n' +
    '        <div class="popup_third_wrapper">\n' +
    '            <div class="popup_input">\n' +
    '                <div class="popup_input_wrapper">\n' +
    '                    <p class="popup_input_text">Староста</p>\n' +
    '                    <input id="person_input" class="popup_input_input w115 br150015" type="text" maxlength=90>\n' +
    '                </div>\n' +
    '                <div class="popup_input_wrapper">\n' +
    '                    <p class="popup_input_text">ID</p>\n' +
    '                    <input id="person_id" class="popup_input_input w35 " type="text" maxlength=90>\n' +
    '                </div>\n' +
    '                <button class="popup_input_link_btn clear_btn_btn popup_cross_loc" onclick="select_visible_person()">\n' +
    '                    <svg id="seagal_person" width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '                        <path d="M1 1L7.97056 7.97056C8.36109 8.36109 8.99425 8.36109 9.38478 7.97056L16.3553 1"\n' +
    '                              stroke="#292929" stroke-width="2" stroke-linecap="round"/>\n' +
    '                    </svg>\n' +
    '                </button>\n' +
    '                <button class="popup_input_del_btn br015150 clear_btn_btn popup_cross_loc" onclick="clearStar()">\n' +
    '                    <img src="./pics/Frame%20202.png" alt="" class="">\n' +
    '                </button>\n' +
    '            </div>\n' +
    '            <div id="select_location_wrapper_person" class="select_location_wrapper display_none" onclick="close_select_coord_person()"></div>\n' +
    '            <div id="select_location_person" class="select_coord w270 br15 display_none">\n' +
    '                <div id="select_location_list_person" class="select_coord_wrapper">\n' +
    '\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <button class="popup_create button_light">Создать нового</button>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="popup_third_wrapper">\n' +
    '            <div class="popup_input">\n' +
    '                <div class="popup_input_wrapper">\n' +
    '                    <p class="popup_input_text">Координата Х</p>\n' +
    '                    <input id="coordinateX_input" class="popup_input_input w74 br150015" type="text" maxlength=10>\n' +
    '                </div>\n' +
    '                <div class="popup_input_wrapper">\n' +
    '                    <p class="popup_input_text">Координата Y</p>\n' +
    '                    <input id="coordinateY_input" class="popup_input_input w74" type="text" maxlength=10>\n' +
    '                </div>\n' +
    '                <div id="input_id_group" class="popup_input_wrapper display_none">\n' +
    '                    <p class="popup_input_text">ID</p>\n' +
    '                    <input id="coordinateID_input" class="popup_input_input w35" type="text" maxlength=10>\n' +
    '                </div>\n' +
    '                <button id="select_loc_btn_group" class="popup_input_link_btn clear_btn_btn display_none popup_cross_loc" onclick="select_visible_group()">\n' +
    '                    <svg id="seagal_group" width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '                        <path d="M1 1L7.97056 7.97056C8.36109 8.36109 8.99425 8.36109 9.38478 7.97056L16.3553 1"\n' +
    '                              stroke="#292929" stroke-width="2" stroke-linecap="round"/>\n' +
    '                    </svg>\n' +
    '                </button>\n' +
    '                <button class="popup_input_del_btn br015150 clear_btn_btn popup_cross_loc" onclick="clearCoord()">\n' +
    '                    <img src="./pics/Frame%20202.png" alt="" class="">\n' +
    '                </button>\n' +
    '            </div>\n' +
    '            <div id="select_location_wrapper_group" class="select_location_wrapper display_none" onclick="close_select_coord_group()"></div>\n' +
    '            <div id="select_location_group" class="select_coord w270 br15 display_none">\n' +
    '                <div id="select_location_list_group" class="select_coord_wrapper">\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="popup_checkbox" onclick="group_coord_checkbox()" >\n' +
    '                <input type="checkbox" id="new_coordinates" name="new_coordinates"/>\n' +
    '                <label for="new_coordinates">Выбор из существующих</label>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="popup_fourth_line">\n' +
    '        <div class="popup_input">\n' +
    '            <div class="popup_input_wrapper">\n' +
    '                <p class="popup_input_text">Кол-во студентов</p>\n' +
    '                <input id="numberOfStudents_input" class="popup_input_input w115 br150015" type="text" maxlength=90>\n' +
    '            </div>\n' +
    '            <button class="popup_input_del_btn br015150 clear_btn_btn popup_cross_loc" onclick="clearCountGroup()">\n' +
    '                <img src="./pics/Frame%20202.png" alt="" class="">\n' +
    '            </button>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="popup_input">\n' +
    '            <div class="popup_input_wrapper">\n' +
    '                <p class="popup_input_text">Средняя оценка</p>\n' +
    '                <input id="averageMark_input" class="popup_input_input w98 br150015" type="text" maxlength=90>\n' +
    '            </div>\n' +
    '            <button class="popup_input_del_btn br015150 clear_btn_btn popup_cross_loc" onclick="clearAvrMark()">\n' +
    '                <img src="./pics/Frame%20202.png" alt="" class="">\n' +
    '            </button>\n' +
    '        </div>\n' +
    '\n' +
    '\n' +
    '        <div class="popup_input">\n' +
    '            <div class="popup_input_wrapper">\n' +
    '                <p class="popup_input_text">Кол-во переведенных</p>\n' +
    '                <input id="numberOfTransferred_input" class="popup_input_input w125 br150015" type="text" maxlength=90>\n' +
    '            </div>\n' +
    '            <button class="popup_input_del_btn br015150 clear_btn_btn popup_cross_loc" onclick="clearCountTransferred()">\n' +
    '                <img src="./pics/Frame%20202.png" alt="" class="">\n' +
    '            </button>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="popup_fourth_line">\n' +
    '        <div class="popup_input">\n' +
    '            <div class="popup_input_wrapper">\n' +
    '                <p class="popup_input_text">Кол-во отчисленных</p>\n' +
    '                <input id="numberOfExpelled_input" class="popup_input_input w115 br150015" type="text" maxlength=90>\n' +
    '            </div>\n' +
    '            <button class="popup_input_del_btn br015150 clear_btn_btn popup_cross_loc" onclick="clearNumbExpelled()">\n' +
    '                <img src="./pics/Frame%20202.png" alt="" class="">\n' +
    '            </button>\n' +
    '        </div>\n' +
    '        <div class="popup_input">\n' +
    '            <div class="popup_input_wrapper w170">\n' +
    '                <p class="popup_input_text">Семестр</p>\n' +
    '\n' +
    '                <select id="semester_input" class="popup_input_input w170 br15">\n' +
    '\n' +
    '                </select>\n' +
    '                <!--  <input id="" class="popup_input_input w74 br150015" type="text" maxlength=90>-->\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '\n' +
    '\n' +
    '        <div class="popup_input">\n' +
    '            <div class="popup_input">\n' +
    '                <div class="popup_input_wrapper w195">\n' +
    '                    <p class="popup_input_text">Форма обучения</p>\n' +
    '\n' +
    '                    <select id="formOfEducation_input" class="popup_input_input w170 br15">\n' +
    '\n' +
    '                    </select>\n' +
    '                    <!--  <input id="" class="popup_input_input w74 br150015" type="text" maxlength=90>-->\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="popup_five_line">\n' +
    '        <div class="popup_input">\n' +
    '            <div class="popup_input_wrapper">\n' +
    '                <p class="popup_input_text">Будут исключены</p>\n' +
    '                <input id="shouldBeExpelled_input popup_cross_loc" class="popup_input_input w115 br150015" type="text" maxlength=90>\n' +
    '            </div>\n' +
    '            <button class="popup_input_del_btn br015150 clear_btn_btn popup_cross_loc" onclick="clearFutExpelled()">\n' +
    '                <img src="./pics/Frame%20202.png" alt="" class="">\n' +
    '            </button>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="popup_input">\n' +
    '            <div class="popup_input_wrapper">\n' +
    '                <p class="popup_input_text">Название</p>\n' +
    '                <input id="name_input" class="popup_input_input w98 br150015" type="text" maxlength=90>\n' +
    '            </div>\n' +
    '            <button class="popup_input_del_btn br015150 clear_btn_btn popup_cross_loc" onclick="clearNameGroup()">\n' +
    '                <img src="./pics/Frame%20202.png" alt="" class="">\n' +
    '            </button>\n' +
    '        </div>\n' +

    '\n' +
    '\n' +
    '    </div>\n' +
    '    <div class="popup_seven_line">\n' +
    '        <p class="error_massage"></p>\n' +
    '    </div>\n' +
    '    <div class="popup_six_line_1">\n' +
    '        <button id="create_group_btn" class="popup_btn_create button_dark" onclick="createGroup()">Создать</button>\n' +
    '        <button id="return_btnArr" class="popup_btn_del" onclick="closePopup()">Отмена</button>\n' +
    '    </div>\n' +
    '</div>'

const studentPopup = '<div id="popup_create_stud" class="popup">\n' +
    '    <div class="popup_first_line">\n' +
    '        <div class="popup_first_line_wrapper">\n' +
    '            <h2 class="popup_title" id="popup_stud_title">Создаем студента</h2>\n' +
    '            <button class="popup_del_btn button_dark" onclick="del_stud()">\n' +
    '                <img class="rubbish" src="./pics/Mask%20group.png" alt="">\n' +
    '            </button>\n' +
    '        </div>\n' +
    '        <button class="popup_close" onclick="closePopup(this.parentElement.parentElement.id)">\n' +
    '            <img src="./pics/Frame%20202.png" alt="">\n' +
    '        </button>\n' +
    '    </div>\n' +
    '    <div class="popup_second_line">\n' +
    '        <p class="popup_second_line_author">Автор</p>\n' +
    '        <p id="user_change_stud" class="popup_second_line_nameAuthor"></p>\n' +
    '    </div>\n' +
    '    <div class="popup_third_line">\n' +
    '        <div class="popup_third_wrapper">\n' +
    '            <div class="popup_input">\n' +
    '                <div class="popup_input_wrapper">\n' +
    '                    <p class="popup_input_text">Название места</p>\n' +
    '                    <input id="locationName_input" class="popup_input_input w125 br150015" type="text" maxlength=10>\n' +
    '                </div>\n' +
    '                <div class="popup_input_wrapper">\n' +
    '                    <p class="popup_input_text">Координата Х</p>\n' +
    '                    <input id="locationCoordinateX_input" class="popup_input_input w74" type="text" maxlength=10>\n' +
    '                </div>\n' +
    '                <div class="popup_input_wrapper">\n' +
    '                    <p class="popup_input_text">Координата Y</p>\n' +
    '                    <input id="locationCoordinateY_input" class="popup_input_input w74" type="text" maxlength=10>\n' +
    '                </div>\n' +
    '                <div id="location_ID_wr" class="popup_input_wrapper display_none">\n' +
    '                    <p class="popup_input_text">ID</p>\n' +
    '                    <input id="locationID" class="popup_input_input w55" type="text" maxlength=10>\n' +
    '                </div>\n' +
    '                <button class="popup_input_link_btn display_none clear_btn_btn popup_cross_loc" id="select_loc_btn" onclick="select_visible()">\n' +
    '                    <svg id="seagal" width="18" height="10" viewBox="0 0 18 10" fill="none"\n' +
    '                         xmlns="http://www.w3.org/2000/svg">\n' +
    '                        <path d="M1 1L7.97056 7.97056C8.36109 8.36109 8.99425 8.36109 9.38478 7.97056L16.3553 1"\n' +
    '                              stroke="#292929" stroke-width="2" stroke-linecap="round"/>\n' +
    '                    </svg>\n' +
    '\n' +
    '                </button>\n' +
    '                <button id="clear_location_btn" class="popup_input_del_btn br015150 clear_btn_btn popup_cross_loc" onclick="clearLocation()">\n' +
    '                    <img src="./pics/Frame%20202.png" alt="" class="">\n' +
    '                </button>\n' +
    '\n' +
    '            </div>\n' +
    '            <div id="select_location_wrapper" class="select_location_wrapper display_none" onclick="close_select_coord()"></div>\n' +
    '            <div id="select_location" class="select_coord w350 br15 display_none">\n' +
    '                <div id="select_location_list" class="select_coord_wrapper">\n' +
    '\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '\n' +
    '            <div class="popup_checkbox" onclick="stud_coord_checkbox()">\n' +
    '                <input type="checkbox" id="stud_coord_checkbox" name="new_coordinates"/>\n' +
    '                <label for="new_coordinates">Выбор из существующих</label>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="popup_fourth_line">\n' +
    '        <div class="popup_input">\n' +
    '            <div class="popup_input_wrapper">\n' +
    '                <p class="popup_input_text">День рождения</p>\n' +
    '                <input  id="birthday_input" class="popup_input_input w115 br150015 h44" type="date" name="trip-start" value="yyyy-mm-dd" min="2013-01-01" max="2018-12-31" />\n' +
    '            </div>\n' +
    '            <button class="popup_input_del_btn br015150 h45 clear_btn_btn popup_cross_loc" onclick="clearBirthDay()">\n' +
    '                <img src="./pics/Frame%20202.png" alt="" class="">\n' +
    '            </button>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="popup_input">\n' +
    '            <div class="popup_input_wrapper">\n' +
    '                <p class="popup_input_text">ФИО</p>\n' +
    '                <input id="FIO_input" class="popup_input_input w260 br150015 " type="text" maxlength=90>\n' +
    '            </div>\n' +
    '            <button class="popup_input_del_btn br015150 clear_btn_btn popup_cross_loc" onclick="clearFIO()">\n' +
    '                <img src="./pics/Frame%20202.png" alt="" class="">\n' +
    '            </button>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="popup_five_line">\n' +
    '        <div class="popup_input">\n' +
    '            <div class="popup_input_wrapper">\n' +
    '                <p class="popup_input_text">Цвет волос</p>\n' +
    '                <select id="hairColor_input" class="popup_input_input w185 br15">\n' +
    '\n' +
    '                </select>\n' +
    '\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="popup_input">\n' +
    '            <div class="popup_input_wrapper">\n' +
    '                <p class="popup_input_text">Рост</p>\n' +
    '                <input id="height_input" class="popup_input_input w98 br150015" type="text" maxlength=90>\n' +
    '            </div>\n' +
    '            <button class="popup_input_del_btn br015150 clear_btn_btn popup_cross_loc" onclick="clearHeight()">\n' +
    '                <img src="./pics/Frame%20202.png" alt="" class="">\n' +
    '            </button>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="popup_five_line">\n' +
    '        <div class="popup_input">\n' +
    '            <div class="popup_input_wrapper">\n' +
    '                <p class="popup_input_text">Цвет глаз</p>\n' +
    '                <select id="eyeColor_input" class="popup_input_input w185 br15">\n' +
    '                </select>\n' +
    '            </div>\n' +
    '\n' +
    '        </div>\n' +
    '        <div class="popup_input">\n' +
    '            <div class="popup_input_wrapper">\n' +
    '                <p class="popup_input_text">Вес</p>\n' +
    '                <input id="weight_input" class="popup_input_input w74 br150015" type="text" maxlength=90>\n' +
    '            </div>\n' +
    '\n' +
    '            <button class="popup_input_del_btn br015150 clear_btn_btn popup_cross_loc" onclick="clearWeight()">\n' +
    '                <img src="./pics/Frame%20202.png" alt="" class="">\n' +
    '            </button>\n' +
    '        </div>\n' +
    '\n' +
    '    </div>\n' +
    '    <div class="popup_seven_line">\n' +
    '        <p id="popup_create_stud_error" class="error_massage"></p>\n' +
    '    </div>\n' +
    '    <div class="popup_six_line_2">\n' +
    '        <button id="create_stud_btn" class="popup_btn_create button_dark" onclick="createPerson()">Создать</button>\n' +
    '        <button id="return_btn_stud" class="popup_btn_del" onclick="closePopup()">Отмена</button>\n' +
    '    </div>\n' +
    '</div>'

const locationPopup = '<div id="popup_location" class="popup">\n' +
    '    <div class="popup_first_line">\n' +
    '        <div class="popup_first_line_wrapper">\n' +
    '            <h2 class="popup_title" id="popup_loc_title">Создаем Локацию</h2>\n' +
    '            <button class="popup_del_btn button_dark" onclick="del_stud()">\n' +
    '                <img class="rubbish" src="./pics/Mask%20group.png" alt="">\n' +
    '            </button>\n' +
    '        </div>\n' +
    '        <button class="popup_close" onclick="closePopup(this.parentElement.parentElement.id)">\n' +
    '            <img src="./pics/Frame%20202.png" alt="">\n' +
    '        </button>\n' +
    '    </div>\n' +
    '    <div class="popup_second_line">\n' +
    '        <p class="popup_second_line_author">Автор</p>\n' +
    '        <p id="user_change_loc" class="popup_second_line_nameAuthor"></p>\n' +
    '    </div>\n' +
    '    <div class="popup_five_line">\n' +
    '        <div class="popup_input">\n' +
    '            <div class="popup_input_wrapper">\n' +
    '                <p class="popup_input_text">X</p>\n' +
    '                <input id="X_loc_input" class="popup_input_input w98 br150015" type="text" maxlength=90>\n' +
    '            </div>\n' +
    '            <button class="popup_input_del_btn br015150 clear_btn_btn popup_cross_loc" onclick="clearXLoc()">\n' +
    '                <img src="./pics/Frame%20202.png" alt="" class="">\n' +
    '            </button>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="popup_input">\n' +
    '            <div class="popup_input_wrapper">\n' +
    '                <p class="popup_input_text">Y</p>\n' +
    '                <input id="Y_loc_input" class="popup_input_input w98 br150015" type="text" maxlength=90>\n' +
    '            </div>\n' +
    '            <button class="popup_input_del_btn br015150 clear_btn_btn popup_cross_loc" onclick="clearYLoc()">\n' +
    '                <img src="./pics/Frame%20202.png" alt="" class="">\n' +
    '            </button>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="popup_five_line">\n' +
    '        <div class="popup_input">\n' +
    '            <div class="popup_input_wrapper">\n' +
    '                <p class="popup_input_text">Название</p>\n' +
    '                <input id="name_loc_input" class="popup_input_input w98 br150015" type="text" maxlength=90>\n' +
    '            </div>\n' +
    '            <button class="popup_input_del_btn br015150 clear_btn_btn popup_cross_loc" onclick="clearnameLoc()">\n' +
    '                <img src="./pics/Frame%20202.png" alt="" class="">\n' +
    '            </button>\n' +
    '        </div>\n' +
    '\n' +
    '    </div>\n' +
    '\n' +
    '\n' +
    '    <div class="popup_seven_line">\n' +
    '        <p id="popup_create_loc_error" class="error_massage"></p>\n' +
    '    </div>\n' +
    '    <div class="popup_six_line_2">\n' +
    '        <button id="create_loc_btn" class="popup_btn_create button_dark" onclick="createLoction()">Создать</button>\n' +
    '        <button id="return_btn_loc" class="popup_btn_del" onclick="closePopup()">Отмена</button>\n' +
    '    </div>\n' +
    '</div>'

const coordinatePopup = '<div id="popup_coordinate" class="popup">\n' +
    '    <div class="popup_first_line">\n' +
    '        <div class="popup_first_line_wrapper">\n' +
    '            <h2 class="popup_title" id="popup_coord_title">Создаем Координаты</h2>\n' +
    '            <button class="popup_del_btn button_dark" onclick="del_stud()">\n' +
    '                <img class="rubbish" src="./pics/Mask%20group.png" alt="">\n' +
    '            </button>\n' +
    '        </div>\n' +
    '        <button class="popup_close" onclick="closePopup(this.parentElement.parentElement.id)">\n' +
    '            <img src="./pics/Frame%20202.png" alt="">\n' +
    '        </button>\n' +
    '    </div>\n' +
    '    <div class="popup_second_line">\n' +
    '        <p class="popup_second_line_author">Автор</p>\n' +
    '        <p id="user_change_coord" class="popup_second_line_nameAuthor"></p>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="popup_five_line">\n' +
    '        <div class="popup_input">\n' +
    '            <div class="popup_input_wrapper">\n' +
    '                <p class="popup_input_text">X</p>\n' +
    '                <input id="X_coord_input" class="popup_input_input w98 br150015" type="text" maxlength=90>\n' +
    '            </div>\n' +
    '            <button class="popup_input_del_btn br015150 clear_btn_btn popup_cross_loc" onclick="clearXcoord()">\n' +
    '                <img src="./pics/Frame%20202.png" alt="" class="">\n' +
    '            </button>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="popup_input">\n' +
    '            <div class="popup_input_wrapper">\n' +
    '                <p class="popup_input_text">Y</p>\n' +
    '                <input id="Y_coord_input" class="popup_input_input w98 br150015" type="text" maxlength=90>\n' +
    '            </div>\n' +
    '            <button class="popup_input_del_btn br015150 clear_btn_btn popup_cross_loc" onclick="clearYcoord()">\n' +
    '                <img src="./pics/Frame%20202.png" alt="" class="">\n' +
    '            </button>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="popup_seven_line">\n' +
    '        <p id="popup_create_coord_error" class="error_massage"></p>\n' +
    '    </div>\n' +
    '    <div class="popup_six_line_2">\n' +
    '        <button id="create_coord_btn" class="popup_btn_create button_dark" onclick="createCoord()">Создать</button>\n' +
    '        <button id="return_coord_loc" class="popup_btn_del" onclick="closePopup()">Отмена</button>\n' +
    '    </div>\n' +
    '</div>'

const filterPopup = '<div id="popup_create_filter" class="popup">\n' +
    '    <div class="popup_first_line">\n' +
    '        <div class="popup_first_line_wrapper">\n' +
    '            <h2 class="popup_title" id="popup_stud_title">Создаем фильтр</h2>\n' +
    '        </div>\n' +
    '        <button class="popup_close" onclick="closePopup(this.parentElement.parentElement.id)">\n' +
    '            <img src="./pics/Frame%20202.png" alt="">\n' +
    '        </button>\n' +
    '    </div>\n' +
    '    <div class="popup_five_line">\n' +
    '        <div class="popup_input">\n' +
    '            <div class="popup_input_wrapper">\n' +
    '                <p class="popup_input_text">Колонка сортировки</p>\n' +
    '                <select id="filter_column_input" class="popup_input_input w185 br15" onclick="createFields()">\n' +
    '                </select>\n' +
    '            </div>\n' +
    '        </div>\n' +

    '        <div class="popup_input">\n' +
    '            <div class="popup_input_wrapper">\n' +
    '                <p class="popup_input_text">Значение</p>\n' +
    '               <input id="filter_input" class="popup_input_input w98 br150015" type="text" maxlength=90>\n' +
    '            </div>\n' +
    '            <button id="filter_input_btn" class="popup_input_del_btn br015150 clear_btn_btn popup_cross_loc" onclick="clearYcoord()">\n' +
    '                <img src="./pics/Frame%20202.png" alt="" class="">\n' +
    '            </button>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    <div class="popup_seven_line">\n' +
    '        <p id="popup_create_stud_error" class="error_massage"></p>\n' +
    '    </div>\n' +
    '    <div class="popup_six_line_2">\n' +
    '        <button id="create_stud_btn" class="popup_btn_create button_dark" onclick="createFilter()">Создать</button>\n' +
    '        <button id="return_btn_stud" class="popup_btn_del" onclick="deleteFilter()">Удалить</button>\n' +
    '    </div>\n' +
    '</div>'