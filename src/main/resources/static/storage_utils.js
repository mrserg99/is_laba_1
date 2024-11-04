const storageVocabulary = {
    user: "user",
    isAdmin: "isAdmin",
    type: "type",
}

// возвращает куки с указанным name,
// или undefined, если ничего не найдено
function getValue(key) {
    return sessionStorage.getItem(key);
}

function setValue(key, value) {
    sessionStorage.setItem(key, value);
}

function deleteValue(key) {
    sessionStorage.removeItem(key);
}