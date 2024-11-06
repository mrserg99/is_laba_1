async function createPerson() {
    let newPerson = new Person({
        FIO: document.querySelector("#FIO_input").value,
        eyeColor: document.querySelector("#eyeColor_input").value,
        hairColor: document.querySelector("#hairColor_input").value,
        locationId: document.querySelector("#locationID").value,
        locationName: document.querySelector("#locationName_input").value,
        locationCoordinateX: document.querySelector("#locationCoordinateX_input").value,
        locationCoordinateY: document.querySelector("#locationCoordinateY_input").value,
        birthday: document.querySelector("#birthday_input").value,
        height: document.querySelector("#height_input").value,
        weight: document.querySelector("#weight_input").value,
    })

    await create(newPerson, Type.PERSON.description).then(result => {
            if (result.ok) {
                document.querySelector("#popup_create_stud").classList.add("display_none")
                document.querySelector("#dark_overlay").classList.add("display_none")
                document.querySelector("#popup_create_stud_error").innerHTML = ""
            } else {
                document.querySelector("#popup_create_stud_error").innerHTML = "Ошибка"
            }
        }
    )
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

