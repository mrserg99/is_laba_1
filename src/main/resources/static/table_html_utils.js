/**
 * @param {StudyGroup} studyGroup
 */
function createStudyGroupRowByTemplate(studyGroup) {
    return "<tr>\n" +
        "        <td class=\"var_tab\"  id=" + studyGroup.id + ">" + studyGroup.id + "</td>\n" +
        "        <td class=\"var_tab\" >" + studyGroup.name + "</td>\n" +
        "        <td class=\"var_tab\" >" + studyGroup.coordinate.x + "</td>\n" +
        "        <td class=\"var_tab\" >" + studyGroup.coordinate.y + "</td>\n" +
        "        <td class=\"var_tab\" >" + studyGroup.numberOfStudents + "</td>\n" +
        "        <td class=\"var_tab\" >" + studyGroup.numberOfExpelled + "</td>\n" +
        "        <td class=\"var_tab\" >" + studyGroup.numberOfTransferred + "</td>\n" +
        "        <td class=\"var_tab\" >" + studyGroup.shouldBeExpelled + "</td>\n" +
        "        <td class=\"var_tab\" >" + studyGroup.creationDate + "</td>\n" +
        "        <td class=\"var_tab\" >" + studyGroup.formOfEducation + "</td>\n" +
        "        <td class=\"var_tab\" >" + studyGroup.user + "</td>\n" +
        "        <td class=\"var_tab\" >" + studyGroup.averageMark + "</td>\n" +
        "        <td class=\"var_tab\" >" + studyGroup.groupAdmin + "</td>\n" +
        "        <td class=\"var_tab\" >" + studyGroup.semester + "</td>\n" +
        "        <td class=\"var_tab\" ><button class=\"change button_dark\" onclick=\"change(this.parentElement.parentElement, Type.GROUP.description)\">Изменить</button></td>\n" +
        "        <td class=\"var_tab\" >\n" +
        "            <button class=\"del button_dark popup_del_btn\" onclick=\"deleteRow(this.parentElement.parentElement, Type.GROUP.description)\">\n" + //TODO delete and change functions
        "                <img class=\"rubbish\" src=\"./pics/Mask%20group.png\" alt=\"\">\n" +
        "            </button>\n" +
        "        </td>\n" +
        "    </tr>"
}

/**
 * @param {Person} person
 */
function createPersonRowByTemplate(person) {
    return "<tr class='person_tab'>\n" +
        "        <td class=\"var_tab\" >" + person.id + "</td>\n" +
        "        <td class=\"var_tab\" >" + person.group + "</td>\n" +
        "        <td class=\"var_tab\" >" + person.FIO + "</td>\n" +
        "        <td class=\"var_tab\" >" + person.eyeColor + "</td>\n" +
        "        <td class=\"var_tab\" >" + person.hairColor + "</td>\n" +
        "        <td class=\"var_tab\" >" + person.location.name + "</td>\n" +
        "        <td class=\"var_tab\" >" + person.location.x + "</td>\n" +
        "        <td class=\"var_tab\" >" + person.location.y + "</td>\n" +
        "        <td class=\"var_tab\" >" + person.birthday + "</td>\n" +
        "        <td class=\"var_tab\" >" + person.height + "</td>\n" +
        "        <td class=\"var_tab\" >" + person.weight + "</td>\n" +
        "        <td class=\"var_tab\" ><button class=\"change button_dark\" onclick=\"change(this.parentElement.parentElement, Type.PERSON)\">Изменить</button></td>\n" +
        "        <td class=\"var_tab\" >\n" +
        "            <button class=\"del button_dark popup_del_btn\" onclick=\"deleteRow(this)\">\n" +
        "                <img class=\"rubbish\" src=\"./pics/Mask%20group.png\" alt=\"\">\n" +
        "            </button>\n" +
        "        </td>\n" +
        "    </tr>"
}

/**
 *
 * @param {Location} location
 */
function createLocationRowByTemplate(location){
    return "<tr class='location_tab'>\n" +
        "        <td class=\"var_tab\" >" + location.id + "</td>\n" +
        "        <td class=\"var_tab\" >" + location.name + "</td>\n" +
        "        <td class=\"var_tab\" >" + location.x + "</td>\n" +
        "        <td class=\"var_tab\" >" + location.y + "</td>\n" +
        "        <td class=\"var_tab\" ><button class=\"change button_dark\" onclick=\"change(this.parentElement.parentElement, Type.LOCATION)\">Изменить</button></td>\n" +
        "        <td class=\"var_tab\" >\n" +
        "            <button class=\"del button_dark popup_del_btn\" onclick=\"deleteRow(this)\">\n" +
        "                <img class=\"rubbish\" src=\"./pics/Mask%20group.png\" alt=\"\">\n" +
        "            </button>\n" +
        "        </td>\n" +
        "    </tr>"
}

/**
 *
 * @param {Coordinate} coordinate
 */
function createCoordinateRowByTemplate(coordinate){
    return "<tr class='location_tab'>\n" +
        "        <td class=\"var_tab\" >" + coordinate.id + "</td>\n" +
        "        <td class=\"var_tab\" >" + coordinate.x + "</td>\n" +
        "        <td class=\"var_tab\" >" + coordinate.y + "</td>\n" +
        "        <td class=\"var_tab\" ><button class=\"change button_dark\" onclick=\"change(this.parentElement.parentElement, Type.COORDINATE)\">Изменить</button></td>\n" +
        "        <td class=\"var_tab\" >\n" +
        "            <button class=\"del button_dark popup_del_btn\" onclick=\"deleteRow(this)\">\n" +
        "                <img class=\"rubbish\" src=\"./pics/Mask%20group.png\" alt=\"\">\n" +
        "            </button>\n" +
        "        </td>\n" +
        "    </tr>"
}