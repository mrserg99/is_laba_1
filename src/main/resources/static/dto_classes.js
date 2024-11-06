class StudyGroup {
    id;
    name;
    coordinate;
    numberOfStudents;
    numberOfExpelled;
    numberOfTransferred;
    shouldBeExpelled;
    creationDate;
    formOfEducation;
    user;
    averageMark;
    groupAdmin;
    semester;

    constructor(id,
                name,
                coordinateId,
                coordinateX,
                coordinateY,
                numberOfStudents,
                numberOfExpelled,
                numberOfTransferred,
                shouldBeExpelled,
                creationDate,
                formOfEducation,
                user,
                averageMark,
                groupAdmin,
                semester) {
        this.id = id;
        this.name = name;
        this.coordinate = {
            id: coordinateId,
            x: coordinateX,
            y: coordinateY,
        }
        this.numberOfStudents = numberOfStudents;
        this.numberOfExpelled = numberOfExpelled;
        this.numberOfTransferred = numberOfTransferred;
        this.shouldBeExpelled = shouldBeExpelled;
        this.creationDate = creationDate;
        this.formOfEducation = formOfEducation;
        this.user = user;
        this.averageMark = averageMark;
        this.groupAdmin = groupAdmin;
        this.semester = semester
    }
}

class Person {
    id;
    group;
    FIO;
    eyeColor;
    hairColor;
    location;
    birthday;
    height;
    weight;

    constructor({
                    id = null,
                    group,
                    FIO,
                    eyeColor,
                    hairColor,
                    locationId,
                    locationName,
                    locationCoordinateX,
                    locationCoordinateY,
                    birthday,
                    height,
                    weight
                }) {
        this.id = id;
        this.group = group;
        this.FIO = FIO;
        this.eyeColor = eyeColor;
        this.hairColor = hairColor;
        this.location = {
            id: locationId,
            name: locationName,
            x: locationCoordinateX,
            y: locationCoordinateY,
        }
        this.birthday = birthday;
        this.height = height;
        this.weight = weight;
    }


}

class Location {
    id;
    x;
    y;
    name;

    constructor({
                    id = null,
                    x,
                    y,
                    name
                }) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.name = name
    }
}

class Coordinate {
    id;
    x;
    y;

    constructor({
                    id = null,
                    x,
                    y,
                }) {
        this.id = id;
        this.x = x;
        this.y = y;
    }
}

const Type = Object.freeze({
    GROUP: Symbol("group"),
    PERSON: Symbol("person"),
    COORDINATE: Symbol("coordinate"),
    LOCATION: Symbol("location"),
    COLOR: Symbol("color"),
    FORM_OF_EDUCATION: Symbol("formOfEducation"),
    SEMESTER: Symbol("semester"),
});