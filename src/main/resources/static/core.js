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

function textToColumnName(text){
    switch (text) {
        case 'ID': return 'id'
        case 'ФИО':
        case 'Название': return 'name'
        case 'Кол-во студентов': return 'students_count'
        case 'Кол-во отчисленных': return 'expelled_students'
        case 'Кол-во переведенных': return 'transferred_students'
        case 'Будут исключены': return 'should_be_expelled'
        case 'Дата создания': return 'creation_date'
        case 'Форма обучения': return 'form_of_education'
        case 'Староста': return 'groupadmin_id'
        case 'Автор': return 'user_id'
        case 'Средняя оценка': return 'average_mark'
        case 'Семестр': return 'semester_enum'
        case 'X': return 'x'
        case 'Y': return 'y'
        case 'Цвет глаз': return 'eye_color'
        case 'Цвет волос': return 'hair_color'
        case 'День рождения': return 'birthday'
        case 'Рост(см)': return 'height'
        case 'Вес (кг)': return 'weight'
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
    .set('Средняя оценка', 'average_mark')
    .set('Дата создания', 'creation_date')
    .set('Кол-во отчисленных', 'expelled_students')
    .set('Форма обучения', 'form_of_education')
    .set('Семестр', 'semester_enum')
    .set('Будут исключены', 'should_be_expelled')
    .set('Кол-во студентов', 'students_count')
    .set('Кол-во переведенных', 'transferred_students')
/*X, Y, староста*/


const personMap = new Map()
    .set('ID', 'id')
    .set('ФИО', 'name')
    .set('День рождения', 'birthday')
    .set('Цвет глаз', 'eye_color')
    .set('Цвет волос', 'hair_color')
    .set('Рост', 'height')
    .set('Вес', 'weight')