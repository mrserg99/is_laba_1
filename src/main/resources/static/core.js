/*
* header example
* {
*  'Content-Type': 'application/json;charset=utf-8'
* }
*
*/
async function getRequest(url, header, body) {
    return fetch(url, {
        method: 'GET',
        headers: header,
        body: body
    })
}

async function postRequest(url, header, body) {
    return await fetch(url, {
        method: 'POST',
        headers: header,
        body: body
    })
}

async function putRequest(url, header, body) {
    return await fetch(url, {
        method: 'PUT',
        headers: header,
        body: body
    })
}

async function deleteRequest(url, header, body) {
    return await fetch(url, {
        method: 'DELETE',
        headers: header,
        body: body
    })
}

function base64ToBytes(base64) {
    const binString = atob(base64);
    const text = Uint8Array.from(binString, (m) => m.codePointAt(0));
    return new TextDecoder().decode(text)
}

function textToBase64(text) {
    const bytes = new TextEncoder().encode(text)
    const binString = String.fromCodePoint(...bytes);
    return btoa(binString);
}

function toJson(object){
    return JSON.stringify(object)
}

function fromJson(json){
    return JSON.parse(json)
}

function getSortedByValue(value){
    switch (getValue(storageVocabulary.type)) {
        case Type.COORDINATE.description:
            return coordinatesMap.get(value)
        case Type.LOCATION.description:
            return locationMap.get(value)
        case Type.GROUP.description:
            return groupMap.get(value)
        case Type.PERSON.description:
            return personMap.get(value)
    }
}

//TODO example
const locationMap = new Map()
    .set('ID', 'id')
    .set('X', 'x')
    .set('Y', 'y')
    .set('Название', 'name')

const coordinatesMap = new Map()
    .set('ID', 'id')
    .set('X', 'x')
    .set('Y', 'y')

const groupMap = new Map()
    .set('ID', 'id')
    .set('Название', 'name')
    .set('Средняя оценка', 'averageMark')
    .set('Дата создания', 'creationDate')
    .set('Кол-во отчисленных', 'expelledStudents')
    .set('Форма обучения', 'formOfEducation')
    .set('Семестр', 'semesterEnum')
    .set('Будут исключены', 'shouldBeExpelled')
    .set('Кол-во студентов', 'studentsCount')
    .set('Кол-во переведенных', 'transferredStudents')
/*X, Y, староста*/


const personMap = new Map()
    .set('ID', 'id')
    .set('ФИО', 'FIO')
    .set('День рождения', 'birthday')
    .set('Цвет глаз', 'eyeColor')
    .set('Цвет волос', 'hairColor')
    .set('Рост(см)', 'height')
    .set('Вес(кг)', 'weight')