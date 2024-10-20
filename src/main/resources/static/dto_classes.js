class StudyGroup {
    id;
    name;
    coordinateX;
    coordinateY;
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
        this.coordinateX = coordinateX;
        this.coordinateY = coordinateY;
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
    locationName;
    locationCoordinateX;
    locationCoordinateY;
    birthday;
    height;
    weight;

    constructor(id,
                group,
                FIO,
                eyeColor,
                hairColor,
                locationName,
                locationCoordinateX,
                locationCoordinateY,
                birthday,
                height,
                weight) {
        this.id = id;
        this.group = group;
        this.FIO = FIO;
        this.eyeColor = eyeColor;
        this.hairColor = hairColor;
        this.locationName = locationName;
        this.locationCoordinateX = locationCoordinateX;
        this.locationCoordinateY = locationCoordinateY;
        this.birthday = birthday;
        this.height = height;
        this.weight = weight;
    }


}