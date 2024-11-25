const removeByClass = (sel) => document.querySelectorAll(sel).forEach(el => el.remove());
const removeChildrenByClass = (sel) => document.querySelector(sel).innerHTML = ''

function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}

function isEmpty(str) {
    return (!str || str.length === 0 );
}

async function getDataOnThisPage() {
    return await getEntities(
        getValue(storageVocabulary.type),
        Number(getValue(storageVocabulary.page)),
        Number(getValue(storageVocabulary.max)),
        getValue(storageVocabulary.sortedBy),
        Boolean(storageVocabulary.isAsc)
    )
}