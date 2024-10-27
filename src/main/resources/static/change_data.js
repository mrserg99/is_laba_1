async function createPerson() {
    let newPerson = new Person({
        FIO: document.getElementById("FIO_input").value,
        eyeColor: document.getElementById("eyeColor_input").value,
        hairColor: document.getElementById("hairColor_input").value,
        locationId: document.getElementById("hairColor_input").value,
        locationName: document.getElementById("locationName_input").value,
        locationCoordinateX: document.getElementById("locationCoordinateX_input").value,
        locationCoordinateY: document.getElementById("locationCoordinateY_input").value,
        birthday: document.getElementById("birthday_input").value,
        height: document.getElementById("height_input").value,
        weight: document.getElementById("weight_input").value,
    })

    let result = await create(newPerson, Type.PERSON.description)
}

function createGroup() {
    let newGroup = new StudyGroup({
        name: document.getElementById("name_input").value,
        coordinateX: document.getElementById("coordinateX_input").value,
        coordinateY: document.getElementById("coordinateY_input").value,
        numberOfStudents: document.getElementById("numberOfStudents_input").value,
        numberOfExpelled: document.getElementById("numberOfExpelled_input").value,
        numberOfTransferred: document.getElementById("numberOfTransferred_input").value,
        shouldBeExpelled: document.getElementById("shouldBeExpelled_input").value,
        creationDate: Date.now(),
        formOfEducation: document.getElementById("formOfEducation_input").value,
        user: getValue(storageVocabulary.user),
        averageMark: document.getElementById("averageMark_input").value,
        groupAdmin: document.getElementById("person_input").value,
        semester: document.getElementById("semester_input").value,
    })
    //TODO
}

async function getEntity(type) {
    let url = "/repository/get/" + type
    let result = await getRequest(url)

    if (result.ok) {
        return await result.json()
    }
}